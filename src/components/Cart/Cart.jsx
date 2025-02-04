import { useState } from "react";
import { useCart } from "../../context/CartContext";

const Cart = () => {
  const [count, setCount] = useState({});
  const { cartItems } = useCart();
  //   console.log("cartItems from cart:", cartItems);

  const increment = (id) => {
    setCount((prevCount) => ({
      ...prevCount,
      [id]: (prevCount[id] || 1) + 1,
    }));
  };

  const decrement = (id) => {
    setCount((prevCount) => ({
      ...prevCount,
      [id]: Math.max((prevCount[id] || 1) - 1, 1),
    }));
  };

  return (
    <div>
      <h1>Cart Items</h1>
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex gap-5 p-5 w-full justify-center border-amber-600 "
        >
          <div className="w-40 h-40 flex text-ellipsis overflow-hidden whitespace-nowrap justify-center items-center flex-col">
            <img src={item.image} alt="" className="w-30 h-30" />
            <p className="">{item.title}</p>
          </div>
          <div className="flex gap-5 items-center">
            <button className="pointer" onClick={() => decrement(item.id)}>
              -
            </button>
            <div>{count[item.id] || 1}</div>
            <button className="pointer" onClick={() => increment(item.id)}>
              +
            </button>
          </div>
          <div className="flex items-center">${item.price}</div>
        </div>
      ))}
      {cartItems.length}
      <div>Total: $$$</div>
    </div>
  );
};

export default Cart;
