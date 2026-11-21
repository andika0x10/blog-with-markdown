import { SITE } from "../site";

export default function SiteHeader() {
  return (
    <header>
      <a href="/" className="font-semibold underline-offset-4 hover:underline">
        {SITE.title}
      </a>
    </header>
  );
}
