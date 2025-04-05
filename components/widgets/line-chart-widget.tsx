"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Line, LineChart, XAxis, YAxis } from "recharts"

const data = [
  { date: "2023-01-01", threats: 45 },
  { date: "2023-02-01", threats: 52 },
  { date: "2023-03-01", threats: 48 },
  { date: "2023-04-01", threats: 61 },
  { date: "2023-05-01", threats: 55 },
  { date: "2023-06-01", threats: 67 },
  { date: "2023-07-01", threats: 62 },
  { date: "2023-08-01", threats: 59 },
  { date: "2023-09-01", threats: 73 },
  { date: "2023-10-01", threats: 79 },
  { date: "2023-11-01", threats: 68 },
  { date: "2023-12-01", threats: 82 },
]

export function LineChartWidget() {
  return (
    <Card className="bg-cardBg hover:bg-cardHoverBg transition-colors">
      <CardHeader>
        <CardTitle>Threat Trends</CardTitle>
        <CardDescription>Monthly security threats detected over the past year</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            threats: {
              label: "Threats",
              color: "hsl(var(--chart-1))",
            },
          }}
          className="aspect-[4/2] w-full"
        >
          <LineChart data={data} margin={{ top: 5, right: 10, left: 10, bottom: 0 }}>
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", { month: "short" })
              }}
              tick={{ fill: "hsl(var(--muted-foreground))" }}
            />
            <YAxis tickLine={false} axisLine={false} tick={{ fill: "hsl(var(--muted-foreground))" }} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Line
              type="monotone"
              dataKey="threats"
              stroke="var(--color-threats)"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 6, fill: "var(--color-threats)" }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

