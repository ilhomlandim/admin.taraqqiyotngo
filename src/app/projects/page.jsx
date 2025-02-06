"use client";
import Modal from "@/components/Modal";
import ProtectedRoute from "@/components/ProdectedRoute";
import Tablee from "@/components/tablee";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";
import {
  useDeleteProjectsMutation,
  useGetProjectsQuery,
} from "@/redux/api/authApi";
import React, { useState, useEffect } from "react";
import { toast } from "sonner";

const ProjectPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [localData, setLocalData] = useState([]);
  const { data, error, isLoading } = useGetProjectsQuery();
  const [deleteProjects] = useDeleteProjectsMutation();

  useEffect(() => {
    if (data?.data) {
      setLocalData(data.data);
    }
  }, [data]);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Toaster position="top-right" />
        <div className="border-4 border-t-4 border-blue-500 border-solid rounded-full w-16 h-16 animate-spin"></div>
        <p className="mt-4 text-xl">Loading...</p>
      </div>
    );
  }

  if (!localData || localData.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Toaster position="top-right" />
        <div className="text-6xl opacity-50">📭</div>
        <p className="mt-4 text-xl text-gray-600">Hech qanday ma'lumot yo'q</p>
        <Button
          className="mt-6 px-6 py-4 rounded-lg shadow-md transition"
          onClick={() => setOpenModal(true)}
        >
          Ma'lumot qo'shish
        </Button>
        <Modal isOpen={openModal} onClose={() => setOpenModal(false)} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Toaster position="top-right" />
        <div className="text-6xl text-red-500">⚠️</div>
        <p className="mt-4 text-lg text-red-600">Error: {error.message}</p>
      </div>
    );
  }

  function ProjectEdit(data) {
    console.log("Project edit: ", data);
  }

  const handleDeleteConfirm = async (itemToDelete, setDeleteModalOpen) => {
    if (itemToDelete?.title) {
      const title = itemToDelete?.title?.uz || "";
      try {
        await deleteProjects(itemToDelete.id);

        toast.success(`${title} muvaffaqiyatli o'chirildi`);
        setLocalData((prev) =>
          prev.filter((item) => item.id !== itemToDelete.id)
        );

        setDeleteModalOpen(false);
      } catch (error) {
        toast.error("Qayta urinib ko'ring, xatolik yuz berdi");
        setDeleteModalOpen(false);
      }
    }
  };

  return (
    <div>
      <ProtectedRoute>
        <Toaster position="top-right" />
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-bold">Project Boshqaruvi</h2>
          <Button
            className="px-6 py-4 rounded-lg shadow-md transition hover:bg-green-500"
            onClick={() => setOpenModal(true)}
          >
            Qo'shish
          </Button>
        </div>
        <Modal isOpen={openModal} onClose={() => setOpenModal(false)} />
        <Tablee
          data={localData}
          onEdit={ProjectEdit}
          handleDeleteConfirm={handleDeleteConfirm}
        />
      </ProtectedRoute>
    </div>
  );
};

export default ProjectPage;
