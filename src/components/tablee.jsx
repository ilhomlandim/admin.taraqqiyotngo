"use client";
import React, { useState } from "react";
import { Pencil, Trash2, Image, X } from "lucide-react";
import { Toaster, toast } from "sonner";
import { useDispatch } from "react-redux";
import { authApi } from "@/redux/api/authApi";

const Tablee = ({ data, onDelete, onEditt }) => {
  const [selectedContent, setSelectedContent] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const dispatch = useDispatch();

  const handleEdit = (item) => {
    if (true) {
      onEditt(item);
    } else {
      toast.info("Tahrirlash imkoniyati hozirda ishga tushirilmagan");
    }
  };

  const handleDeleteClick = (item) => {
    setItemToDelete(item);
    setDeleteModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (itemToDelete?.title) {
      try {
        setDeleteModalOpen(false);
        await onDelete(itemToDelete.id);
        const title = itemToDelete?.title?.uz || "";
        toast.success(`${title} o'chirildi`);
        window.location.reload();
      } catch (error) {
        setDeleteModalOpen(false);
        toast.error("Qayta urinib ko'ring, xatolik yuz berdi");
      }
    }
  };

  const handleDeleteCancel = () => {
    setDeleteModalOpen(false);
  };

  return (
    <div className="p-4 min-h-screen">
      <Toaster position="top-right" />
      <div className="rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="p-3 text-left text-sm font-semibold">Sana</th>
                <th className="p-3 text-left text-sm font-semibold">
                  Sarlavha
                </th>
                <th className="p-3 text-left text-sm font-semibold">Rasmlar</th>
                <th className="w-20 p-3 text-center text-sm font-semibold">
                  Harakatlar
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id} className="border-b transition-colors">
                  <td className="p-3 text-sm">{item.date ?? "malumot yo'q"}</td>
                  <td className="p-3 max-w-md">
                    {item.title &&
                    (item.title.uz || item.title.ru || item.title.en) ? (
                      <button
                        onClick={() => setSelectedContent(item)}
                        className="text-left hover:text-blue-300 w-full"
                      >
                        <div className="font-medium truncate">
                          {item.title.uz || item.title.ru || item.title.en}
                        </div>
                      </button>
                    ) : (
                      <span className="text-gray-400 italic">
                        Ma'lumot yo‘q
                      </span>
                    )}
                  </td>
                  <td className="p-3">
                    <div className="flex gap-2">
                      {item.images && item.images.length > 0 ? (
                        item.images.map((img, idx) => (
                          <button
                            key={idx}
                            className="relative group"
                            onClick={() => setSelectedImage(img)}
                          >
                            <img
                              src={img}
                              alt={`img ${idx + 1}`}
                              className="w-12 h-12 object-cover rounded-md shadow-sm"
                            />
                            <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-40 transition-all rounded-md flex items-center justify-center">
                              <Image
                                className="opacity-0 group-hover:opacity-100"
                                size={16}
                              />
                            </div>
                          </button>
                        ))
                      ) : (
                        <p>Rasmlar mavjud emas</p>
                      )}
                    </div>
                  </td>
                  <td className="p-3">
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => handleEdit(item)}
                        className="p-1.5 hover:bg-blue-200 rounded-md hover:text-blue-600 transition-colors"
                      >
                        <Pencil size={16} />
                      </button>
                      <button
                        onClick={() => handleDeleteClick(item)}
                        className="p-1.5 hover:bg-red-200 rounded-md hover:text-red-600 transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Yangilik tafsilotlari modali */}
      {selectedContent && (
        <div className="fixed inset-0 text-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-50 rounded-lg max-w-2xl w-full m-4 max-h-[90vh] overflow-y-auto shadow-lg">
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="text-xl font-bold">Yangilik Tafsilotlari</h3>
              <button
                onClick={() => setSelectedContent(null)}
                className="p-1.5 hover:bg-red-400 rounded-md hover:text-gray-700 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-4 space-y-4">
              {["uz", "en", "ru"].map((lang) => (
                <div key={lang}>
                  <h4 className="font-semibold mb-1 text-sm">
                    {lang === "uz"
                      ? "uz O'zbek"
                      : lang === "en"
                      ? "en English"
                      : "ru Русский"}
                  </h4>
                  <div className="space-y-1">
                    <div className="font-medium text-sm break-words">
                      {selectedContent?.title?.[lang] ?? "Sarlavha mavjud emas"}
                    </div>
                    <div className="text-sm text-gray-600">
                      {selectedContent?.body?.[lang] ?? "Matn mavjud emas"}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {/* Rasm ko'rish modali */}
      {selectedImage && (
        <div className="fixed inset-0 bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative max-w-3xl w-full mx-4">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 p-1.5 rounded-full hover:bg-gray-100 hover:text-gray-700 transition-colors"
            >
              <X size={20} />
            </button>
            <img
              src={selectedImage}
              alt="Preview"
              className="w-full h-auto rounded-md shadow-lg"
            />
          </div>
        </div>
      )}
      {/* O'chirish modali */}
      {deleteModalOpen && (
        <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50 text-black">
          <div className="bg-gray-50 rounded-lg p-4 max-w-sm w-full shadow-lg">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-bold">O'chirish</h3>
              <button
                onClick={handleDeleteCancel}
                className="p-1.5 hover:bg-gray-100 rounded-md hover:text-gray-700 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <p className="mb-4 text-sm">Haqiqatan ham o'chirmoqchimisiz?</p>
            <div className="flex justify-end gap-3">
              <button
                onClick={handleDeleteCancel}
                className="px-4 py-1.5 text-sm hover:bg-gray-100 rounded-md transition-colors"
              >
                Yo'q
              </button>
              <button
                onClick={handleDeleteConfirm}
                className="px-4 py-1.5 bg-red-600 text-white text-sm hover:bg-red-700 rounded-md transition-colors"
              >
                Ha
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tablee;
