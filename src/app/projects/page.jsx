"use client";
import Modal from "@/components/Modal";
import ProtectedRoute from "@/components/ProdectedRoute";
import Tablee from "@/components/tablee";
import { Button } from "@/components/ui/button";
import {
  useDeleteProjectsMutation,
  useGetProjectsQuery,
} from "@/redux/api/authApi";
import React, { useState } from "react";

const ProjectPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const { data, error, isLoading } = useGetProjectsQuery();
  const [deleteProjets, { error: deleteError, isLoading: isDeleting }] =
    useDeleteProjectsMutation();

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

  function BlogProject(data) {
    console.log("Project edit: ", data);
  }
  return (
    <div>
      <ProtectedRoute>
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-bold">Project Boshqaruvi</h2>
          <Button
            className="px-6 py-4 rounded-lg shadow-md transition hover:bg-green-500"
            onClick={() => setOpenModal(true)}
          >
            Qo‘shish
          </Button>
        </div>
        <Modal isOpen={openModal} onClose={() => setOpenModal(false)} />
        <Tablee
          data={data.data}
          onDelete={deleteProjets}
          onEdit={BlogProject}
        />
      </ProtectedRoute>
    </div>
  );
};

export default ProjectPage;
