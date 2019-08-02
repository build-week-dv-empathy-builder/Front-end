import React from 'react'
import axios from 'axios'
import { Button } from 'reactstrap'
import appDataStructure from '../appDataStructure' // these are the object properties the APP uses to iterate over object properties

class Calculator extends React.Component {
    constructor() {
        super()
        
        this.personal_savings = parseFloat(localStorage.getItem('personal_savings'))
        this.individual_income = parseFloat(localStorage.getItem('individual_income'))
        this.personal_budget_total = 0
        this.relocation_budget_total = 0
        this.calculated_difference = 0
    }

    // Calculate personal budget total
    calculatePersonalCosts = () => {
        const p_costs = {...appDataStructure.personal_costs}
        for(let property in p_costs){
            if(p_costs.hasOwnProperty(property)) {  // checks if the current property is it's own property, 
                p_costs[property] = parseFloat(localStorage.getItem(`${property}`)) // then store it and add it
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
        const all_costs = parseFloat(this.personal_budget_total + this.relocation_budget_total) 
        const sumOfSavingsAndIncome = this.personal_savings + this.individual_income
        this.calculated_difference = parseFloat(sumOfSavingsAndIncome - all_costs)
    }
    
    componentWillMount() {
        this.calculatePersonalCosts()
        this.calculateRelocationCosts()
        this.calculateTotalCost()

        this.buildPayload()
    }

    componentDidMount() {
        this.sendDataToServer()
    }

    buildPayload = () => {
        const toBeJSON_obj = {}
        
        // build the personal budget costs properties
        const personal_budget_properties = {...appDataStructure.personal_costs}
        for(let property in personal_budget_properties) {
            if(personal_budget_properties.hasOwnProperty(property)) {
                toBeJSON_obj[property] = localStorage.getItem(`${property}`)
            }
        }

        // build the relocation budget costs properties
        const relocation_properties = {...appDataStructure.relocation_costs}
        for(let property in relocation_properties) {
            if(relocation_properties.hasOwnProperty(property)) {
                toBeJSON_obj[property] = localStorage.getItem(`${property}`)
            }
        }

        // build the demographics properties
        const demographics_properties = {...appDataStructure.demographics}
        for(let property in demographics_properties) {
            if(demographics_properties.hasOwnProperty(property)) {
                toBeJSON_obj[property] = localStorage.getItem(`${property}`)
            }
        }

        toBeJSON_obj.personal_savings = this.personal_savings
        toBeJSON_obj.individual_income = this.individual_income
        toBeJSON_obj.personal_budget_total = this.personal_budget_total
        toBeJSON_obj.relocation_budget_total = this.relocation_budget_total
        toBeJSON_obj.timestamp = Date.now()
        toBeJSON_obj.calculated_difference = this.calculated_difference
        console.log("before JSON", toBeJSON_obj)
        const jsonObj = JSON.stringify(toBeJSON_obj) // convert the object to JSON
        return jsonObj
    }

    sendDataToServer = () => {
        const payload = this.buildPayload()
        const headers = {
            'content-type': 'application/json'   
        }

        axios.post('https://empathy-builder-2.herokuapp.com/api/insert', payload, { headers })
            .then((res) => {
                localStorage.clear()
                console.log("data sent")
            })
            .catch((err) => {
                console.log("error sending data", err)
            })
    }
    
    render() {
        return (
            <div className="calculator container">
                <h1>Results</h1>
                <p>{`Personal budget total: $${this.personal_budget_total}`}</p>
                <p>{`Relocation costs total: $${this.relocation_budget_total}`}</p>
                <p>{`Individual Income: $${this.individual_income}`}</p>
                <p>{`Personal Savings: $${this.personal_savings}`}</p>
                <p>{`Difference: $${this.calculated_difference}`}</p>
                <Button onClick={this.sendDataToServer}>Send Data</Button>
            </div>
        )
    } 
}

export default Calculator