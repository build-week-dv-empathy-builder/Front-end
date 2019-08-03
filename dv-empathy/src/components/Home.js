import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Pagination, PaginationItem, PaginationLink } from 'reactstrap'

import '../home.css';

import LawStatue from '../Images/law_statue.png';


function Home() {
    return (
        <div className="home container">
            <img src={ LawStatue } className="lady justice home-item" alt="Lady Justice" />
            <h2 className="home item">From our CEO:</h2>
            <p className="home item">We live in a society that encourages survivors to leave, but tells them that once they do, they’re on their own to figure the rest out. Do we actually want to end domestic violence in this country? Because if we do, we need to widen our understanding of the problem, and dare to dream of a society in which survivors have the resources to support their healing.</p>
            <Link className="home item" to="/calculator/demographics"><Button id="app-nav-button">Start Calculator</Button></Link>  
        </div>
    )
}

export default Home