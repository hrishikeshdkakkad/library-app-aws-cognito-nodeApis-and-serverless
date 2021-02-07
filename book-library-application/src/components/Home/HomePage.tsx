import React, { Component } from "react";
import BooksTable from "./Books";
import axios from "axios";

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
interface State {
  books: IBook[];
}

class HomePage extends Component<Props, State> {
  state: State = {
    books: [],
  };

  async componentDidMount() {
    const result = await axios.get(
      "http://localhost:3000/api/v1/library-management/books/list"
    );
    const bookData = result.data.books as IBook[];

    this.setState({ books: bookData });
  }

  render() {
    return <BooksTable books={this.state.books} />;
  }
}

export default HomePage;
