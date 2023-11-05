import { useContext } from "react";
import { AuthContext } from "../context/features/auth";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (!user.username) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
