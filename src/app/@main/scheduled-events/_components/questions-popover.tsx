import { ChevronDownIcon } from '@radix-ui/react-icons';
import { Button, Heading, Popover } from '@radix-ui/themes';

export function QuestionsPopover() {
  return (
    <Popover.Root>
      <Popover.Trigger>
        <Button variant="outline" className="hover:cursor-pointer">
          Questions <ChevronDownIcon />
        </Button>
      </Popover.Trigger>

      <Popover.Content size="1">
        <div className="mb-2 last:mb-0">
          <Heading size="3">Company name</Heading>
          Home
        </div>

        <div>
          <Heading size="3">
            Please add anything that will help me prepare for the meeting
          </Heading>
          Tests
        </div>
      </Popover.Content>
    </Popover.Root>
  );
}
