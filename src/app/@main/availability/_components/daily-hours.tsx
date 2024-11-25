import { Checkbox, Flex, Text, TextField } from '@radix-ui/themes';

interface Props {
  weekDay: string;
}

export function DailyHours({ weekDay }: Props) {
  return (
    <Flex gap="2" justify="between" align="center">
      <Text as="label" size="2">
        <Checkbox className="mr-2" />
        {weekDay}
      </Text>

      <Flex gap="2">
        <TextField.Root className="max-w-16" /> -
        <TextField.Root className="max-w-16" />
      </Flex>
    </Flex>
  );
}
