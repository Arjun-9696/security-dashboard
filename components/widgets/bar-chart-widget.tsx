"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, XAxis, YAxis } from "recharts"

const data = [
  { day: "Mon", attacks: 28 },
  { day: "Tue", attacks: 35 },
  { day: "Wed", attacks: 42 },
  { day: "Thu", attacks: 38 },
  { day: "Fri", attacks: 45 },
  { day: "Sat", attacks: 32 },
  { day: "Sun", attacks: 25 },
]

export function BarChartWidget() {
  return (
    <Card className="bg-cardBg hover:bg-cardHoverBg transition-colors">
      <CardHeader>
        <CardTitle>Daily Attack Distribution</CardTitle>
        <CardDescription>Number of attacks by day of week</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            attacks: {
              label: "Attacks",
              color: "hsl(var(--chart-2))",
            },
          }}
          className="aspect-[4/2] w-full"
        >
          <BarChart data={data} margin={{ top: 5, right: 10, left: 10, bottom: 0 }}>
            <XAxis dataKey="day" tickLine={false} axisLine={false} tick={{ fill: "hsl(var(--muted-foreground))" }} />
            <YAxis tickLine={false} axisLine={false} tick={{ fill: "hsl(var(--muted-foreground))" }} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="attacks" fill="var(--color-attacks)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

