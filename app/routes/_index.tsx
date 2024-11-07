import type { MetaFunction } from "@remix-run/node";

import { ThermometerSun } from "lucide-react";

import { ModeToggle } from "~/components/mode-toggle";
import { RangeDatePicker } from "~/components/range-date-picker";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export const meta: MetaFunction = () => {
  return [
    { title: "Historical Forecast" },
    { name: "description", content: "Temperature Data Visualization" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-dvh flex-col items-center">
      <header className="container flex justify-between p-4">
        <h1 className="leading flex items-center gap-2 text-2xl font-semibold">
          <ThermometerSun className="size-8" />
          Historical Forecast
        </h1>
        <ModeToggle />
      </header>
      <main className="container flex flex-1 flex-col items-center justify-center px-4">
        <Card className="min-w-[640px]">
          <CardHeader>
            <CardTitle className="text-center font-semibold">
              Temperature Data Visualization
            </CardTitle>
            <CardDescription className="sr-only">
              View historical temperature data.
            </CardDescription>
          </CardHeader>
          <CardContent>Chart</CardContent>
          <CardFooter className="flex justify-center">
            <RangeDatePicker />
          </CardFooter>
        </Card>
      </main>
      <footer className="flex items-center justify-center p-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Historical Forecast
        </p>
      </footer>
    </div>
  );
}
