import React from 'react'
import { Input, Label, Form } from 'reactstrap'
import { Link } from 'react-router-dom'

class InputDemographics extends React.Component {
    constructor() {
        super()
        this.state = {
            age: '',
            sex: '',
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        const { age, sex } = this.state
        return (
            <div>
                <h1>INPUT DEMOGRAPHICS</h1>
                <Form>
                    <FormGroup>
                        <Label for="age">Age: </Label>
                        <Input name="age" value={age} onChange={this.handleChange} />
                        <Label for ="sex" >Gender: </Label>
                        <Input name="sex" value={sex} onChange={this.handleChange} />
                    </FormGroup>
                    
                </Form>
            <Link to="/calculator/budget">Continue to next section</Link>
            </div>
        )
    }
}

export default InputDemographics