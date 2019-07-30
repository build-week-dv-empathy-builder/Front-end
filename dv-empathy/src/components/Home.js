import React from 'react'

import { Link } from 'react-router-dom'

import '../home.css';

import LawStatue from '../Images/law_statue.png';


function Home() {
    return (
        <div>
            <br />
            <br />
            <br />
            <img src={ LawStatue } className="lady justice" alt="Lady Justice" />
            <br />
            <br />
            <h2>From our CEO:</h2>
            <p>We live in a society that encourages survivors to leave, but tells them that once they do, they’re on their own to figure the rest out. Do we actually want to end domestic violence in this country? Because if we do, we need to widen our understanding of the problem, and dare to dream of a society in which survivors have the resources to support their healing.</p>

            <br />
        <Link to="/calculator">Start Calculator</Link>
        </div>
    )
}

export default Home