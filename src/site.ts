export const SITE = {
  title: "Andika Dinata",
  description: "just an another blog :b",
  // Alamat publik situs tanpa garis miring di akhir, misalnya 'https://catatan.example.com'.
  // Kosong berarti canonical dan og:url tidak dibuat.
  url: "https://blog.andikadinata.workers.dev",
  lang: "id",
  locale: "id_ID",
  timeZone: "Asia/Jakarta",
} as const;

const base: Intl.DateTimeFormatOptions = {
  timeZone: SITE.timeZone,
  year: "numeric",
  month: "long",
  day: "numeric",
};

const dateFormat = new Intl.DateTimeFormat("en-US", base);
const dateTimeFormat = new Intl.DateTimeFormat("en-US", {
  ...base,
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
});

function pick(format: Intl.DateTimeFormat, date: Date) {
  return Object.fromEntries(format.formatToParts(date).map((p) => [p.type, p.value]));
}

/** September 21, 2026 */
export function formatDate(date: Date) {
  const p = pick(dateFormat, date);
  return `${p.month} ${p.day}, ${p.year}`;
}

/** September 21, 2026 18:06 (UTC+7) */
export function formatDateTime(date: Date) {
  const p = pick(dateTimeFormat, date);
  return `${p.month} ${p.day}, ${p.year} ${p.hour}:${p.minute}`;
}
