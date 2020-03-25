import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import store from './store/index';
// import PrivateRoute from './';
import Dashboard from './containers/dashboard/dashboard'
import Signin from './containers/login/login';
import './App.css';

function App() {
  return (
   <Provider store={store}>
     <Router>
       <Switch>
          {/* <PrivateRoute path="/dashboard" component={Dashboard} /> */}
       </Switch>
       <Route exact path="/" component={Signin} />
     </Router>
   </Provider>
  );
}

export default App;
