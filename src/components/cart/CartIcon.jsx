import React, { useContext } from "react";
import CartContext from "../../contexts/CartContext";

export default function CartIcon({ onClick }) {
  const { state } = useContext(CartContext);
  const count = state.cartItems.length;

  return (
    <div className="cart-icon" onClick={onClick}>
      🛍️ <span className="badge">{count}</span>
    </div>
  );
}
