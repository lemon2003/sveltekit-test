import { error } from "@sveltejs/kit";
import { getFirestore, type Timestamp } from "firebase-admin/firestore";
import { getFirebaseApp } from "$firebase/server/getFirebaseApp";
import { formatLong } from "$lib/dateFormatters";
import { markdown2ast } from "$lib/markdown/markdown2ast";

type MetaDocType = {
  title: string;
  published: Timestamp;
  updated: Timestamp;
};

export const load: import("./$types").PageServerLoad = async ({ params }) => {
  const app = getFirebaseApp();
  const firestore = getFirestore(app);

  const metaDoc = await firestore.doc(`/articlesMeta/${params.slug}`).get();
  const contentDoc = await firestore.doc(`/articlesContent/${params.slug}`).get();

  const isExist = metaDoc.exists && contentDoc.exists;

  if (isExist) {
    const { title, published, updated } = metaDoc.data() as MetaDocType;
    const contentRawMarkdown = contentDoc.get("content") as string;

    const contentMarkdown = contentRawMarkdown
      .split("\\\\")
      .map((v) => v.split("\\n").join("\n"))
      .join("\\");

    const content = await markdown2ast(contentMarkdown);

    return {
      meta: {
        title,
        published: formatLong(published.toDate()),
        updated: formatLong(updated.toDate())
      },
      content
    };
  } else {
    return error(404);
  }
};
