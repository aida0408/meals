import React, {useEffect,useState} from 'react'
import axios from "axios";
import {useParams} from 'react-router-dom'


const MealDetails = () => {
    const params = useParams()
        const [mealDetails, setMealDetails] = useState({})

    useEffect((e) =>{
        axios("https://gist.githubusercontent.com/juravlevdima/b239931140d1c3ae402a87b130f2caa6/raw/2aeee347830d20ec0720293d32905b0ae359526c/food.json")
            .then(({data}) => setMealDetails(data.find((item) => item.id === params.id) ) )
    },[params.id])


    return (
        <div className="row">
            <div className="col__details">
                <img className="img" src={mealDetails.image} alt=""/>
            </div>
            <div className="col__details">
                <h3>{mealDetails.title}</h3>
                <p>{mealDetails.description}</p>
                <p>{mealDetails.price}$</p>
            </div>



        </div>



)
}

export default MealDetails