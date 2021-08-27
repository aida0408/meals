import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom"
import axios from "axios";


const Meals = () => {
    const [meals, setMeals] = useState([])

    useEffect(() => {
        axios("https://gist.githubusercontent.com/juravlevdima/b239931140d1c3ae402a87b130f2caa6/raw/2aeee347830d20ec0720293d32905b0ae359526c/food.json")
            .then(({data}) => setMeals(data))
    }, [])
    return (
        <div className="row">

            {
                meals.map(item =>
                    <div className="col">
                        <Link key={item.idMeals} to={`/mealDetails/${item.id}`}>
                            <img src={item.image} alt="" className="img"/></Link>
                        <Link to={`/mealDetails/${item.id}`}>{item.title}</Link>
                    </div>
                )
            }

        </div>
    )
}

export default Meals