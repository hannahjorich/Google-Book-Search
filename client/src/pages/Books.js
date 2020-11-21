import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card";
import Form from "../components/Form";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav/index";
import BookCard from "../components/BookCard"


class Books extends Component {
  state = {
    books: [],
    term: "",
    message: "Search for a book to begin",
  };
  // Loads all books and sets them to books
  loadBooks = () => {
    API.getBooks(this.state.term)
      .then((res) => {
        console.log(res)
        this.setState({
          books: res.data.items
        })
      })
      .catch((err) => {
        this.setState({
          books: [],
          message: "No Books Found",
         })
      });
      
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
          {/* {this.state.books.items && console.log(this.state.books.items)} */}
        </Card>
        {this.state.books.map(book => (
            <div>
            <BookCard 
              key={book.id}
              img={book.volumeInfo.imageLinks.thumbnail}
              title={book.volumeInfo.title}
              authors={book.volumeInfo.authors}
              description={book.volumeInfo.description}
            />
            <button className="btn btn-primary" onClick={()=> this.handleBookSave(book.id)}>Save</button>
            </div>
        ))}
      </div>
    )
  }
}

export default Books;
