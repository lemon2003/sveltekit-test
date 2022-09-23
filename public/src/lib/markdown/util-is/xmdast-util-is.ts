import type xmdast from "$lib/markdown/xmdast";
import type unist from "unist";

export const isRoot = (node: unist.Node): node is xmdast.Root => node.type === "root";
export const isBlockquote = (node: unist.Node): node is xmdast.Blockquote =>
  node.type === "blockquote";
export const isBreak = (node: unist.Node): node is xmdast.Break => node.type === "break";
export const isCode = (node: unist.Node): node is xmdast.Code => node.type === "code";
export const isEmphasis = (node: unist.Node): node is xmdast.Emphasis => node.type === "emphasis";
export const isHeading = (node: unist.Node): node is xmdast.Heading => node.type === "heading";
export const isRawHTML = (node: unist.Node): node is xmdast.RawHTML => node.type === "rawHtml";
export const isParsedHTML = (node: unist.Node): node is xmdast.ParsedHTML => node.type === "html";
export const isImage = (node: unist.Node): node is xmdast.Image => node.type === "image";
export const isInlineCode = (node: unist.Node): node is xmdast.InlineCode =>
  node.type === "inlineCode";
export const isLink = (node: unist.Node): node is xmdast.Link => node.type === "link";
export const isList = (node: unist.Node): node is xmdast.List => node.type === "list";
export const isListItem = (node: unist.Node): node is xmdast.ListItem => node.type === "listItem";
export const isParagraph = (node: unist.Node): node is xmdast.Paragraph => node.type === "paragraph";
export const isStrong = (node: unist.Node): node is xmdast.Strong => node.type === "strong";
export const isText = (node: unist.Node): node is xmdast.Text => node.type === "text";
export const isThematicBreak = (node: unist.Node): node is xmdast.ThematicBreak =>
  node.type === "thematicBreak";
export const isDelete = (node: unist.Node): node is xmdast.Delete => node.type === "delete";
export const isFootnoteReference = (node: unist.Node): node is xmdast.FootnoteReference =>
  node.type === "footnoteReference";
export const isTable = (node: unist.Node): node is xmdast.Table => node.type === "table";
export const isTableCell = (node: unist.Node): node is xmdast.TableCell => node.type === "tableCell";
export const isTableRow = (node: unist.Node): node is xmdast.TableRow => node.type === "tableRow";
