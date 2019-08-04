import React from 'react'
import { 
    Input, 
    Label, 
    Form,
    FormGroup,
    UncontrolledPopover, 
    PopoverHeader, 
    PopoverBody,
    Popover
} from 'reactstrap'
import PaginationNav from './PaginationNav'
import MiniCalculator from './MiniCalculator'
import closeButton from '../Images/close-button.png'
import calculatorButton from '../Images/calculator.png'

class InputPersonalBudget extends React.Component {
    constructor() {
        super()
        this.state = {
            individual_income: sessionStorage.getItem('individual_income'),
            personal_savings: sessionStorage.getItem('personal_savings'),
            transportation: sessionStorage.getItem('transportation'),
            food: sessionStorage.getItem('food'),
            health_care: sessionStorage.getItem('health_care'),
            car_loans: sessionStorage.getItem('car_loans'),
            personal_loans: sessionStorage.getItem('personal_loans'),
            personal_other: sessionStorage.getItem('personal_other'),
            popoverOpen: false,
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
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

    togglePopOver = () => {
        this.setState({
            popoverOpen: !this.state.popoverOpen
        })
    }

    handleWheel = (event) => {
        console.log("prevented")
        event.preventDefault()
    }

    updateField = (property, value) => {
        console.log("update property name", property)
        console.log("update value", value)
        this.setState({
            [property]: value
        })
    }

    preventTabbingIfOpen = (event) => {
        const popoverOpen = this.state.popoverOpen
        if(event.keyCode === 9) {
          if(popoverOpen === true) {
            event.preventDefault()
          }  
        }
    }

    render() {
        const { individual_income, personal_savings, transportation, food, health_care, car_loans, personal_loans, personal_other } = this.state;

        const transportationFields = ['Gas', 'Uber/Lyft/Taxi', 'Bus fares', 'Train/Subway fares', 'Other']

        return (
            // <div className="personal-budget container" onWheel={this.handleWheel}>
            <div className="personal-budget container">
                <h2>Tell us about yourself</h2>
                <article>
                    <p>Please provide some basic information about your personal finances. This information will be anonymous and will not be sold or distributed to 3rd parties. Freefrom.org will use your information to better provide resources and assistance to those in need.</p>
                </article>
                <Form className="personal-budget form">
                    <FormGroup>
                        <Label for="individual_income">Individual Income: </Label>
                        <Input 
                            id="IndividualIncome"
                            type="number" 
                            name="individual_income" 
                            value={ individual_income } 
                            onChange={ this.handleChange }
                            onWheel={this.handleScroll}
                        />
                        <UncontrolledPopover trigger="focus" placement="bottom" target="IndividualIncome">
                            <PopoverHeader>Individual Income:</PopoverHeader>
                            <PopoverBody><p>Add up any form of Income at a job, Side-job, Personal Projects that bring in extra income, Etc.</p></PopoverBody>
                        </UncontrolledPopover>                        
                    </FormGroup>
                    <FormGroup>
                        <Label for="personal_savings">Personal Savings: </Label>
                        <Input 
                            type="number"
                            name="personal_savings" 
                            value={ personal_savings } 
                            onChange={ this.handleChange }
                            onWheel={this.handleScroll}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="transportation">Transportation: </Label>
                        <Input 
                            // id="Transportation"
                            type="number"
                            name="transportation" 
                            value={ transportation } 
                            onChange={ this.handleChange }
                            onKeyDown={this.preventTabbingIfOpen}
                            // onWheel={this.handleScroll} 
                        /><img src={calculatorButton} id="transportation-calc-button" className="calculator-button" />
                        <Popover  
                            isOpen={this.state.popoverOpen} 
                            target="transportation-calc-button" 
                            toggle={this.togglePopOver}
                        >
                            <PopoverHeader><div className="popover-header-container">Transportation <img onClick={this.togglePopOver} id="close-button" src={closeButton}/></div></PopoverHeader>
                            <PopoverBody>
                                <p>Add up any and all expenses needed for transportation.</p>
                                <p>Includes: Bus or train pass, Any other form of public transportation, Etc.</p>
                                <MiniCalculator
                                    forProperty="transportation" 
                                    toggle={this.togglePopOver}
                                    fields={transportationFields}
                                    updateField={this.updateField}
                                />
                            </PopoverBody>

                        </Popover>
                        
                        {/* <UncontrolledPopover trigger="focus" placement="bottom" target="Transportation">
                            <PopoverHeader>Transportation:</PopoverHeader>
                            <PopoverBody>
                                <p>Any and all expenses needed for transportation.</p>
                                <p>Includes: Bus or train pass, Any other form of public transportation, Etc.</p>                         
                            </PopoverBody>
                        </UncontrolledPopover> */}
                    </FormGroup>
                    <FormGroup>
                        <Label for="food">Food: </Label>
                        <Input 
                            id="Food"
                            type="number"
                            name="food" 
                            value={ food } 
                            onChange={ this.handleChange }
                            onWheel={this.handleScroll}
                        />
                        <UncontrolledPopover trigger="focus" placement="bottom" target="Food">
                        <PopoverHeader>Food:</PopoverHeader>
                        <PopoverBody><p>Includes: Groceries, Dining out, Fast food, Etc.</p></PopoverBody>
                        </UncontrolledPopover>
                    </FormGroup>
                    <FormGroup>
                        <Label for="health_care">Health Care: </Label>
                        <Input 
                            type="number"
                            name="health_care" 
                            value={ health_care } 
                            onChange={ this.handleChange }
                            onWheel={this.handleScroll}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="car_loans">Car Loan(s): </Label>
                        <Input 
                            type="number"
                            name="car_loans" 
                            value={ car_loans } 
                            onChange={ this.handleChange }
                            onWheel={this.handleScroll}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="personal_loans">Personal Loan(s): </Label>
                        <Input 
                            type="number"
                            name="personal_loans" 
                            value={ personal_loans } 
                            onChange={ this.handleChange }
                            onWheel={this.handleScroll} 
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="personal_other">Other Personal Expenses: </Label>
                        <Input
                            type="number"
                            name="personal_other" 
                            value={ personal_other } 
                            onChange={ this.handleChange }
                            onWheel={this.handleScroll}
                        />
                    </FormGroup>  
                </Form>
                <PaginationNav 
                    saveData={this.saveData} 
                    current="personal-budget" 
                    prev="/calculator/demographics" 
                    next="/calculator/relocation-costs"
                />
            </div>
        )
    }
}

export default InputPersonalBudget