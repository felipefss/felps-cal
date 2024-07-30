import { CopyIcon, DotsVerticalIcon } from '@radix-ui/react-icons';
import { Card, Text, Heading, IconButton, Link } from '@radix-ui/themes';

export function EventCard() {
  return (
    <Card asChild={true}>
      <article className="flex h-40 flex-col justify-between">
        <header className="flex items-start justify-between">
          <div>
            <Heading as="h2" size="4">
              Event name
            </Heading>
            <Text size="2" as="span" color="gray">
              30 mins
            </Text>
          </div>

          <IconButton
            variant="ghost"
            className="hover:cursor-pointer"
            color="gray"
          >
            <DotsVerticalIcon color="black" />
          </IconButton>
        </header>

        <footer>
          <Link asChild={true} className="float-right">
            <button type="button" className="flex items-center gap-2">
              <CopyIcon /> Copy URL
            </button>
          </Link>
        </footer>
      </article>
    </Card>
  );
}
