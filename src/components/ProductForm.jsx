import React, { useState } from "react";
import axios from "axios";
import "./ProductForm.css";
const ProductForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.image) {
      alert("Please upload an image.");
      return;
    }

    const data = new FormData();
    data.append("name", formData.name);
    data.append("price", formData.price);
    data.append("description", formData.description);
    data.append("category", formData.category);
    data.append("image", formData.image);

    try {
      const res = await axios.post(
        "https://ecommerce-admin-backend-9aha.onrender.com/products",
        data,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      alert("Product added successfully!");
      setFormData({
        name: "",
        price: "",
        description: "",
        category: "",
        image: null,
      });
    } catch (error) {
      alert("Error uploading product: " + error.message);
    }
  };

  return (
    <div className="form-container">
      <h2>Add a New Product</h2>
      <form onSubmit={handleSubmit} className="product-form">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="form-input"
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
          className="form-input"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="form-input"
        ></textarea>
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          required
          className="form-input"
        />
        <input
          type="file"
          name="image"
          onChange={handleImageChange}
          required
          className="form-input"
        />
        <button type="submit" className="submit-btn">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
