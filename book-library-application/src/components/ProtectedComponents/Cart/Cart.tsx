import React, { Component } from "react";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

interface Props {}
interface State {}

class cart extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div>
        <h1>This is the cart component</h1>
        <AmplifySignOut />
      </div>
    );
  }
}

export default withAuthenticator(cart);
