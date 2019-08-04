import React from 'react'
import { Input, Label, Form, FormGroup, Button } from 'reactstrap'

class MiniCalculator extends React.Component {
    constructor(props) {
        super(props)

        const fields = this.props.fields // Create state properties for each field in fields prop
        const newState = {}
        fields.forEach(field => {
            newState[field] = ""
        })
        newState.value = 0
        newState.total = 0

        this.state = newState
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const fields = this.props.fields
        const total = this.state.total


        this.addAllValues()
        
        this.props.toggle()
    }

    addAllValues = () => {
        const fields = this.props.fields
        let total = 0
        fields.forEach(field => {
            if(this.state[field]) {
                console.log("test", this.state[field])
                total = total + parseFloat(this.state[field])
                console.log("test total", total)
            }
        })
        this.props.updateField(this.props.forProperty, total)
        this.setState({
            total: total
        })  
    }

    render() {
        const fields = this.props.fields

        return (
            <Form className="mini-calc form" onSubmit={this.handleSubmit}>
                {fields.map((field, index) => {
                    return (
                    <FormGroup>
                        <Input
                            bsSize="sm" 
                            type="number"
                            tabIndex={index + 1}
                            placeholder={field} 
                            name={field} 
                            onChange={this.handleChange} 
                            value={this.state[field]} />
                    </FormGroup>
                    )
                })}
                <Button type="submit" size="sm">Add Up</Button>
        </Form>
        )
        
        

        // return (
            
        //     <FormGroup>
        //         <Label for="field">Field</Label>
        //         <Input type="number" name="field"></Input>
        //     </FormGroup>
        // )


    }
}

export default MiniCalculator