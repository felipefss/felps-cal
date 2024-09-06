import {
  Button,
  Dialog,
  Flex,
  Grid,
  Text,
  TextArea,
  TextField,
} from '@radix-ui/themes';
import { ReactNode } from 'react';
import { InviteeQuestions } from './invitee-questions';
import { Duration } from './duration';
import { createEventType } from '../new-event-action';

type Props = {
  children: ReactNode;
};

export function NewEventDialog({ children }: Props) {
  return (
    <Dialog.Root>
      <Dialog.Trigger>{children}</Dialog.Trigger>

      <Dialog.Content aria-describedby={undefined} minWidth="50rem">
        <Dialog.Title>New Event Type</Dialog.Title>

        <form action={createEventType}>
          <Grid columns="0.8fr 1fr" gap="8rem">
            <Flex direction="column" gap="4">
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Event name
                </Text>
                <TextField.Root placeholder="Name your event" name="name" />
              </label>

              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Duration
                </Text>

                <Duration />
              </label>

              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Description
                </Text>
                <TextArea
                  rows={4}
                  placeholder="Write a summary or any details your invitee should know about the event"
                  name="description"
                />
              </label>
            </Flex>

            <InviteeQuestions />
          </Grid>

          <footer className="mt-4 flex justify-end gap-2">
            <Dialog.Close>
              <Button
                variant="soft"
                color="gray"
                className="hover:cursor-pointer"
                type="button"
              >
                Cancel
              </Button>
            </Dialog.Close>

            <Dialog.Close>
              <Button className="hover:cursor-pointer" type="submit">
                Save
              </Button>
            </Dialog.Close>
          </footer>
        </form>
      </Dialog.Content>
    </Dialog.Root>
  );
}
