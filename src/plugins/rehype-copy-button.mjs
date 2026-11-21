/** Wraps every code block in a container with a copy button. */
export default function rehypeCopyButton() {
  const button = () => ({
    type: "element",
    tagName: "button",
    properties: { type: "button", className: ["copy-button"] },
    children: [{ type: "text", value: "Copy" }],
  });

  const walk = (node) => {
    if (!node.children) return;
    node.children = node.children.map((child) => {
      if (child.type === "element" && child.tagName === "pre") {
        return {
          type: "element",
          tagName: "div",
          properties: { className: ["code-block"] },
          children: [child, button()],
        };
      }
      walk(child);
      return child;
    });
  };

  return (tree) => walk(tree);
}
