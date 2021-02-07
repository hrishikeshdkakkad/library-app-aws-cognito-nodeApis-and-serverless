import React from "react";
import "./App.css";

// import { Auth } from "aws-amplify";

import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./components/Home/HomePage";
import CartPage from "./components/ProtectedComponents/Cart/CartPage";
Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/cart" component={CartPage} />
            </Switch>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
