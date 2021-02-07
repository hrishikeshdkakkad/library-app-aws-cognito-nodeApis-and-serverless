import React, { Component } from "react";
import BooksTable from "./Books";
import axios from "axios";
import { Auth } from "aws-amplify";

interface Props {}

interface IBook {
  author: string;
  genre: string;
  ratings: number;
  title: string;
  price: number;
  image: string;
  _id: string;
}

interface ICart {
  cart_item: number;
}
interface State extends ICart {
  books: IBook[];
}

class HomePage extends Component<Props, State> {
  state: State = {
    books: [],
    cart_item: 0,
  };

  async componentDidMount() {
    const sessionDetails = await Auth.currentSession();
    const token = sessionDetails.getAccessToken().getJwtToken();

    const baseUrl = "http://localhost:3000/api/v1";

    try {
      const result = await axios.get(
        `${baseUrl}/library-management/books/list`
      );
      const bookData = result.data.books as IBook[];
      this.setState({ books: bookData });
    } catch (error) {
      console.log(error);
    }

    try {
      let config = {
        headers: {
          token: token,
        },
      };
      const cartItemIfAuth = await axios.get(
        `${baseUrl}/application-users/users/cart`,
        config
      );
      this.setState({ cart_item: cartItemIfAuth.data.count });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <BooksTable books={this.state.books} cart_items={this.state.cart_item} />
    );
  }
}

export default HomePage;
