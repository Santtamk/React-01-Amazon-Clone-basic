import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useCart } from "../../context/CartContext";

const Products = () => {
  const [allProducts, setAllProducts] = useState([]);
  const { cartItems, addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      const url = "https://fakestoreapi.com/";
      try {
        const res = await fetch(`${url}products`);
        const json = await res.json();
        setAllProducts(json);
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchProducts();
  }, []);

  //function for addIngToCart goes as prop to ProductCard and uses useCallBack
  const addingToCart = (id) => {
    const findProduct = allProducts.find((item) => item.id === id);
    if (findProduct) {
      addToCart(findProduct);
    }
  };

  return (
    <div className="flex flex-wrap gap-4 items-center justify-center">
      {allProducts.map((item) => (
        <ProductCard item={item} key={item.id} addingToCart={addingToCart} />
      ))}
    </div>
  );
};

export default Products;
