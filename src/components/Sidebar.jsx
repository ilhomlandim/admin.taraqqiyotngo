"use client";
import { ClipboardCheck, Library } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavMain } from "./NavMain";
import { TeamSwitcher } from "./TeamSwitcher";
import { Button } from "./ui/button";
import { useState } from "react";
import Fn1FullStack from "./Fn1-FullStack";

const data = {
  navMain: [
    { title: "projects", icon: ClipboardCheck },
    { title: "blog", icon: Library },
  ],
};

export function AppSidebar({ ...props }) {
  const [openModal, setOpenModal] = useState(false);
  console.log("modal");
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <div className="flex justify-end">
      <span><Button onClick={()=> setOpenModal(true)} className="pb-3 bg-inherit text-black text-2xl hover:bg-inherit dark:text-white">...</Button></span>
      <Fn1FullStack isOpen={openModal} onClose={()=>setOpenModal(false)}/>
      </div>
      <SidebarRail />
    </Sidebar>
  );
}
