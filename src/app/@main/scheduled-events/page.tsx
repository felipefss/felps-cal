import { Box, Card, Heading, Table, Tabs } from '@radix-ui/themes';
import { Event } from './_components/event';

export default function ScheduledEvents() {
  return (
    <main className="w-full px-16 py-10">
      <Heading>Scheduled Events</Heading>

      <section className="mt-24">
        <Card>
          <Tabs.Root defaultValue="upcoming">
            <Tabs.List>
              <Tabs.Trigger className="hover:cursor-pointer" value="upcoming">
                Upcoming
              </Tabs.Trigger>
              <Tabs.Trigger className="hover:cursor-pointer" value="past">
                Past
              </Tabs.Trigger>
            </Tabs.List>

            <Box pt="3">
              <Tabs.Content value="upcoming">
                <section>
                  <Table.Root variant="surface">
                    <Table.Header>
                      <Table.Row>
                        <Table.ColumnHeaderCell colSpan={6}>
                          Monday, 19 August 2024
                        </Table.ColumnHeaderCell>
                      </Table.Row>
                    </Table.Header>

                    <Table.Body>
                      <Event />
                    </Table.Body>
                  </Table.Root>
                </section>
              </Tabs.Content>

              <Tabs.Content value="past">Past</Tabs.Content>
            </Box>
          </Tabs.Root>
        </Card>
      </section>
    </main>
  );
}
