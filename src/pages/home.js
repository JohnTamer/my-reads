import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/header/header";
import { Shelves } from "../components/shelves/shelves";
import * as BooksApi from "../BooksAPI";

export const Home = () => {
  const [books, setBooks] = useState();
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/search");
  };

  useEffect(() => {
    BooksApi.getAll().then((data) => setBooks(data));
  });
  // the book object imageLinks.thumbnail / authors  /  title / shelf ( currentlyReading / wantToRead / read)

  const updateShelf = (book, newShelf) => {
    BooksApi.update(book, newShelf).then((data) => console.log(data));
  };

  return (
    <div>
      <Header />
      <Shelves books={books} updateShelf={updateShelf} />
      <div className="open-search" onClick={navigateHandler}>
        <a>Add a book</a>
      </div>
    </div>
  );
};
