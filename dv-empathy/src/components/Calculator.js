import React from 'react'
import appDataStructure from '../appDataStructure'

class Calculator extends React.Component {
    constructor() {
        super()
        
        this.personal_savings = localStorage.getItem('personal_savings')
        this.individual_income = localStorage.getItem('individual_income')
        this.personal_budget_total = 0
        this.relocation_budget_total = 0
        this.calculated_difference = 0
    }

    // Calculate personal budget total
    calculatePersonalCosts = () => {
        const p_costs = {...appDataStructure.personal_costs}
        for(let property in p_costs){
            if(p_costs.hasOwnProperty(property)) {
                p_costs[property] = parseFloat(localStorage.getItem(`${property}`))
                this.personal_budget_total += p_costs[property] 
            }
        }
    }

    calculateRelocationCosts = () => {
        // Calculate relocation cost total
        const r_costs = {...appDataStructure.relocation_costs}
        for (let property in r_costs) {
            if(r_costs.hasOwnProperty(property)) {
                r_costs[property] = parseFloat(localStorage.getItem(`${property}`))
                this.relocation_budget_total += r_costs[property]
            }
        }
    }

    calculateTotalCost = () => {
        const all_costs = this.personal_budget_total + this.relocation_budget_total
        this.calculated_difference = all_costs - (this.personal_savings + this.individual_income)
        console.log('wtf', this.calculated_difference)
    }
    
    componentWillMount() {
        this.calculatePersonalCosts()
        this.calculateRelocationCosts()
        this.calculateTotalCost()
    }
    
    render() {
        return (
            <div className="calculator-container">
                <h1>Results</h1>
                <p>{`Personal budget total: $${this.personal_budget_total}`}</p>
                <p>{`Relocation costs total: $${this.relocation_budget_total}`}</p>
                <p>{`Individual Income: $${this.individual_income}`}</p>
                <p>{`Personal Savings: $${this.personal_savings}`}</p>
                <p>{`Difference: $${this.calculated_difference}`}</p>
            </div>
        )
    }
    
    
}

export default Calculator