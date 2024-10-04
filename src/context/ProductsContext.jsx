import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/config";

const ProductsContext = createContext();

function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await api.get("/products");
        setProducts(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProduct();
  }, []);
  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
}

const useProducts = () => {
  const products = useContext(ProductsContext);
  return products;
};

const useProductDetails = (id) => {
  const products = useContext(ProductsContext);
  const res = products.find((product) => product.id === id);
  return res
};

export default ProductsProvider;
export { useProducts, useProductDetails };
