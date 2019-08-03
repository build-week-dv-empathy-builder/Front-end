import React from 'react'
import { Input, Label, Form, FormGroup } from 'reactstrap'

class MiniCalculator extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            value: 0,
            total: 0
        }
    }

    render() {
        const fields = this.props.fields
        return (
            
                        <FormGroup>
                            <Label for="field">Field</Label>
                            <Input type="number" name="field"></Input>
                        </FormGroup>
                    )


    }
}

export default MiniCalculator