import { Auth } from "aws-amplify";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

import React, { Component } from "react";

interface Props {}
interface State {}
class CartPage extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div>
        <h1>This is the cart page</h1>
        <AmplifySignOut />
      </div>
    );
  }
}

export default withAuthenticator(CartPage);
