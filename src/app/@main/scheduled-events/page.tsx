import { Box, Card, Heading, Table, Tabs } from '@radix-ui/themes';

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
                      <Table.Row>
                        <Table.Cell justify="start" className="align-middle">
                          10:00 - 10:30
                        </Table.Cell>
                        <Table.Cell justify="start" className="align-middle">
                          <p>
                            <strong>John Doe</strong>
                          </p>
                          <sub>jonh.doe@example.com</sub>
                        </Table.Cell>
                        <Table.Cell justify="start" className="align-middle">
                          Event Name
                        </Table.Cell>
                        <Table.Cell justify="start" className="align-middle">
                          Questions
                        </Table.Cell>
                        <Table.Cell justify="start" className="align-middle">
                          <a href="#" className="text-blue-600">
                            Meeting Link
                          </a>
                        </Table.Cell>
                        <Table.Cell justify="start" className="align-middle">
                          Actions
                        </Table.Cell>
                      </Table.Row>
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

// Time | Attendee (hover for email address) | Questions | Link | dropdown options (reschedule, cancel)
