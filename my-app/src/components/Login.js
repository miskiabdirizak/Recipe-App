import React, {useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { NavLink, useNavigate } from 'react-router-dom'
import Navbar from './Nav';
import './Login.css'

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/Home")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });

    }
 
    return(
   
   <div>
   <Navbar/>
   <div className="login">
       <div className="auth-form-container">
           <h2>Login</h2>
           <form className="login-form" onSubmit={onLogin}>
               <label htmlFor="email">Email Address</label>
               <input 
                   value={email} 
                   onChange={(e) => setEmail(e.target.value)} 
                   type="email" placeholder="youremail@gmail.com"
                   id="email" 
                   name = "email"
               />
               <label htmlFor="password">Password</label>
               <input value={password} onChange={(e) => setPassword(e.target.value)}  type="password" placeholder="*******" id="password" name = "password"/>
               <button type="submit"> Log In</button>

           </form>
           <p>
            No account yet? {' '}
            <NavLink to="/Signup">
                Sign up
            </NavLink>
            </p>
</div>
   </div>
   </div>
    )
}

export default Login