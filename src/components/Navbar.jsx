import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <h4 className="text-white">Admin Panel</h4>

      <button className="btn btn-danger" onClick={handleLogout}>
        Logout
      </button>
    </nav>
  );
}

export default Navbar;
