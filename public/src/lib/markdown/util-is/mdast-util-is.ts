import type mdast from "mdast";
import type unist from "unist";

export const isRoot = (node: unist.Node): node is mdast.Root => node.type === "root";
export const isBlockquote = (node: unist.Node): node is mdast.Blockquote =>
  node.type === "blockquote";
export const isBreak = (node: unist.Node): node is mdast.Break => node.type === "break";
export const isCode = (node: unist.Node): node is mdast.Code => node.type === "code";
export const isDefinition = (node: unist.Node): node is mdast.Definition =>
  node.type === "definition";
export const isEmphasis = (node: unist.Node): node is mdast.Emphasis => node.type === "emphasis";
export const isHeading = (node: unist.Node): node is mdast.Heading => node.type === "heading";
export const isHTML = (node: unist.Node): node is mdast.HTML => node.type === "html";
export const isImage = (node: unist.Node): node is mdast.Image => node.type === "image";
export const isImageReference = (node: unist.Node): node is mdast.ImageReference =>
  node.type === "imageReference";
export const isInlineCode = (node: unist.Node): node is mdast.InlineCode =>
  node.type === "inlineCode";
export const isLink = (node: unist.Node): node is mdast.Link => node.type === "link";
export const isLinkReference = (node: unist.Node): node is mdast.LinkReference =>
  node.type === "linkReference";
export const isList = (node: unist.Node): node is mdast.List => node.type === "list";
export const isListItem = (node: unist.Node): node is mdast.ListItem => node.type === "listItem";
export const isParagraph = (node: unist.Node): node is mdast.Paragraph => node.type === "paragraph";
export const isStrong = (node: unist.Node): node is mdast.Strong => node.type === "strong";
export const isText = (node: unist.Node): node is mdast.Text => node.type === "text";
export const isThematicBreak = (node: unist.Node): node is mdast.ThematicBreak =>
  node.type === "thematicBreak";
export const isDelete = (node: unist.Node): node is mdast.Delete => node.type === "delete";
export const isFootnote = (node: unist.Node): node is mdast.Footnote => node.type === "footnote";
export const isFootnoteDefinition = (node: unist.Node): node is mdast.FootnoteDefinition =>
  node.type === "footnoteDefinition";
export const isFootnoteReference = (node: unist.Node): node is mdast.FootnoteReference =>
  node.type === "footnoteReference";
export const isTable = (node: unist.Node): node is mdast.Table => node.type === "table";
export const isTableCell = (node: unist.Node): node is mdast.TableCell => node.type === "tableCell";
export const isTableRow = (node: unist.Node): node is mdast.TableRow => node.type === "tableRow";

// extra
export const isMath = (node: unist.Node): node is import("mdast-util-math").Math => node.type === "math";
export const isInlineMath = (node: unist.Node): node is import("mdast-util-math").InlineMath => node.type === "inlineMath";
