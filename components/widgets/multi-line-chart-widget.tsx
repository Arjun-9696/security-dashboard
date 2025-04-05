"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Line, LineChart, XAxis, YAxis } from "recharts"

const data = [
  { date: "2023-01-01", internal: 25, external: 45 },
  { date: "2023-02-01", internal: 28, external: 52 },
  { date: "2023-03-01", internal: 22, external: 48 },
  { date: "2023-04-01", internal: 30, external: 61 },
  { date: "2023-05-01", internal: 27, external: 55 },
  { date: "2023-06-01", internal: 32, external: 67 },
  { date: "2023-07-01", internal: 29, external: 62 },
  { date: "2023-08-01", internal: 26, external: 59 },
  { date: "2023-09-01", internal: 35, external: 73 },
  { date: "2023-10-01", internal: 38, external: 79 },
  { date: "2023-11-01", internal: 33, external: 68 },
  { date: "2023-12-01", internal: 40, external: 82 },
]

export function MultiLineChartWidget() {
  return (
    <Card className="bg-cardBg hover:bg-cardHoverBg transition-colors">
      <CardHeader>
        <CardTitle>Threat Sources</CardTitle>
        <CardDescription>Internal vs External threats over time</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            internal: {
              label: "Internal",
              color: "hsl(var(--chart-3))",
            },
            external: {
              label: "External",
              color: "hsl(var(--chart-4))",
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
              dataKey="internal"
              stroke="var(--color-internal)"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 6, fill: "var(--color-internal)" }}
            />
            <Line
              type="monotone"
              dataKey="external"
              stroke="var(--color-external)"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 6, fill: "var(--color-external)" }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

