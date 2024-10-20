"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { directus } from "@/lib/directus";
import { readItems } from "@directus/sdk";

import { DateTime } from "luxon";
import { EventCard } from "./EventCard";

const semesters = [
  {
    value: "Fall2024",
    label: "Fall 2024",
  },
  {
    value: "Spring2024",
    label: "Spring 2024",
  },
  {
    value: "Fall2023",
    label: "Fall 2023",
  },
];

export function PreviousEvents() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("Fall2024"); // Put default semester here
  const [events, setEvents] = React.useState<Record<string, any>[]>([]);

  React.useEffect(() => {
    const fetchEvents = async () => {
      const fetchedEvents = await directus.request(
        readItems("events", {
          fields: ["*"],
          sort: ["-start_datetime"],
          filter: {
            _and: [
              {
                semester: {
                  _eq: value,
                },
              },
              import.meta.env.DEV // Only show published events in prod. Drafted events can be previewed in localhost.
                ? { status: { _in: ["draft", "published"] } }
                : { status: "published" },
            ],
          },
        })
      );
      setEvents(fetchedEvents);
    };

    fetchEvents();
  }, [value]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? semesters.find((semester) => semester.value === value)?.label
            : semesters[0]?.label}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search semester" />
          <CommandList>
            <CommandEmpty>No semester found.</CommandEmpty>
            <CommandGroup>
              {semesters.map((semester) => (
                <CommandItem
                  key={semester.value}
                  value={semester.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "Fall2024" : currentValue); // Put default semester here
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === semester.value ||
                        (!value && semester.value === semesters[0]?.value)
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  {semester.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
      {/* Single column on smaller devices, two column grid on larger screens */}
      <div className="flex flex-col sm:grid sm:grid-cols-2 sm:gap-4 my-6">
        {events
          .filter(
            (event) =>
              DateTime.fromISO(event.end_datetime, {
                zone: "America/Los_Angeles",
              }).toUTC() < DateTime.now().toUTC()
          )
          .map((event) => (
            <EventCard key={event.slug} event={event} />
          ))}
      </div>
    </Popover>
  );
}
