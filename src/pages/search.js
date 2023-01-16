import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as BooksApi from "../BooksAPI";
import { Book } from "../components/book/book";
import { SearchBook } from "../components/searchBook/searchBook";
export const Search = ({ books, updateShelf }) => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/");
  };

  const [search, setSearch] = useState("");
  const [searchBooks, setSearchBooks] = useState([]);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (search) {
        BooksApi.search(search, 30).then((data) => {
          if (data.error) {
            console.log(data);
          } else {
            setSearchBooks(data);
          }
        });
      }
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  const newww = () => {
    searchBooks.forEach((searchBook) => {
      let shelf = "none";
      books.forEach((oldBook) => {
        if (oldBook.id === searchBook.id) {
          // console.log(oldBook.id, searchBook.id);
          searchBook.shelf = oldBook.shelf;
        }
        if (oldBook.id !== searchBook.id) {
          searchBook.shelf = shelf;
        }
      });
    });
    // console.log(searchBooks);
  };
  newww();

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
          {/* {searchBooks &&
            searchBooks?.map((aBook) => (
              <li key={aBook.id}>
                <li>
                  <div className="book">
                    <div className="book-top">
                      <div
                        className="book-cover"
                        style={{
                          width: 128,
                          height: 192,
                          backgroundImage: `url(${aBook?.imageLinks?.thumbnail})`,
                        }}
                      ></div>
                      <div className="book-shelf-changer">
                        <select
                          onChange={(e) => updateShelf(aBook, e.target.value)}
                          defaultValue={aBook.shelf}
                        >
                          <option value="None" disabled>
                            Move to...
                          </option>
                          <option value="currentlyReading">
                            Currently Reading
                          </option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                          <option value="none">None</option>
                        </select>
                      </div>
                    </div>
                    <div className="book-title">{aBook?.title}</div>
                    <div className="book-authors">{aBook?.author}</div>
                  </div>
                </li>
              </li>
            ))} */}
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
