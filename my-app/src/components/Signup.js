import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import Navbar from './Nav';
import {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
  }
  from 'mdb-react-ui-kit';

 
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
            navigate("/Login")
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
    <div >      
        <Navbar/>  
        
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
        <h2>Register</h2>
<form onSubmit={(e)=>{onSubmit(e)}}>
<MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' onChange={(e)=>{
    setEmail(e.target.value)
}}/>
<MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' onChange={(e)=>{
    setPassword(e.target.value)
}}/>
<MDBBtn className="mb-4" type="submit">Sign up</MDBBtn>

<div className="text-center">
  <p>Already have an account? <NavLink to="/Login">Login</NavLink></p>


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
 
export default Signup