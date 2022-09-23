import Slugger from "github-slugger";
import type mdast from "mdast";
import { visit } from "unist-util-visit";
import type xmdast from "$lib/markdown/xmdast";
import type { Transformer, Context } from "./types";

export const toXmdast = (
  tree: mdast.Content | mdast.Root,
  attachers: Transformer[]
): xmdast.Root => {
  const context: Context = {
    shared: {
      slugger: new Slugger()
    },
    exported: {}
  };

  const attacherResults = attachers.map((attacher) => attacher(tree, context));

  visit(tree, (...param) => {
    attacherResults.forEach(({ visitor }) => {
      visitor && visitor(...param);
    });
  });

  attacherResults.forEach(({ postProcessor }) => {
    postProcessor && postProcessor();
  });

  return {
    ...(tree as xmdast.Root),
    exported: context.exported
  };
};
