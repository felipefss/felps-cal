'use client';

import {
  Button,
  Dialog,
  Flex,
  Grid,
  Select,
  Text,
  TextArea,
  TextField,
} from '@radix-ui/themes';
import { ReactNode, useState } from 'react';
import { InviteeQuestions } from './invitee-questions';

type Props = {
  children: ReactNode;
};

type Duration = '15' | '30' | '45' | '60' | 'custom';

export function NewEventDialog({ children }: Props) {
  const [duration, setDuration] = useState<Duration>('30');

  const handleDurationChange = (value: string) => {
    setDuration(value as Duration);
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger>{children}</Dialog.Trigger>

      <Dialog.Content minWidth="50rem">
        <Dialog.Title>New Event Type</Dialog.Title>

        <Grid columns="0.8fr 1fr" gap="8rem">
          <Flex direction="column" gap="4">
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Event name
              </Text>
              <TextField.Root placeholder="Name your event" />
            </label>

            <label>
              {/* TODO: convert "Duration" into its own component (after useing a 'form manager') */}
              <Text as="div" size="2" mb="1" weight="bold">
                Duration
              </Text>
              <Select.Root
                value={duration}
                onValueChange={handleDurationChange}
              >
                <Select.Trigger />
                <Select.Content>
                  <Select.Item value="15">15 minutes</Select.Item>
                  <Select.Item value="30">30 minutes</Select.Item>
                  <Select.Item value="45">45 minutes</Select.Item>
                  <Select.Item value="60">1 hour</Select.Item>
                  <Select.Item value="custom">Custom</Select.Item>
                </Select.Content>
              </Select.Root>

              {duration === 'custom' && (
                <Flex gap="2" mt="2" align="center">
                  <TextField.Root className="w-[5.5rem]" />
                  <Text as="div" size="2">
                    mins
                  </Text>
                </Flex>
              )}
            </label>

            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Description
              </Text>
              <TextArea
                rows={4}
                placeholder="Write a summary or any details your invitee should know about the event"
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
            >
              Cancel
            </Button>
          </Dialog.Close>

          <Dialog.Close>
            <Button className="hover:cursor-pointer">Save</Button>
          </Dialog.Close>
        </footer>
      </Dialog.Content>
    </Dialog.Root>
  );
}
