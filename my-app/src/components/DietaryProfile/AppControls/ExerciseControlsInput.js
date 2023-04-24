import React from 'react'

const ExerciseControlsInput =({addExerciseHandler, caloriesBurned, exerciseName, setCaloriesBurned, setexerciseName}) =>{
    const onAddExerciseClick = () =>{
        addExerciseHandler();
    };

    return(
        <div className='app_controls'>
            <div className='app_controls_inputs'>
                <input type="text" placeholder='Exercise' value={exerciseName} onChange={(e)=>setexerciseName(e.target.value)} />
                <input type="number" placeholder='Calories Burned' value={caloriesBurned} onChange={(e)=>setCaloriesBurned(e.target.value)} min ={0}/>
                <button onClick={onAddExerciseClick}>Add</button>
            </div>
            
        </div>
    );
};

export default ExerciseControlsInput;