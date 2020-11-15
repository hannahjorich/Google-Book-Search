import React from "react"; 

function Form({term, handleFormSubmit, handleInputChange}) {
    return (
        <form>
            <label>Book</label>
            <input
            className="form-control"
            id="title"
            type="text"
            value={term}
            placeholder="search a book"
            onChange={handleInputChange}
            ></input>
            <button
            onClick={handleFormSubmit}
            type="submit"
            className="btn btn-primary"
            >search</button>
        </form>
    )
}

export default Form;