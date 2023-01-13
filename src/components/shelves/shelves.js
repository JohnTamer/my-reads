import { Shelf } from "../shelf/shelf";

export const Shelves = ({ books, updateShelf }) => {
  const currentyReading = books?.filter(
    (book) => book.shelf === "currentlyReading"
  );
  const wantToRead = books?.filter((book) => book.shelf === "wantToRead");
  const read = books?.filter((book) => book.shelf === "read");
  return (
    <div>
      <Shelf
        shelfName="Currently Reading"
        booksData={currentyReading}
        updateShelf={updateShelf}
      />
      <Shelf
        shelfName="Want to Read"
        booksData={wantToRead}
        updateShelf={updateShelf}
      />
      <Shelf shelfName="Read" booksData={read} updateShelf={updateShelf} />
    </div>
  );
};
