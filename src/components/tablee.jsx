"use client";
import React, { useState } from "react";
import {
  Pencil,
  Trash2,
  Image,
  X,
  Calendar,
  Globe,
  MessageSquare,
  ChevronDown,
  FileText,
  AlertCircle,
} from "lucide-react";
import { Toaster, toast } from "sonner";
import EditModal from "./EditModal";

const Tablee = ({ data, onDelete, onEdit, handleDeleteConfirm }) => {
  const [selectedContent, setSelectedContent] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [content, setContent] = useState({});

  const handleDeleteClick = (item) => {
    setItemToDelete(item);
    setDeleteModalOpen(true);
  };

  const handleDeleteCancel = () => {
    setDeleteModalOpen(false);
  };

  return (
    <div className="p-6 min-h-screen">
      <Toaster position="top-right" />
      <div className="rounded-xl shadow-lg overflow-hidden border">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="">
              <tr>
                <th className="p-4 text-left text-sm font-semibold">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="hover:scale-110" />
                    Sana
                  </div>
                </th>
                <th className="p-4 text-left text-sm font-semibold">
                  <div className="flex items-center gap-2">
                    <FileText size={16} className="hover:scale-110" />
                    Sarlavha
                  </div>
                </th>
                <th className="p-4 text-left text-sm font-semibold">
                  <div className="flex items-center gap-2">
                    <Image size={16} className="hover:scale-110" />
                    Rasmlar
                  </div>
                </th>
                <th className="w-24 p-4 text-center text-sm font-semibold">
                  <div className="flex items-center justify-center gap-2">
                    <MessageSquare size={16} className="hover:scale-110" />
                    Harakatlar
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr
                  key={item.id}
                  className="border-t hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <td className="p-4 text-sm">{item.date ?? "malumot yo'q"}</td>
                  <td className="p-4 max-w-md">
                    {item.title &&
                    (item.title.uz || item.title.ru || item.title.en) ? (
                      <button
                        onClick={() => setSelectedContent(item)}
                        className="text-left hover:text-gray-950 dark:hover:text-white w-full group"
                      >
                        <div className="font-medium truncate flex items-center gap-2">
                          <Globe
                            size={16}
                            className="opacity-50 group-hover:opacity-100 transition-opacity"
                          />
                          {item.title.uz || item.title.ru || item.title.en}
                        </div>
                      </button>
                    ) : (
                      <span className="text-gray-400 italic flex items-center gap-2">
                        <AlertCircle size={16} />
                        Ma'lumot yo'q
                      </span>
                    )}
                  </td>
                  <td className="p-4">
                    <div className="flex gap-3">
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
                              className="w-14 h-14 object-cover rounded-lg shadow-sm group-hover:ring-2 ring-blue-400 transition-all"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all rounded-lg flex items-center justify-center">
                              <Image
                                className="opacity-0 group-hover:opacity-100 text-white"
                                size={18}
                              />
                            </div>
                          </button>
                        ))
                      ) : (
                        <p className="text-sm flex items-center gap-2">
                          <AlertCircle size={16} />
                          Rasmlar mavjud emas
                        </p>
                      )}
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => {
                          setContent(item);
                          setOpenEditModal(true);
                        }}
                        className="p-2 hover:bg-blue-50 rounded-lg hover:text-blue-600 transition-colors"
                      >
                        <Pencil size={18} />
                      </button>
                      <EditModal
                        isOpen={openEditModal}
                        onClose={() => setOpenEditModal(false)}
                        datas={content}
                      />
                      <button
                        onClick={() => handleDeleteClick(item)}
                        className="p-2 hover:bg-red-50 rounded-lg hover:text-red-600 transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {selectedContent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-black rounded-xl max-w-2xl w-full m-4 max-h-[90vh] overflow-y-auto shadow-xl">
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <FileText size={20} />
                Yangilik Tafsilotlari
              </h3>
              <button
                onClick={() => setSelectedContent(null)}
                className="p-2 hover:bg-red-50 rounded-lg hover:text-red-600 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-6 space-y-6">
              {["uz", "en", "ru"].map((lang) => (
                <div key={lang} className="space-y-2">
                  <h4 className="font-semibold text-sm flex items-center gap-2">
                    <Globe size={16} />
                    {lang === "uz"
                      ? "O'zbek"
                      : lang === "en"
                      ? "English"
                      : "Русский"}
                  </h4>
                  <div className="space-y-3 pl-6">
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
      )}{" "}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
        >
          <div className="relative max-w-4xl w-full mx-4">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-2 -right-2 p-2 bg-white rounded-full hover:bg-gray-100 transition-colors shadow-lg"
            >
              <X size={20} />
            </button>
            <img
              src={selectedImage}
              alt="Preview"
              className="w-full h-auto rounded-xl shadow-xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
      {deleteModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-sm w-full shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold flex items-center gap-2">
                <AlertCircle size={20} className="text-red-500" />
                O'chirish
              </h3>
              <button
                onClick={handleDeleteCancel}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <p className="mb-6 text-sm">Haqiqatan ham o'chirmoqchimisiz?</p>
            <div className="flex justify-end gap-3">
              <button
                onClick={handleDeleteCancel}
                className="px-4 py-2 text-sm hover:bg-gray-100 rounded-lg transition-colors"
              >
                Yo'q
              </button>
              <button
                onClick={() => {
                  handleDeleteConfirm(itemToDelete, setDeleteModalOpen);
                }}
                className="px-4 py-2 bg-red-500 text-white text-sm hover:bg-red-600 rounded-lg transition-colors"
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
