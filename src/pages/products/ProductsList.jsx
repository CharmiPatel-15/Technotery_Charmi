import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";

function ProductsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data));
  }, []);

  // ⭐ DELETE FUNCTION
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?",
    );

    if (!confirmDelete) return;

    await axios.delete(`https://fakestoreapi.com/products/${id}`);

    // Remove product from UI
    setProducts(products.filter((p) => p.id !== id));

    alert("Product Deleted");
  };

  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <Link to="/products/add" className="btn btn-success mb-3">
          Add Product
        </Link>

        <div className="row">
          {products.map((p) => (
            <div className="col-md-4" key={p.id}>
              <div className="card p-3 mb-3 shadow-sm">
                <img
                  src={p.image}
                  alt={p.title}
                  height="150"
                  style={{ objectFit: "contain" }}
                />

                <h6 className="mt-2">{p.title}</h6>

                <h5 className="text-success">₹ {p.price}</h5>

                <div className="d-flex gap-2">
                  <Link
                    to={`/products/${p.id}`}
                    className="btn btn-primary btn-sm"
                  >
                    View
                  </Link>

                  <Link
                    to={`/products/edit/${p.id}`}
                    className="btn btn-warning btn-sm"
                  >
                    Edit
                  </Link>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(p.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductsList;
