import React from 'react'
import { Input, Label, Form, Button } from 'reactstrap'
import axios from 'axios'

class InputRelocationCosts extends React.Component {
    constructor() {
        super()
        this.state = {
            rent: '',
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        const headers = {
            authorization: localStorage.getItem('token')    
        }
        const payload = {
            //has vehicle in general?
            //general data
            "current_location": "81401",
            "timestamp": "20181026",
            "desired_relocation": "87401",
            "sex": "male",
            "relationship_status": "married",
            "orientation": "straight",
            "age": "28",
            "race": "white",
            "safe_status": "yes",
            "employed": "no",
            "partner_employed": "yes",
            "children": "yes",
            "personal_savings": "1000",
            "individual_income": "500",
        
            //child care
            //personal budget
            "transportation": "50",
            "food": "200",
            "health_care": "0",
            "car_loans": "0",
            "personal_loans": "0",
            "personal_other": "200",
            "personal_budget_total": "450",
        
            //relocation budget
            "travel_costs": "50",
            "rental_deposit": "500",
            "utility_connection": "100",
            "storage_unit": "50",
            "rent": "600",
            "car_rental": "0",
            "cell_phone": "100",
            "moving_truck": "300",
            "mental_health": "0",
            "income_loss": "0",
            "additional_security": "100",
            "relocation_other": "200",
            "relocation_budget_total": "2000",
        
            //calculated results
            "calculated_difference": "1450", 
        }

        event.preventDefault()
        axios.post('https://dv-empathy-builder.herokuapp.com/api/insert', payload, { headers })
            .then((res) => {
                console.log("response", res)
                console.log("data sent", res.data.message)
            })
            .catch((err) => {
                console.log("error sending data", err)
            })
    }

    render() {
        const { rent } = this.state
        return (
            <div>
                <h1>INPUT RELOCATION COSTS</h1>
                <Form onSubmit={this.handleSubmit}>
                    <Label for="rent">Rent: </Label>
                    <Input name="rent" value={rent} onChange={this.handleChange} />
                    <Button type="submit">Submit</Button>
                </Form>
                
            </div>
        )
    }
}

export default InputRelocationCosts