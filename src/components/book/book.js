import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
export const Book = ({ book, updateShelf }) => {
  return (
    <div>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 192,
              backgroundImage: `url(${book?.imageLinks?.thumbnail})`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select
              onChange={(e) => updateShelf(book, e.target.value)}
              defaultValue={book?.shelf}
            >
              <option value="None" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book?.title}</div>
        <div className="book-authors">{book?.authors}</div>
      </div>
    </div>
  );
};
Book.propTypes = {
  books: PropTypes.array,
  updateShelf: PropTypes.func,
};
