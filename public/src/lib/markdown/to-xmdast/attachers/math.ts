import katex from "katex";
import type xmdast from "$lib/markdown/xmdast";
import { isInlineMath, isMath } from "$lib/markdown/util-is/mdast-util-is";
import type { Transformer, Visitor } from "../types";

export const mathTransformer: Transformer = (tree, context) => {
  const visitor: Visitor = (node) => {
    const isDisplayMode = isMath(node);
    const isAnyMath = isDisplayMode || isInlineMath(node);
    if (!isAnyMath) return;

    const html = katex.renderToString(node.value, {
      displayMode: isDisplayMode
    });

    Object.assign(node, {
      value: html
    } as xmdast.Math | xmdast.InlineMath);
  };

  return { visitor };
};
