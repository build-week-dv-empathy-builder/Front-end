import React from 'react'
import appDataStructure from '../appDataStructure'

class Calculator extends React.Component {
    constructor() {
        super()
        
        this.personal_budget_total = 0
        this.relocation_costs = 0
        this.calculated_difference = 0

        // Calculate personal budget total
        const p_costs = {...appDataStructure.personal_costs}
        for(let property in p_costs){
            if(p_costs.hasOwnProperty(property)) {
                p_costs[property] = parseInt(localStorage.getItem(`${property}`))
                this.personal_budget_total += p_costs[property] 
            }
        }
        console.log("personal costs data?", p_costs)
        console.log("personal budget total", this.personal_budget_total)

    }
    
    componentDidMount() {
        
    }
    
    render() {
        return (
            <div className="calculator">
                <h1>Results</h1>
                <p>{`Personal budget total: $${this.personal_budget_total}`}</p>
            </div>
        )
    }
    
    
}

export default Calculator