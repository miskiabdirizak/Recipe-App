import { Link,useLocation } from "react-router-dom";
import "./RecipePage.css"
import Navbar from "./Nav";
import foodpng from "./fruit.png"
import Divider from "@mui/material/Divider"
import React, {useState} from "react";

const RecipePage = (val, onFavoritedRecipe, favorite)=>{
    let location = useLocation();
    console.log(location)
    const [ isFavorited, setIsFavorited ] = useState(favorite)
    const handleFavoritedChange = () => {
        setIsFavorited(isFavorited => !isFavorited)
        fetch(`http://localhost:3000/recipes`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify({favorite: !favorite})
        })
            .then(response => response.json())
            .then((updatedRecipe)=> onFavoritedRecipe(updatedRecipe))
            // .then(updatedResort => setIsFavorited ? onFavoritedResort(updatedResort) : onUnfavoriteResort(updatedResort))
    }


    //location.state.totalNutrients

    var r= location.state.recipe
    return(
    <div>
        <Navbar />
      <div className="recipe">
        <header>
        <h2 className="title"> {r.label}</h2>
    
        <img className="imgr" src={r.image} ></img>
      <div id="card-buttons">
        {isFavorited? (
                    <div onClick={handleFavoritedChange}> 
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth={1.5} 
                            stroke="currentColor" 
                            className="unfavorite-btn"
                        >
                            <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" 
                            />
                        </svg>
                    </div>
                    ) : ( 
                    <div onClick={handleFavoritedChange}>
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 24 24" 
                            fill="currentColor" 
                            className="favorite-btn"
                        >
                            <path 
                                fillRule="evenodd" 
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" 
                                clipRule="evenodd" 
                            />
                        </svg>
                    </div>
                    )}
                    </div>
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
          {r.totalTime==0?<p>less than a min</p>:<p>{r.totalTime} mins </p> } 
            </div>
            <div>
                <span class="material-icons material-symbols-outlined">schedule</span> 
               <span>COOK TIME</span>
               {r.totalTime==0?<p>less than a min</p>:<p>{r.totalTime} mins </p> } 
          
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
