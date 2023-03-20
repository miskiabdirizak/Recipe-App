import React from "react";
import "./Recipe.css";
import info from "./info.png"


const Recipe = ({ title, image, ingredients,totalNutrients,calories }) => {

  return (

<li className="cards_item"> 
      <div className="card" tabindex="0">
      <div className="card_image">
      <img  src={image} alt="" />
      </div>
      <div className="card2">
        <h1 className="card_title">{title}</h1>
        <img className="calorie" src ={info}  width="50px" height="50px"/>
        
        <div className="hide">
        <ul >
            <h2 >Nutrients</h2>
          <li>
          carbs: {Math.ceil(totalNutrients.CHOCDF.quantity) + totalNutrients.CHOCDF.unit}
          </li>
          <li>
          protein: {Math.ceil(totalNutrients.PROCNT.quantity) + totalNutrients.PROCNT.unit}
          </li>
          <li>
          sugar: {Math.ceil(totalNutrients.SUGAR.quantity) + totalNutrients.SUGAR.unit}
          </li>
          <li>
          fat: {Math.ceil(totalNutrients.FAT.quantity) + totalNutrients.FAT.unit}
          </li>
          <h2>Calories</h2>
          <li>
          calories: {Math.ceil(calories)}
          </li>
          </ul>
        </div>
      </div>
    </div>
    </li>

  

  );
};
const RecipePage = ({ title, image, ingredients,totalNutrients,calories })=>{
return(
  <div>
    <h2>title: {title}</h2>

    <img src={image}></img>
<ol>Ingredients List:
  {
    ingredients.map(i=>{
      <list>{i}</list>
    })
  }
</ol>

<h2>Calories:{calories}</h2>
</div>
)
}

export default Recipe;