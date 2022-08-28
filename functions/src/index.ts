import * as functions from "firebase-functions";
import express from "express";
// @ts-ignore
import { handler } from "./sveltekit/handler.ts";

const app = express();
app.use(handler);

export const ssr = functions.https.onRequest(app);
