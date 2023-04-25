import React, {useState} from "react";
import Search from "./RecipeSearch";
import "./Favorites.css";
import Navbar from "./Nav"
import fruit from "./fruit.png"

function Favorites({onNewRecipe}) {
    const [ formData, setFormData ] = useState({
        name: "",
        ingredients: "",
        instructions: "",
        nutrition: "",
        url: "",
        image: "", 
    });

    function onSubmit(event){
        event.preventDefault(); 

        const newRecipe = {
            name: formData.name,
            ingredients: formData.ingredients,
            instructions: formData.instructions,
            nutrition: formData.nutrition,
            url: formData.url,
            image: formData.image, 
        }

        fetch("http://localhost:3000/recipes", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newRecipe)
        })
            .then((response) => response.json())
            .then((newRecipe) => onNewRecipe(newRecipe));

            setFormData({
                name: "",
                ingredients: "",
                instructions: "",
                nutritions: "",
                url: "",
                image: "", 
            }); 

            alert("New Recipe has been added!") 
    }; 

    function handleFormChange(event){
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    function handleChecked(event){
        setFormData({...formData, [event.target.name]: event.target.checked})
    }

    return (
        <div className="App">
        <Navbar />
        <div className="bottom">
        <h2>Add your own recipes</h2>
        <img src={fruit} width="50px" height="50px"></img>
        <div className="headbox">
        <p>Find out how to make delicious meals for you.</p>
        <p>We have hundreds of options to satisfy your dietary needs and preferences.</p>
        </div>
      </div>
        <div className="form-container">
        <div className="new-recipe-form">
  
            <form onSubmit={onSubmit} >
                <div>
                    <h4 className="form-labels">Name</h4>
                    <input 
                    className="form-recipename"
                    type="text" 
                    name="name" 
                    placeholder="Unnamed" 
                    value={formData.name}
                    onChange={handleFormChange}
                    />
                </div>
                    <br/>
                <div>
                    <h4 className="form-labels">Ingredients</h4>
                    <input 
                    className="form-recipeingredients"
                    type="text" 
                    name="ingredients" 
                    placeholder="Add ingredients" 
                    value={formData.ingredients}
                    onChange={handleFormChange}
                    />
                </div>
                <br/>
                <div>
                    <h4 className="form-labels">Instructions</h4>
                    <input 
                    className="form-recipeinstructions"
                    type="text" 
                    name="instructions" 
                    placeholder="Add instructions" 
                    value={formData.instructions}
                    onChange={handleFormChange}
                    />
                </div>
                <br/>
                <div>
                    <h4 className="form-labels">Nutritions</h4>
                    <input 
                    className="form-recipenutrition"
                    type="text" 
                    name="nutrition" 
                    placeholder="Add nutritions" 
                    value={formData.nutrition}
                    onChange={handleFormChange}
                    />
                </div>
                <br/>
                <div>
                    <h4 className="form-labels">Website</h4>
                    <input 
                    className="form-recipeurl"
                    type="text"
                    name="url"
                    placeholder="URL..." 
                    value={formData.url}
                    onChange={handleFormChange}
                    />
                </div>
                <br/>
                <div>
                    <h4 className="form-labels">Image</h4>
                    <input 
                    className="form-recipeimage"
                    type="text"
                    name="image"
                    placeholder="URL..." 
                    value={formData.image}
                    onChange={handleFormChange}
                    />
                </div>
                <br/>
                <button className="form-labels" type="button" onClick={onSubmit}>Add Recipe</button>
            </form>
        </div> 
        </div>
        </div>
    );
}

export default Favorites;
