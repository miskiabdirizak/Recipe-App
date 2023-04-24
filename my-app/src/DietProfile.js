import React, {useState, useEffect} from 'react';

import './Dietary.css';
import AppBar from './components/DietaryProfile/AppBar/AppBar'
import AppControlsCounter from './components/DietaryProfile/AppControls/AppControlsCounter';
import AppControlsDelete from './components/DietaryProfile/AppControls/AppControlsDelete';
import AppControlsInput from './components/DietaryProfile/AppControls/AppControlsInput';
import AppMealsList from './components/DietaryProfile/AppMealsList/AppMealsList';
import AppModal from './components/DietaryProfile/AppModal/AppModal';
import AppMealsFilter from './components/DietaryProfile/AppMealsFilter/AppMealsFilter';

import ExerciseControlsInput from './components/DietaryProfile/AppControls/ExerciseControlsInput'
import AppExerciseList from './components/DietaryProfile/AppMealsList/AppExerciseList';


import Navbar from './components/Nav';

//conver the function into a const arrow function
const DietProfile = () => {
  const[meals, setMeals] = useState([]);
  const[mealName, setMealName] = useState("");
  const[calories, setCalories] = useState(0);
  const[openModal, setOpenModal] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("");

  const[exercises, setExercises] = useState([]);
  const[exerciseName, setexerciseName] = useState("");
  const[caloriesBurned, setCaloriesBurned] = useState(0);

  const addExerciseHandler = () =>{
    const oldEx = exercises ? [...exercises] : [];
    const exercise = {
      exerciseName,
      caloriesBurned,
      id: Math.floor(Math.random() * 1000), 
    };

    const newEx = oldEx.concat(exercise);
    setExercises(newEx);
    localStorage.setItem("exercises", JSON.stringify(newEx)); 

    setexerciseName("");
    setCaloriesBurned(0);
  }

  const deleteExerciseHandler = (id) =>{
    const oldEx= [...exercises];

    const newEx = oldEx.filter((exercise) => exercise.id !== id);   //filter out the meals with that id, so it would delete it
    
    setExercises(newEx);
    localStorage.setItem("exercises", JSON.stringify(newEx)); 
  }

  const addMealsHandler = () =>{
    //console.log(mealName);
    //console.log(calories);
    //never directly change the variable, create a new one and spread the array into it
    //if we have meals then distribute it else use an empty array
    const oldMeal = meals ?  [...meals] : [];   //creating a meal array that will have the meals we already have
    const meal ={ //create a meal object
      mealName, 
      calories,
      id: Math.floor(Math.random() * 1000), // random number between 0 and 1000
    };

    const newMeals = oldMeal.concat(meal);  //add the meal to oldmeals with concat then set newMeals to the new array

    if(calories <= 0 || mealName === "")  //check if we can add
    {
      //alert("Must not be empty");
      setOpenModal(true);   //if the item entered is empty then set openModal to true that displays the alert
    }
    else
    {
      setMeals(newMeals);   //set the meals
      localStorage.setItem("meals", JSON.stringify(newMeals));    //this will store the info on to local storage
    }

    setMealName("");  //reset the meal and calories to default
    setCalories(0);
  };  //we can use this as a props for other components to access it, pass it in the tag


  const deleteMealHandler = (id) =>{
      const oldmeals = [...meals];

      //where meals meal id does not equal to the id
      const newMeals = oldmeals.filter((meal) => meal.id !== id);   //filter out the meals with that id, so it would delete it
      
      setMeals(newMeals);
      localStorage.setItem("meals", JSON.stringify(newMeals)); 
  }

  const deleteAllMeals = () =>{
    setMeals([]);
    setExercises([]);
    localStorage.clear(); //clears all the data from local storage
  }

  //map will map the array to this const, specifically just the calories
  //reduce will add up all the numbers, the accumulate plus each value. Extra plus because value is a number. 0 for initial
  const exTotal =
  exercises != null
  ? Number(meals.map((meal)=>meal.calories).reduce((acc, value)=>acc + +value, 0))
    -   Number(exercises.map((exercise)=>exercise.caloriesBurned).reduce((acc, value)=>acc + + value, 0)) 
  : 0;

  //this is to sort the meals, find out what use effect does
  useEffect(()=>{
    const oldState = [...meals];
    if(selectedFilter === "Ascending"){
      const ascendingMeals = oldState.sort((a,b) => a.calories - b.calories);
      setMeals(ascendingMeals);
    }
    else if(selectedFilter === "Descending")
    {
      const descendingMeals = oldState.sort((a,b) => b.calories - a.calories);
      setMeals(descendingMeals);
    }
  },[selectedFilter]);    //selected filter is a dependecy

  useEffect(()=>{
    //convert the local storage data back into a const and set the meals to it. This way it stays on reload
    const localStorageMeals = JSON.parse(localStorage.getItem('meals'));
    setMeals(localStorageMeals);
  }, [setMeals]);    //setMeals as dependecy

  
  useEffect(()=>{
    //convert the local storage data back into a const and set the meals to it. This way it stays on reload
    const localStorageEx= JSON.parse(localStorage.getItem('exercises'));
    setExercises(localStorageEx);
  }, [setExercises]);    //setMeals as dependecy

  // {openModal? <AppModal setOpenModal={setOpenModal}/> : ""}    //if openModal is true use first argument else use second

  return (
    <div className="Diet">
      <Navbar />
      <AppBar />
      {openModal? <AppModal setOpenModal={setOpenModal}/> : ""}
      <AppControlsCounter total ={exTotal}/>
      <AppControlsDelete deleteAllMeals={deleteAllMeals} />

      <AppControlsInput addMealsHandler = {addMealsHandler} mealName={mealName} calories = {calories}
          setMealName={setMealName} setCalories={setCalories} />

      <div className='app_meals_container'>
        <AppMealsFilter selectedFilter ={selectedFilter} setSelectedFilter = {setSelectedFilter}/>
        <AppMealsList meals={meals} deleteMealHandler={deleteMealHandler}/>
        <ExerciseControlsInput addExerciseHandler={addExerciseHandler} exerciseName={exerciseName} caloriesBurned={caloriesBurned}
          setCaloriesBurned={setCaloriesBurned} setexerciseName={setexerciseName}/>
        <AppExerciseList exercises={exercises} deleteExerciseHandler={deleteExerciseHandler}/>
      </div>
    </div>
  );
}

export default DietProfile;
