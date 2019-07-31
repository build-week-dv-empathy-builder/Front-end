import React from 'react';
import { Button, Input, Form, Label, FormGroup } from 'reactstrap';

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    const { email, password } = this.state
    this.props.login(email, password)
      .then((res) => {
        this.props.history.push('/admin')
      })
      .catch((err) => {
        console.log("error showing admin page", err)
      })
  }

  render() {
    const { email, password } = this.state;

    return(
      <div className="login-container">
        <Form inline onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="email"></Label>
            <Input onChange={this.handleChange} name="email" value={ email } />
          </FormGroup>
          <FormGroup>
            <Label for="password"></Label>
            <Input onChange={this.handleChange} name="password" value={ password } />   
          </FormGroup>
          <Button type="submit">Login</Button>    
        </Form>
        
      </div>
    )
  }
}

export default Login;