import { createContext, useReducer, useEffect } from "react";

const CartContext = createContext();

const initialState = {
  items: JSON.parse(localStorage.getItem("cartItems")) || [],
};

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const exists = state.items.find(
        item => item.id === action.payload.id
      );
      if (exists) return state;

      return {
        ...state,
        items: [...state.items, action.payload],
      };
    }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };

    case "CLEAR_CART":
      return { ...state, items: [] };

    default:
      return state;
  }
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(state.items));
  }, [state.items]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
