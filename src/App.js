import React from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom"
import Meals from './Meals'
import MealDetails from "./MealDetails";


const App = () => {

    return (
        <div className="container">
            <Router>
                <Route exact path="/"><Meals/></Route>
                <Route path="/mealDetails/:id"><MealDetails/></Route>
            </Router>
        </div>
    )
}


export default App;
