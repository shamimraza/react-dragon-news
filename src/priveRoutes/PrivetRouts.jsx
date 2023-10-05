import { useContext } from "react";
import { AuthContext } from "../pages/shaire/provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRouts = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation;
  console.log(location.pathname);
  if (loading) {
    return <span className="loading loading-spinner text-primary"></span>;
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivetRouts;
