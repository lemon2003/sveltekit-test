import type mdast from "mdast";
import { toXmdast } from ".";
import { codeTransformer } from "./attachers/code";
import { definitionTransformer } from "./attachers/definition";
import { footnoteTransformer } from "./attachers/footnote";
import { headingTransformer } from "./attachers/heading";
import { htmlTransformer } from "./attachers/html";
import { mathTransformer } from "./attachers/math";

export const toXmdastAttached = (mdast: mdast.Content | mdast.Root) =>
  toXmdast(mdast, [
    headingTransformer,
    definitionTransformer,
    footnoteTransformer,
    codeTransformer,
    mathTransformer,
    htmlTransformer
  ]);
