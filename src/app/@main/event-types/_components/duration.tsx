'use client';

import { Flex, Select, TextField, Text } from '@radix-ui/themes';
import { ChangeEvent, useState } from 'react';

type Duration = '15' | '30' | '45' | '60' | 'custom';

export function Duration() {
  const [duration, setDuration] = useState<Duration>('30');
  const [customDuration, setCustomDuration] = useState('30');

  const handleDurationChange = (value: string) => {
    setDuration(value as Duration);
  };

  const handleCustomDurationChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCustomDuration(e.target.value);
  };

  return (
    <>
      <Select.Root
        value={duration}
        onValueChange={handleDurationChange}
        name="duration"
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
        <Flex gap="2" mt="2" justify="start" align="center">
          <TextField.Root
            type="number"
            className="w-12"
            value={customDuration}
            onChange={handleCustomDurationChange}
            name="custom-duration"
          />
          <Text as="span" size="2">
            mins
          </Text>
        </Flex>
      )}
    </>
  );
}
