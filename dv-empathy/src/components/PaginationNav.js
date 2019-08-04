import React from 'react'
import { Button, Pagination, PaginationItem,  } from 'reactstrap'
import { Link } from 'react-router-dom'

function PaginationNav(props) {
    return (
        <nav className="pagination-nav">
            <Pagination size="sm" id="pagination-nav">
                <PaginationItem>
                    {props.current === 'demographics' ? // disable back button if demographics is showing (which is first)
                    <Link to="#"><Button disabled size="sm" id="app-nav-button">{`${"<"}`}</Button></Link> :
                    <Link to={props.prev} onClick={props.saveData}><Button size="sm" id="app-nav-button">{`${"<"}`}</Button></Link>}
                </PaginationItem>
                <PaginationItem>
                    {props.current === "demographics" ? 
                    <Link to="#"><Button disabled size="sm" id="app-nav-button">Your Demographics</Button></Link> :
                    <Link to="/calculator/demographics" onClick={props.saveData}><Button size="sm" id="app-nav-button">Your Demographics</Button></Link>
                    }
                </PaginationItem>
                <PaginationItem>
                    {props.current === "personal-budget" ?
                    <Link to="#"><Button disabled size="sm" id="app-nav-button">Your Personal Budget</Button></Link> :
                    <Link to="/calculator/personal-budget" onClick={props.saveData}><Button size="sm" id="app-nav-button">Your Personal Budget</Button></Link>}
                </PaginationItem>
                <PaginationItem>
                    {props.current ==="relocation-budget" ?
                    <Link to="#"><Button disabled size="sm" id="app-nav-button">Your Relocation Costs</Button></Link> :
                    <Link to="/calculator/relocation-costs" onClick={props.saveData}><Button size="sm" id="app-nav-button">Your Relocation Costs</Button></Link>}
                </PaginationItem>
                <PaginationItem>
                    {props.current === 'relocation-budget' ? // disable next button if it's the relcation budget showing (which is last)
                        <Link to="#"><Button disabled size="sm" id="app-nav-button">{`${">"}`}</Button></Link> :
                        <Link to={props.next} onClick={props.saveData}>
                            <Button size="sm" id="app-nav-button">{`${">"}`}</Button>
                        </Link>}
                </PaginationItem>
            </Pagination>
        </nav>
    )
}
export default PaginationNav