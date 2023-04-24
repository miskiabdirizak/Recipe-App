import React from 'react'

const AppExerciseList =({exercises, deleteExerciseHandler}) =>{
    //meals needs a ?
    return(
        <div className='app_meals_container_wrapper'>
            {exercises?.map((exercise, index)=>(
                <div key={index} className='app_meals_container_wrapper_inner'>
                    <div>
                        {`${exercise.exerciseName} : ${exercise.caloriesBurned}`} 
                        <input type='checkbox' className='Check'/>
                    </div>
                    <div>
                        <button className='btn_delete_meal' onClick={()=>deleteExerciseHandler(exercise.id)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AppExerciseList;