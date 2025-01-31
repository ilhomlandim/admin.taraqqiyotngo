"use client";
import * as React from "react";
import { ClipboardCheck, Library } from "lucide-react";
import { Sidebar, SidebarContent, SidebarHeader, SidebarRail } from "@/components/ui/sidebar";
import { NavMain } from "./NavMain";
import { TeamSwitcher } from "./TeamSwitcher";

const data = {
  navMain: [
    { title: "projects", icon: ClipboardCheck },
    { title: "blog", icon: Library },
  ],
};

export function AppSidebar({ ...props }) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
