'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { Cell, Pie, PieChart } from 'recharts';

const data = [
  { name: 'Secured', value: 75 },
  { name: 'At Risk', value: 25 },
];

const colors = {
  secured: 'hsl(142, 76%, 36%)',
  atrisk: 'hsl(0, 84%, 60%)',
};

export function DoughnutChartWidget() {
  return (
    <Card className="bg-cardBg hover:bg-cardHoverBg transition-colors">
      <CardHeader>
        <CardTitle>Security Status</CardTitle>
        <CardDescription>Overall security posture</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center mt-[-14px]">
        <ChartContainer
          config={{
            secured: {
              label: 'Secured',
              color: 'hsl(142, 76%, 36%)',
            },
            atrisk: {
              label: 'At Risk',
              color: 'hsl(0, 84%, 60%)',
            },
          }}
          className="aspect-square w-full max-w-[200px]"
        >
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={2}
              dataKey="value"
              nameKey="name"
            >
              {data.map((entry, index) => {
                // Safely convert the name to a key format
                const name = entry.name || '';
                const colorKey = name.toLowerCase().replace(/\s+/g, '');
                // Use a default color if the specific one isn't found
                const color =
                  colors[colorKey as keyof typeof colors] || 'hsl(0, 84%, 60%)';

                return <Cell key={`cell-${index}`} fill={color} />;
              })}
            </Pie>
            <ChartTooltip content={<ChartTooltipContent />} />
          </PieChart>
        </ChartContainer>
        <div className="mt-4 flex items-center justify-center gap-4">
          <div className="flex items-center">
            <div className="mr-2 h-3 w-3 rounded-full bg-green-600" />
            <span className="text-sm">Secured (75%)</span>
          </div>
          <div className="flex items-center">
            <div className="mr-2 h-3 w-3 rounded-full bg-red-500" />
            <span className="text-sm">At Risk (25%)</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
