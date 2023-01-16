export const SearchBook = ({ books, searchBook, updateShelf }) => {
  return (
    <div>
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 192,
                backgroundImage: `url(${searchBook?.imageLinks?.thumbnail})`,
              }}
            ></div>
            <div className="book-shelf-changer">
              <select
                onChange={(e) => updateShelf(searchBook, e.target.value)}
                defaultValue={searchBook?.shelf}
                // defaultValue={book.shelf ? book.shelf : "none"}
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
          <div className="book-title">{searchBook?.title}</div>
          <div className="book-authors">{searchBook?.authors}</div>
        </div>
      </li>
    </div>
  );
};
