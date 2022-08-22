import { getFirestore, type Timestamp } from "firebase-admin/firestore";
import { getFirebaseApp } from "$firebase/server/getFirebaseApp";
import { formatLong } from "$lib/dateFormatters";

type MetaDocType = {
  title: string;
  published: Timestamp;
  updated: Timestamp;
};

export const get: import("./__types/index").RequestHandler = async ({ params }) => {
  const app = getFirebaseApp();
  const firestore = getFirestore();

  const metaDoc = await firestore.doc(`/articlesMeta/${params.slug}`).get();
  const contentDoc = await firestore.doc(`/articlesContent/${params.slug}`).get();

  const isExist = metaDoc.exists && contentDoc.exists;

  if (isExist) {
    const { title, published, updated } = metaDoc.data() as MetaDocType;
    const content = contentDoc.get("content") as string;

    return {
      status: 200,
      body: {
        meta: {
          title,
          published: formatLong(published.toDate()),
          updated: formatLong(updated.toDate())
        },
        content
      }
    };
  } else {
    return {
      status: 404
    };
  }
};
