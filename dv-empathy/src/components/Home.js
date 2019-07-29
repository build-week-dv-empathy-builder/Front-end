import React from 'react'
import { Button } from 'reactstrap'
import { Link, Route } from 'react-router-dom'
import CalculatorPage from './CalculatorPage';
import InputCost from './InputCost';

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <h3>VI</h3>
            <p>We envision a world where survivors have sustaining income, savings and credit with which to build wealth and the resources to support individual, intergenerational and community healing.</p>
            <br />
            <p>We envision a world where harm-doers are held financially accountable and survivors are not saddled with the cost of being harmed.</p>
            <br /> 
            <p>We envision a world where gender-based violence receives the attention necessary to address it as a systemic issue.</p>
                <Link to="/calculator">Start Calculator</Link>   
        </div>
    )
}

export default Home