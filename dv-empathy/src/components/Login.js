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
        console.log("ERROR: Unable to load admin dashboard", err)
      })
  }

  render() {
    const { email, password } = this.state;

    return(
      <div className="login container">
        <h2>Admin Dashboard Login</h2>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input onChange={this.handleChange} name="email" value={ email } />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input type="password" onChange={this.handleChange} name="password" value={ password } />   
          </FormGroup>
          <Button type="submit">Login</Button>    
        </Form>
        
      </div>
    )
  }
}

export default Login;