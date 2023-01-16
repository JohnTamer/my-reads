import { Header } from "../components/header/header";
import { HomeButton } from "../components/homeButton/homeButton";

export const Error = () => {
  return (
    <div>
      <Header />
      <div style={{ width: "100vw", textAlign: "center", marginTop: "5rem" }}>
        OH YOU ARE LOST, click on this button to go back to home page :)
      </div>
      <HomeButton />
    </div>
  );
};
