import { Navigate } from "react-router-dom";

interface ProtectedProps {
  isSignedIn: string | null;
  children: JSX.Element;
}

const Protected = ({ isSignedIn, children }: ProtectedProps) => {
  if (!isSignedIn) {
    return <Navigate to="/" replace />;
  }
  return children;
};
export default Protected;
