import type unist from "unist";
import type hast from "hast";
import type mdast from "mdast";
import type { ExportedContext } from "./xmdast-context";

export type AlignType = mdast.AlignType;

export type ReferenceType = mdast.ReferenceType;

export interface BlockContentMap {
  paragraph: Paragraph;
  heading: Heading;
  thematicbreak: ThematicBreak;
  blockquote: Blockquote;
  list: List;
  table: Table;
  rawHTML: RawHTML;
  parsedHTML: ParsedHTML;
  code: Code;
  math: Math;
}

export interface FrontmatterContentMap {
  yaml: YAML;
}

export interface StaticPhrasingContentMap {
  text: Text;
  emphasis: Emphasis;
  strong: Strong;
  delete: Delete;
  inlinecode: InlineCode;
  break: Break;
  image: Image;
  footnotereference: FootnoteReference;
  inlineMath: InlineMath;
}

export interface PhrasingContentMap extends StaticPhrasingContentMap {
  link: Link;
}

export interface ListContentMap {
  listItem: ListItem;
}

export interface TableContentMap {
  tableRow: TableRow;
}

export interface TableRowContentMap {
  tableCell: TableCell;
}

export type Content =
  | TopLevelContent
  | ListContent
  | TableContent
  | TableRowContent
  | PhrasingContent;

export type TopLevelContent = BlockContent | FrontmatterContent;

export type BlockContent = BlockContentMap[keyof BlockContentMap];

export type FrontmatterContent = FrontmatterContentMap[keyof FrontmatterContentMap];

export type ListContent = ListContentMap[keyof ListContentMap];

export type TableContent = TableContentMap[keyof TableContentMap];

export type TableRowContent = TableRowContentMap[keyof TableRowContentMap];

export type PhrasingContent = PhrasingContentMap[keyof PhrasingContentMap];

export type StaticPhrasingContent = StaticPhrasingContentMap[keyof StaticPhrasingContentMap];

export type Node = unist.Node;

export interface Parent extends Node {
  children: Content[];
}

export interface Literal extends Node {
  value: string;
}

export interface Root extends Parent {
  type: "root";
  fragment?: boolean;
  exported?: ExportedContext;
}

export interface Paragraph extends Parent {
  type: "paragraph";
  children: PhrasingContent[];
}

export interface Heading extends Parent {
  type: "heading";
  depth: 1 | 2 | 3 | 4 | 5 | 6;
  children: PhrasingContent[];
  anchor?: string;
}

export interface ThematicBreak extends Node {
  type: "thematicBreak";
}

export interface Blockquote extends Parent {
  type: "blockquote";
  children: (BlockContent | DefinitionContent)[];
}

export interface List extends Parent {
  type: "list";
  ordered?: boolean;
  start?: number;
  spread?: boolean;
  children: ListContent[];
}

export interface ListItem extends Parent {
  type: "listItem";
  checked?: boolean;
  spread?: boolean;
  children: (BlockContent | DefinitionContent)[];
}

export interface Table extends Parent {
  type: "table";
  align?: AlignType[];
  children: TableContent[];
}

export interface TableRow extends Parent {
  type: "tableRow";
  children: TableRowContent[];
}

export interface TableCell extends Parent {
  type: "tableCell";
  children: PhrasingContent[];
}

export interface RawHTML extends Literal {
  type: "rawHtml";
}

export interface ParsedHTML extends Node {
  type: "parsedHtml";
  hast: hast.Root;
}

export interface YAML extends Literal {
  type: "yaml";
}

export interface Code extends Literal {
  type: "code";
  lang: string;
}

export interface Text extends Literal {
  type: "text";
}

export interface Emphasis extends Parent {
  type: "emphasis";
  children: PhrasingContent[];
}

export interface Strong extends Parent {
  type: "strong";
  children: PhrasingContent[];
}

export interface Delete extends Parent {
  type: "delete";
  children: PhrasingContent[];
}

export interface InlineCode extends Literal {
  type: "inlineCode";
}

export interface Break extends Node {
  type: "break";
}

export interface Link extends Parent, Resource {
  type: "link";
  children: StaticPhrasingContent[];
}

export interface Image extends Node, Resource, Alternative {
  type: "image";
}

export interface FootnoteReference extends Node, Association {
  type: "footnoteReference";
  defAnchor?: string;
  refAnchor?: string;
}

export interface Resource {
  url: string;
  title?: string;
}

export interface Association {
  identifier: string;
  label?: string;
}

export interface Reference extends Association {
  referenceType: ReferenceType;
}

export interface Alternative {
  alt?: string;
}

export interface Math extends Literal {
  type: "math";
}

export interface InlineMath extends Literal {
  type: "inlineMath";
}
