"use client";
import React, { useState } from "react";
import { Pencil, Trash2, Image, X } from "lucide-react";

const InvoiceTable = () => {
  const [selectedContent, setSelectedContent] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const newsData = [
    {
      id: 1,
      title: {
        rus: "Республиканский центр «Тараккиёт НГО» запускает новый проект по очистке воды",
        eng: "The Republican Center 'Taraqqiyot NGO' launches new water purification project",
        uzb: "'Taraqqiyot NGO' respublika markazi yangi suv tozalash loyihasini ishga tushirmoqda",
      },
      body: {
        rus: `Республиканский центр «Тараккиёт НГО» объявил о запуске нового проекта по очистке воды в Ферганской области. Проект направлен на улучшение качества питьевой воды в сельских районах. В рамках инициативы планируется установка современных систем очистки воды в 15 селах региона.`,
        eng: `The Republican Center 'Taraqqiyot NGO' has announced the launch of a new water purification project in the Fergana region. The project aims to improve drinking water quality in rural areas. The initiative plans to install modern water purification systems in 15 villages across the region.`,
        uzb: `'Taraqqiyot NGO' respublika markazi Farg'ona viloyatida yangi suv tozalash loyihasini ishga tushirilishi haqida e'lon qildi. Loyiha qishloq hududlarida ichimlik suvi sifatini yaxshilashga qaratilgan. Tashabbus doirasida mintaqadagi 15 ta qishloqda zamonaviy suv tozalash tizimlarini o'rnatish rejalashtirilgan.`,
      },
      date: "15.01.2025",
      images: [
        "https://picsum.photos/800/600",
        "https://picsum.photos/800/600",
      ],
    },
    {
      id: 2,
      title: {
        rus: "Завершен первый этап установки водопроводных систем в Наманганской области",
        eng: "First phase of water supply system installation completed in Namangan region",
        uzb: "Namangan viloyatida suv ta'minoti tizimini o'rnatishning birinchi bosqichi yakunlandi",
      },
      body: {
        rus: `«Тараккиёт НГО» успешно завершил первый этап установки водопроводных систем в трех районах Наманганской области. Более 1000 домохозяйств теперь имеют доступ к чистой питьевой воде. Проект реализуется при поддержке международных партнеров.`,
        eng: `'Taraqqiyot NGO' has successfully completed the first phase of water supply system installation in three districts of Namangan region. Over 1,000 households now have access to clean drinking water. The project is being implemented with support from international partners.`,
        uzb: `'Taraqqiyot NGO' Namangan viloyatining uch tumanida suv ta'minoti tizimini o'rnatishning birinchi bosqichini muvaffaqiyatli yakunladi. 1000 dan ortiq xonadon endi toza ichimlik suviga ega bo'ldi. Loyiha xalqaro hamkorlar ko'magida amalga oshirilmoqda.`,
      },
      date: "20.01.2025",
      images: [
        "https://picsum.photos/800/600",
        "https://picsum.photos/800/600",
      ],
    },
    {
      id: 3,
      title: {
        rus: "Проведен семинар по водосбережению для местных жителей",
        eng: "Water conservation seminar held for local residents",
        uzb: "Mahalliy aholi uchun suvni tejash bo'yicha seminar o'tkazildi",
      },
      body: {
        rus: `В Андижанской области прошел обучающий семинар по эффективному использованию водных ресурсов. Эксперты «Тараккиёт НГО» поделились практическими советами по водосбережению с местными жителями. В мероприятии приняли участие более 200 человек.`,
        eng: `A training seminar on efficient water resource usage was held in Andijan region. Experts from 'Taraqqiyot NGO' shared practical water conservation tips with local residents. More than 200 people participated in the event.`,
        uzb: `Andijon viloyatida suv resurslaridan samarali foydalanish bo'yicha o'quv seminari bo'lib o'tdi. 'Taraqqiyot NGO' mutaxassislari mahalliy aholi bilan suvni tejash bo'yicha amaliy maslahatlar almashdilar. Tadbirda 200 dan ortiq kishi ishtirok etdi.`,
      },
      date: "22.01.2025",
      images: [
        "https://picsum.photos/800/600",
        "https://picsum.photos/800/600",
      ],
    },
    {
      id: 4,
      title: {
        rus: "«Тараккиёт НГО» расширяет географию своей деятельности",
        eng: "'Taraqqiyot NGO' expands its geographical coverage",
        uzb: "'Taraqqiyot NGO' o'z faoliyati geografiyasini kengaytirmoqda",
      },
      body: {
        rus: `Организация объявила о планах расширения своей деятельности на новые районы Ферганской долины. В 2025 году планируется охватить дополнительно 10 сельских районов программами по улучшению водоснабжения. Проект получил одобрение местных властей.`,
        eng: `The organization has announced plans to expand its activities to new districts in the Fergana Valley. In 2025, they plan to cover 10 additional rural areas with water supply improvement programs. The project has received approval from local authorities.`,
        uzb: `Tashkilot Farg'ona vodiysining yangi tumanlariga o'z faoliyatini kengaytirish rejalarini e'lon qildi. 2025 yilda suv ta'minotini yaxshilash dasturlari bilan qo'shimcha 10 ta qishloq tumani qamrab olinishi rejalashtirilmoqda. Loyiha mahalliy hokimiyat tomonidan ma'qullandi.`,
      },
      date: "23.01.2025",
      images: [
        "https://picsum.photos/800/600",
        "https://picsum.photos/800/600",
      ],
    },
    {
      id: 5,
      title: {
        rus: "Республиканский центр «Тараккиёт НГО» продолжает деятельность по реализации проекта",
        eng: "The Republican Center 'Taraqqiyot NGO' continues its project implementation activities",
        uzb: "'Taraqqiyot NGO' respublika markazi loyihani amalga oshirish faoliyatini davom ettirmoqda",
      },
      body: {
        rus: `Сегодня, 25 января 2025 года, состоялся активный круглый стол с участием представителей организации "Тараққиёт NGO" и жителей махаллей "Абдувай", "Янгиқурғон" и "Қашқар" Бешарыкского района по вопросу эффективного обеспечения населения этих махаллей чистой питьевой водой.`,
        eng: `Today, January 25, 2025, an active roundtable discussion was held with the participation of representatives from "Taraqqiyot NGO" and residents of the "Abduvay," "Yangiqurghon," and "Qashqar" mahallas in the Besharik district to address the issue of efficiently providing clean drinking water to the residents of these mahallas.`,
        uzb: `Bugun, 2025-yil 25-yanvar kuni, "Taraqqiyot NGO" tashkiloti vakillari va Beshariq tumanining "Abduvay", "Yangiqurghon" va "Qashqar" mahalla fuqarolari ishtirokida ushbu mahallalar aholisi uchun toza ichimlik suvini samarali yetkazib berish masalasida faol davra suhbati bo'lib o'tdi.`,
      },
      date: "25.01.2025",
      images: [
        "https://picsum.photos/800/600",
        "https://picsum.photos/800/600",
        "https://picsum.photos/800/600",
        "https://picsum.photos/800/600",
        "https://picsum.photos/800/600",
      ],
    },
    // Yana obyektlar qo'shishingiz mumkin
  ];

  const handleEdit = (item) => {
    console.log(item);
  };

  const handleDeleteClick = (item) => {
    setItemToDelete(item);
    setDeleteModalOpen(true);
  };

  const handleDeleteConfirm = () => {
    console.log(itemToDelete);
    setDeleteModalOpen(false);
  };

  const handleDeleteCancel = () => {
    setDeleteModalOpen(false);
  };

  return (
    <div>
      <div className="w-full bg-white rounded-lg shadow">
        <div className="p-4 border-b">
          <h2 className="text-xl font-semibold">News Management</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b">
                <th className="p-4 text-left">Date</th>
                <th className="p-4 text-left">Title</th>
                <th className="p-4 text-left">Images</th>
                <th className="w-24 p-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {newsData.map((item) => (
                <tr key={item.id} className="border-b hover:bg-gray-50">
                  <td className="p-4 whitespace-nowrap">{item.date}</td>
                  <td className="p-4 max-w-xl">
                    <button
                      onClick={() => setSelectedContent(item)}
                      className="text-left hover:text-blue-600 w-full"
                    >
                      <div className="font-medium truncate">
                        {item.title.uzb}
                      </div>
                    </button>
                  </td>
                  <td className="p-4">
                    <div className="flex gap-2">
                      {item.images.map((img, idx) => (
                        <button
                          key={idx}
                          className="relative group"
                          onClick={() => setSelectedImage(img)}
                        >
                          <img
                            src={img}
                            alt={`img`}
                            className="w-10 h-10 object-cover rounded"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all rounded flex items-center justify-center">
                            <Image
                              className="text-white opacity-0 group-hover:opacity-100"
                              size={16}
                            />
                          </div>
                        </button>
                      ))}
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => handleEdit(item)}
                        className="p-1.5 hover:bg-blue-50 rounded"
                      >
                        <Pencil size={16} />
                      </button>
                      <button
                        onClick={() => handleDeleteClick(item)}
                        className="p-1.5 hover:bg-red-50 rounded"
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

      {/* Content Modal */}
      {selectedContent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-3xl w-full m-4 max-h-[90vh] overflow-y-auto">
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="text-lg font-semibold">News Details</h3>
              <button
                onClick={() => setSelectedContent(null)}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-6 space-y-6">
              {/* uz*/}
              <div>
                <h4 className="font-medium mb-2">🇺🇿 O'zbek</h4>
                <div className="space-y-2">
                  <div className="font-medium break-words">
                    {selectedContent.title.uzb}
                  </div>
                  <div className="text-gray-600">
                    {selectedContent.body.uzb}
                  </div>
                </div>
              </div>
              {/* eng */}
              <div>
                <h4 className="font-medium mb-2">🇬🇧 English</h4>
                <div className="space-y-2">
                  <div className="font-medium break-words">
                    {selectedContent.title.eng}
                  </div>
                  <div className="text-gray-600">
                    {selectedContent.body.eng}
                  </div>
                </div>
              </div>
              {/* rus */}
              <div>
                <h4 className="font-medium mb-2">🇷🇺 Русский</h4>
                <div className="space-y-2">
                  <div className="font-medium break-words">
                    {selectedContent.title.rus}
                  </div>
                  <div className="text-gray-600">
                    {selectedContent.body.rus}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* image modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative max-w-4xl w-full mx-4">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 bg-white rounded-full hover:bg-gray-100"
            >
              <X size={20} />
            </button>
            <img
              src={selectedImage}
              alt="Preview"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}

      {/* delete modal */}
      {deleteModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Delete</h3>
              <button
                onClick={handleDeleteCancel}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <X size={20} />
              </button>
            </div>
            <p className="mb-6">o'chirmoqchimisiz?</p>
            <div className="flex justify-end gap-4">
              <button
                onClick={handleDeleteCancel}
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
              >
                Yo'q
              </button>
              <button
                onClick={handleDeleteConfirm}
                className="px-4 py-2 bg-red-600 text-white hover:bg-red-700 rounded"
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

export default InvoiceTable;
