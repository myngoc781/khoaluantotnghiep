import { useContext, useState } from "react"
import "./login.scss"
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../firbase";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import * as React from 'react';
import Calendar from "../../components/calendar/calendar";
import logo from "../../assets/images/logo.png";
const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navitage = useNavigate();
  const {dispatch} = useContext(AuthContext)
  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    dispatch({type: "LOGIN",payload:user})
      navitage("/");
  })
  .catch((error) => {
    setError(false);
  });
  }
  return (
    <div className="login">
      <img src={logo} alt=" logo" />
      <span >UNICLO LOGIN</span>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" 
          onChange={e=>setEmail(e.target.value)}/>
        <input type="password" placeholder="Password" 
          onChange={e=>setPassword(e.target.value)} />
        <button type="submit">Login</button>
      {error && <h5> Wrong password !</h5>}
      </form>
      </div>
  )
}

export default Login