"use client"
import { StatsCard } from "./widgets/stats-card"
import { LineChartWidget } from "./widgets/line-chart-widget"
import { BarChartWidget } from "./widgets/bar-chart-widget"
import { StackedBarChartWidget } from "./widgets/stacked-bar-chart-widget"
import { PieChartWidget } from "./widgets/pie-chart-widget"
import { MultiLineChartWidget } from "./widgets/multi-line-chart-widget"
import { DoughnutChartWidget } from "./widgets/doughnut-chart-widget"
import { GaugeChartWidget } from "./widgets/gauge-chart-widget"
import { RecentActivityWidget } from "./widgets/recent-activity-widget"
import { SecurityEventsTable } from "./widgets/security-events-table"

export function DashboardWidgets() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <StatsCard
        title="Total Alerts"
        value="1,284"
        change="+12.5%"
        trend="up"
        description="Last 30 days"
        icon="alert"
      />
      <StatsCard
        title="Critical Threats"
        value="24"
        change="-8.3%"
        trend="down"
        description="Last 30 days"
        icon="critical"
      />
      <StatsCard
        title="Protected Devices"
        value="342"
        change="+5.2%"
        trend="up"
        description="Last 30 days"
        icon="device"
      />
      <StatsCard
        title="Vulnerabilities"
        value="86"
        change="+3.7%"
        trend="up"
        description="Last 30 days"
        icon="vulnerability"
      />

      <div className="col-span-1 md:col-span-2">
        <LineChartWidget />
      </div>

      <div className="col-span-1 md:col-span-2">
        <BarChartWidget />
      </div>

      <div className="col-span-1 md:col-span-2">
        <StackedBarChartWidget />
      </div>

      <div className="col-span-1 md:col-span-1">
        <PieChartWidget />
      </div>

      <div className="col-span-1 md:col-span-1">
        <DoughnutChartWidget />
      </div>

      <div className="col-span-1 md:col-span-2">
        <MultiLineChartWidget />
      </div>

      <div className="col-span-1 md:col-span-1">
        <GaugeChartWidget />
      </div>

      <div className="col-span-1 md:col-span-1">
        <RecentActivityWidget />
      </div>

      <div className="col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4">
        <SecurityEventsTable />
      </div>
    </div>
  );
}

