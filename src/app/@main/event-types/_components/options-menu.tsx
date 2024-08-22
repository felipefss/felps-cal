import { DropdownMenu } from '@radix-ui/themes';
import { DotsVerticalIcon } from '@radix-ui/react-icons';
import { IconButton } from '@radix-ui/themes';

export function OptionsMenu() {
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
        <DropdownMenu.Item className="hover:cursor-pointer">
          Edit
        </DropdownMenu.Item>
        <DropdownMenu.Item className="hover:cursor-pointer">
          Delete
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
