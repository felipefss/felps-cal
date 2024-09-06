import {
  Avatar,
  Button,
  Flex,
  Grid,
  Heading,
  Separator,
  Text,
  TextArea,
  TextField,
} from '@radix-ui/themes';

export default function Settings() {
  return (
    <>
      <Heading>Settings</Heading>

      <Separator size="4" className="my-4 mt-[5.75rem]" />

      <section className="md:max-w-xl">
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
              value="john.doe@example.com"
            />
          </label>

          <label>
            <Text as="div" mb="1" weight="bold">
              Link prefix
            </Text>
            <TextField.Root
              name="link"
              placeholder="Choose a URL prefix"
              value="john-doe"
            >
              <TextField.Slot className="mr-2 rounded-l bg-slate-200">
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
            <TextField.Root name="timezone" />
          </label>
        </Grid>

        <Button className="mt-4">Save changes</Button>
      </section>
    </>
  );
}

/**
 * name
 * email - readonly
 * link
 * welcome message
 * Country (maybe not needed)
 * time zone
 * avatar
 *
 */
