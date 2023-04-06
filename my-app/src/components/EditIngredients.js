import React from "react";
import "./EditIngredients.css";
import Navbar from "./Nav";

const EditIngredients = () => {
  const [Ingredients, setIngredients] = React.useState([]);
  const [Ingredient, setIngredient] = React.useState("");
  React.useEffect(() => {
    const json = localStorage.getItem("Ingredients");
    const loadedIngredients = JSON.parse(json);
    if (loadedIngredients) {
      setIngredients(loadedIngredients);
    }
  }, []);
  React.useEffect(() => {
    const json = JSON.stringify(Ingredients);
    localStorage.setItem("Ingredients", json);
  }, [Ingredients]);
  function handleSubmit(e) {e.preventDefault();
    const newIngredient = {
      id: new Date().getTime(),
      text: Ingredient
    };
    setIngredients([...Ingredients].concat(newIngredient));
    setIngredient("");
  }
  function deleteIngredient(id) {
    let updatedIngredients = [...Ingredients].filter((Ingredient) => Ingredient.id !== id);
    setIngredients(updatedIngredients);
  }
  return (
      <div id="todo-list">
        <Navbar/>
        <h1>Ingredients List</h1>
        <form onSubmit={handleSubmit}>
          <input
              type="text"
              onChange={(e) => setIngredient(e.target.value)}
              value={Ingredient}
          />
          <button type="submit">Add Ingredient</button>
        </form>
        {Ingredients.map((Ingredient) => (
            <div key={Ingredient.id} className="Ingredient">
              <div className="Ingredient-text">
                {(
                    <div>{Ingredient.text}</div>
                )}
              </div>
              <div className="-actions">
                <button onClick={() => deleteIngredient(Ingredient.id)}>Delete</button>
              </div>
            </div>
        ))}
      </div>
  );
};
export default EditIngredients;