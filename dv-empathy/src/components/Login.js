import React from 'react';
import { Button, Input, Form } from 'reactstrap';

class Login extends React.Component {
  constructor(props) {
    super()
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
      }

  render() {
    const { email, password } = this.state;

    return(
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Input onChange={this.handleChange} name="email" value={ email } />
          <Input onChange={this.handleChange} name="password" value={ password } />
          <Button type="submit">Login</Button>
        </Form>
        
      </div>
    )
  }
}

export default Login;