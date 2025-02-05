"use client";
import { AppSidebar } from "@/components/Sidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { UserCog2, LogOut } from "lucide-react";
import { useEffect, useState } from "react";
import { ModeToggle } from "./dark-mode";
import { useRouter } from "next/navigation";

export default function Main({ children }) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    router.push("/auth");
    window.location.reload();
  };

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
            <div className="flex gap-3">
              <ModeToggle />
              <SidebarMenuButton
                onClick={() => setDropdownOpen(!isDropdownOpen)}
              >
                <UserCog2 />
              </SidebarMenuButton>
            </div>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 border rounded shadow-lg">
                <button
                  className="w-full py-2 pe-2 ps-5 text-left bg-white hover:bg-slate-200 transition-all dark:bg-black dark:hover:bg-gray-900 flex items-center gap-2"
                  onClick={handleLogout}
                >
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
