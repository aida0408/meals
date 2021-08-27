import React from 'react'
import {BrowserRouter, Route} from "react-router-dom"
import Meals from './Meals'
import MealDetails from "./MealDetails";


const App = () => {

    return (
        <BrowserRouter>
            <Route exact path="/"><Meals/></Route>
            <Route path="/mealDetails/:id"><MealDetails/></Route>
        </BrowserRouter>
    )
}


export default App;
