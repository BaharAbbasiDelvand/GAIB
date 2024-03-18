from flask import Flask, request, jsonify
from pymongo import MongoClient
from bson import json_util, ObjectId
from werkzeug.security import generate_password_hash, check_password_hash
import re
from flask_cors import CORS

# creates a server in Flask

app = Flask(__name__)
client = MongoClient('mongodb://130.113.68.57:27017/mydatabase')
db = client['genAI']
users_collection = db['users']
CORS(app)  # This will enable CORS for all routes

email_pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    password = data.get('password')
    confirm_password = data.get('confirm_password')
    email = data.get('email')

    # Checks if all the params are present
    if not all([ password, email, confirm_password]):
        return jsonify({'error': 'email, password and github link are required'}), 400

    # Checks if the email format is correct
    if not re.match(email_pattern, email):
        return jsonify({'error': 'Invalid email format'}), 400

    # Checks if the user already exists in the DB
    if users_collection.find_one({'email': email}):
        return jsonify({'error': 'Email already exists'}), 400

    # Checks if the password and the confirm password are the same
    if password != confirm_password:
        return jsonify({'error': 'Passwords do not match'}), 400

    # Hash the password
    hashed_password = generate_password_hash(password)

    # Add the content to the DB
    result = users_collection.insert_one({'password': hashed_password, 'email': email})

    # Find the ID of the user that just got added to the mongoDB
    inserted_id = result.inserted_id

    return jsonify({'message': 'User registered successfully', 'user_id': str(inserted_id)}), 201

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    #Checks if the email and passwords are passed on in the call
    if not all([email, password]):
        return jsonify({'error': 'Email and password are required'}), 400

    #Finds the user with the following email
    user = users_collection.find_one({'email': email})

    #Checks if the user exists, if so checks if the hashedpassword matches or not
    if not user or not check_password_hash(user['password'], password):
        return jsonify({'error': 'Invalid email or password'}), 401

    user_id = str(user['_id'])

    return jsonify({'message': 'Login successful', 'user_id': user_id}), 200

@app.route('/authenticate', methods=['GET'])
def authenticate():
    user_id = request.args.get('user_id')

    # Check if user_id is provided
    if not user_id:
        return jsonify({'error': 'user_id parameter is required'}), 400

    # Check if user with provided _id exists
    user = users_collection.find_one({'_id': ObjectId(user_id)})
    if user:
        user_email = user.get('email')
        return jsonify({'message': 'User exists', 'email': user_email}), 200
    else:
        return jsonify({'error': 'User not found'}), 404

if __name__ == '__main__':
    app.run(debug=True, port=5001)
