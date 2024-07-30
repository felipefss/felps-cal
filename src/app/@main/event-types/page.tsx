import { EventCard } from '@/app/_components/event-card';
import { Button, Heading, Separator } from '@radix-ui/themes';

export default function EventTypes() {
  return (
    <main className="w-full px-16 py-10">
      <Heading>Event Types</Heading>

      <Button className="mt-11 hover:cursor-pointer" type="button">
        New Event Type
      </Button>

      <Separator size="4" className="my-4" />

      <section className="grid gap-4 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <EventCard key={i} />
        ))}
      </section>
    </main>
  );
}
