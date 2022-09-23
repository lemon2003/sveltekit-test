import rehypeParse from "rehype-parse";
import { unified } from "unified";
import type xmdast from "$lib/markdown/xmdast";
import { isHTML } from "$lib/markdown/util-is/mdast-util-is";
import type { Transformer, Visitor } from "../types";

export const htmlTransformer: Transformer = (tree, context) => {
  const visitor: Visitor = (node) => {
    if (!isHTML(node)) return;

    const hast = unified().use(rehypeParse, { fragment: true }).parse(node.value);

    Object.assign(node, {
      type: "parsedHtml",
      hast
    } as xmdast.ParsedHTML);
  };
  return { visitor };
};
