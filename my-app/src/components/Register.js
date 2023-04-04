import "./Login.css"
import { useState } from "react"
import Nav from "./Nav"
import axios from "axios"

const Register = ()=>{
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")
    const [name,setName] = useState("")

    return(
        <div>
            <Nav />
            <div className="login">
            <div className="auth-form-container">
                <h2>Register</h2>
            <form onSubmit={(e)=>{
                e.preventDefault(); 
                const res = axios.get(`http://localhost:3000/createAccount?name=${name}&password=${password}&username=${username}&email=${email}`)
                console.log(res);
            }}className="login-form">
                <label>Username</label>
                <input  value = {username} onChange={(e)=>{setUsername(e.target.value)}} type="username" name="username" />
                <label>Password</label>
                <input id ="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" name="password"/>
                <label>Email</label>
                <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" name="email"/>
                <label>Name</label>
                <input value={name} onChange={(e)=>{setName(e.target.value)}}type="name" name="name"/>
                <button type="submit">submit</button>
            </form>
            </div>
            </div>
        </div>
    )
}
export default Register