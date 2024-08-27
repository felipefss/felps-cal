import { ChevronDownIcon } from '@radix-ui/react-icons';
import { Button, DropdownMenu } from '@radix-ui/themes';

export function ActionsDropdown() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button variant="outline" className="hover:cursor-pointer">
          Actions
          <ChevronDownIcon />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content sideOffset={5} variant="soft">
        <DropdownMenu.Item className="hover:cursor-pointer">
          Reschedule
        </DropdownMenu.Item>
        <DropdownMenu.Item className="hover:cursor-pointer">
          {/* Don't display in Past events */}
          Cancel
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
