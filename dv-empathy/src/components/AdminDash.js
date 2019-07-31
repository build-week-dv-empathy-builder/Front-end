import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'reactstrap'

class App extends React.Component {
    constructor(){
        super()
    }

    logout = (event) => {
        event.preventDefault()
        localStorage.removeItem('token')
        this.props.history.push('/login')
    }
    render() {
        return (
        <>
            <Button onClick={this.logout}>Logout</Button>
            <h1>ADMIN DASHBOARD</h1>
    
        </>
        );
    }
  }

export default withRouter(App) 