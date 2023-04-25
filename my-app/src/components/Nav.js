import {Link} from "react-router-dom"
import "./Search.css"
import "./Nav.css"
import { Divider } from "@mui/material"
const Navbar = ()=>{
    return(
    <ul className="navbar">
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
         <Link to = "/DietProfile">Diet</Link>   
        </li>
        <li>
         <Link to = "/EditIngredients">Add Ingredients</Link>
         </li>
         <li>
         <Link to = "/Favorites">Your Recipes</Link>
         </li>
         <li>
         <Link to = "/MealPlanner">Meal Planner</Link>
         </li>
    </ul>)
} 
export default Navbar;
