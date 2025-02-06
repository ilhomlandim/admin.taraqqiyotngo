"use client";
import ProtectedRoute from "@/components/ProdectedRoute";
import Tablee from "@/components/tablee";
import { Button } from "@/components/ui/button";
import { useDeleteBlogsMutation, useGetBlogsQuery } from "@/redux/api/authApi";
import React, { useState, useEffect } from "react";
import { toast, Toaster } from "sonner";

const BlogPage = () => {
  const [localData, setLocalData] = useState([]);
  const { data, error, isLoading } = useGetBlogsQuery();
  const [deleteBlogs] = useDeleteBlogsMutation();

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
          onClick={() => AddBlog()}
        >
          Ma'lumot qo'shish
        </Button>
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

  function AddBlog() {
    console.log("ishlayapdi");
  }

  function BlogEdit(data) {
    console.log("blog edit: ", data);
  }

  const handleDeleteConfirm = async (itemToDelete, setDeleteModalOpen) => {
    if (itemToDelete?.title) {
      const title = itemToDelete?.title?.uz || "";

      try {
        await deleteBlogs(itemToDelete.id);

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
          <h2 className="text-xl font-bold">Blog Boshqaruvi</h2>
          <Button
            className="px-6 py-4 rounded-lg shadow-md transition"
            onClick={() => AddBlog()}
          >
            Qo'shish
          </Button>
        </div>
        <Tablee
          data={localData}
          onDelete={deleteBlogs}
          onEdit={BlogEdit}
          handleDeleteConfirm={handleDeleteConfirm}
        />
      </ProtectedRoute>
    </div>
  );
};

export default BlogPage;
