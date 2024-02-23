// Login.js
import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
//   const history = useHistory();
const navigate = useNavigate();

  const handleLogin = () => {
    // Check credentials (you can replace this with your authentication logic)
    if (username === 'yourusername' && password === 'yourpassword') {
      // Redirect to main page if login is successful
    //   history.push('/main');
    } else {
      alert('Invalid credentials');
    }
  };

  const handleNavigate = () => {
    console.log("clicked");
    navigate("../");
}

  return (
    <div>
      <h2>Login</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      <a onClick={handleNavigate} style={{color: "blue", cursor: "pointer"}}>Click here to navigate</a>
    </div>
  );
};

export default Login;
