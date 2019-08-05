import React from 'react';
import axios from 'axios'
// import dataProperties from 'dataProperties'
import { Route, Link } from 'react-router-dom';

import Login from './components/Login';
import Home from './components/Home'
import AdminDash from './components/AdminDash';
import PrivateRoute from './components/PrivateRoute'
import Calculator from './components/Calculator'
import InputPersonalBudget from './components/InputPersonalBudet';
import InputRelocationCosts from './components/InputRelocationCosts';
import InputDemographics from './components/InputDemographics';

import './App.css';

class App extends React.Component {

  login = (email, password) => {
    const payload = {
      "email": email,
      "password": password
    }

    return axios.post('https://empathy-builder-2.herokuapp.com/api/auth/login', payload)
      .then((res) => {
        localStorage.setItem('token', res.data.user.token)
      })
      .catch((err) => {
        console.log(`Error occurred when logging`, err)
      })
  }

  render() {
    return (
      <div className="App">
        <nav className="nav">
          <h1>DV Relocation Calculator</h1>
          <div className="nav-links">
            <Link exact to="/">Home</Link>
            <Link exact to="/login">Login</Link>
          </div>
        </nav>
        <Route path="/calculator/relocation-costs" render={() => <InputRelocationCosts />} />
        <Route path="/calculator/personal-budget" render={() => <InputPersonalBudget />} />
        <Route path="/calculator/demographics" render={() => <InputDemographics />} />
        <Route path="/calculator/results" render={() => <Calculator />} />
        <Route exact path="/" render={() => <Home className="home" />} />

        <PrivateRoute exact path="/admin" component={AdminDash} />
        <Route path="/login" render={(props) => <Login className="login" {...props} login={this.login}/>} />
  
      </div>
    );
  }
}
export default App;
