import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card";
import Form from "../components/Form";

class Books extends Component {
  state = {
    books: [],
    term: "",
  };
  // Loads all books and sets them to books
  loadBooks = () => {
    API.getBooks(this.state.term)
      .then((res) =>
        this.setState({
          books: res.data,
        })
      )
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({ term: event.target.value });
  };

  handleFormSubmit = (event) => {
      event.preventDefault();
      this.loadBooks(this.state.term)
  }

  render() {
      return (
      <Card><Form
        handleInputChange={this.handleInputChange}
        handleFormSubmit={this.handleFormSubmit}
        term={this.state.term}
      ></Form></Card>
      )
  }
}

export default Books;
