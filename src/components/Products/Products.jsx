import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  const [allProducts, setAllProducts] = useState([]);

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
  console.log(allProducts);

  return (
    <div className="flex flex-wrap gap-4 items-center justify-center">
      {allProducts.map((item) => (
        <ProductCard item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Products;
