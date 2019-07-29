import React from 'react'
import { Button } from 'reactstrap'
import { Link, Route } from 'react-router-dom'
import CalculatorPage from './CalculatorPage';
import InputCost from './InputCost';

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <br />
            <h3>From our CEO:</h3>
            <p>We live in a society that encourages survivors to leave, but tells them that once they do, they’re on their own to figure the rest out. Do we actually want to end domestic violence in this country? Because if we do, we need to widen our understanding of the problem, and dare to dream of a society in which survivors have the resources to support their healing.</p>
        <Link to="/calculator">Start Calculator</Link>
        
        </div>
    )
}

export default Home