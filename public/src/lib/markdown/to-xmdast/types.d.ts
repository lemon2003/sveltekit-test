import mdast from "mdast";
import type xmdast from "$lib/markdown/xmdast";
import type { ExportedContext } from "../xmdast-context";

export interface SharedContext {
  slugger: import("github-slugger");
}

export interface Context {
  shared: SharedContext;
  exported: ExportedContext;
}

export interface Visitor {
  (node: mdast.Content | mdast.Root, index: number | null, parent: mdast.Parent | null): void;
}

export interface PostProcessor {
  (): void;
}

export interface Transformer {
  (tree: mdast.Content | mdast.Root, context: Context): {
    visitor?: Visitor;
    postProcessor?: PostProcessor;
  };
}

