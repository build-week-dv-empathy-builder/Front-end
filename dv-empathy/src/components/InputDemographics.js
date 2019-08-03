import React from 'react'
import { Input, Label, Form, FormGroup, Button, Pagination, PaginationItem,  } from 'reactstrap'
import { Link } from 'react-router-dom'

import racedata from '../racedata'
import orientationdata from '../genderdata'
import sexdata from '../sexdata'
import PaginationNav from './PaginationNav';

class InputDemographics extends React.Component {
    constructor() {
        super()
        this.state = {
            current_location: sessionStorage.getItem('current_location'),
            desired_relocation: sessionStorage.getItem('desired_relocation'),
            sex: sessionStorage.getItem('sex'),
            relationship_status: sessionStorage.getItem('relationship_status'),
            orientation: sessionStorage.getItem('orientation'),
            age: sessionStorage.getItem('age'),
            race: sessionStorage.getItem('race'),
            safe_status: sessionStorage.getItem('safe_status'),
            employed: sessionStorage.getItem('employed'),
            partner_employed: sessionStorage.getItem('partner_employed'),
            children: sessionStorage.getItem('children'),
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    saveData = () => {        
        // Loop through each property in the clone of state (data)
        // Check if the property is this specficic class or a prototype property
        // If the current property is its own property, store it in localStorage
        const data = {...this.state}
        for(let property in data) {
            if(data.hasOwnProperty(property)) {
                sessionStorage.setItem(`${property}`, `${data[property]}`) // this is sweet
            }
        }
    }

    render() {
        const { 
            age,
            sex,
            relationship_status,
            orientation,
            race,
            safe_status,
            employed,
            partner_employed,
            current_location,
            desired_relocation,
            children, } = this.state

        return (
            <div className="demographics container">
                <h2>Tell us about yourself</h2>
                <article>
                    <p>Please provide some basic information about yourself. This information will be anonymous and will not be sold or distributed to 3rd parties. Freefrom.org will use your information to better provide resources and assistance to those in need.</p>
                </article>
                <Form className="demographics-form">
                    <FormGroup>
                        <Label for="age">Age: </Label>
                        <Input type="number" name="age" value={age} onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for ="sex" >Sex: </Label>
                        <Input type="select" name="sex" value={sex} onChange={this.handleChange}>
                            <option></option>
                            {sexdata.map(data => {
                                return <option>{data}</option>
                            })}
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="current_location">Current Location (Zip/Postal Code)</Label>
                        <Input type="number" name ="current_location" value={current_location} onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="desired_relocation">Desired Location (Zip/Postal Code)</Label>
                        <Input type="number" name ="desired_relocation" value={desired_relocation} onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="orientation">Orientation: </Label>
                        <Input type="select" name="orientation" value={orientation} onChange={this.handleChange}>
                            <option></option>
                            {orientationdata.map(data => {
                                return <option>{data}</option>
                            })}
                        </Input>                        
                    </FormGroup>
                    <FormGroup>
                        <Label for ="race" >Race: </Label>
                        <Input type="select" name="race" value={race} onChange={this.handleChange}>
                            <option></option>
                            {racedata.map(data => {
                                return <option>{data}</option>
                            })}
                        </Input>
                    </FormGroup>
                    
                    <FormGroup>
                        <Label for="relationship_status">Relationship Status: </Label>
                        <Input type="select" name="relationship_status" value={relationship_status} onChange={this.handleChange} >
                            <option></option>
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
                            <option></option>
                            <option>Yes</option>
                            <option>No</option>                            
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="employed">Employed?</Label>
                        <Input type="select" name="employed" value={employed} onChange={this.handleChange}>
                            <option></option>
                            <option>Yes</option>
                            <option>No</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="partner_employed">Partner Employed?</Label>
                        <Input type="select" name="partner_employed" value={partner_employed} onChange={this.handleChange}>
                            <option></option>
                            <option>Yes</option>
                            <option>No</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="children">Do you have children?</Label>
                        <Input type="select" name="children" value={children} onChange={this.handleChange} >
                            <option></option>
                            <option>Yes</option>
                            <option>No</option>                            
                        </Input>
                    </FormGroup>
                </Form>
                <PaginationNav saveData={this.saveData} current="demographics" prev="/" next="/calculator/personal-budget"/> 
            </div>
        )
    }
}
export default InputDemographics