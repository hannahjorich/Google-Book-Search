import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card";
import Jumbotron from "../components/Jumbotron/index";
import Nav from "../components/Nav/index";

class Saved extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then((res) => this.setState({ books: res.data }))
      .catch((err) => console.log(err));
  };

  handleDeleteBook = (id) => {
    API.deleteBook(id)
      .then((res) => this.loadBooks())
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <Nav />
        <Jumbotron />
        {this.state.books.items &&
          this.state.books.items.map((book) => (
            <Card>
              <img
                alt={book.volumeInfo.title}
                src={book.volumeInfo.imageLinks.smallThumbnail}
              />
              <h2>{book.volumeInfo.title}</h2>
              <p>{book.volumeInfo.authors}</p>
              <p>{book.volumeInfo.description}</p>
            </Card>
          ))}
      </div>
    );
  }
}

export default Saved;
