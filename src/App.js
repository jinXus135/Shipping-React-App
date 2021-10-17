import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SigninPage from './pages/signin';
import Home from './pages';
function App() {
  return (
    
       <Router>
         <Switch>
         <Route path = "/" component = {Home} exact />
         <Route path = "/jinXus135/Shipping-React-App" component = {Home} exact />
         <Route path = "/signin" component = {SigninPage} exact />
         <Route path = "/jinXus135/signin" component = {SigninPage} exact />
          </Switch>
         </Router>
       
    
  );
}

export default App;
