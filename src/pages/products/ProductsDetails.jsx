import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data));
  }, [id]);

  // ⭐ Delete Product
  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure?");

    if (!confirmDelete) return;

    await axios.delete(`https://fakestoreapi.com/products/${id}`);

    alert("Product Deleted");

    navigate("/products");
  };

  if (!product) return null;

  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <h3>{product.title}</h3>

        <img src={product.image} width="200" alt="" />

        <p>{product.description}</p>

        <h4 className="text-success">₹ {product.price}</h4>

        {/* Buttons */}
        <button className="btn btn-danger mt-3" onClick={handleDelete}>
          Delete Product
        </button>
      </div>
    </>
  );
}

export default ProductDetails;
