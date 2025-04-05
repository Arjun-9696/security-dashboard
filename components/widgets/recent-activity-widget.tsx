"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { AlertTriangle, FileWarning, Lock, Shield, Smartphone, User } from "lucide-react"

const activities = [
  {
    id: 1,
    type: "login",
    message: "Admin user logged in",
    time: "2 minutes ago",
    icon: User,
  },
  {
    id: 2,
    type: "alert",
    message: "Malware detected on device",
    time: "15 minutes ago",
    icon: AlertTriangle,
  },
  {
    id: 3,
    type: "device",
    message: "New device connected",
    time: "45 minutes ago",
    icon: Smartphone,
  },
  {
    id: 4,
    type: "policy",
    message: "Security policy updated",
    time: "1 hour ago",
    icon: Shield,
  },
  {
    id: 5,
    type: "vulnerability",
    message: "Critical vulnerability patched",
    time: "2 hours ago",
    icon: FileWarning,
  },
  {
    id: 6,
    type: "access",
    message: "Access permissions changed",
    time: "3 hours ago",
    icon: Lock,
  },
]

export function RecentActivityWidget() {
  return (
    <Card className="bg-cardBg hover:bg-cardHoverBg transition-colors">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest security events</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] pr-4">
          <div className="space-y-4">
            {activities.map((activity) => (
              <div key={activity.id} className="flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10">
                  <activity.icon className="h-4 w-4 text-accent" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">{activity.message}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}

