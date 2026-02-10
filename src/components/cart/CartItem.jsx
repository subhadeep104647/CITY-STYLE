import React, { useContext } from "react";
import CartContext from "../../contexts/CartContext";

export default function CartItem({ item }) {
  const { dispatch } = useContext(CartContext);

  return (
    <div className="cart-item">
      <p>{item.name}</p>
      <p>Qty: {item.quantity}</p>
      <button
        onClick={() =>
          dispatch({ type: "UPDATE_QTY", payload: { id: item.id, quantity: item.quantity + 1 } })
        }
      >
        +
      </button>
      <button
        onClick={() =>
          dispatch({ type: "UPDATE_QTY", payload: { id: item.id, quantity: item.quantity - 1 } })
        }
      >
        -
      </button>
      <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item.id })}>
        Remove
      </button>
    </div>
  );
}
