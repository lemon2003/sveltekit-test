import rehypeStringify from "rehype-stringify";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkParse from "remark-parse";
import remarkPrism from "remark-prism";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

export const markdown2html = async (markdown: string) => {
  const processor = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkBreaks)
    .use(remarkMath, { singleDollarTextMath: true })
    .use(remarkPrism)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeStringify, { allowDangerousHtml: true });
  return processor.process(markdown);
};
