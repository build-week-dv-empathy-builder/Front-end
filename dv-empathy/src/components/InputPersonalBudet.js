import React from 'react'
import { Input, Label, Form } from 'reactstrap'
import { Link } from 'react-router-dom'

class InputPersonalBudget extends React.Component {
    constructor() {
        super()
        this.state = {
            individual_income: '',
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        const { individual_income } = this.state
        return (
            <div>
                <Form>
                    <Label for="individual_income">Individual Income: </Label>
                    <Input name="individual_income" value={individual_income} onChange={this.handleChange} />
                </Form>
                <Link to="/calculator/relocation-costs">Continue to next section</Link>
            </div>
        )
    }
}

export default InputPersonalBudget