import type mdast from "mdast";

export type NodeRelativity<TCurrentNode extends mdast.Content = mdast.Content> = [
  TCurrentNode,
  mdast.Parent
];

export const deleteNodeFromTree = ([node, parent]: NodeRelativity) => {
  const index = parent.children.indexOf(node);
  if (index < 0) return;

  parent.children.splice(index, 1);
};

export const flattenNodeOfTree = ([node, parent]: NodeRelativity) => {
  const index = parent.children.indexOf(node);
  if (index < 0) return;

  if ("children" in node) {
    parent.children.splice(index, 1, ...node.children);
  } else {
    parent.children.splice(index, 1);
  }
};
