import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card";
import Form from "../components/Form";
import Jumbotron from "../components/Jumbotron/index";
import Nav from "../components/Nav/index";

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
    const book = this.state.books.items.find((book) => book.id === id);
    console.log(book)
  };


  render() {
    return (
      <div>
        <Nav />
        <Jumbotron />
        <Card>
          <Form
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
            term={this.state.term}
          ></Form>
          {this.state.books.items && console.log(this.state.books.items)}
        </Card>
        {this.state.books.items && this.state.books.items.map((book) => (
          <Card key={book.volumeInfo.title}
       
          
          >
          <img alt={book.volumeInfo.title} src={book.volumeInfo.imageLinks.smallThumbnail} />
            <h2>{book.volumeInfo.title}</h2>
            <p>{book.volumeInfo.authors}</p>
            <p>{book.volumeInfo.description}</p>
        <button onClick={this.handleBookSave(book.volumeInfo.id)}>Save Book</button>
          </Card>
        ))}
      </div>
    )
  }
}

export default Books;
