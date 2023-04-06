import { Link,useLocation } from "react-router-dom";
import "./RecipePage.css"
import Navbar from "./Nav";
import foodpng from "./fruit.png"
import Divider from "@mui/material/Divider"
const RecipePage = (val)=>{
    let location = useLocation();
    console.log(location)


    //location.state.totalNutrients

    var r= location.state.recipe
    return(
    <div>
        <Navbar />
      <div className="recipe">
        <header>
        <h2 className="title"> {r.label}</h2>
    
        <img className="imgr" src={r.image} ></img>
        </header>
        <section class="section-2 ingredients">
        
        <ol className="section1">
        <h2>Ingredients List:</h2>
        {
            r.ingredients.map(i=>{
            return(
            <li>{i.food}</li>
            )})
        }
        </ol>
        <Divider />
        <aside class="sidebar">
            <div>
               <img src = {foodpng}></img>
               <span>YIELDS</span>
               <p >{r.yield} servings</p>
            </div>
            <div>
                <span class="material-icons material-symbols-outlined">schedule</span> 
               <span>PREP TIME</span>
               <p>{r.totalTime} mins</p>
            </div>
            <div>
                <span class="material-icons material-symbols-outlined">schedule</span> 
               <span>COOK TIME</span>
               <p>{r.totalTime} mins</p>
            </div>

           </aside>
           <Divider />
           </section>
        <section class="section-3 ">
        <ol className="section1">
        <h2>Instructions</h2>
        {
            r.ingredients.map(i=>{
            return(
            <li>{i.text}</li>
            )})
        }
        </ol>
        </section>
        <Divider />
        <div className="content2">
        <h2>Nutrional facts:</h2>
        <ul>
        <h3>Calories:</h3>
        <li>
        {Math.ceil(r.calories)}
        </li>
        <li>
        <h3>carbs: </h3>

        {Math.ceil(r.totalNutrients.CHOCDF.quantity) + r.totalNutrients.CHOCDF.unit}
        </li>
        <li>
        <h3>protein: </h3>
        {Math.ceil(r.totalNutrients.PROCNT.quantity) + r.totalNutrients.PROCNT.unit}
        </li>
        <li>
        <h3>sugar: </h3>
        {Math.ceil(r.totalNutrients.SUGAR.quantity) + r.totalNutrients.SUGAR.unit}
        </li>
        <li>
        <h3>fat:</h3>
        {Math.ceil(r.totalNutrients.FAT.quantity) + r.totalNutrients.FAT.unit}
        </li>
        </ul>
        </div>
        </div>
        </div>
    )
}
export default RecipePage;