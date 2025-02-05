import PropTypes from "prop-types";
import { useContext, createContext, useState } from "react";

export const CartContext = createContext();
export const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // const addToCart = useCallback((product) => {
  //   setCartItems((prevItems) => {
  //     if (prevItems.some((item) => item.id === product.id)) return prevItems;
  //     return [...prevItems, product];
  //   });
  // }, []);

  const addToCart = (item) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find((existingCartItems) => existingCartItems.id === item.id);
      if (existingItem) {
        //toast can be added here for'item already exists in cart'
        console.log(prevCart);
        return prevCart;
      } else {
        const updateCart = [...prevCart, { ...item, quantity: 1 }];
        //toast can be added here for'added to cart'
        console.log(prevCart);
        return updateCart;
      }
    });
  };

  const cart = { cartItems, setCartItems, addToCart };
  return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
};

export default CartProvider;

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
