"use client";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { getFormData, validate } from "@/lib/utils";
import { toast } from "sonner";
import { useUpdateNewsMutation } from "@/redux/api/newsApi";

export default function EditModal({ isOpen, onClose, datas }) {
  if (!datas) return null;
  const [updateNews] = useUpdateNewsMutation();
  const { title, body, date, id, user_id, images } = datas;
  const newsdate = date ? date.split(".").reverse().join("-") : " ";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = getFormData(e.target);
    const imgs = "edit";
    const check = validate(formData, imgs);
    const updatedData = {
      title: {
        uz: formData.titleUz,
        ru: formData.titleRu,
        en: formData.titleEn,
      },
      body: {
        uz: formData.descriptionUz,
        ru: formData.descriptionRu,
        en: formData.descriptionEn,
      },
      date: formData.date.split("-").reverse().join("."),
      images: formData.uploadImg?.length > 0 ? formData.uploadImg : images,
      id,
      user_id,
    };
    if (check == null) {
      await updateNews(updatedData);
      onClose();
      toast("Ajoyib!", {
        description: "Malumotlar muvaffaqiyatli saqlandi",
      });
      window.location.reload();
    } else {
      const { message, target } = check;
      toast.error(message);
      e.target[target].focus();
    }
  };

  if (!isOpen) {
    return null;
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-5 backdrop-blur-sm z-50">
      <form onSubmit={handleSubmit} className="bg-white px-5 dark:bg-black rounded-md">
        <div className="grid grid-cols-1 w-[500px]">
          <div className="grid w-full items-center gap-1.5 my-3">
            <Label className="font-bold" htmlFor="text">
              Sarlavha uz
            </Label>
            <Input
              type="text"
              id="titleUz"
              name="titleUz"
              placeholder="Sarlavha yozing"
              defaultValue={title?.uz || ""}
              // className="border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-400 shadow-none"
            />
          </div>
          <div className="grid items-center gap-1.5 my-3">
            <Label className="font-bold" htmlFor="text">
              Sarlavha ru
            </Label>
            <Input
              type="text"
              id="title"
              name="titleRu"
              placeholder="Sarlavha yozing"
              defaultValue={title?.ru || ""}
            />
          </div>
          <div className="grid w-full items-center gap-1.5 my-3">
            <Label className="font-bold " htmlFor="text">
              Sarlavha en
            </Label>
            <Input
              type="text"
              id="title"
              name="titleEn"
              placeholder="Sarlavha yozing"
              defaultValue={title?.en || ""}
            />
          </div>
        </div>

        <div className="grid w-full gap-1.5 my-3">
          <Label className="font-bold" htmlFor="message">
            Tavsif uz
          </Label>
          <Textarea
            placeholder="Tavsif yozing"
            id="message"
            name="descriptionUz"
            defaultValue={body?.uz || ""}
          />
        </div>
        <div className="grid w-full gap-1.5 my-3">
          <Label className="font-bold" htmlFor="message">
            Tavsif ru
          </Label>
          <Textarea
            placeholder="Tavsif yozing"
            id="message"
            name="descriptionRu"
            defaultValue={body?.ru || ""}
          />
        </div>
        <div className="grid w-full gap-1.5 my-3">
          <Label className="font-bold" htmlFor="message">
            Tavsif en
          </Label>
          <Textarea
            placeholder="Tavsif yozing"
            id="message"
            name="descriptionEn"
            defaultValue={body?.en || ""}
          />
        </div>

        <div className="grid w-full items-center gap-1.5 my-3">
          <Label className="font-bold" htmlFor="date">
            Sanani kiriting
          </Label>

          <Input
            type="date"
            id="date"
            name="date"
            defaultValue={newsdate || ""}
            className="mt-3"
          />
        </div>

        <div className="grid w-full items-center gap-1.5">
          <Label className="font-bold mt-5" htmlFor="text">
            Rasm yuklash
          </Label>
          <Input type="file" id="title" name="uploadImg" />
        </div>
        <div className="flex gap-5 my-5">
          <Button className="hover:bg-red-500" onClick={onClose}>
            Yopish
          </Button>
          <Button className="hover:bg-green-500" type="submit">
            Saqlash
          </Button>
        </div>
      </form>
    </div>
  );
}
