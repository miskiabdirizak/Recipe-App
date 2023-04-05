import {Link} from "react-router-dom"
import "./Search.css"
const Navbar = ()=>{
    return(
    <div className="navbar">
        <li>
        <Link to="/Home">Home</Link>
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
        <li> 
         <Link to = "/DietProfile">Diet</Link>   
        </li>
        <li>
         <Link to = "/EditIngredients">EditIngredients</Link></li>
    </div>)
} 
export default Navbar;