"use client"

import { Search } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { DashboardWidgets } from "./dashboard-widgets"
import { usePathname } from "next/navigation"

const pathToTitle: Record<string, string> = {
  '/dashboard': 'Security Dashboard',
  '/dashboard/threats': 'Threats',
  '/dashboard/vulnerabilities': 'Vulnerabilities',
  '/dashboard/network': 'Network',
  '/dashboard/users': 'Users',
  '/dashboard/reports': 'Reports',
};

export default function DashboardContent() {
    const pathname = usePathname();
    const pageTitle = pathToTitle[pathname] || 'Security Dashboard';
  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <header className="flex h-16 items-center justify-between border-b border-border px-4 md:px-6">
        <div className="flex items-center sm:item-left gap-4">
          <SidebarTrigger />
          <h1 className="text-xl font-bold">{pageTitle}</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-64 rounded-md bg-inputBg pl-8 text-sm"
            />
          </div>
          <Avatar>
            <AvatarImage src="" alt="User" />
            <AvatarFallback>A</AvatarFallback>
          </Avatar>
        </div>
      </header>
      <main className="flex-1 overflow-auto p-4 md:p-6 bg-background">
        <DashboardWidgets />
      </main>
    </div>
  );
}

