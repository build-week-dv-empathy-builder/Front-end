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
        // event.preventDefault()
        // axios.post('')
        //     .then()
        //     .catch()
    }

    render() {
        const { travel_costs, rental_deposit, utility_connection, storage_unit, rent, car_rental, cell_phone, moving_truck, mental_health, income_loss, additional_security, relocation_other } = this.state

        return (
            <div>
                <h1>INPUT RELOCATION COSTS</h1>
                <br />

                <Form onSubmit={ this.handleSubmit }>

                    <Label for="travel_costs">Travel Cost(s): </Label>
                    <Input type="number" name="travel_costs" value={ travel_costs } onChange={ this.handleChange } />

                    <br />

                    <Label for="rental_deposit">Rental Deposit: </Label>
                    <Input type="number" name="rental_deposit" value={ rental_deposit } onChange={ this.handleChange } />

                    <br />

                    <Label for="utility_connection">Utility Connection: </Label>
                    <Input type="number" name="utility_connection" value={ utility_connection } onChange={ this.handleChange } />

                    <br />

                    <Label for="storage_unit">Storage Unit: </Label>
                    <Input type="number" name="storage_unit" value={ storage_unit } onChange={ this.handleChange } />

                    <br />

                    <Label for="rent">Rent: </Label>
                    <Input type="number" name="rent" value={ rent } onChange={ this.handleChange } />

                    <br />

                    <Label for="car_rental">Car Rental: </Label>
                    <Input type="number" name="car_rental" value={ car_rental } onChange={ this.handleChange } />

                    <br />

                    <Label for="cell_phone">Cell Phone: </Label>
                    <Input type="number" name="cell_phone" value={ cell_phone } onChange={ this.handleChange } />

                    <br />

                    <Label for="moving_truck">Moving Truck: </Label>
                    <Input type="number" name="moving_truck" value={ moving_truck } onChange={ this.handleChange } />

                    <br />

                    <Label for="mental_health">Mental Health: </Label>
                    <Input type="number" name="mental_health" value={ mental_health } onChange={ this.handleChange } />

                    <br />

                    <Label for="income_loss">Income Loss: </Label>
                    <Input type="number" type="number" name="income_loss" value={ income_loss } onChange={ this.handleChange } />

                    <br />

                    <Label for="additional_security">Additional Security: </Label>
                    <Input type="number" type="number" name="additional_security" value={ additional_security } onChange={ this.handleChange } />

                    <br />

                    <Label for="relocation_other">Other Relocation Cost(s): </Label>
                    <Input type="number" name="relocation_other" value={ relocation_other } onChange={ this.handleChange } />

                    <br />
                    <Button type="submit">Submit</Button>
                </Form>
                
            </div>
        )
    }
}

export default InputRelocationCosts;