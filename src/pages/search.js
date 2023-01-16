import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as BooksApi from "../BooksAPI";
import PropTypes from "prop-types";
import { SearchBook } from "../components/searchBook/searchBook";
export const Search = ({ books, updateShelf }) => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/home");
  };

  const [search, setSearch] = useState("");
  const [searchBooks, setSearchBooks] = useState([]);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (search) {
        BooksApi.search(search, 30).then((data) => {
          if (data.error) {
          } else {
            setSearchBooks(data);
          }
        });
      } else {
        setSearchBooks([]);
      }
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  const searchBooksHandler = () => {
    searchBooks.forEach((searchBook) => {
      searchBook.shelf = "none";
      books.forEach((oldBook) => {
        if (oldBook.id === searchBook.id) {
          searchBook.shelf = oldBook.shelf;
        }
      });
    });
    // console.log(searchBooks);
  };

  searchBooksHandler();

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <a className="close-search" onClick={navigateHandler}>
          Close
        </a>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchBooks?.map((aBook) => (
            <li key={aBook.id}>
              {" "}
              <SearchBook searchBook={aBook} updateShelf={updateShelf} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};
Search.propTypes = {
  books: PropTypes.array,
  updateShelf: PropTypes.func,
};
