import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import "./SignUp.css";
import { use } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const collectData = async () => {
    console.warn("Name: ", name);
    console.warn("Email: ", email);
    console.warn("Password: ", password);
    let result = await fetch('http://localhost:3000/register', {
      method: 'post',
      body: JSON.stringify({ name, email, password }),
      headers: {
        'Content-Type': 'application/json'
      },
    });
    result = await result.json();
    console.warn(result);
    localStorage.setItem("user", JSON.stringify(result));

    if (result) {
      navigate('/')
    }
  };

  return (
    <div className="signUp">
      <h1 className="signUpHeading">SignUp</h1>
      <input
        className="inputBox"
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <input
        className="inputBox"
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <input
        className="inputBox"
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
      />
      <button onClick={collectData} className="signUpButton">
        SignUp
      </button>
    </div>
  );
};

export default SignUp;
