import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "~/components/ui/chart";

const chartData = [
  { month: "January", highest: 186, lowest: 80 },
  { month: "February", highest: 305, lowest: 200 },
  { month: "March", highest: 237, lowest: 120 },
  { month: "April", highest: 73, lowest: 190 },
  { month: "May", highest: 209, lowest: 130 },
  { month: "June", highest: 214, lowest: 140 },
];

const chartConfig = {
  highest: {
    label: "highest",
    color: "#ef4444",
  },
  lowest: {
    label: "lowest",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

export function TemperatureChart() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <LineChart accessibilityLayer data={chartData}>
        <CartesianGrid strokeDasharray="4 4" />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={6}
          // tickFormatter={(value) =>
          //   new Date(value).toLocaleDateString("en-US", {
          //     month: "short",
          //     day: isMonthToDate ? "numeric" : undefined,
          //   })
          // }
        />
        <YAxis
          dataKey="highest"
          tickLine={false}
          tickMargin={4}
          // tickFormatter={(value) =>
          //   formatMoney(value, undefined, {
          //     notation: "compact",
          //   })
          // }
        />
        <YAxis
          dataKey="lowest"
          tickLine={false}
          tickMargin={4}
          // tickFormatter={(value) =>
          //   formatMoney(value, undefined, {
          //     notation: "compact",
          //   })
          // }
        />
        <ChartTooltip
          cursor={false}
          content={
            <ChartTooltipContent
              hideLabel
              // formatter={(value) => (
              //   <div>
              //     Revenue: <strong>{formatMoney(Number(value))}</strong>
              //   </div>
              // )}
              className="bg-card shadow-lg"
            />
          }
        />
        <Line dataKey="highest" stroke={chartConfig.highest.color} />
        <Line dataKey="lowest" fill={chartConfig.lowest.color} />
      </LineChart>
    </ChartContainer>
  );
}
