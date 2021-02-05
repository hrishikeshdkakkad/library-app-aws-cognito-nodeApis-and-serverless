import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { Auth } from "aws-amplify";

import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);

const getUserCreds = async () => {
  try {
    const a = await Auth.signOut();
    console.log(a);
  } catch (error) {
    console.log(error);
  }
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button
          onClick={() => {
            getUserCreds();
          }}
        >
          This is the Button
        </button>
        <AmplifySignOut />
        Learn React
      </header>
    </div>
  );
}

export default withAuthenticator(App);
