import type mdast from "mdast";
import type xmdast from "$lib/markdown/xmdast";
import { isRoot as isMdastRoot } from "./util-is/mdast-util-is";
import { isRoot as isXmdastRoot } from "$lib/markdown/util-is/xmdast-util-is";

declare module "mdast" {
  interface Root {
    fragment?: boolean;
  }
}

type MdastFragmentRoot = mdast.Root & { fragment: true };

type XmdastFragmentRoot = xmdast.Root & { fragment: true };

export const toMdastFragment = (node: mdast.Parent): MdastFragmentRoot => ({
  ...node,
  type: "root",
  fragment: true
});

export const toXmdastFragment = (node: xmdast.Parent): XmdastFragmentRoot => ({
  ...node,
  type: "root",
  fragment: true
});

export const isMdastFragment = (node: mdast.Content | mdast.Root): node is MdastFragmentRoot =>
  isMdastRoot(node) && node?.fragment === true;

export const isXmdastFragment = (node: xmdast.Content | xmdast.Root): node is XmdastFragmentRoot =>
  isXmdastRoot(node) && node?.fragment === true;
