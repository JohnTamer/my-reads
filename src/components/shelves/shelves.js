import { Shelf } from "../shelf/shelf";

export const Shelves = ({ books }) => {
  const currentyReading = books.filter(
    (book) => book.shelf === "currently reading"
  );
  const wantToRead = books.filter((book) => book.shelf === "want to read");
  const read = books.filter((book) => book.shelf === "read");
  return (
    <div>
      <Shelf shelfName="Currently Reading" booksData={currentyReading} />
      <Shelf shelfName="Want to Read" booksData={wantToRead} />
      <Shelf shelfName="Read" booksData={read} />
    </div>
  );
};
