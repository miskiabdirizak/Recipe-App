import {Link} from "react-router-dom"
import "./Nav.css"
const Navbar = ()=>{
    return(
    <ul className="navbar">
        <li>
        <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/Search">Recipe</Link>
        </li>
        <li>
        <Link to="/Login">Login</Link>
        </li>
        <li> 
         <Link to = "/Signup">Signup</Link>   
        </li>
    </ul>)
} 
export default Navbar;