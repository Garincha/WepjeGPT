// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import admin from 'firebase-admin';
import query from "../../lib/queryApi";
import { adminDb } from "../../firebaseAdmin";

type Data = {
  answer: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const { prompt, chatId, model, session } = req.body;

  if (!prompt || !chatId) {
    res.status(400).json({ answer: "Missing parameters" });
    return;
  }

// ChatGT Query
const response = await query(prompt, chatId, model);

const message: Message = {
  text: response || "WepjeGPT was unable to answer your question. Please try again later",
  createdAt: admin.firestore.Timestamp.now(),
  user: {
    _id: "WepjeGPT",
    name: "WepjeGPT",
    avatar: "/../logo.png",
  },
};
await adminDb.collection("users").doc(session?.user?.email).collection("chats").doc(chatId).collection("messages").add(message);

  res.status(200).json({ answer: message.text });
}
