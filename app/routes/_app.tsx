import type { MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

import { ThermometerSun } from "lucide-react";

import { ModeToggle } from "~/components/mode-toggle";

export const meta: MetaFunction = () => {
  return [
    { title: "Historical Forecast" },
    { name: "description", content: "Historical Temperature Visualization" },
  ];
};

export default function App() {
  return (
    <div className="flex h-dvh flex-col items-center">
      <header className="container flex justify-between p-4">
        <h1 className="leading flex items-center gap-2 text-2xl font-semibold">
          <ThermometerSun className="size-8 text-primary" />
          Historical Forecast
        </h1>
        <ModeToggle />
      </header>
      <main className="container flex flex-1 flex-col items-center justify-center px-4">
        <Outlet />
      </main>
      <footer className="flex items-center justify-center p-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Historical Forecast
        </p>
      </footer>
    </div>
  );
}
