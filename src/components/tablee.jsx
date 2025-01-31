"use client";
import React, { useState } from "react";
import { Pencil, Trash2, Image, X } from "lucide-react";

const InvoiceTable = () => {
  const [selectedContent, setSelectedContent] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const [newsData, setNewsData] = useState([
    {
      id: 1,
      title: {
        rus: "Республиканский центр «Тараккиёт НГО» запускает новый проект по очистке воды",
        eng: "The Republican Center 'Taraqqiyot NGO' launches new water purification project",
        uzb: "Taraqqiyot NGO' respublika markazi yangi suv tozalash loyihasini ishga tushirmoqda",
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
  ]);

  const handleEdit = (item) => {
    console.log(item);
  };

  const handleDeleteClick = (item) => {
    setItemToDelete(item);
    setDeleteModalOpen(true);
  };

  const handleDeleteConfirm = () => {
    setNewsData((prevData) =>
      prevData.filter((item) => item.id !== itemToDelete.id)
    );
    setDeleteModalOpen(false);
  };

  const handleDeleteCancel = () => {
    setDeleteModalOpen(false);
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      {/* Jadval */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">
            Yangiliklar Boshqaruvi
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="p-3 text-left text-sm font-semibold text-gray-700">
                  Sana
                </th>
                <th className="p-3 text-left text-sm font-semibold text-gray-700">
                  Sarlavha
                </th>
                <th className="p-3 text-left text-sm font-semibold text-gray-700">
                  Rasmlar
                </th>
                <th className="w-20 p-3 text-center text-sm font-semibold text-gray-700">
                  Harakatlar
                </th>
              </tr>
            </thead>
            <tbody>
              {newsData.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <td className="p-3 text-sm text-gray-700">{item.date}</td>
                  <td className="p-3 max-w-md">
                    <button
                      onClick={() => setSelectedContent(item)}
                      className="text-left hover:text-blue-600 w-full"
                    >
                      <div className="font-medium text-gray-800 truncate">
                        {item.title.uzb}
                      </div>
                    </button>
                  </td>
                  <td className="p-3">
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
                            className="w-12 h-12 object-cover rounded-md shadow-sm"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all rounded-md flex items-center justify-center">
                            <Image
                              className="text-white opacity-0 group-hover:opacity-100"
                              size={16}
                            />
                          </div>
                        </button>
                      ))}
                    </div>
                  </td>
                  <td className="p-3">
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => handleEdit(item)}
                        className="p-1.5 hover:bg-blue-50 rounded-md text-gray-500 hover:text-blue-600 transition-colors"
                      >
                        <Pencil size={16} />
                      </button>
                      <button
                        onClick={() => handleDeleteClick(item)}
                        className="p-1.5 hover:bg-red-50 rounded-md text-gray-500 hover:text-red-600 transition-colors"
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

      {/* content modal */}
      {selectedContent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full m-4 max-h-[90vh] overflow-y-auto shadow-lg">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-800">
                Yangilik Tafsilotlari
              </h3>
              <button
                onClick={() => setSelectedContent(null)}
                className="p-1.5 hover:bg-gray-100 rounded-md text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-4 space-y-4">
              {/* uz */}
              <div>
                <h4 className="font-semibold mb-1 text-sm text-gray-700">
                  uz O'zbek
                </h4>
                <div className="space-y-1">
                  <div className="font-medium text-sm text-gray-800 break-words">
                    {selectedContent.title.uzb}
                  </div>
                  <div className="text-sm text-gray-600">
                    {selectedContent.body.uzb}
                  </div>
                </div>
              </div>
              {/* eng */}
              <div>
                <h4 className="font-semibold mb-1 text-sm text-gray-700">
                  eng English
                </h4>
                <div className="space-y-1">
                  <div className="font-medium text-sm text-gray-800 break-words">
                    {selectedContent.title.eng}
                  </div>
                  <div className="text-sm text-gray-600">
                    {selectedContent.body.eng}
                  </div>
                </div>
              </div>
              {/* rus */}
              <div>
                <h4 className="font-semibold mb-1 text-sm text-gray-700">
                  ru Русский
                </h4>
                <div className="space-y-1">
                  <div className="font-medium text-sm text-gray-800 break-words">
                    {selectedContent.title.rus}
                  </div>
                  <div className="text-sm text-gray-600">
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
          <div className="relative max-w-3xl w-full mx-4">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 p-1.5 bg-white rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors"
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

      {/* delete modal */}
      {deleteModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-4 max-w-sm w-full shadow-lg">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-bold text-gray-800">O'chirish</h3>
              <button
                onClick={handleDeleteCancel}
                className="p-1.5 hover:bg-gray-100 rounded-md text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <p className="mb-4 text-sm text-gray-600">
              Haqiqatan ham o'chirmoqchimisiz?
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={handleDeleteCancel}
                className="px-4 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
              >
                Yo'q
              </button>
              <button
                onClick={handleDeleteConfirm}
                className="px-4 py-1.5 bg-red-600 text-sm text-white hover:bg-red-700 rounded-md transition-colors"
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
