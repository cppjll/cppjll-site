import { Image } from "astro:assets"

interface Props {
    event: any; // uhh.. . sorry
}

export default function EventCard({event}: Props) {
    return (
        <a href={`events/${event.slug}`}>
            <div className="flex flex-col">
                <img src={event.data.image.src} alt={event.data.image.alt} className="w-full mx-auto rounded-lg mb-2" />
                <h2 className="text-3xl font-bold text-accent mb-2 font-display">{event.data.title}</h2>
                <p className="text-xl italic text-accent mb-2">Date: {event.data.date.toLocaleDateString()}</p>
                <p className="text-xl text-accent mb-4">{event.data.description}</p>  
            </div>
        </a>
    )
}