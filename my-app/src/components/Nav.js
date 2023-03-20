import {Link} from "react-router-dom"
import "./Search.css"
const Navbar = ()=>{
    return(
    <div className="navbar">
        <li>
        <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/Search">Recipe</Link>
        </li>
        <li>
        <Link to="/Search/">Login</Link>
        </li>
    </div>)
} 
export default Navbar;