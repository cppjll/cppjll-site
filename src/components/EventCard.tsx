import { API_URL } from "@/lib/directus";
import { Calendar } from "lucide-react";

interface EventCardProps {
  event: any;
  soonest?: boolean;
}
export const EventCard = ({ event, soonest }: EventCardProps) => {
  return (
    <a
      id={event.slug}
      className={`card ${soonest && "sm:card-side"} w-full border sm:hover:scale-[1.02] transition-all break-inside-avoid-column`}
      href={`/events/${event.slug}`}
    >
      <figure className={`${soonest && "sm:max-w-sm"}`}>
        {event.image && (
          <img
            src={`${API_URL}/assets/${event.image}?width=512&format=webp`}
            alt={event.title}
            width="512"
            height="512"
            className={`object-scale-down mx-auto rounded-lg`}
          />
        )}
      </figure>
      <div className="py-4 px-6">
        <h2 className="text-3xl truncate font-bold mb-2 font-display">
          {event.title}
        </h2>
        <div className="flex flex-row items-center gap-2 mb-2">
          <Calendar className="h-4 w-4" />
          {new Date(event.start_datetime).toLocaleDateString()}
        </div>
        <p className="mb-4 md:min-h-20">{event.description}</p>
      </div>
    </a>
  );
};
