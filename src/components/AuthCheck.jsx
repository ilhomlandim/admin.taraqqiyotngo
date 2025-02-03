"use client";
import { useEffect, useState } from "react";
import Main from "@/components/Main";

export default function AuthCheck({ children }) {
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem("access_token");
    setToken(storedToken);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return null;
  }

  return token ? <Main>{children}</Main> : children;
}
