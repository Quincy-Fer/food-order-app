import logo from "../assets/logo.jpg";
import Button from "./Button";

const Header = () => {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="a restaurant " />
        <h1>Foodie's Paradise</h1>
      </div>
      <nav>
        <Button textOnly > Cart (0) </Button>
      </nav>
    </header>
  );
};

export default Header;
