'use client';

import {
  Avatar,
  Button,
  Flex,
  Grid,
  Heading,
  Select,
  Separator,
  Text,
  TextArea,
  TextField,
} from '@radix-ui/themes';
import { allTimezones, useTimezoneSelect } from 'react-timezone-select';
import { saveSettings } from './settings-actions';

export default function Settings() {
  const { options } = useTimezoneSelect({
    labelStyle: 'altName',
    timezones: allTimezones,
  });

  return (
    <>
      <Heading>Settings</Heading>

      <Separator size="4" className="my-4 mt-[5.75rem]" />

      <form action={saveSettings} className="md:max-w-xl">
        <Grid gap="4">
          <Flex gap="2" align="center" direction="column">
            <Avatar fallback="JD" size="7" />

            <Button className="hover:cursor-pointer" variant="outline">
              Upload picture
            </Button>
          </Flex>

          <label>
            <Text as="div" mb="1" weight="bold">
              Name
            </Text>
            <TextField.Root placeholder="Your name" name="name" />
          </label>

          <label>
            <Text as="div" mb="1" weight="bold">
              Email
            </Text>
            <TextField.Root
              name="email"
              disabled={true}
              defaultValue="john.doe@example.com"
            />
          </label>

          <label>
            <Text as="div" mb="1" weight="bold">
              Calendars URL prefix
            </Text>
            <TextField.Root
              name="link"
              placeholder="Choose a URL prefix"
              defaultValue="john-doe"
            >
              <TextField.Slot className="mr-2 w-6 justify-center rounded-l bg-slate-200">
                /
              </TextField.Slot>
            </TextField.Root>
          </label>

          <label>
            <Text as="div" mb="1" weight="bold">
              Welcome message
            </Text>
            <TextArea
              placeholder="Welcome Message"
              name="welcome-message"
              resize="vertical"
            />
          </label>

          <label>
            <Text as="div" mb="1" weight="bold">
              Timezone
            </Text>
            <Select.Root
              name="timezone"
              defaultValue={Intl.DateTimeFormat().resolvedOptions().timeZone}
            >
              <Select.Trigger className="w-full" />
              <Select.Content>
                {options.map(({ label, value }) => (
                  <Select.Item key={value} value={value}>
                    {label}
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Root>
          </label>
        </Grid>

        <Button type="submit" className="mt-4 hover:cursor-pointer">
          Save changes
        </Button>
      </form>
    </>
  );
}
