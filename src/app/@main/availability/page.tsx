import { Button, Card, Heading } from '@radix-ui/themes';
import { DailyHours } from './_components/daily-hours';

const weekDays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export default function Availability() {
  return (
    <>
      <Heading>Availability</Heading>

      <section className="mt-24">
        <Card className="mx-auto max-w-lg">
          <Card className="grid gap-4">
            {weekDays.map((weekDay) => (
              <DailyHours key={weekDay} weekDay={weekDay} />
            ))}
          </Card>

          <Button className="mt-3 w-full hover:cursor-pointer" type="button">
            Save changes
          </Button>
        </Card>
      </section>
    </>
  );
}
