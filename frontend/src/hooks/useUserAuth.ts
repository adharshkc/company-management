import { useEffect } from "react";
import { useSessionStore } from "../zustand/SessionStore";
import { useNavigate } from "react-router-dom";

export const useUserAuth = function () {
  const checkSession = useSessionStore((state) => state.checkSession);
  const isAuthenticated = useSessionStore((state) => state.isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    const validateSession = async () => {
      await checkSession();
      // if (isAuthenticated===false) {
      //   console.log("djsfk")
      //   navigate("/login");
      // }
    };
    validateSession();
  }, [isAuthenticated, checkSession, navigate]);
};
