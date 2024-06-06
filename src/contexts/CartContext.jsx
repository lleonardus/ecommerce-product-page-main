import { useReducer } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const initialState = {
  items: [],
  quantity: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "cart/addItem":
      return {
        ...state,
        items: [...state.items, action.payload],
        quantity: 0,
      };
    case "cart/removeItem":
      return {
        ...state,
        items: state.items.filter((item) => item.index !== action.payload),
      };
    case "cart/incrementQuantity":
      return { ...state, quantity: state.quantity + 1 };
    case "cart/decrementQuantity":
      return {
        ...state,
        quantity: state.quantity > 0 ? state.quantity - 1 : 0,
      };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [{ items, quantity }, dispatch] = useReducer(reducer, initialState);

  function addItem(newItem) {
    dispatch({ type: "cart/addItem", payload: newItem });
  }

  function removeItem(index) {
    dispatch({ type: "cart/removeItem", payload: index });
  }

  function incrementQuantity() {
    dispatch({ type: "cart/incrementQuantity" });
  }

  function decrementQuantity() {
    dispatch({ type: "cart/decrementQuantity" });
  }

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        quantity,
        incrementQuantity,
        decrementQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
