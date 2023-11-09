import { Navigate } from "react-router-dom";
import { AuthContext } from "@/contexts/auth";
import { useContext } from "react";

interface ProtectedProps {
  children: JSX.Element;
}

const Protected = ({ children }: ProtectedProps) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/" replace />;
  }
  return children;
};
export default Protected;
