import { initializeApp, cert, getApps, getApp } from "firebase-admin/app";

export const getFirebaseApp = () => {
  if (getApps().length) {
    return getApp();
  } else {
    return initializeApp({
      credential: cert({
        projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
        clientEmail: import.meta.env.VITE_FIREBASE_CLIENT_EMAIL,
        privateKey: import.meta.env.VITE_FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n")
      }),
      databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL
    });
  }
};
