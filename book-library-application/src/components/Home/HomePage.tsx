import React, { Component } from "react";
import BooksTable from "./Books";

interface Props {}
interface State {}

class HomePage extends Component<Props, State> {
  state = {};

  render() {
    return <BooksTable />;
  }
}

export default HomePage;
