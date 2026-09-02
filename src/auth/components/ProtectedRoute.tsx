import { Navigate } from "react-router-dom";
import { ReactNode } from "react";
import { useAuth } from "./../AuthContext";

type Props = {
  children: ReactNode;
};

export default function ProtectedRoute({ children }: Props) {
  const { authenticated } = useAuth();

  if (!authenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}