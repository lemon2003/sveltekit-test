import type { Plugin } from "unified";
import type { Node } from "unist";
import type { VFileCompatible } from "vfile";
import { inspectColor } from "unist-util-inspect";

export const inspectCurrent: Plugin = () => {
  return (tree: Node, file: VFileCompatible) => {
    console.log(inspectColor(tree));
  };
};
