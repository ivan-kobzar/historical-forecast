import type {
  HeadersFunction,
  LoaderFunctionArgs,
  MetaFunction,
} from "@remix-run/node";
import { useLoaderData, useRouteError } from "@remix-run/react";

import { addDays, format } from "date-fns";
import { FileWarning } from "lucide-react";

import { RangeDatePicker } from "~/components/range-date-picker";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { TemperatureChart } from "~/features/weather/components/temperature-chart";
import { ForecastData } from "~/types/api";

export const meta: MetaFunction = () => {
  return [{ title: "Historical Forecast - Temperature Visualization" }];
};

// NOTE: Server in memory caching
const apiCache = new Map<string, ForecastData>();

// NOTE: Browser caching
export const headers: HeadersFunction = () => {
  return {
    "Cache-Control": "public, s-maxage=60",
  };
};

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const searchParams = url.searchParams;

  const searchParamFrom = searchParams.get("from");
  const searchParamTo = searchParams.get("to");

  const from = searchParamFrom
    ? new Date(searchParamFrom)
    : addDays(new Date(), -31);
  const to = searchParamTo ? new Date(searchParamTo) : new Date();

  const cacheKey = `${format(from, "yyyy-MM-dd")}-${format(to, "yyyy-MM-dd")}`;

  if (apiCache.has(cacheKey)) {
    return { data: apiCache.get(cacheKey) };
  }

  const response = await fetch(
    `${process.env.API_URL}?latitude=51.5074&longitude=-0.1278&start_date=${format(from, "yyyy-MM-dd")}&end_date=${format(to, "yyyy-MM-dd")}&daily=temperature_2m_max,temperature_2m_min`,
  );

  const data: ForecastData = await response.json();

  if (response.ok) {
    apiCache.set(cacheKey, data);

    return { data };
  }

  throw new Error(`Failed to fetch data from ${process.env.API_URL}`);
}

// TODO: Data fetching and cashing
// TODO: Display chart with data
export default function AppIndex() {
  const { data } = useLoaderData<typeof loader>();
  console.log(data);
  return (
    <Card className="w-full max-w-[640px]">
      <CardHeader>
        <CardTitle className="text-center font-semibold">
          Temperature Data Visualization
        </CardTitle>
        <CardDescription className="sr-only">
          View historical temperature data.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <TemperatureChart />
      </CardContent>
      <CardFooter className="flex justify-center">
        <RangeDatePicker />
      </CardFooter>
    </Card>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  const errorMessage = error instanceof Error ? error.message : "Unknown error";

  return (
    <Card className="min-w-[640px]">
      <CardHeader className="flex flex-col items-center gap-2">
        <FileWarning className="size-20 text-primary" />
        <CardTitle className="text-center font-semibold">
          {errorMessage}
        </CardTitle>
        <CardDescription className="sr-only">{errorMessage}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-center text-sm text-muted-foreground">
          If you think that it&apos;s a mistake, please{" "}
          <a className="text-primary" href="mailto:kobzar.ivan1998@gmail.com">
            Contact Us
          </a>
        </p>
      </CardContent>
    </Card>
  );
}
