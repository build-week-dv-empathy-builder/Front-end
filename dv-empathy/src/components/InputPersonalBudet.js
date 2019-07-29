import React from 'react'
import { Input, Label, Form } from 'reactstrap'
import { Link } from 'react-router-dom'

class InputPersonalBudget extends React.Component {
    constructor() {
        super()
        this.state = {
            individual_income: '',
            personal_savings: '',
            transportation: '',
            food: '',
            health_care: '',
            car_loans: '',
            personal_loans: '',
            personal_other: '',  
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        const { individual_income, personal_savings, transportation, food, health_care, car_loans, personal_loans, personal_other } = this.state;

        return (
            <div>
                <h1>INPUT PERSONAL BUDGET</h1>
                <br />
                <Form>
                    <Label for="individual_income">Individual Income: </Label>
                    <Input name="individual_income" value={ individual_income } onChange={ this.handleChange } />

                    <br />

                    <Label for="personal_savings">Personal Savings: </Label>
                    <Input name="personal_savings" value={ personal_savings } onChange={ this.handleChange } />

                    <br />

                    <Label for="transportation">Transportation: </Label>
                    <Input name="transportation" value={ transportation } onChange={ this.handleChange } />

                    <br />

                    <Label for="food">Food: </Label>
                    <Input name="food" value={ food } onChange={ this.handleChange } />

                    <br />

                    <Label for="health_care">Health Care: </Label>
                    <Input name="health_care" value={ health_care } onChange={ this.handleChange } />

                    <br />

                    <Label for="car_loans">Car Loan(s): </Label>
                    <Input name="car_loans" value={ car_loans } onChange={ this.handleChange } />

                    <br />

                    <Label for="personal_loans">Personal Loan(s): </Label>
                    <Input name="personal_loans" value={ personal_loans } onChange={ this.handleChange } />

                    <br />

                    <Label for="personal_other">Other Personal Income: </Label>
                    <Input name="personal_other" value={ personal_other } onChange={ this.handleChange } />

                    <br />
                    
                </Form>
                <Link to="/calculator/relocation-costs">Continue to next section</Link>
            </div>
        )
    }
}

export default InputPersonalBudget