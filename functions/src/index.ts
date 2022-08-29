import * as functions from "firebase-functions";
import express from "express";
import { handler } from "public/build/handler.js";

const app = express();
app.use(handler);

export const ssr = functions.region("asia-northeast1").https.onRequest(app);
