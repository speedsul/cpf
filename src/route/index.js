import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Cadastro from '../pages/form/cadastro'
import HomePage from '../pages/home'

export default function Rota() {
  return (
    <Router>  
        <Switch>
          <Route path="/cadastro">
            <Cadastro />
          </Route> 
          <Route path="/">
            <HomePage />
          </Route>        
        </Switch>     
    </Router>
  );
}
