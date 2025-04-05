"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"

type Severity = "critical" | "high" | "medium" | "low"

interface SecurityEvent {
  id: string
  timestamp: string
  eventType: string
  source: string
  target: string
  severity: Severity
  status: "open" | "investigating" | "resolved"
}

const securityEvents: SecurityEvent[] = [
  {
    id: "SEC-001",
    timestamp: "2023-12-15 08:23:45",
    eventType: "Unauthorized Access",
    source: "192.168.1.45",
    target: "Auth Server",
    severity: "critical",
    status: "investigating",
  },
  {
    id: "SEC-002",
    timestamp: "2023-12-15 09:12:32",
    eventType: "Malware Detected",
    source: "Endpoint #45",
    target: "Workstation",
    severity: "high",
    status: "open",
  },
  {
    id: "SEC-003",
    timestamp: "2023-12-15 10:05:18",
    eventType: "Suspicious Activity",
    source: "User: jsmith",
    target: "Database",
    severity: "medium",
    status: "investigating",
  },
  {
    id: "SEC-004",
    timestamp: "2023-12-15 11:45:22",
    eventType: "Firewall Breach",
    source: "203.45.78.32",
    target: "Network",
    severity: "high",
    status: "open",
  },
  {
    id: "SEC-005",
    timestamp: "2023-12-15 12:33:10",
    eventType: "Data Exfiltration",
    source: "Internal Network",
    target: "Cloud Storage",
    severity: "critical",
    status: "investigating",
  },
  {
    id: "SEC-006",
    timestamp: "2023-12-15 13:22:45",
    eventType: "Policy Violation",
    source: "User: asmith",
    target: "File Server",
    severity: "low",
    status: "resolved",
  },
  {
    id: "SEC-007",
    timestamp: "2023-12-15 14:15:33",
    eventType: "DDoS Attack",
    source: "Multiple IPs",
    target: "Web Server",
    severity: "high",
    status: "investigating",
  },
  {
    id: "SEC-008",
    timestamp: "2023-12-15 15:08:27",
    eventType: "Brute Force",
    source: "45.67.89.123",
    target: "Admin Portal",
    severity: "medium",
    status: "open",
  },
]

export function SecurityEventsTable() {
  const [searchTerm, setSearchTerm] = useState("")
  const [severityFilter, setSeverityFilter] = useState<string>("all")
  const [statusFilter, setStatusFilter] = useState<string>("all")

  const filteredEvents = securityEvents.filter((event) => {
    const matchesSearch =
      event.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.eventType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.source.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.target.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesSeverity = severityFilter === "all" || event.severity === severityFilter
    const matchesStatus = statusFilter === "all" || event.status === statusFilter

    return matchesSearch && matchesSeverity && matchesStatus
  })

  return (
    <Card className="bg-cardBg hover:bg-cardHoverBg transition-colors">
      <CardHeader>
        <CardTitle>Security Events</CardTitle>
        <CardDescription>Recent security incidents and alerts</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex flex-col gap-4 md:flex-row">
          <Input
            placeholder="Search events..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/3"
          />
          <div className="flex gap-2">
            <Select value={severityFilter} onValueChange={setSeverityFilter}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Severity" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Severities</SelectItem>
                <SelectItem value="critical">Critical</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="low">Low</SelectItem>
              </SelectContent>
            </Select>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="open">Open</SelectItem>
                <SelectItem value="investigating">Investigating</SelectItem>
                <SelectItem value="resolved">Resolved</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Timestamp</TableHead>
                <TableHead>Event Type</TableHead>
                <TableHead className="hidden md:table-cell">Source</TableHead>
                <TableHead className="hidden md:table-cell">Target</TableHead>
                <TableHead>Severity</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredEvents.map((event) => (
                <TableRow key={event.id}>
                  <TableCell className="font-medium">{event.id}</TableCell>
                  <TableCell>{event.timestamp}</TableCell>
                  <TableCell>{event.eventType}</TableCell>
                  <TableCell className="hidden md:table-cell">{event.source}</TableCell>
                  <TableCell className="hidden md:table-cell">{event.target}</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={cn(
                        "border-none",
                        event.severity === "critical" && "bg-red-500/20 text-red-500",
                        event.severity === "high" && "bg-orange-500/20 text-orange-500",
                        event.severity === "medium" && "bg-yellow-500/20 text-yellow-500",
                        event.severity === "low" && "bg-green-500/20 text-green-500",
                      )}
                    >
                      {event.severity}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={cn(
                        "border-none",
                        event.status === "open" && "bg-blue-500/20 text-blue-500",
                        event.status === "investigating" && "bg-purple-500/20 text-purple-500",
                        event.status === "resolved" && "bg-green-500/20 text-green-500",
                      )}
                    >
                      {event.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}

