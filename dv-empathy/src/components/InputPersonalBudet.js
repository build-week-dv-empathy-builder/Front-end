import React from 'react'
import { 
    Input, 
    Label, 
    Form, 
    UncontrolledPopover, 
    PopoverHeader, 
    PopoverBody,
    Button,
} from 'reactstrap'
import { Link } from 'react-router-dom'

class InputPersonalBudget extends React.Component {
    constructor() {
        super()
        this.state = {
            individual_income: localStorage.getItem('individual_income'),
            personal_savings: localStorage.getItem('personal_savings'),
            transportation: localStorage.getItem('transportation'),
            food: localStorage.getItem('food'),
            health_care: localStorage.getItem('health_care'),
            car_loans: localStorage.getItem('car_loans'),
            personal_loans: localStorage.getItem('personal_loans'),
            personal_other: localStorage.getItem('personal_other'),
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
        // If the current property is its own property, store it in localStorage
        const data = {...this.state}
        for(let property in data) {
            if(data.hasOwnProperty(property)) {
                localStorage.setItem(`${property}`, `${data[property]}`) // this is sweet
            }
        }
    }

    render() {
        const { individual_income, personal_savings, transportation, food, health_care, car_loans, personal_loans, personal_other } = this.state;

        return (
            <div className="personal-budget container">
                <h1>INPUT PERSONAL BUDGET</h1>
                <br />
                <Form className="personal-budget-form">
                    <Label for="individual_income">Individual Income: </Label>
                    <Input 
                        id="IndividualIncome"
                        type="number" 
                        name="individual_income" 
                        value={ individual_income } 
                        onChange={ this.handleChange } 
                    />

                    <UncontrolledPopover trigger="focus" placement="bottom" target="IndividualIncome">
                    <PopoverHeader>Individual Income:</PopoverHeader>
                    <PopoverBody>Any form of Income at a job, Side-job, Personal Projects that bring in extra income, Etc.</PopoverBody>
                    </UncontrolledPopover>

                    <br />

                    <Label for="personal_savings">Personal Savings: </Label>
                    <Input 
                        type="number"
                        name="personal_savings" 
                        value={ personal_savings } 
                        onChange={ this.handleChange } 
                    />

                    <br />

                    <Label for="transportation">Transportation: </Label>
                    <Input 
                        id="Transportation"
                        type="number"
                        name="transportation" 
                        value={ transportation } 
                        onChange={ this.handleChange } 
                    />

                    <UncontrolledPopover trigger="focus" placement="bottom" target="Transportation">
                    <PopoverHeader>Transportation:</PopoverHeader>
                    <PopoverBody>Any and all expenses needed for transportation.
                    <br />
                    Includes: Bus or train pass, Any other form of public transportation, Etc.</PopoverBody>
                    </UncontrolledPopover>

                    <br />

                    <Label for="food">Food: </Label>
                    <Input 
                        id="Food"
                        type="number"
                        name="food" 
                        value={ food } 
                        onChange={ this.handleChange } 
                    />

                    <UncontrolledPopover trigger="focus" placement="bottom" target="Food">
                    <PopoverHeader>Food:</PopoverHeader>
                    <PopoverBody>Includes: Groceries, Dining out, Fast food, Etc.</PopoverBody>
                    </UncontrolledPopover>

                    <br />

                    <Label for="health_care">Health Care: </Label>
                    <Input 
                        type="number"
                        name="health_care" 
                        value={ health_care } 
                        onChange={ this.handleChange } 
                    />

                    <br />

                    <Label for="car_loans">Car Loan(s): </Label>
                    <Input 
                        type="number"
                        name="car_loans" 
                        value={ car_loans } 
                        onChange={ this.handleChange } 
                    />

                    <br />

                    <Label for="personal_loans">Personal Loan(s): </Label>
                    <Input 
                        type="number"
                        name="personal_loans" 
                        value={ personal_loans } 
                        onChange={ this.handleChange } 
                    />

                    <br />

                    <Label for="personal_other">Other Personal Expenses: </Label>
                    <Input
                        type="number"
                        name="personal_other" 
                        value={ personal_other } 
                        onChange={ this.handleChange } 
                    />

                    <br />
                    
                </Form>
                <Link to="/calculator/relocation-costs" onClick={this.saveData}><Button id="app-nav-button">Next Section</Button></Link>
            </div>
        )
    }
}

export default InputPersonalBudget