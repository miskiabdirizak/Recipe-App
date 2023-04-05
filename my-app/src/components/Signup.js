import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../firebase';
import Navbar from './Nav';
const Signup = () => {
    const navigate = useNavigate();
 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
 
    const onSubmit = async (e) => {
      e.preventDefault()
     
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            navigate("/login")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
        });
 
   
    }
 
  return (
    <main >        
        <section>
            <div>
                <div> 
                    <Navbar/>                 
                    <h1> Signup </h1>                                                                            
                    <form>                                                                                            
                        <div>
                            <label htmlFor="email-address">
                                Email address
                            </label>
                            <input
                                type="email"
                                label="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}  
                                required                                    
                                placeholder="Email address"                                
                            />
                        </div>

<<<<<<< HEAD
    const handleSubmit = () =>{
        //alert('Submit handle');
        console.log(firstName,lastName,email,password,confirmPassword);
        //We validated input as user entered, but to prevent direct submition sto backend.
        //const userValid = FN_REGEX.test(firstName);
        //const pwdValid = PASSWORD_REGEX.test(password);
        //if (!userValid || !pwdValid) {
        //    alert('Input validation failed. Input should meet contraints');
        //    return;
        //}
        //Input is valid, call backend API to store the user info.

        let obj = {
            firstName : firstName,
            lastName:lastName,
            email:email,
            password:password,
            confirmPassword:confirmPassword,
        }

        //clear fields
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');

    }


    return(
        <div className="form">
            <div className="form-body">
            <Navbar />
                <div className="username">
                    <label className="form__label" for="firstName">First Name </label>
                    <input className="form__input" type="text" value={firstName} onBlur={() => setFirstNameFocus(false)} onFocus={() => setFirstNameFocus(true)} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="First Name"/>
                    <p id="confirmnote" className={firstNameFocus && !validFirstName ? "instructions" : "offscreen"}>
                        Constraints:<br />
                        - 4 to 24 characters.<br />
                        - Must begin with a letter.<br />
                        - Letters, numbers, underscores, hyphens allowed.
                    </p>
                </div>

                <div className="lastname">
                    <label className="form__label" for="lastName">Last Name </label>
                    <input  type="text" name="" id="lastName" value={lastName} onBlur={() => setLastNameFocus(false)} onFocus={() => setLastNameFocus(true)} className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="LastName"/>
                    <p id="confirmnote" className={lastNameFocus && !validLastName ? "instructions" : "offscreen"}>
                        Constraints:<br />
                        - 4 to 24 characters.<br />
                        - Must begin with a letter.<br />
                        - Letters, numbers, underscores, hyphens allowed.
                    </p>
                </div>
                <div className="email">
                    <label className="form__label" for="email">Email </label>
                    <input  type="email" id="email" className="form__input" onBlur={() => setEmailFocus(false)} onFocus={() => setEmailFocus(true)} value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
                    <p id="confirmnote" className={emailFocus && !validEmail ? "instructions" : "offscreen"}>
                        Constraints:<br />
                        - Valid email id syntax.<br />
                        - atleast 8 characters.<br />
                    </p>
                </div>
                <div className="password">
                    <label className="form__label" for="password">Password </label>
                    <input className="form__input" type="password"  onBlur={() => setPasswordFocus(false)} onFocus={() => setPasswordFocus(true)} id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
                    <p id="pwdnote" className={passwordFocus && !validPassword ? "instructions" : "offscreen"}>
                        Constraints:<br />
                        - 8 to 24 characters.<br />
                        - Must include uppercase and lowercase letter.<br />
                        - Must include a number.<br />
                        - Must include a special character (allowed: ! @ # % $).<br />
                    </p>

                </div>
                <div className="confirm-password">
                    <label className="form__label" for="confirmPassword">Confirm Password </label>
                    <input className="form__input" type="password" id="confirmPassword" onFocus={() => setConfirmPasswordFocus(true)} onBlur={() => setConfirmPasswordFocus(false)} value={confirmPassword} onChange = {(e) => handleInputChange(e)} placeholder="Confirm Password"/>
                    <p id="confirmnote" className={confirmPasswordFocus && !validConfirmPassword ? "instructions" : "offscreen"}>
                        - Must match the Password input field.
                    </p>
=======
                        <div>
                            <label htmlFor="password">
                                Password
                            </label>
                            <input
                                type="password"
                                label="Create password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} 
                                required                                 
                                placeholder="Password"              
                            />
                        </div>                                             
                        
                        <button
                            type="submit" 
                            onClick={onSubmit}                        
                        >  
                            Sign up                                
                        </button>
                                                                     
                    </form>
                   
                    <p>
                        Already have an account?{' '}
                        <NavLink to="/Login" >
                            Sign in
                        </NavLink>
                    </p>                   
>>>>>>> 6870f33 (added firebase authentication)
                </div>
            </div>
        </section>
    </main>
  )
}
 
export default Signup