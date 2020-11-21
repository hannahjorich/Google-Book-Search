import React, { Component } from "react";
import axios from "axios";
import API from "../utils/API";
import Nav from "../components/Nav";

class Saved extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    this.bookApi()
}
bookApi(){
    axios.get("/api/books")
        .then((response) => {
           return this.setState({ books: response.data })});
}

handleButtonClick = (id) => {
    API.deleteBook(id)
        .then(this.bookApi())
}

  render() {
    return (
          <div>
            <Nav />
            <BookCard 
              id={book.id}
              key={book.id}
              img={book.volumeInfo.imageLinks.smallThumbnail}
              title={book.volumeInfo.title}
              authors={book.volumeInfo.authors}
              description={book.volumeInfo.description}
              link={book.volumeInfo.infoLink}
            />
            <button onClick={()=> this.handleButtonClick(book.id)}>Delete</button>
          </div>
      )
    }
  }
export default Saved;
