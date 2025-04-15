import { useContext } from "react";
import Modal from "../components/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import Button from "../components/Button";

const Cart = () => {
  const cartCtx = useContext(CartContext);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  <Modal className="cart">
    <h2>Your Cart</h2>
    <ul>
      {cartCtx.items.map((item) => (
        <li key={item.id}>
          {item.name} - {item.quantity}
        </li>
      ))}
    </ul>
    <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
    <p className="modal-actions">
      <Button textOnly>Close</Button>
      <Button>Go To Checkout</Button>
    </p>
  </Modal>;
};

export default Cart;
