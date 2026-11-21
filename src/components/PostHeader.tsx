import { formatDateTime } from "../site";

type Props = {
  title: string;
  datetime: Date;
};

export default function PostHeader({ title, datetime }: Props) {
  return (
    <header>
      <h1 className="text-2xl leading-snug font-semibold sm:text-3xl">{title}</h1>
      <time dateTime={datetime.toISOString()} className="mt-4 block text-mute">
        {formatDateTime(datetime)}
      </time>
    </header>
  );
}
