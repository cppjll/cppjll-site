import * as React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

const semesters = [
  {
    value: 'Fall2024',
    label: 'Fall 2024',
  },
  {
    value: 'Spring2024',
    label: 'Spring 2024',
  },
  {
    value: 'Fall2023',
    label: 'Fall 2023',
  },
];

export function SemesterCombobox() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');

  return (
    <Popover
      open={open}
      onOpenChange={setOpen}
    >
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[11rem] justify-between"
        >
          {value
            ? semesters.find((semester) => semester.value === value)?.label
            : semesters[0]?.label}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[11rem] p-0">
        <Command>
          <CommandInput placeholder="Search semester" />
          <CommandList>
            <CommandEmpty>No semesters found.</CommandEmpty>
            <CommandGroup>
              {semesters.map((semester) => (
                <CommandItem
                  key={semester.value}
                  value={semester.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? '' : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      value === semester.value ||
                        (!value && semester.value === semesters[0]?.value)
                        ? 'opacity-100'
                        : 'opacity-0'
                    )}
                  />
                  {semester.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
