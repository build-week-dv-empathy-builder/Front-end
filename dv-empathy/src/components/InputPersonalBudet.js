import React from 'react'
import { 
    Input, 
    Label, 
    Form, 
    UncontrolledPopover, 
    PopoverHeader, 
    PopoverBody 
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
        const { 
            transportation,
            food,
            health_care,
            car_loans,
            personal_loans,
            personal_other,
            personal_budget_total,
            personal_savings,
            individual_income, 
            
        } = this.state

        localStorage.setItem('transportation', transportation)
        localStorage.setItem('food', food)
        localStorage.setItem('health_care', health_care)
        localStorage.setItem('car_loans', car_loans)
        localStorage.setItem('personal_loans', personal_loans)
        localStorage.setItem('personal_other', personal_other)
        localStorage.setItem('personal_budget_total', personal_budget_total)
        localStorage.setItem('personal_savings', personal_savings)
        localStorage.setItem('individual_income', individual_income)       
    }

    render() {
        const { individual_income, personal_savings, transportation, food, health_care, car_loans, personal_loans, personal_other } = this.state;

        return (
            <div>
                <h1>INPUT PERSONAL BUDGET</h1>
                <br />
                <Form>
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

                    <Label for="personal_other">Other Personal Income: </Label>
                    <Input
                        type="number"
                        name="personal_other" 
                        value={ personal_other } 
                        onChange={ this.handleChange } 
                    />

                    <br />
                    
                </Form>
                <Link to="/calculator/relocation-costs" onClick={this.saveData}>Continue to next section</Link>
            </div>
        )
    }
}

export default InputPersonalBudget