import { HoverCard, Strong, Table } from '@radix-ui/themes';
import { QuestionsPopover } from './questions-popover';
import { ActionsDropdown } from './actions-dropdown';

export function Event() {
  return (
    <Table.Row>
      <Table.Cell justify="start" className="align-middle">
        10:00 - 10:30
      </Table.Cell>

      <Table.Cell justify="start" className="align-middle">
        <HoverCard.Root>
          <HoverCard.Trigger>
            <p>
              <Strong>John Doe</Strong>
            </p>
          </HoverCard.Trigger>
          <HoverCard.Content alignOffset={-55}>
            jonh.doe@example.com
          </HoverCard.Content>
        </HoverCard.Root>
      </Table.Cell>

      <Table.Cell justify="start" className="align-middle">
        Event Name
      </Table.Cell>

      <Table.Cell justify="start" className="align-middle">
        <QuestionsPopover />
      </Table.Cell>

      <Table.Cell justify="start" className="align-middle">
        <a href="#" className="text-blue-600">
          {/* Don't display in Past events */}
          Meeting Link
        </a>
      </Table.Cell>

      <Table.Cell justify="start" className="align-middle">
        <ActionsDropdown />
      </Table.Cell>
    </Table.Row>
  );
}
