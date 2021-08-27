import React, {useEffect,useState} from 'react'
import axios from "axios";
import {useParams} from 'react-router-dom'


const MealDetails = () => {
    const params = useParams()
        const [mealDetails, setMealDetails] = useState({})

    useEffect((e) =>{
        axios("https://gist.githubusercontent.com/juravlevdima/b239931140d1c3ae402a87b130f2caa6/raw/2aeee347830d20ec0720293d32905b0ae359526c/food.json")
            .then(({data}) => setMealDetails(data.find((item) => item.id === params.id) ) )
    },[])


    return (
        <div>
            <img className="img" src="mealDetails.image" alt=""/>
            <div className="meal-name">{mealDetails.title}</div>
            <div className="meal-desc">{mealDetails.description}</div>
            <div className="meal-price">{mealDetails.price}</div>

        </div>



)
}

export default MealDetails