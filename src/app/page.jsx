import React from "react";

export default function page() {
  return <div>page</div>;

"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import ProtectedRoute from "@/components/ProdectedRoute";

export default function DashboardPage() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token"); 
    router.push("/auth"); 
  };

  return (
    <ProtectedRoute>
      <div className="flex flex-col justify-center items-center h-screen bg-gray-900 text-white">
        <h1 className="text-3xl font-bold">Welcome to Dashboard 🎉</h1>
        <Button onClick={handleLogout} className="mt-5 bg-red-600 hover:bg-red-700">
          Logout
        </Button>
      </div>
    </ProtectedRoute>
  );
}
