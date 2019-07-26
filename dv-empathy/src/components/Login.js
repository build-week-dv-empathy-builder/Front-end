import React from 'react';
import { Button, Input } from 'reactstrap';

class Login extends React.Component {
  constructor() {
    super()
  }

  render() {
    return(
      <div>
        <Input name="email"/>
        <Input password="password"/>
        <Button>Login</Button>
      </div>
    )
  }
}

export default Login;