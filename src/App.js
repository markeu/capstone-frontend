import React from 'react';
// import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import {  BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import store from './store/index';
// import PrivateRoute from './';
import Signin from './containers/login/login';
import NavBar from './components/navBar/navBar';
import  dashboard  from './containers/dashboard';
import './App.css';

const theme = createMuiTheme({
    palette: {
      primary: {
       light: '#98ee99',
       main: '#66bb6a',
       dark: '#338a3e',
       contrastText: '#000'
      },
      secondary: {
        light: '#f05545',
        main: '#b71c1c',
        dark: '#7f0000',
        contrastText: '#fff'
      },
    }, 
})

const App = () => {
  return (
   <MuiThemeProvider theme={theme}>
     <div className="App">
      <Router>
       <NavBar />
       <div className="container">
       <Switch>
          <Route exact path="/" component={dashboard} />
          <Route exact path="/signin" component={Signin} />
          {/* <Route exact path="/signup" component={Signup} /> */}
       </Switch>
      </div>
    </Router>
     </div>
   </MuiThemeProvider>
  );
}

export default App;
