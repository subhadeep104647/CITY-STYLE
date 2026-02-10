import React, { useContext } from "react";
import CartContext from "../../contexts/CartContext";

export default function CartDrawer({ isOpen, onClose }) {
  const { state, dispatch } = useContext(CartContext);

  if (!isOpen) return null;

  return (
    <div className="cart-drawer open">
      <button onClick={onClose}>Close</button>
      <h2>Your Cart</h2>

      {state.items.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        state.items.map(item => (
          <div key={item.id}>
            <p>{item.name}</p>
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_FROM_CART", payload: item.id })
              }
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}
