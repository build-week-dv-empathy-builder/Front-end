import React from 'react';
import { Route, Link } from 'react-router-dom';

import Login from './components/Login';
import Home from './components/Home'
import AdminDash from './components/AdminDash';
import PrivateRoute from './components/PrivateRoute'
import Calculator from './components/Calculator'
import InputPersonalBudget from './components/InputPersonalBudet';
import InputRelocationCosts from './components/InputRelocationCosts';

import './App.css';

function App() {

  return (
    <div className="App">
      <nav>
        <h1>Domestic Violence Empathy Builder</h1>
        <div className="nav-links">
          <p><Link exact to="/">Home</Link></p>
          <p><Link exact to="/login">Login</Link></p>
        </div>
      </nav>
      <Route exact path="/calculator/relocation-costs" render={() => <InputRelocationCosts />} />
      <Route exact path="/calculator/budget" render={() => <InputPersonalBudget />} />
      <Route path="/login" render={() => <Login />} />
      <Route exact path="/calculator" render={() => <Calculator />} />
      <Route exact path="/" render={() => <Home />} />
      
      <PrivateRoute exact path="/admin" component={AdminDash} />
      {/* <Route path="/" render={() => 
        <CalculatorPage data={ data }
        /> }/> */}

    </div>
  );
}

export default App;
