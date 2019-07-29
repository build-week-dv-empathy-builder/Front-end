import React from 'react'
import { Input, Label, Form, Button } from 'reactstrap'
import axios from 'axios'

class InputRelocationCosts extends React.Component {
    constructor() {
        super()
        this.state = {
            travel_costs: '',
            rental_deposit: '',
            utility_connection: '',
            storage_unit: '',
            rent: '',
            car_rental: '',
            cell_phone: '',
            moving_truck: '',
            mental_health: '',
            income_loss: '',
            additional_security: '',
            relocation_other: '',
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
        const { travel_costs, rental_deposit, utility_connection, storage_unit, rent, car_rental, cell_phone, moving_truck, mental_health, income_loss, additional_security, relocation_other } = this.state

        return (
            <div>
                <h1>INPUT RELOCATION COSTS</h1>
                <br />

                <Form onSubmit={ this.handleSubmit }>

                    <Label for="travel_costs">Travel Cost(s): </Label>
                    <Input name="travel_costs" value={ travel_costs } onChange={ this.handleChange } />

                    <br />

                    <Label for="rental_deposit">Rental Deposit: </Label>
                    <Input name="rental_deposit" value={ rental_deposit } onChange={ this.handleChange } />

                    <br />

                    <Label for="utility_connection">Utility Connection: </Label>
                    <Input name="utility_connection" value={ utility_connection } onChange={ this.handleChange } />

                    <br />

                    <Label for="storage_unit">Storage Unit: </Label>
                    <Input name="storage_unit" value={ storage_unit } onChange={ this.handleChange } />

                    <br />

                    <Label for="rent">Rent: </Label>
                    <Input name="rent" value={ rent } onChange={ this.handleChange } />

                    <br />

                    <Label for="car_rental">Car Rental: </Label>
                    <Input name="car_rental" value={ car_rental } onChange={ this.handleChange } />

                    <br />

                    <Label for="cell_phone">Cell Phone: </Label>
                    <Input name="cell_phone" value={ cell_phone } onChange={ this.handleChange } />

                    <br />

                    <Label for="moving_truck">Moving Truck: </Label>
                    <Input name="moving_truck" value={ moving_truck } onChange={ this.handleChange } />

                    <br />

                    <Label for="mental_health">Mental Health: </Label>
                    <Input name="mental_health" value={ mental_health } onChange={ this.handleChange } />

                    <br />

                    <Label for="income_loss">Income Loss: </Label>
                    <Input name="income_loss" value={ income_loss } onChange={ this.handleChange } />

                    <br />

                    <Label for="additional_security">Additional Security: </Label>
                    <Input name="additional_security" value={ additional_security } onChange={ this.handleChange } />

                    <br />

                    <Label for="relocation_other">Other Relocation Cost(s): </Label>
                    <Input name="relocation_other" value={ relocation_other } onChange={ this.handleChange } />

                    <br />
                    <Button type="submit">Submit</Button>
                </Form>
                
            </div>
        )
    }
}

export default InputRelocationCosts