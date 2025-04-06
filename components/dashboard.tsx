"use client"
import DashboardSidebar from "./dashboard-sidebar"
import DashboardContent from "./dashboard-content"
import { SidebarProvider } from "./ui/sidebar"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SidebarProvider>
        <div className="flex h-screen overflow-hidden">
          <DashboardSidebar />
          <DashboardContent />
        </div>
      </SidebarProvider>
    </div>
  )
}

