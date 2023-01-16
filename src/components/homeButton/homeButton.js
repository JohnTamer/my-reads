import { useNavigate } from "react-router-dom";
import "./homeButton.css";
export const HomeButton = () => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/home");
  };
  return (
    <button className="homebutton" onClick={navigateHandler}>
      Back to home
    </button>
  );
};
