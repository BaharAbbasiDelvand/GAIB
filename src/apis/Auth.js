import axios from "axios";

// Have this when u want to run it locally
const url = "http://130.113.68.57:5000";

// Have this hard coded for now, but then use environment variable
// require('dotenv').config();
// const url = process.env.AUTH_URL;

export const sendRegister = async (props) => {
    const { userData } = props;
    try {
        const response = await axios.post(`${url}/register`, userData);
        return response.data;
    } catch (error) {
        console.log(error);
        return;
        // throw error.response.data;
    }
};


export const sendLogin = async (props) => {
    const { userData } = props;
    try {
        const response = await axios.post(`${url}/login`, userData);
        return response.data;
    } catch (error) {
        console.log(error);
        return;
        // throw error.response.data;
    }
};

export const authenticateUser = async (props) => {
    const { user_id } = props;
    console.log(user_id);
    console.log(url);
    try {
        const response = await axios.get(`${url}/authenticate?user_id=${user_id}`, user_id);
        return response.data;
    } catch (error) {
        console.log(error);
        return;
        // throw error.response.data;
    }
};
