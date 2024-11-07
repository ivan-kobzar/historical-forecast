import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Historical Forecast" },
    { name: "description", content: "Weather Data Visualization" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-dvh items-center justify-center">
      <div className="flex flex-col items-center gap-16">
        <header className="flex flex-col items-center gap-9">
          <h1 className="leading text-2xl font-bold text-gray-800 dark:text-gray-100">
            Weather Data Visualization
          </h1>
        </header>
      </div>
    </div>
  );
}
