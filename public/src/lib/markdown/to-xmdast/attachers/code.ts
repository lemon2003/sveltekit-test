import Prism from "prismjs";
import loadLanguages from "prismjs/components/index";
import { isCode } from "$lib/markdown/util-is/mdast-util-is";
import type xmdast from "$lib/markdown/xmdast";
import type { Transformer, Visitor } from "../types";

export const codeTransformer: Transformer = (tree, context) => {
  const visitor: Visitor = (node) => {
    if (!isCode(node)) return;

    if (node.lang) {
      loadLanguages(node.lang);
      const html = Prism.highlight(node.value, Prism.languages[node.lang], node.lang);

      Object.assign(node, {
        value: html
      } as xmdast.Code);
    }
  };

  return { visitor };
};
