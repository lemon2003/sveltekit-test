import type xmdast from "$lib/markdown/xmdast";
import type { SvelteComponent } from "svelte";
import FallbackComponent from "./components/_fallback/index.svelte";
import BlockquoteComponent from "./components/Blockquote/index.svelte";
import BreakComponent from "./components/Break/index.svelte";
import CodeComponent from "./components/Code/index.svelte";
import DeleteComponent from "./components/Delete/index.svelte";
import EmphasisComponent from "./components/Emphasis/index.svelte";
import FootnoteReferenceComponent from "./components/FootnoteReference/index.svelte";
import HeadingComponent from "./components/Heading/index.svelte";
import ImageComponent from "./components/Image/index.svelte";
import InlineCodeComponent from "./components/InlineCode/index.svelte";
import LinkComponent from "./components/Link/index.svelte";
import ListComponent from "./components/List/index.svelte";
import ListItemComponent from "./components/ListItem/index.svelte";
import ParagraphComponent from "./components/Paragraph/index.svelte";
import ParsedHtmlComponent from "./components/ParsedHtml/index.svelte";
import RawHtmlComponent from "./components/RawHtml/index.svelte";
import StrongComponent from "./components/Strong/index.svelte";
import TableComponent from "./components/Table/index.svelte";
import TableCellComponent from "./components/TableCell/index.svelte";
import TableRowComponent from "./components/TableRow/index.svelte";
import TextComponent from "./components/Text/index.svelte";
import ThematicBreakComponent from "./components/ThematicBreak/index.svelte";
import MathComponent from "./components/Math/index.svelte";
import InlineMathComponent from "./components/InlineMath/index.svelte";

const components = new Map<(xmdast.Content | xmdast.Root)["type"], typeof SvelteComponent>([
  ["blockquote", BlockquoteComponent],
  ["break", BreakComponent],
  ["code", CodeComponent],
  ["delete", DeleteComponent],
  ["emphasis", EmphasisComponent],
  ["footnoteReference", FootnoteReferenceComponent],
  ["heading", HeadingComponent],
  ["image", ImageComponent],
  ["inlineCode", InlineCodeComponent],
  ["link", LinkComponent],
  ["list", ListComponent],
  ["listItem", ListItemComponent],
  ["paragraph", ParagraphComponent],
  ["parsedHtml", ParsedHtmlComponent],
  ["rawHtml", RawHtmlComponent],
  ["strong", StrongComponent],
  ["table", TableComponent],
  ["tableCell", TableCellComponent],
  ["tableRow", TableRowComponent],
  ["text", TextComponent],
  ["thematicBreak", ThematicBreakComponent],
  ["math", MathComponent],
  ["inlineMath", InlineMathComponent]
]);

export const switchComponent = (node: xmdast.Content | xmdast.Root) => {
  return components.get(node.type) ?? FallbackComponent;
};
