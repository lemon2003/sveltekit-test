import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkParse from "remark-parse";
import { unified } from "unified";
import { toXmdastAttached } from "./to-xmdast/toXmdastAttached";

export const markdown2ast = async (markdown: string) => {
  const mdast = unified().use(remarkParse).use(remarkGfm).use(remarkMath).parse(markdown);

  const transformedMdast = await unified().use(remarkBreaks).run(mdast);

  const result = toXmdastAttached(transformedMdast);

  return result;
};
