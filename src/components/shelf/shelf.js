import { Book } from "../book/book";

export const Shelf = ({ shelfName, booksData, updateShelf }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {booksData?.map((book) => (
            <li key={book.id}>
              {" "}
              <Book book={book} updateShelf={updateShelf} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};
