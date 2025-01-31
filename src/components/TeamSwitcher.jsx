"use client"
import * as React from "react"
import logo from "@/images/logo.png"
import { DropdownMenu, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import Image from "next/image"

export function TeamSwitcher() {
    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <SidebarMenuButton
                            size="lg"
                            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                        >
                            <Image src={logo} alt="logo" width={180} />
                        </SidebarMenuButton>
                    </DropdownMenuTrigger >
                </DropdownMenu>
            </SidebarMenuItem>
        </SidebarMenu>
    )
}
