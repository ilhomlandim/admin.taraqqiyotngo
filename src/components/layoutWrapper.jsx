"use client";
import { useState, useEffect } from "react";
import Loading from "./loading";

export default function LayoutWrapper({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return <>{isLoading ? <Loading /> : children}</>;
}
