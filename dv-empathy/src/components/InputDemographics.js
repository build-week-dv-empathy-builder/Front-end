import React from 'react'
import { Input, Label, Form, FormGroup } from 'reactstrap'
import { Link } from 'react-router-dom'

import racedata from '../racedata'
import orientationdata from '../genderdata'
import sexdata from '../sexdata'

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
            age: 0,
            race: "",
            safe_status: 'safe',
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
                        <Input type="number" name="age" value={age} onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for ="sex" >Sex: </Label>
                        <Input type="select" name="sex" value={sex} onChange={this.handleChange}>
                            {sexdata.map(data => {
                                return <option>{data}</option>
                            })}
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="orientation">Orientation: </Label>
                        <Input type="select" name="orientation" value={orientation} onChange={this.handleChange}>
                            {orientationdata.map(data => {
                                return <option>{data}</option>
                            })}
                        </Input>                        
                    </FormGroup>
                    <FormGroup>
                        <Label for ="race" >Race: </Label>
                        <Input type="select" name="race" value={race} onChange={this.handleChange}>
                            {racedata.map(data => {
                                return <option>{data}</option>
                            })}
                        </Input>
                    </FormGroup>
                    
                    <FormGroup>
                        <Label for="relationship_status">Relationship Status: </Label>
                        <Input type="select" name="relationship_status" value={relationship_status} onChange={this.handleChange} >
                            <option>Married</option>
                            <option>Complicated</option>
                            <option>Single</option>
                            <option>Divorced</option>
                            <option>Seperated</option>
                            <option>In a relationship</option>
                            <option>In an open relationship</option>
                            <option>In a civil union</option>
                            <option>In a domestic partnership</option>
                        </Input>                        
                    </FormGroup>
                    <FormGroup>
                        <Label for="safe_status">Safe Status: </Label>
                        <Input type="select" name="safe_status" value={safe_status} onChange={this.handleChange} >
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>                            
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="employed">Employed?</Label>
                        <Input type="select" name="employed" value={employed} onChange={this.handleChange}>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="partner_employed">Partner Employed?</Label>
                        <Input type="select" name="partner_employed" value={partner_employed} onChange={this.handleChange}>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="children">How many children do you have?</Label>
                        <Input type="number" name="children" value={children} onChange={this.handleChange} />
                    </FormGroup>
                </Form>
            <Link to="/calculator/budget">Continue to next section</Link>
            </div>
        )
    }
}

export default InputDemographics