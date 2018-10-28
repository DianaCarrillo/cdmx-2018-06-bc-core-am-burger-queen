import React from 'react'
import {Button} from 'reactstrap'

const meals = (meals) =>{
    return(
        <div>{meals.meal.map((meal, i)=>{
            return(
                <div key={i}>
                {/* <p>{Object.values(meal)}</p> */}
                <Button className="meal-buttons" size="lg">{Object.keys(meal)}: ${Object.values(meal)}</Button>
                </div>            
            )

        })}</div>
    )
    
}

export default meals
