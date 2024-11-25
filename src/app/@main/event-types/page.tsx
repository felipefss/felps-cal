import { EventCard } from '@/app/@main/event-types/_components/event-card';
import { Button, Heading, Separator } from '@radix-ui/themes';
import { NewEventDialog } from './_components/new-event-dialog';

export default function EventTypes() {
  return (
    <>
      <Heading>Event Types</Heading>

      <NewEventDialog>
        <Button className="mt-11 hover:cursor-pointer" type="button">
          New Event Type
        </Button>
      </NewEventDialog>

      {/* TODO: remove this separator from all pages */}
      <Separator size="4" className="my-4" />

      <section className="grid gap-4 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <EventCard key={i} />
        ))}
      </section>
    </>
  );
}
