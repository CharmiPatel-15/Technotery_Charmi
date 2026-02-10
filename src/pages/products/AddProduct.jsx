import { useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    price: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("https://fakestoreapi.com/products", form);
    navigate("/products");
  };

  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <form onSubmit={handleSubmit} className="card p-4">
          <input
            className="form-control mb-2"
            placeholder="Title"
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />

          <input
            className="form-control mb-2"
            placeholder="Price"
            onChange={(e) => setForm({ ...form, price: e.target.value })}
          />

          <button className="btn btn-success">Add Product</button>
        </form>
      </div>
    </>
  );
}

export default AddProduct;
