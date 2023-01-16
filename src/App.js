import "./App.css";
import { useState, useEffect } from "react";
import { Home } from "./pages/home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Search } from "./pages/search";
import * as BooksAPI from "./BooksAPI";
import { Error } from "./pages/error";

function App() {
  const [books, setBooks] = useState();
  useEffect(() => {
    const timer = setTimeout(() =>
      BooksAPI.getAll().then((data) => {
        setBooks(data);
      }, 2000)
    );
    return () => {
      clearTimeout(timer);
    };
  }, [books]);
  const updateShelf = (book, newShelf) => {
    BooksAPI.update(book, newShelf).then((data) => data);
  };
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route
            path="/home"
            element={<Home books={books} updateShelf={updateShelf} />}
          />
          <Route
            path="/search"
            element={<Search books={books} updateShelf={updateShelf} />}
          />
          <Route path="*" element={<Error />} />
          <Route path="/" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
