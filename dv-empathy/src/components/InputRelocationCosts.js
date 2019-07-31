import React from 'react'
import { Link } from 'react-router-dom'
import { 
    Input, 
    Label, 
    Form,
    Button, 
    UncontrolledPopover, 
    PopoverHeader, 
    PopoverBody 
} from 'reactstrap'
import axios from 'axios'

class InputRelocationCosts extends React.Component {
    constructor() {
        super()
        this.state = {
            travel_costs: localStorage.getItem('travel_costs'),
            rental_deposit: localStorage.getItem('rental_deposit'),
            utility_connection: localStorage.getItem('utility_connection'),
            storage_unit: localStorage.getItem('storage_unit'),
            rent: localStorage.getItem('rent'),
            car_rental: localStorage.getItem('car_rental'),
            cell_phone: localStorage.getItem('cell_phone'),
            moving_truck: localStorage.getItem('moving_truck'),
            mental_health: localStorage.getItem('mental_health'),
            income_loss: localStorage.getItem('income_loss'),
            additional_security: localStorage.getItem('additional_security'),
            relocation_other: localStorage.getItem('relocation_other'),
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        


        /*** TODO *** 
         * THIS WILL BE MOVED TO THE COMPONENT THAT CALCULATES AND SENDS THE DATA  */
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

    saveData = () => {        
        // Loop through each property in the clone of state (data)
        // Check if the property is this specficic class or a prototype property
        // If the current property is its own property, store it in localStorage
        const data = {...this.state}
        for(let property in data) {
            if(data.hasOwnProperty(property)) {
                localStorage.setItem(`${property}`, `${data[property]}`) // this is sweet
            }
        }
    }

    render() {
        const { travel_costs, rental_deposit, utility_connection, storage_unit, rent, car_rental, cell_phone, moving_truck, mental_health, income_loss, additional_security, relocation_other } = this.state

        return (
            <div className="relocation-costs-container">
                <h1>INPUT RELOCATION COSTS</h1>
                <br />

                <Form className="relocation-costs-form" onSubmit={ this.saveData }>

                    <Label for="travel_costs">Travel Cost(s): </Label>
                    <Input 
                        id="TravelCosts"
                        type="number" 
                        name="travel_costs" 
                        value={ travel_costs } 
                        onChange={ this.handleChange }
                    />

                    <UncontrolledPopover trigger="focus" placement="bottom" target="TravelCosts">
                    <PopoverHeader>Travel Costs:</PopoverHeader>
                    <PopoverBody>Include Snacks, Gas, Eating out, Drinks, Extra money for incidentals.</PopoverBody>
                    </UncontrolledPopover>

                    <br />

                    <Label for="rental_deposit">Rental Deposit: </Label>
                    <Input 
                        type="number" 
                        name="rental_deposit" 
                        value={ rental_deposit } 
                        onChange={ this.handleChange } 
                    />

                    <br />

                    <Label for="utility_connection">Utility Connection: </Label>
                    <Input 
                        id="UtilityConnection"
                        type="number" 
                        name="utility_connection" 
                        value={ utility_connection } 
                        onChange={ this.handleChange } 
                    />

                    <UncontrolledPopover trigger="focus" placement="bottom" target="UtilityConnection">
                    <PopoverHeader>Utility Connections:</PopoverHeader>
                    <PopoverBody>Add all utility connections for final input.
                    <br />
                    Include Gas, Water, Electricity.</PopoverBody>
                    </UncontrolledPopover>

                    <br />

                    <Label for="storage_unit">Storage Unit: </Label>
                    <Input 
                        type="number" 
                        name="storage_unit" 
                        value={ storage_unit } 
                        onChange={ this.handleChange } 
                    />

                    <br />

                    <Label for="rent">Rent: </Label>
                    <Input 
                        type="number" 
                        name="rent" 
                        value={ rent } 
                        onChange={ this.handleChange } 
                    />

                    <br />

                    <Label for="car_rental">Car Rental: </Label>
                    <Input 
                        id="CarRental"
                        type="number" 
                        name="car_rental" 
                        value={ car_rental } 
                        onChange={ this.handleChange } 
                    />

                    <UncontrolledPopover trigger="focus" placement="bottom" target="CarRental">
                    <PopoverHeader>Car Rental:</PopoverHeader>
                    <PopoverBody>Add all expenses needed to rent a car. 
                    <br />
                    Includes Car Rental, Gas during trip, Refill tank before returning, Insurance, Etc.</PopoverBody>
                    </UncontrolledPopover>

                    <br />

                    <Label for="cell_phone">Cell Phone: </Label>
                    <Input 
                        id="CellPhone"
                        type="number" 
                        name="cell_phone" 
                        value={ cell_phone } 
                        onChange={ this.handleChange } 
                    />

                    <UncontrolledPopover trigger="focus" placement="bottom" target="CellPhone">
                    <PopoverHeader>Cell Phone:</PopoverHeader>
                    <PopoverBody>Add all expenses needed for switching over a cell phone. 
                    <br />
                    Includes: Disconnecting from pervious phone company if terminating early/out of contract/flex programs, Connection to new cell phone company, Cost of phone, Etc.</PopoverBody>
                    </UncontrolledPopover>

                    <br />

                    <Label for="moving_truck">Moving Truck: </Label>
                    <Input 
                        id="MovingTruck"
                        type="number" 
                        name="moving_truck" 
                        value={ moving_truck } 
                        onChange={ this.handleChange } 
                    />

                    <UncontrolledPopover trigger="focus" placement="bottom" target="MovingTruck">
                    <PopoverHeader>Moving Truck:</PopoverHeader>
                    <PopoverBody>Add all expenses needed for moving truck for total.
                    <br />
                    Includes Size of truck, Insurance, Mileage, Movers help, Gas for trip, Return of truck with full tank, Etc.</PopoverBody>
                    </UncontrolledPopover>

                    <br />

                    <Label for="mental_health">Mental Health: </Label>
                    <Input 
                        id="MentalHealth"
                        type="number" 
                        name="mental_health" 
                        value={ mental_health } 
                        onChange={ this.handleChange } 
                    />

                    <UncontrolledPopover trigger="focus" placement="bottom" target="MentalHealth">
                    <PopoverHeader>Mental Health:</PopoverHeader>
                    <PopoverBody>Add all expenses associated with Mental Health help. <br />
                    Includes Doctor's visits, Medications, Therapist/therapy, Travel to office/pharmacy, Wages lost due to time off work, Etc.</PopoverBody>
                    </UncontrolledPopover>

                    <br />

                    <Label for="income_loss">Income Loss: </Label>
                    <Input 
                        id="IncomeLoss"
                        type="number" 
                        name="income_loss" 
                        value={ income_loss } 
                        onChange={ this.handleChange } 
                    />

                    <UncontrolledPopover trigger="focus" placement="bottom" target="IncomeLoss">
                    <PopoverHeader>Income Loss:</PopoverHeader>
                    <PopoverBody>Add all and any loss of income for total.
                    <br />
                    Include Lost wages from leaving job, Spouse wage, Etc. </PopoverBody>
                    </UncontrolledPopover>

                    <br />

                    <Label for="additional_security">Additional Security: </Label>
                    <Input 
                        id="Security"
                        type="number" 
                        name="additional_security" 
                        value={ additional_security } 
                        onChange={ this.handleChange } 
                    />

                    <UncontrolledPopover trigger="focus" placement="bottom" target="Security">
                    <PopoverHeader>Additional Security:</PopoverHeader>
                    <PopoverBody>Includes New service of home security system, Monthly payment, Equipment charge, Etc.</PopoverBody>
                    </UncontrolledPopover>

                    <br />

                    <Label for="relocation_other">Other Relocation Cost(s): </Label>
                    <Input 
                        id="RelocationOther"
                        type="number" 
                        name="relocation_other" 
                        value={ relocation_other } 
                        onChange={ this.handleChange } 
                    />

                    <UncontrolledPopover trigger="focus" placement="bottom" target="RelocationOther">
                    <PopoverHeader>Relocation Other:</PopoverHeader>
                    <PopoverBody>Add any relocation costs that are not within the fields above.</PopoverBody>
                    </UncontrolledPopover>

                    <br />
                    <Link to="./results" onClick={this.saveData}>Continue to see results</Link>
                </Form>
                
            </div>
        )
    }
}

export default InputRelocationCosts;