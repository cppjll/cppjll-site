import { Fragment, useEffect, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { Check, ChevronsUpDown } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";
import { cn } from "@/lib/utils";

interface Semester {
  name: string;
  value: string;
}

interface SemesterSelectorProps {
  semesters: Semester[];
}

export default function SemesterSelector({ semesters }: SemesterSelectorProps) {
  const [selectedSemester, setSelectedSemester] = useState(semesters[0].value);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.querySelectorAll(".events").forEach((el) => {
      (el as HTMLElement).style.display = "none";
    });

    const selectedElement = document.getElementById(
      `events-${selectedSemester}`
    );
    if (selectedElement) {
      selectedElement.style.display = "grid";
    }
  }, [selectedSemester]);

  return (
    <Fragment>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
          >
            {selectedSemester
              ? semesters.find(
                  (semester) => semester.value === selectedSemester
                )?.name
              : semesters[0].name}
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
                      setSelectedSemester(currentValue);
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        selectedSemester === semester.value
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                    {semester.name}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </Fragment>
  );
}
