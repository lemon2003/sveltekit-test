import rehypeMathjax from "rehype-mathjax";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkParse from "remark-parse";
import remarkPrism from "remark-prism";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

export const markdown2html = async (markdown: string) => {
  // TODO: make processor recoginize markdown notation included in raw html
  const processor = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkBreaks)
    .use(remarkMath)
    .use(remarkPrism)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeMathjax)
    .use(rehypeStringify, { allowDangerousHtml: true });
  return processor.process(markdown);
};
