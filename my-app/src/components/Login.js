import React, {useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { NavLink, useNavigate } from 'react-router-dom'
import Navbar from './Nav';

import {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
  }
  from 'mdb-react-ui-kit';


const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = (e) => {
        e.preventDefault();
        console.log("logged ins")
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
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
        <h2>Login</h2>
<form onSubmit={(e)=>{onLogin(e)}}>
<MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' onChange={(e)=>{
    setEmail(e.target.value)
}}/>
<MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' onChange={(e)=>{
    setPassword(e.target.value)
}}/>

<div className="d-flex justify-content-between mx-3 mb-4">
  <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
  <a href="!#">Forgot password?</a>
</div>

<MDBBtn className="mb-4" type="submit">Sign in</MDBBtn>

<div className="text-center">
  <p>Not a member? <NavLink to="/Signup">Register</NavLink></p>
  <p>or sign up with:</p>

  <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
      <MDBIcon fab icon='facebook-f' size="sm"/>
    </MDBBtn>

    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
      <MDBIcon fab icon='twitter' size="sm"/>
    </MDBBtn>

    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
      <MDBIcon fab icon='google' size="sm"/>
    </MDBBtn>

    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
      <MDBIcon fab icon='github' size="sm"/>
    </MDBBtn>

  </div>
</div>
    </form>
</MDBContainer>
   </div>
    )
}

export default Login