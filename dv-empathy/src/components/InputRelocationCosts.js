import React from 'react'
import { Input, Label, Form, Button } from 'reactstrap'
import axios from 'axios'

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

    handleSubmit = (event) => {
        // event.preventDefault()
        // axios.post('')
        //     .then()
        //     .catch()
    }

    render() {
        const { rent } = this.state
        return (
            <div>
                <h1>INPUT RELOCATION COSTS</h1>
                <Form onSubmit={this.handleSubmit}>
                    <Label for="rent">Rent: </Label>
                    <Input name="rent" value={rent} onChange={this.handleChange} />
                    <Button type="submit">Submit</Button>
                </Form>
                
            </div>
        )
    }
}

export default InputRelocationCosts