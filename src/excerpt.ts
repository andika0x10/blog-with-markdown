function clean(markdown: string) {
  return markdown
    .replace(/\$([^$\n]+)\$/g, (_, tex: string) => tex.replace(/\\[a-zA-Z]+/g, "").replace(/[{}\\]/g, ""))
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/^\s{0,3}(#{1,6}|>|[-*+]|\d+\.)\s+/gm, "")
    .replace(/[*`~]/g, "")
    .replace(/(^|[\s(])_+|_+(?=[\s).,;:!?]|$)/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

/** Plain-text summary of a markdown body, for meta descriptions. */
export function excerpt(markdown: string, max = 160) {
  const paragraphs = markdown
    .replace(/```[\s\S]*?```/g, "")
    .replace(/\$\$[\s\S]*?\$\$/g, "")
    .split(/\n\s*\n/)
    .map(clean)
    .filter(Boolean);

  let text = "";
  for (const p of paragraphs) {
    text = text ? `${text} ${p}` : p;
    if (text.length >= 60) break;
  }

  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  return cut.slice(0, cut.lastIndexOf(" ")).replace(/[.,;:!?\s]+$/, "") + "…";
}
