import { EventCard } from "./EventCard";

interface PreviousEventsRendererProps {
  events: Record<string, any>[]; // events by semester from events.astro
}

export default function PreviousEventsRenderer({
  events,
}: PreviousEventsRendererProps) {
  return events.map((event) => <EventCard key={event.slug} event={event} />);
}
