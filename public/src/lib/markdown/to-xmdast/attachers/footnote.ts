import type mdast from "mdast";
import Multimap from "multimap";
import {
  isFootnote,
  isFootnoteDefinition,
  isFootnoteReference
} from "$lib/markdown/util-is/mdast-util-is";
import type xmdast from "$lib/markdown/xmdast";
import type { Transformer, PostProcessor, Visitor } from "../types";
import type { ExportedFootnoteDefinition } from "$lib/markdown/xmdast-context";
import { deleteNodeFromTree, flattenNodeOfTree, type NodeRelativity } from "../util";
import { toXmdastAttached } from "../toXmdastAttached";
import { isMdastFragment, toMdastFragment } from "$lib/markdown/util-fragment";

export const footnoteTransformer: Transformer = (tree, context) => {
  if (isMdastFragment(tree)) {
    const visitor: Visitor = (node, index, parent) => {
      if (isFootnoteDefinition(node) || isFootnoteReference(node)) {
        flattenNodeOfTree([node, parent!]);
      }
    };

    return { visitor };
  }

  const {
    shared: { slugger }
  } = context;

  const defs = new Multimap<string, NodeRelativity<mdast.FootnoteDefinition>>();
  const refs = new Multimap<string, NodeRelativity<mdast.FootnoteReference>>();

  const visitor: Visitor = (node, index, parent) => {
    if (isFootnoteDefinition(node)) {
      defs.set(node.identifier, [node, parent!]);
    } else if (isFootnoteReference(node)) {
      refs.set(node.identifier, [node, parent!]);
    }
  };

  const postProcessor: PostProcessor = () => {
    const extractedDefs: ExportedFootnoteDefinition[] = [];

    refs.forEachEntry((refEntry, identifier) => {
      if (!defs.has(identifier)) return;

      // get primary ref/def node rel from defs/refs
      const ref = refEntry[0];
      const def = defs.get(identifier)[0];
      const [refNode] = ref;
      const [defNode] = def;

      // delete primary def/ref
      refs.delete(identifier, ref);
      defs.delete(identifier, def);
      deleteNodeFromTree(def);

      // update def/ref anchor
      const refAnchor = slugger.slug(`footnote ref ${identifier}`);
      const defAnchor = slugger.slug(`footnote ${identifier}`);
      Object.assign(refNode, { refAnchor, defAnchor } as xmdast.FootnoteReference);

      // add def to list
      extractedDefs.push({
        identifier,
        children: toXmdastAttached(toMdastFragment(defNode)).children,
        refAnchor,
        defAnchor
      });
    });

    // flatten all unsolved nodes
    refs.forEach(flattenNodeOfTree);
    defs.forEach(flattenNodeOfTree);

    context.exported.footnoteDefinitions = extractedDefs;
  };

  return { visitor, postProcessor };
};
