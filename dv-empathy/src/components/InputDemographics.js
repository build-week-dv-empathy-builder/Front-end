import React from 'react'
import { Input, Label, Form, FormGroup } from 'reactstrap'
import { Link } from 'react-router-dom'

import racedata from '../racedata'
import orientationdata from '../orientationdata'

class InputDemographics extends React.Component {
    constructor() {
        super()
        this.state = {
            // current_location: 81401,
            // timestamp: 20181026,
            // desired_relocation: 87401,
            sex: "",
            relationship_status: "",
            orientation: "",
            age: "",
            race: "",
            safe_status: null,
            employed: null,
            partner_employed: null,
            children: null,
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    // current_location: 81401,
    // timestamp: 20181026,
    // desired_relocation: 87401,
    // sex: "male",
    // relationship_status: "married",
    // orientation: "straight",
    // age: 28,
    // race: "white",
    // safe_status: "yes",
    // employed: "no",
    // partner_employed: "yes",
    // children: "yes",

    render() {
        const { age,
                sex,
                relationship_status,
                orientation,
                race,
                safe_status,
                employed,
                partner_employed,
                children } = this.state

        return (
            <div>
                <h1>INPUT DEMOGRAPHICS</h1>
                <Form>
                    <FormGroup>
                        <Label for="age">Age: </Label>
                        <Input name="age" value={age} onChange={this.handleChange} />
                    <FormGroup>
                        <Label for ="sex" >Gender: </Label>
                        <Input name="sex" value={sex} onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for ="race" >Race: </Label>
                        <Input type="select" name="race" value={race} onChange={this.handleChange}>
                            {racedata.map(data => {
                                return <option>{data}</option>
                            })}
                        </Input>
                    </FormGroup>
                        <Label for="orientation">Orientation: </Label>
                        <Input type="select" name="orientation" value={orientation} onChange={this.handleChange}>
                            {orientationdata.map(data => {
                                return <option>{data}</option>
                            })}
                        </Input>
                        
                    </FormGroup>
                    
                </Form>
            <Link to="/calculator/budget">Continue to next section</Link>
            </div>
        )
    }
}

export default InputDemographics