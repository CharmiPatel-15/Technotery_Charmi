import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";
import { useParams, useNavigate } from "react-router-dom";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({ title: "", price: "" });

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setForm(res.data));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`https://fakestoreapi.com/products/${id}`, form);
    navigate("/products");
  };

  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <form onSubmit={handleSubmit} className="card p-4">
          <input
            className="form-control mb-2"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />

          <input
            className="form-control mb-2"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
          />

          <button className="btn btn-warning">Update Product</button>
        </form>
      </div>
    </>
  );
}

export default EditProduct;
