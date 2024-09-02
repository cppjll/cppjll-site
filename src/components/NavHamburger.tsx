import { Button, buttonVariants } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

export default function NavHamburger() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="md:hidden absolute right-4 top-2" variant="ghost" aria-label="Open hamburger menu">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>CPP JLL</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col mt-8">
          <a
            className={`${buttonVariants({ variant: "ghost" })} text-lg`}
            href="/events"
          >
            Events
          </a>
          <a className={buttonVariants({ variant: "ghost" })} href="/board">
            Board
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
}
