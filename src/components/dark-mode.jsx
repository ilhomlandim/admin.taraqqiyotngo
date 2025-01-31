// "use client";

// import * as React from "react";
// import { Moon, Sun } from "lucide-react";
// import { useTheme } from "next-themes";

// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

// export function ModeToggle() {
//   const { setTheme } = useTheme();

//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button
//           variant="outline"
//           size="icon"
//           className="relative flex items-center justify-center p-2 border border-gray-300 dark:border-gray-600 rounded-lg transition-all hover:bg-gray-200 dark:hover:bg-gray-700"
//         >
//           <Sun className="h-5 w-5 transition-all dark:hidden" />
//           <Moon className="hidden h-5 w-5 transition-all dark:block" />
//           <span className="sr-only">Toggle theme</span>
//         </Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent align="end" className="mt-2 bg-white dark:bg-gray-800 shadow-lg rounded-lg border border-gray-200 dark:border-gray-700">
//         <DropdownMenuItem onClick={() => setTheme("light")} className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700">
//           Light
//         </DropdownMenuItem>
//         <DropdownMenuItem onClick={() => setTheme("dark")} className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700">
//           Dark
//         </DropdownMenuItem>
//         <DropdownMenuItem onClick={() => setTheme("system")} className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700">
//           System
//         </DropdownMenuItem>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// }



"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="relative flex items-center justify-center p-2 border border-gray-300 dark:border-gray-600 rounded-lg transition-all hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      <Sun className="h-5 w-5 transition-all dark:hidden" />
      <Moon className="hidden h-5 w-5 transition-all dark:block" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
