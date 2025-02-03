import PropTypes from "prop-types";
import { useContext, createContext, useState, useCallback } from "react";

export const CartContext = createContext();
export const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = useCallback((product) => {
    setCartItems((prevItems) => {
      if (prevItems.some((item) => item.id === product.id)) return prevItems;
      return [...prevItems, product];
    });
  }, []);
  const cart = { cartItems, setCartItems, addToCart };
  return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
};

export default CartProvider;

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
