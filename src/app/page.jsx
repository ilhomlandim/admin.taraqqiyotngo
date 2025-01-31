"use client";
import { ModeToggle } from "@/components/dark-mode";
import ProtectedRoute from "@/components/ProdectedRoute";
import Tablee from "@/components/tablee";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

export default function DashboardPage() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/auth");
  };

  return (
    <ProtectedRoute>
      
       <ModeToggle/>
      <div className="flex flex-col justify-center items-center h-screen">
       
        <h1 className="text-3xl font-bold">Dashboardga hush kelibsiz 🎉</h1>
        <Button
          onClick={handleLogout}
          className="mt-5 bg-red-600 hover:bg-red-700"
        >
          Logout
        </Button>
      </div>
      <Tablee/>
    </ProtectedRoute>
  );
}
