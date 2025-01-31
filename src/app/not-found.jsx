import { NotFoundImg } from "@/images";
import Image from "next/image";
import React from "react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Image
        src={NotFoundImg}
        width={500}
        height={500}
        alt="Not Found image "
      />
      <div className="flex flex-col justify-center items-center min-h-screen">
        <p className="text-gray-800 text-5xl font-medium">Oops...</p>
        <p className="text-gray-800 text-5xl font-medium pb-5">Page not found</p>
        <h1 className="text-7xl font-bold text-gray-800">404</h1>
      </div>
    </div>
  );
}
