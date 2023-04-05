//Render out home page here => needed for routing b/c its a big file 
//Holds all the pages that will be linked to the home page

import React, { useEffect, useState } from "react";
import Recipe from "./Recipe.tsx";
import axios from "axios";
import "./Search.css";
import fruit from "./fruit.png"
import Navbar from "./Nav"
import { Divider } from '@mui/material';
import { Link } from "react-router-dom";



const Search = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await axios.get(`http://localhost:3001/recipes/${query}`);
    console.log(response.data);
    setRecipes(response.data);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">

      <Navbar />
      <div className="bottom">
        <h2>Recipe Bar</h2>
        <img src={fruit} width="50px" height="50px"></img>
        <div className="headbox">
        <p>Find out how to make delicious meals for you.</p>
        <p>We have hundreds of options to satisfy your dietary needs, and preferences.</p>
        </div>
      </div>

      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
          placeholder="search here"
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
        <h1 >Recipes</h1> 
        <ul className="cards">
        {recipes.map((r) => (
          // this link will pull up additional recipe info on a seperate page
          
            <Recipe
              key={r.recipe.label}
              title={r.recipe.label}
              image={r.recipe.image}
              ingredients={r.recipe.ingredients}
              nut={r.recipe.totalNutrients}
              calories={r.recipe.calories}
              servings={r.recipe.yield}
              recipe = {r}
            />

      
   
        ))}
        </ul>
      </div>
  );
};

export default Search