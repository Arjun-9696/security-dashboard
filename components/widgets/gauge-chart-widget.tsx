"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer } from "@/components/ui/chart"
import { PieChart, Pie, Cell } from "recharts"

const data = [
  { name: "Score", value: 78 },
  { name: "Remaining", value: 22 },
]

export function GaugeChartWidget() {
  return (
    <Card className="bg-cardBg hover:bg-cardHoverBg transition-colors">
      <CardHeader>
        <CardTitle>Security Score</CardTitle>
        <CardDescription>Overall security posture</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <ChartContainer
          config={{
            score: {
              label: "Score",
              color: "#426CFF",
            },
            remaining: {
              label: "Remaining",
              color: "#2A2A2A",
            },
          }}
          className="aspect-square w-full max-w-[200px]"
        >
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              startAngle={180}
              endAngle={0}
              innerRadius={60}
              outerRadius={80}
              paddingAngle={0}
              dataKey="value"
              nameKey="name"
              cornerRadius={5}
            >
              <Cell fill="#426CFF" />
              <Cell fill="#2A2A2A" />
            </Pie>
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-current text-2xl font-bold"
            >
              78%
            </text>
          </PieChart>
        </ChartContainer>
        <div className="mt-2 text-center">
          <div className="text-sm text-muted-foreground">Good</div>
        </div>
      </CardContent>
    </Card>
  )
}

