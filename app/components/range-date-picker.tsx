import { useSearchParams } from "@remix-run/react";
import { useEffect, useState } from "react";
import { DateRange } from "react-day-picker";

import { addDays, format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "~/lib/utils";

import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

export function RangeDatePicker({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchParamFrom = searchParams.get("from");
  const searchParamTo = searchParams.get("to");

  const [date, setDate] = useState<DateRange | undefined>({
    from: searchParamFrom
      ? new Date(searchParamFrom)
      : addDays(new Date(), -31),
    to: searchParamTo ? new Date(searchParamTo) : new Date(),
  });

  useEffect(() => {
    setSearchParams({
      from: date?.from ? format(date.from, "yyyy-MM-dd") : "",
      to: date?.to ? format(date.to, "yyyy-MM-dd") : "",
    });
  }, [date, setSearchParams]);

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !date && "text-muted-foreground",
            )}
          >
            <CalendarIcon />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="center">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.to}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
