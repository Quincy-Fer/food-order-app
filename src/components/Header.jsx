import logo from "../assets/logo.jpg";
import Button from "./Button";
import CartContext from "../store/CartContext";
import { useContext } from "react";

const Header = () => {
  const cartCtx = useContext(CartContext);

  const totalItems = cartCtx.items.reduce((totalNumber, item) => {
    return totalNumber + item.quantity;
  }, 0);
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="a restaurant " />
        <h1>Foodie's Paradise</h1>
      </div>
      <nav>
        <Button textOnly> Cart ({totalItems}) </Button>
      </nav>
    </header>
  );
};

export default Header;
