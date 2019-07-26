import React from 'react';
import { Button, Input } from 'reactstrap';

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      password: ''
    }
  }

  handleChange = event => {
    event.preventDefault();

    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    const { email, password } = this.state;

    return(
      <div>
        <Input onChange={this.handleChange} name="email" value={ email } />
        <Input onChange={this.handleChange} name="password" value={ password } />
        <Button>Login</Button>
      </div>
    )
  }
}

export default Login;