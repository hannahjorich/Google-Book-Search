import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card";
import Form from "../components/Form";

class Books extends Component {
  state = {
    books: [],
    term: "",
    Message: "Search for a book to begin",
  };
  // Loads all books and sets them to books
  loadBooks = () => {
    API.getBooks(this.state.term)
      .then((res) =>
        this.setState(prevstate => ({
          ...prevstate,
          books: res.data,
        }))
      )
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({ term: event.target.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.loadBooks(this.state.term);
  };

  handleBookSave = (id) => {
    const book = this.state.books.find((book) => book.id === id);
  };

  render() {
    return (
      <div>
        <Card>
          <Form
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
            term={this.state.term}
          ></Form>
          {this.state.books.items && console.log(this.state.books.items[0].volumeInfo)}
        </Card>
        {this.state.books.items && this.state.books.items.map((book) => (
          <Card>
            {book.volumeInfo.imageLinks.smallThumbnail}
            <h2>{book.volumeInfo.title}</h2>
            <p>{book.volumeInfo.authors}</p>
            <p>{book.volumeInfo.description}</p>
          </Card>
        ))}
      </div>
    );
  }
}

export default Books;
