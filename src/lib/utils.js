"use client";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function getFormData(form) {
  const formData = new FormData(form);
  const result = {};
  for (const [key, value] of formData.entries()) {
    result[key] = value;
  }
  return result;
}

export function validate(obj, imgs) {
  if (obj.titleUz.trim() === "") {
    return {
      message: "Sarlafha to'ldirilishi kerak.",
      target: "titleUz",
    };
  }
  if (obj.titleRu.trim() === "") {
    return {
      message: "Заголовок должен быть заполнен.",
      target: "titleRu",
    };
  }
  if (obj.titleEn.trim() === "") {
    return {
      message: "The title must be filled in.",
      target: "titleEn",
    };
  }
  if (obj.descriptionUz.trim() === "") {
    return {
      message: "Tavsif to'ldirilishi kerak.",
      target: "descriptionUz",
    };
  }
  if (obj.descriptionRu.trim() === "") {
    return {
      message: "описание должно быть заполнено",
      target: "descriptionRu",
    };
  }
  if (obj.descriptionEn.trim() === "") {
    return {
      message: "description must be filled in.",
      target: "descriptionEn",
    };
  }
  if (obj.date.trim() === "") {
    return {
      message: "Sanani kiritish kerak",
      target: "date",
    };
  }
  if (imgs == "edit") {
    // console.log("edit qilinmoqda");
  } else if (imgs == false) {
    return {
      message: "Rasm yuklash kerak",
      target: "uploadImg",
    };
  }
  return null;
}
