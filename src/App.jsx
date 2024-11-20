import React from "react";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/products">Products</Link>
        <br />
        <Link to="/admin">Add Product</Link>
      </nav>

      <Routes>
        <Route path="/admin" element={<ProductForm />} />
        <Route path="/products" element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
