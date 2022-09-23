import type mdast from "mdast";
import Multimap from "multimap";
import type xmdast from "$lib/markdown/xmdast";
import type { Transformer, PostProcessor, Visitor } from "../types";
import { type NodeRelativity, deleteNodeFromTree, flattenNodeOfTree } from "../util";
import {
  isDefinition,
  isImageReference,
  isLinkReference
} from "$lib/markdown/util-is/mdast-util-is";

export const definitionTransformer: Transformer = () => {
  const defs = new Multimap<string, NodeRelativity<mdast.Definition>>();
  const refs = new Multimap<string, NodeRelativity<mdast.LinkReference | mdast.ImageReference>>();

  const visitor: Visitor = (node, index, parent) => {
    if (isDefinition(node)) {
      defs.set(node.identifier, [node, parent!]);
    } else if (isLinkReference(node) || isImageReference(node)) {
      refs.set(node.identifier, [node, parent!]);
    }
  };

  const postProcessor: PostProcessor = () => {
    refs.forEachEntry((refEntry, identifier) => {
      if (!defs.has(identifier)) return;

      // get primary def node rel from defs
      const def = defs.get(identifier)[0];
      const [defNode] = def;

      // delete all refs and primary def
      refs.delete(identifier);
      defs.delete(identifier, def);
      deleteNodeFromTree(def);

      // resolve all refs
      refEntry.forEach(([refNode]) => {
        if (refNode.type === "linkReference") {
          Object.assign(refNode, {
            type: "link",
            url: defNode.url,
            title: defNode.title
          } as xmdast.Link);
        } else {
          Object.assign(refNode, {
            type: "image",
            url: defNode.url,
            title: defNode.title
          } as xmdast.Image);
        }
      });

      // flatten all unresolved nodes
      refs.forEach(flattenNodeOfTree);
      defs.forEach(flattenNodeOfTree);
    });
  };

  return { visitor, postProcessor };
};
