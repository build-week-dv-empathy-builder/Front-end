import React from 'react'
import { Input, Label, Form } from 'reactstrap'

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

    render() {
        const { rent } = this.state
        return (
            <div>
                <h1>INPUT RELOCATION COSTS</h1>
                <Form>
                    <Label for="rent">Rent: </Label>
                    <Input name="rent" value={rent} onChange={this.handleChange} />
                </Form>
                
            </div>
        )
    }
}

export default InputRelocationCosts