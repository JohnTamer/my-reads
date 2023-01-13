import { useNavigate } from "react-router-dom";

export const Search = () => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/");
  };
  return (
    <div className="search-books">
      <div className="search-books-bar" onClick={navigateHandler}>
        <a className="close-search">Close</a>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title, author, or ISBN" />
        </div>
      </div>
      ;
    </div>
  );
};
