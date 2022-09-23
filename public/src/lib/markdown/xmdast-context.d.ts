import type xmdast from "$lib/markdown/xmdast";

export interface ExportedFootnoteDefinition {
  identifier: string;
  children: xmdast.FootnoteDefinition["children"];
  refAnchor: string;
  defAnchor: string;
}

export interface TocItem {
  text: string;
  anchor: string;
  depth: number;
}

export interface ExportedContext {
  footnoteDefinitions?: ExportedFootnoteDefinition[];
  toc?: TocItem[];
}
