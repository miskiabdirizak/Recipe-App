//Add home page Components
import Navbar from "../components/Nav"
import React, { useState, useEffect, Link } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';
import Login from "../components/Login";
import { useNavigate } from "react-router-dom";
 
const Home = () => {
 
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              const uid = user.uid;
              // ...
              console.log("uid", uid)
            } else {
              // User is signed out
              // ...
              console.log("user is logged out")
            }
          });
         
    }, [])

    let navigate = useNavigate();
    const routeChange = () => {
      let path = '/Login';
      navigate(path);
    }
 
  return (
    <>
    <button onClick={routeChange}>
      Log in
    </button>
    <Navbar />
    </>
  )
}
 
export default Home