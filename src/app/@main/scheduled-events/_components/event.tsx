import { Button, Popover, Table } from '@radix-ui/themes';
import { QuestionsPopover } from './questions-popover';
import { ActionsDropdown } from './actions-dropdown';

export function Event() {
  return (
    <Table.Row>
      <Table.Cell justify="start" className="align-middle">
        10:00 - 10:30
      </Table.Cell>
      <Table.Cell justify="start" className="align-middle">
        <p>
          <strong>John Doe</strong>
        </p>
        <sub>jonh.doe@example.com</sub>
      </Table.Cell>
      <Table.Cell justify="start" className="align-middle">
        Event Name
      </Table.Cell>
      <Table.Cell justify="start" className="align-middle">
        <QuestionsPopover />
      </Table.Cell>
      <Table.Cell justify="start" className="align-middle">
        <a href="#" className="text-blue-600">
          Meeting Link
        </a>
      </Table.Cell>
      <Table.Cell justify="start" className="align-middle">
        <ActionsDropdown />
      </Table.Cell>
    </Table.Row>
  );
}

// Time | Attendee (hover for email address) | Questions | Link | dropdown options (reschedule, cancel)
