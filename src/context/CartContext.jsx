import PropTypes from "prop-types";
import { useContext, createContext, useState } from "react";

export const CartContext = createContext();
export const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find(
        (existingCartItems) => existingCartItems.id === item.id
      );
      if (existingItem) {
        //toast can be added here for'item already exists in cart'
        console.log("item already exists in cart", prevCart);
        return prevCart;
      } else {
        const updateCart = [...prevCart, { ...item, quantity: 1 }];
        //toast can be added here for'added to cart'
        console.log(updateCart);
        return updateCart;
      }
    });
  };

  // increase item count in cart count
  const increment = (item) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.map((existingCartItems) =>
        existingCartItems.id === item.id
          ? { ...existingCartItems, quantity: existingCartItems.quantity + 1 }
          : existingCartItems
      );
      return existingItem;
    });
  };

  const decrement = (item) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart
        .map((existingCartItems) =>
          existingCartItems.id === item.id && existingCartItems.quantity > 0
            ? { ...existingCartItems, quantity: existingCartItems.quantity - 1 }
            : existingCartItems
        )
        .filter(
          (existingCartItems) => existingCartItems.quantity > 0
          //can add a toast here for 'removed item'
        );
      return existingItem;
    });
  };

  const cart = { cartItems, setCartItems, addToCart, increment, decrement };
  return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
};

export default CartProvider;

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
