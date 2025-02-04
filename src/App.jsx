import { Route, Routes } from "react-router";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </>
  );
}

export default App;
