import React, {useState,useEffect, setState} from 'react';

import './Signup.css'
import Navbar from "./Nav"
import axios from "axios"
import Footer from './Footer';
//input validation regular expressions (https://regexr.com/)
const EMAIL_REGEX = /^[A-z][A-z0-9@.]{8,23}$/;
const FN_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;


function Signup() {

    const [firstName, setFirstName] = useState('');
    const [validFirstName, setValidFirstName] = useState(false);
    const [firstNameFocus, setFirstNameFocus] = useState(false);

    const [lastName, setLastName] = useState('');
    const [validLastName, setValidLastName] = useState(false);
    const [lastNameFocus, setLastNameFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [password,setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);

    const [confirmPassword,setConfirmPassword] = useState('');
    const [validConfirmPassword, setValidConfirmPassword] = useState(false);
    const [confirmPasswordFocus, setConfirmPasswordFocus] = useState(false);

    useEffect(() => {
        setValidFirstName(FN_REGEX.test(firstName));
    }, [firstName])

    useEffect(() => {
        setValidLastName(FN_REGEX.test(lastName));
    }, [lastName])

    useEffect(() => {
        setValidPassword(PASSWORD_REGEX.test(password));
    }, [password])

    useEffect(() => {
        setValidPassword(PASSWORD_REGEX.test(password));
        setValidConfirmPassword(confirmPassword === password);
    }, [password, confirmPassword])


    const handleInputChange = (e) => {
        e.preventDefault();
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
            setValidFirstName(FN_REGEX.test(value));
        }
        if(id === "lastName"){
            setLastName(value);
            setValidLastName(FN_REGEX.test(value));
        }
        if(id === "email"){
            setEmail(value);
            setValidEmail(EMAIL_REGEX.test(email));
        }
        if(id === "password"){
            setPassword(value);
            //alert("password Input Change");
            setValidPassword(PASSWORD_REGEX.test(password));
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
            setValidConfirmPassword(password === confirmPassword);
        }

    }

    const handleSubmit = (e) =>{
        //alert('Submit handle');
        e.preventDefault();
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
        axios.get(`http://localhost:3001/Signup?firstName=${firstName}&lastName=${lastName}&email=${email}&password=${password}`)

        //clear fields
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');

    }


    return(
        
        <form onSubmit={handleSubmit}>
        <Navbar />
        <div className="form">
            <div className="form-body">
        <h2>Signup</h2>
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
                </div>
            </div>
            <div class="footer">
                <button disabled={!validFirstName || !validLastName || !validPassword || !validConfirmPassword ? true : false}  type="submit" class="btn">Register</button>
            </div>
        </div>
        </form>
      
    )
}

export default Signup