"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, XAxis, YAxis } from "recharts"

const data = [
  { month: "Jan", critical: 12, high: 18, medium: 25, low: 35 },
  { month: "Feb", critical: 15, high: 20, medium: 22, low: 32 },
  { month: "Mar", critical: 10, high: 17, medium: 28, low: 38 },
  { month: "Apr", critical: 8, high: 15, medium: 30, low: 40 },
  { month: "May", critical: 14, high: 22, medium: 24, low: 30 },
  { month: "Jun", critical: 16, high: 25, medium: 20, low: 28 },
]

export function StackedBarChartWidget() {
  return (
    <Card className="bg-cardBg hover:bg-cardHoverBg transition-colors">
      <CardHeader>
        <CardTitle>Vulnerability Severity</CardTitle>
        <CardDescription>Distribution of vulnerabilities by severity level</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            critical: {
              label: "Critical",
              color: "hsl(0, 84%, 60%)",
            },
            high: {
              label: "High",
              color: "hsl(30, 84%, 60%)",
            },
            medium: {
              label: "Medium",
              color: "hsl(60, 84%, 60%)",
            },
            low: {
              label: "Low",
              color: "hsl(120, 84%, 60%)",
            },
          }}
          className="aspect-[4/2] w-full"
        >
          <BarChart data={data} margin={{ top: 5, right: 10, left: 10, bottom: 0 }}>
            <XAxis dataKey="month" tickLine={false} axisLine={false} tick={{ fill: "hsl(var(--muted-foreground))" }} />
            <YAxis tickLine={false} axisLine={false} tick={{ fill: "hsl(var(--muted-foreground))" }} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="critical" stackId="a" fill="var(--color-critical)" />
            <Bar dataKey="high" stackId="a" fill="var(--color-high)" />
            <Bar dataKey="medium" stackId="a" fill="var(--color-medium)" />
            <Bar dataKey="low" stackId="a" fill="var(--color-low)" />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

