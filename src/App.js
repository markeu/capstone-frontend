import React from 'react';
// import { Provider } from 'react-redux';
import {  BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import store from './store/index';
// import PrivateRoute from './';
// import Dashboard from './containers/dashboard/dashboard';
import Signin from './containers/login/login';
//components
import NavBar from './components/navBar/navBar';
import './App.css';

const App = () => {
  return (
    <Router>
       <NavBar />
      <div className="container">
       <Switch>
          {/* <PrivateRoute path="/dashboard" component={Dashboard} /> */}
          {/* <Route exact path="/" component={Signin} /> */}
       </Switch>
      </div>
    </Router>

  );
}

export default App;
