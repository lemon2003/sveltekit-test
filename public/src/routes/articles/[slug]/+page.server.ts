import { getFirestore, type Timestamp } from "firebase-admin/firestore";
import { getFirebaseApp } from "$firebase/server/getFirebaseApp";
import { formatLong } from "$lib/dateFormatters";
import { error } from "@sveltejs/kit";

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
    const content = contentDoc.get("content") as string;

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
