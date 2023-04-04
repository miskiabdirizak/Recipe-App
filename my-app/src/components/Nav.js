import {Link} from "react-router-dom"
import "./Search.css"
const Navbar = ()=>{
    return(
    <header className="box-shadow">
    <div className="navbar">
        <ul className="ul">
        <li>
        <Link to="/Login">Login</Link>
        </li>
        <li>
        <Link to="/Search">Recipe</Link>
        </li>
        <li>
        <Link to="/Register">Register</Link>
        </li>
        </ul>
    </div>
    </header>
    )
} 
export default Navbar;