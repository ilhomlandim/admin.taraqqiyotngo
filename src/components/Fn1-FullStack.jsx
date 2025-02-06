import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Fn1FullStack({ isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-5 backdrop-blur-sm z-50">
      <div className="relative border-2 py-6 px-14 rounded-xl">
        <a href="https://www.fn1-fullstack.uz" target="_blank">
           <h1>Fn1 FullStack</h1> 
        </a>
          
        <Button className="text-md bg-inherit text-black dark:text-white absolute top-0 right-0 hover:bg-inherit shadow-none" onClick={onClose}>
          X
        </Button>
      </div>
    </div>
  );
}
