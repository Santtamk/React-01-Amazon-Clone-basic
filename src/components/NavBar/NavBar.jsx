import { useCart } from "../../context/CartContext";

const NavBar = () => {
  const { cartItems } = useCart();

  return (
    <div className="">
      <nav className="bg-[#232f3e] text-white flex justify-between px-4 py-3 md:px-6">
        {/* can add the logo here */}
        <span className="text-2xl ">
          amazoniamui.in
          {/* <img src="" alt="amazonLogo" /> */}
        </span>
        <ul className="flex justify-end items-center gap-2 md:gap-4">
          <li>Products</li>
          <li>Sign in</li>
          <li>Cart({cartItems.length})</li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
