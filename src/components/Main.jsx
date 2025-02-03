"use client"
import { AppSidebar } from "@/components/Sidebar";
import Test from "@/components/test";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { UserCog2, Sun, Moon, Monitor, LogOut } from "lucide-react";
import { useEffect, useState } from "react";

export default function Main({children}) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (!event.target.closest(".dropdown-menu")) {
        setDropdownOpen(false);
      }
    }

    if (isDropdownOpen) {
      window.addEventListener("click", handleClickOutside);
    }

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b px-4">
          <div className="flex items-center">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
          </div>
          <div className="relative dropdown-menu">
            <SidebarMenuButton onClick={() => setDropdownOpen(!isDropdownOpen)}>
              <UserCog2 />
            </SidebarMenuButton>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg">
                <div className="flex justify-around p-2 border-b">
                  <button><Sun /></button>
                  <button><Moon /></button>
                  <button><Monitor /></button>
                </div>
                <button className="w-full py-2 pe-2 ps-5 text-left hover:bg-gray-100 flex items-center gap-2">
                  <LogOut /> Log Out
                </button>
              </div>
            )}
          </div>
        </header>
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
