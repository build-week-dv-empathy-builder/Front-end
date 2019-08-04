import React from 'react'
import PaginationNav from './PaginationNav'
import { Link } from 'react-router-dom'
import { 
    Input, 
    Label, 
    Form, 
    FormGroup,
    UncontrolledPopover, 
    PopoverHeader, 
    PopoverBody,
    Button,
} from 'reactstrap'

class InputRelocationCosts extends React.Component {
    constructor() {
        super()
        this.state = {
            travel_costs: sessionStorage.getItem('travel_costs'),
            rental_deposit: sessionStorage.getItem('rental_deposit'),
            utility_connection: sessionStorage.getItem('utility_connection'),
            storage_unit: sessionStorage.getItem('storage_unit'),
            rent: sessionStorage.getItem('rent'),
            car_rental: sessionStorage.getItem('car_rental'),
            cell_phone: sessionStorage.getItem('cell_phone'),
            moving_truck: sessionStorage.getItem('moving_truck'),
            mental_health: sessionStorage.getItem('mental_health'),
            income_loss: sessionStorage.getItem('income_loss'),
            additional_security: sessionStorage.getItem('additional_security'),
            relocation_other: sessionStorage.getItem('relocation_other'),
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        
    }
    saveData = () => {        
        // Loop through each property in the clone of state (data)
        // Check if the property is this specficic class or a prototype property
        // If the current property is its own property, store it in sessionStorage
        const data = {...this.state}
        for(let property in data) {
            if(data.hasOwnProperty(property)) {
                sessionStorage.setItem(`${property}`, `${data[property]}`) // this is sweet
            }
        }
    }

    handleScroll = (event) => {
        event.target.blur() //disables the input box value from incrementing when scrolling
    }

    render() {
        const { travel_costs, rental_deposit, utility_connection, storage_unit, rent, car_rental, cell_phone, moving_truck, mental_health, income_loss, additional_security, relocation_other } = this.state

        return (
            <div className="relocation-costs container">
                <h2>Relocation Costs</h2>
                <article>
                    <p>Why don't you move away? One of the most common questions people ask of domestic violience survivors. It sounds so simple, but in reality it isn't so easy to just move away. The biggest barrier is often cost. This calculator will provide a rough idea of just how much one would have to save to "just move away."</p>
                </article>
                <Form className="relocation-costs form" onSubmit={ this.saveData }>
                    <FormGroup>
                        <Label for="travel_costs">Travel Cost(s): </Label>
                        <Input 
                            id="TravelCosts"
                            type="number" 
                            name="travel_costs" 
                            value={ travel_costs } 
                            onChange={ this.handleChange }
                            onWheel={this.handleScroll}
                        />

                        <UncontrolledPopover trigger="focus" placement="bottom" target="TravelCosts">
                            <PopoverHeader>Travel Costs:</PopoverHeader>
                            <PopoverBody>Include Snacks, Gas, Eating out, Drinks, Extra money for incidentals.</PopoverBody>
                        </UncontrolledPopover>
                    </FormGroup>
                    
                    <FormGroup>
                        <Label for="rental_deposit">Rental Deposit: </Label>
                        <Input 
                            type="number" 
                            name="rental_deposit" 
                            value={ rental_deposit } 
                            onChange={ this.handleChange }
                            onWheel={this.handleScroll}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="utility_connection">Utility Connection: </Label>
                        <Input 
                            id="UtilityConnection"
                            type="number" 
                            name="utility_connection" 
                            value={ utility_connection } 
                            onChange={ this.handleChange }
                            onWheel={this.handleScroll}
                        />
                    
                        <UncontrolledPopover trigger="focus" placement="bottom" target="UtilityConnection">
                            <PopoverHeader>Utility Connections:</PopoverHeader>
                            <PopoverBody><p>Add all utility connections for final input.
                            Include Gas, Water, Electricity.</p></PopoverBody>
                        </UncontrolledPopover>
                    </FormGroup>
                    <FormGroup>
                        <Label for="storage_unit">Storage Unit: </Label>
                        <Input 
                            type="number" 
                            name="storage_unit" 
                            value={ storage_unit } 
                            onChange={ this.handleChange }
                            onWheel={this.handleScroll}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="rent">Rent: </Label>
                        <Input 
                            type="number" 
                            name="rent" 
                            value={ rent } 
                            onChange={ this.handleChange }
                            onWheel={this.handleScroll}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="car_rental">Car Rental: </Label>
                        <Input 
                            id="CarRental"
                            type="number" 
                            name="car_rental" 
                            value={ car_rental } 
                            onChange={ this.handleChange }
                            onWheel={this.handleScroll}
                        />

                        <UncontrolledPopover trigger="focus" placement="bottom" target="CarRental">
                            <PopoverHeader>Car Rental:</PopoverHeader>
                            <PopoverBody><p>Add all expenses needed to rent a car. </p>
                            <p>Includes Car Rental, Gas during trip, Refill tank before returning, Insurance, Etc.</p></PopoverBody>
                        </UncontrolledPopover>
                    </FormGroup>
                    <FormGroup>
                        <Label for="cell_phone">Cell Phone: </Label>
                        <Input 
                            id="CellPhone"
                            type="number" 
                            name="cell_phone" 
                            value={ cell_phone } 
                            onChange={ this.handleChange }
                            onWheel={this.handleScroll}
                        />
                        
                        <UncontrolledPopover trigger="focus" placement="bottom" target="CellPhone">
                            <PopoverHeader>Cell Phone:</PopoverHeader>
                            <PopoverBody><p>Add all expenses needed for switching over a cell phone.</p> 
                            <p>Includes: Disconnecting from pervious phone company if terminating early/out of contract/flex programs, Connection to new cell phone company, Cost of phone, Etc.</p></PopoverBody>
                        </UncontrolledPopover>
                    </FormGroup>
                    <FormGroup>
                        <Label for="moving_truck">Moving Truck: </Label>
                        <Input 
                            id="MovingTruck"
                            type="number" 
                            name="moving_truck" 
                            value={ moving_truck } 
                            onChange={ this.handleChange }
                            onWheel={this.handleScroll}
                        />

                        <UncontrolledPopover trigger="focus" placement="bottom" target="MovingTruck">
                            <PopoverHeader>Moving Truck:</PopoverHeader>
                            <PopoverBody><p>Add all expenses needed for moving truck for total.</p>
                            <p>Includes Size of truck, Insurance, Mileage, Movers help, Gas for trip, Return of truck with full tank, Etc.</p></PopoverBody>
                        </UncontrolledPopover>
                    </FormGroup>
                    <FormGroup>
                    <Label for="mental_health">Mental Health: </Label>
                        <Input 
                            id="MentalHealth"
                            type="number" 
                            name="mental_health" 
                            value={ mental_health } 
                            onChange={ this.handleChange }
                            onWheel={this.handleScroll}
                        />

                        <UncontrolledPopover trigger="focus" placement="bottom" target="MentalHealth">
                            <PopoverHeader>Mental Health:</PopoverHeader>
                            <PopoverBody><p>Add all expenses associated with Mental Health help.</p>
                            <p>Includes Doctor's visits, Medications, Therapist/therapy, Travel to office/pharmacy, Wages lost due to time off work, Etc.</p></PopoverBody>
                        </UncontrolledPopover>
                    </FormGroup>
                    <FormGroup>
                        <Label for="income_loss">Income Loss: </Label>
                        <Input 
                            id="IncomeLoss"
                            type="number" 
                            name="income_loss" 
                            value={ income_loss } 
                            onChange={ this.handleChange }
                            onWheel={this.handleScroll}
                        />

                        <UncontrolledPopover trigger="focus" placement="bottom" target="IncomeLoss">
                            <PopoverHeader>Income Loss:</PopoverHeader>
                            <PopoverBody><p>Add all and any loss of income for total.</p>
                            <p>Include Lost wages from leaving job, Spouse wage, Etc.</p> </PopoverBody>
                        </UncontrolledPopover>
                    </FormGroup>
                    <FormGroup>
                        <Label for="additional_security">Additional Security: </Label>
                        <Input 
                            id="Security"
                            type="number" 
                            name="additional_security" 
                            value={ additional_security } 
                            onChange={ this.handleChange }
                            onWheel={this.handleScroll}
                        />

                        <UncontrolledPopover trigger="focus" placement="bottom" target="Security">
                            <PopoverHeader>Additional Security:</PopoverHeader>
                            <PopoverBody><p>Includes New service of home security system, Monthly payment, Equipment charge, Etc.</p></PopoverBody>
                        </UncontrolledPopover>
                    </FormGroup>
                    <FormGroup>
                        <Label for="relocation_other">Other Relocation Cost(s): </Label>
                        <Input 
                            id="RelocationOther"
                            type="number" 
                            name="relocation_other" 
                            value={ relocation_other } 
                            onChange={ this.handleChange }
                            onWheel={this.handleScroll}
                        />

                        <UncontrolledPopover trigger="focus" placement="bottom" target="RelocationOther">
                            <PopoverHeader>Relocation Other:</PopoverHeader>
                            <PopoverBody>Add any relocation costs that are not within the fields above.</PopoverBody>
                        </UncontrolledPopover>
                    </FormGroup>
                    <FormGroup>
                        <Link to="./results" onClick={this.saveData}><Button id="app-results-button">Get Results</Button></Link>
                    </FormGroup>
                                        
                </Form>
                
                <PaginationNav saveData={this.saveData} current="relocation-budget" prev="/calculator/personal-budget" next="/calculator/relocation-budget"/>
            </div>
        )
    }
}

export default InputRelocationCosts;