import { CopyIcon } from '@radix-ui/react-icons';
import { Card, Text, Heading, Link } from '@radix-ui/themes';
import { OptionsMenu } from './options-menu';

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

          <OptionsMenu />
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
