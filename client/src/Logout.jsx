import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
const Logout = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const toastIdRef = useRef(null);

  useEffect(() => {
    localStorage.removeItem("token"); // Remove the token
    if (!toastIdRef.current) {
      toastIdRef.current = toast({
        title: "Unauthorized Access",
        description: "Please log in to access this page.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
    navigate("/"); // Redirect to login page
  }, [navigate, toast]);

  return null; // No UI needed for this component
};

export default Logout;
