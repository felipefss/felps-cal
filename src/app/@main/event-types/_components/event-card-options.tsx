import { DropdownMenu } from '@radix-ui/themes';
import { DotsVerticalIcon } from '@radix-ui/react-icons';
import { IconButton } from '@radix-ui/themes';

export function EventCardOptions() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <IconButton
          variant="ghost"
          className="hover:cursor-pointer"
          color="gray"
        >
          <DotsVerticalIcon color="black" />
        </IconButton>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content>
        <DropdownMenu.Item>Edit</DropdownMenu.Item>
        <DropdownMenu.Item>Delete</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
