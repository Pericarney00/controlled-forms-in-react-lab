import { useState } from "react"

const Bookshelf = () => {
  const [books, setBooks] = useState([
    { title: "Fourth Wing", author: "Rebecca Yarros" },
    {title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis"}
  ])

  return (
    
    <div className="bookshelfDiv">
      <div>
        <h3> Add a Book</h3>
        {/*form will go here*/}
      </div>
      <div className="bookCardsDiv">{/* Book cards will display here */}</div>
    </div>;
  )
  
}

export default Bookshelf