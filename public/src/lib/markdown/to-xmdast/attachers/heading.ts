import { toString as mdastToString } from "mdast-util-to-string";
import { isHeading, isRoot } from "$lib/markdown/util-is/mdast-util-is";
import type xmdast from "$lib/markdown/xmdast";
import type { Transformer } from "../types";
import type { TocItem } from "$lib/markdown/xmdast-context";
import { isMdastFragment } from "$lib/markdown/util-fragment";

export const headingTransformer: Transformer = (tree, context) => {
  if (!isRoot(tree) || isMdastFragment(tree)) return {};

  const {
    shared: { slugger }
  } = context;

  const toc: TocItem[] = [];

  tree.children.forEach((node) => {
    if (isHeading(node)) {
      const { depth } = node;

      if (depth <= 3) {
        const text = mdastToString(node);
        const anchor = slugger.slug(text);

        toc.push({ text, anchor, depth });
        Object.assign(node, { anchor } as xmdast.Heading);
      }
    }
  });

  context.exported.toc = toc;

  return {};
};
