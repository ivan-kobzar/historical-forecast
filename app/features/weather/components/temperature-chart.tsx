import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "~/components/ui/chart";

export interface ChartData {
  time: string;
  lowest: number;
  highest: number;
}

const chartConfig = {
  highest: {
    label: "Highest",
    color: "#ef4444",
  },
  lowest: {
    label: "Lowest",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

export function TemperatureChart({ data }: { data?: ChartData[] }) {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <LineChart accessibilityLayer data={data}>
        <CartesianGrid strokeDasharray="4 4" />
        <XAxis
          dataKey="time"
          tickLine={false}
          tickMargin={6}
          tickFormatter={(value) =>
            new Date(value).toLocaleDateString(undefined, {
              month: "short",
              day: "numeric",
            })
          }
        />
        <YAxis
          dataKey="highest"
          tickLine={false}
          tickMargin={4}
          tickFormatter={(value) => `${value}°C`}
        />
        <YAxis
          dataKey="lowest"
          tickLine={false}
          tickMargin={4}
          tickFormatter={(value) => `${value}°C`}
        />
        <ChartTooltip
          cursor={false}
          content={
            <ChartTooltipContent
              labelFormatter={(value) =>
                new Date(value).toLocaleDateString(undefined, {
                  month: "short",
                  day: "numeric",
                })
              }
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
