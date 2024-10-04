import axios from "axios";
import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ProductsPage from "./Pages/ProductsPage";
import DetailPage from "./Pages/DetailPage";
import CheckOutPage from "./Pages/CheckOutPage";
import NotFoundPage from "./Pages/404";
// import ProductsProvider from "./context/ProductsContext";
// import CartProvider from "./context/CartContext";
import Layout from "./Layout/Layout";

function App() {
  return (
    //<CartProvider>
      //<ProductsProvider>
        <Layout>
          <Routes>
            <Route index element={<Navigate to="/products" replace />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="products/:id" element={<DetailPage />} />
            <Route path="checkout" element={<CheckOutPage />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      //</ProductsProvider>
    //</CartProvider>
  );
}

export default App;
