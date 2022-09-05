import * as env from "$env/static/private";
import { initializeApp, cert, getApps, getApp } from "firebase-admin/app";

export const getFirebaseApp = () => {
  if (getApps().length) {
    return getApp();
  } else {
    return initializeApp({
      credential: cert({
        projectId: env.FIREBASE_PROJECT_ID,
        clientEmail: env.FIREBASE_CLIENT_EMAIL,
        privateKey: env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n")
      }),
      databaseURL: env.FIREBASE_DATABASE_URL
    });
  }
};
