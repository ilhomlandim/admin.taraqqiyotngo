"use client";
import Tablee from "@/components/tablee";
import { useGetProjectsQuery } from "@/redux/api/authApi";
import React from "react";

const ProjectPage = () => {
  const { data, error, isLoading } = useGetProjectsQuery();

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="border-4 border-t-4 border-blue-500 border-solid rounded-full w-16 h-16 animate-spin"></div>
        <p className="mt-4 text-xl">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="text-6xl text-red-500">⚠️</div>
        <p className="mt-4 text-lg text-red-600">Error: {error.message}</p>
      </div>
    );
  }

  return (
    <div>
      <Tablee data={data} />
    </div>
  );
};

export default ProjectPage;
