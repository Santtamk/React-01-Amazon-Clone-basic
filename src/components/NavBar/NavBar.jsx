import { Link } from "react-router";
import { useCart } from "../../context/CartContext";

const NavBar = () => {
  const { cartItems } = useCart();

  return (
    <div className="">
      <nav className="bg-[#232f3e] text-white flex justify-between px-4 py-3 md:px-6">
        {/* can add the logo here */}
        <span className="text-2xl">
          <Link to="/">amazoniamui.in</Link>

          {/* <img src="" alt="amazonLogo" /> */}
        </span>
        <ul className="flex justify-end items-center gap-2 md:gap-4">
          <li>
            <Link to="/">Products</Link>
          </li>
          <li>Sign in</li>
          <li>
            <Link to="/cart">Cart({cartItems.length})</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
