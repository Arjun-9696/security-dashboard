'use client';

import {
  BarChart3,
  Bell,
  Home,
  Lock,
  Settings,
  Shield,
  Users,
  Wifi,
} from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  useSidebar,
} from '@/components/ui/sidebar';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

export default function DashboardSidebar() {
  const { state } = useSidebar();

  const commonButtonClass =
    'hover:bg-accentHover hover:text-white transition-colors';

  const activeClass = 'bg-accent text-white hover:bg-accentHover';

  return (
    <Sidebar variant="sidebar" collapsible="icon" className="bg-sidebarBg">
      <SidebarHeader className="flex items-center justify-center py-5">
        <div
          className={cn(
            'flex items-center gap-2 transition-all text-white',
            state === 'collapsed' ? 'justify-center' : 'justify-start px-4'
          )}
        >
          <Shield className="h-6 w-6 text-accent" />
          {state === 'expanded' && (
            <span className="text-lg font-bold">SecureDash</span>
          )}
        </div>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent className="mt-auto pl-2 pr-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className={cn(commonButtonClass, activeClass)}
            >
              <a href="/">
                <Home />
                <span>Dashboard</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className={commonButtonClass}>
              <a href="#">
                <Shield />
                <span>Threats</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className={commonButtonClass}>
              <a href="#">
                <Lock />
                <span>Vulnerabilities</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className={commonButtonClass}>
              <a href="#">
                <Wifi />
                <span>Network</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className={commonButtonClass}>
              <a href="#">
                <Users />
                <span>Users</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className={commonButtonClass}>
              <a href="#">
                <BarChart3 />
                <span>Reports</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="mt-auto">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className={commonButtonClass}>
              <a href="#">
                <Bell />
                <span>Notifications</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className={commonButtonClass}>
              <a href="#">
                <Settings />
                <span>Settings</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <div
          className={cn(
            'flex items-center gap-2 py-4 text-white transition-all',
            state === 'collapsed' ? 'justify-center' : 'justify-start'
          )}
        >
          <Avatar className="h-8 w-8">
            <AvatarImage src="" alt="User" />
            <AvatarFallback>A</AvatarFallback>
          </Avatar>
          {state === 'expanded' && (
            <div className="flex flex-col">
              <span className="text-sm font-medium">Admin User</span>
              <span className="text-xs text-[#A1A1AA]">admin@example.com</span>
            </div>
          )}
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
