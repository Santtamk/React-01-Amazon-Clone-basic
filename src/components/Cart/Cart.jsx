import { useCart } from "../../context/CartContext";

const Cart = () => {
  const { cartItems } = useCart();
  console.log("cartItems from cart:", cartItems);
  return (
    <div>
      <div>Cart Items</div>
      {cartItems.map((item) => (
        <div key={item.id}>
          <div>
            <img src={item.image} alt="" className="w-10 h-10" />
          </div>
          <div>+</div>
          <div>1</div>
          <div>-</div>
          <div>{item.price}</div>
        </div>
      ))}
      {cartItems.length}
      <div>Total: $$$</div>
    </div>
  );
};

export default Cart;
