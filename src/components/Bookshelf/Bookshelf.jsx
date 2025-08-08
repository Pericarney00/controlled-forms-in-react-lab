import { useState } from "react"


const Bookshelf = () => {
  const [books, setBooks] = useState([
    { title: "Fourth Wing", author: "Rebecca Yarros" },
    { title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis" }
  ]);
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
  });
  const handleInputChange = (event) => {
    setNewBook({ ...newBook, [event.target.name]: event.target.value })
    
  };
  const handleSubmit = (event) => {
    event.preventDefault()
    setBooks([ ...books, newBook ])
    setNewBook({ title: "", author: "", })
  }

  return (
    
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3> Add a Book</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                name="title"
                id="title"
                value={newBook.title}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="author">Author:</label>
              <input
                type="text"
                name="author"
                id="author"
                value={newBook.author}
                onChange={handleInputChange}
              />
          </div>
          <button type="submit">Submit New Book</button>
          </form>
        </div>
      <div className="bookCardsDiv">
        {books.map((books, index) => {
          const {title, author} = books
          return (
              <div key={index} className="bookCard">
                <h3>{title}</h3>
                <p>by {author}</p>
              </div>
          )
        }
        )}
      </div>
    </div>
  );
  
};

export default Bookshelf