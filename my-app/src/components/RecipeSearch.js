import React, { useEffect, useState } from "react";
import Recipe from "./Recipe.tsx";
import axios from "axios";

import fruit from "./fruit.png"
import Navbar from "./Nav"
import { Divider } from '@mui/material';
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import "./Search.css"
import Footer from "./Footer.js"
import DropdownButton from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import { getDatabase,ref,onValue } from "firebase/database";
import { Toast } from "react-bootstrap";

const Search = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  const [goal,setGoal]=useState("")
  const [recipePref,setRecipePref]=useState("")

  useEffect(()=>{
    const db = getDatabase();
    //need to pass a specific id to get the value of a user
    const doc = ref(db, 'preferences');
    onValue(doc, (snapshot) => {
      const data = snapshot.val();
      setGoal(data.goal)
      console.log(goal)
    });
    var min = Number.MAX_VALUE
   
    recipes.forEach(val=>{
      if(min > val.recipe.calories)
      setRecipePref(val.recipe.label)
      min =Math.min(min,val.recipe.calories);
    })
    console.log(recipePref)
  })
  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await axios.get(`http://localhost:9000/recipes/${query}`);
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
      <Container fluid>
        <Row>
        <Col xs={5}> 
       
        </Col>
        <Col xs={5}>
      
        
        
        <div class="p-3 mb-2 bg-light text-black" style={{fontFamily:"arial"}}>
        <p>Find out how to make delicious meals for you.</p>
        <p>We have hundreds of options to satisfy your dietary needs, and preferences.</p>
        
        </div>
        
      </Col>
      <Col>
      <img src={fruit} width="50px" height="50px"></img>
      </Col>
      </Row>
      <Row>
        <Col xs={1} >
        </Col>
        <Col>
        <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
          placeholder="search here"
        />
        <Button className="search-button" type="submit" variant="secondary">
          Search
        </Button>
      </form>
        </Col>
      </Row>
      <Row>
        <Col xs={1}>
        </Col>
        <Col xs={1}>
        <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
      activeKey="/home"
      onSelect={selectedKey => alert(`selected ${selectedKey}`)}
      >
          <div className="sidebar-sticky"></div>
      <Nav.Item>
          <Nav.Link onClick={async ()=>{
            console.log("clicked")
            const response1 = await axios.get(`http://localhost:9000/recipes/chicken Sandwhich`);
            const response2 = await axios.get(`http://localhost:9000/recipes/beef`);
            const response3 = await axios.get(`http://localhost:9000/recipes/lamb`);
            console.log(response1.data);
            setRecipes([...recipes,...response1.data]);
            setRecipes([...recipes,...response2.data]);
            setRecipes([...recipes,...response3.data]);
          }}>Lunch</Nav.Link>
      </Nav.Item>
      <Nav.Item>
            <Nav.Link eventKey="link-1">Dinner</Nav.Link>
      </Nav.Item>
      <Nav.Item>
          <Nav.Link eventKey="link-2">Desert</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link eventKey="disabled" disabled>
      All meals
      </Nav.Link>
      </Nav.Item>
      </Nav>
      
        </Col>
        <Col>
        <h1 className="title">Recipe Menu</h1> 
        <Dropdown>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
              Sort
          </Dropdown.Toggle>

          <Dropdown.Menu>
              <Dropdown.Item onClick={
                ()=>{
                  var myData = [].concat(recipes)
                  .sort((a, b) => a.recipe.calories > b.recipe.calories ? 1 : -1)
                  console.log(myData)
                  setRecipes(myData)
                }
              }>Calories</Dropdown.Item>
              <Dropdown.Item href="/Search?q=beef">Proteins</Dropdown.Item>
              <Dropdown.Item href="/Search?q=dairy">Your settings</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
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
              pref = {recipePref}
            />

        ))}
        </ul>
      
        </Col>
      </Row>
      </Container>
      <Footer/>
     </div>
        
  );
};

export default Search