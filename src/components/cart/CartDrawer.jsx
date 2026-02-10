import React, { useContext } from "react";
import CartContext from "../../contexts/CartContext";
import CartItem from "./CartItem";

export default function CartDrawer({ isOpen, onClose }) {
  const { state } = useContext(CartContext);

  const total = state.cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className={`cart-drawer ${isOpen ? "open" : ""}`}>
      <button onClick={onClose}>Close</button>
      <h2>Your Cart</h2>
      {state.cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        state.cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))
      )}
      <h3>Total: ₹ {total}</h3>
    </div>
  );
}
