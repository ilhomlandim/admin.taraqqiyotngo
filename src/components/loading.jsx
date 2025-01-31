"use client";
import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <div className="animate-pulse">
        <Image src="/logo.png" alt="Logo" width={200} height={200} />
      </div>
    </div>
  );
};

export default Loading;
