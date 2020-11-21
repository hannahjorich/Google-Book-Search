import React from "react";




function BookCard({ img, id, title, authors, description, link }) {
    return (
        <div className="card-book" id={id}>
            <div className="card-title">{title}</div>
            <div className="card-body">{authors}</div>
            <div className="card-image">{img}</div>
            <div className="card-text">{description}</div>
            <div className="card-title">{title}</div>
        </div>
    )
}

export default BookCard;