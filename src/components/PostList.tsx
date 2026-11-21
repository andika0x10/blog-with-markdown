import { formatDate } from "../site";

type Post = {
  id: string;
  title: string;
  datetime: Date;
};

export default function PostList({ posts }: { posts: Post[] }) {
  if (posts.length === 0) {
    return <p className="text-mute">Belum ada tulisan. Tambahkan file .md di src/content/posts.</p>;
  }

  return (
    <ul className="space-y-8 sm:space-y-6">
      {posts.map((post) => (
        <li key={post.id} className="grid gap-1 sm:grid-cols-[18ch_1fr] sm:gap-x-8">
          <time dateTime={post.datetime.toISOString()} className="text-mute">
            {formatDate(post.datetime)}
          </time>
          <a href={`/posts/${post.id}`} className="underline decoration-neutral-300 underline-offset-4 hover:decoration-black">
            {post.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
