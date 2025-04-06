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
  { name: 'Malware', value: 35 },
  { name: 'Phishing', value: 25 },
  { name: 'DDoS', value: 15 },
  { name: 'Ransomware', value: 10 },
  { name: 'Other', value: 15 },
];

const colors = {
  malware: 'hsl(var(--chart-1))',
  phishing: 'hsl(var(--chart-2))',
  ddos: 'hsl(var(--chart-3))',
  ransomware: 'hsl(var(--chart-4))',
  other: 'hsl(var(--chart-5))',
};

export function PieChartWidget() {
  return (
    <Card className="bg-cardBg hover:bg-cardHoverBg transition-colors">
      <CardHeader>
        <CardTitle>Attack Types</CardTitle>
        <CardDescription>Distribution of attack types</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            malware: {
              label: 'Malware',
              color: 'hsl(var(--chart-1))',
            },
            phishing: {
              label: 'Phishing',
              color: 'hsl(var(--chart-2))',
            },
            ddos: {
              label: 'DDoS',
              color: 'hsl(var(--chart-3))',
            },
            ransomware: {
              label: 'Ransomware',
              color: 'hsl(var(--chart-4))',
            },
            other: {
              label: 'Other',
              color: 'hsl(var(--chart-5))',
            },
          }}
          className="aspect-square w-full"
        >
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={0}
              outerRadius={80}
              paddingAngle={2}
              dataKey="value"
              nameKey="name"
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
              labelLine={false}
            >
              {data.map((entry, index) => {
                // Safely convert the name to a key format
                const name = entry.name || '';
                const colorKey = name.toLowerCase().replace(/\s+/g, '');
                // Use a default color if the specific one isn't found
                const color =
                  colors[colorKey as keyof typeof colors] || colors.other;
                return <Cell key={`cell-${index}`} fill={color} />;
              })}
            </Pie>
            <ChartTooltip content={<ChartTooltipContent />} />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
