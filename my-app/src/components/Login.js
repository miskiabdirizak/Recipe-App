import React, {useState} from "react";     //import this to get user input (forms)
import "./Login.css";
//login component
//props let us send info to parent component
export const Login = (props) => {

    //creates a state with a name and function that modifies it, initial value is empty
    const[email, setEmail] = useState('');
    const[pass, setPass] = useState('');
    //referenced in value tag

    //passes the event
    const handleSubmit = (e) =>{
        e.preventDefault();     //if we dont do this the page gets reloaded and we lose our state
        console.log(email);
  

    }

    return(
        <div className="login">
            <div className="auth-form-container">
                <h2>Login</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="email">email</label>
                    <input 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        type="email" placeholder="youremail@gmail.com"
                        id="email" 
                        name = "email"
                    />
                    <label htmlFor="password">password</label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)}  type="password" placeholder="*******" id="password" name = "password"/>
                    <button type="submit"> Log In</button>

                </form>
                <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
            
            </div>
        </div>
    )
}