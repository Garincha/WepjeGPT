"use client";

import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import React, { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { db } from "../firebase";

type Props = {
  chatId: string;
};

function ChatInput({ chatId }: Props) {
  const [prompt, setPrompt] = useState("");
  const { data: session } = useSession();

  //TODO: useSWR to fetch model
  const model = "text-davinci-003";

  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!prompt) return;

    const input = prompt.trim(); //remove whitespace
    setPrompt("");

    //message from typings.d.ts
    const message: Message = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avatar:
          session?.user?.image! ||
          `https://ui-avatars.com/api/?name=${session?.user?.email!}`,
      },
    };

    //add message to firestore
    await addDoc(
      collection(
        db,
        "users",
        session?.user?.email!,
        "chats",
        chatId,
        "messages"
      ),
      message
    );

    // Toast notification to say loading
    const notification = toast.loading("Thinking...");

    await fetch("/api/askQuestion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: input,
        chatId,
        model,
        session,
      }),
    }).then(() => {
      console.log("Question sent");
      toast.success("Success!", {
        id: notification,
      });
    });
  };

  return (
    <div className="bg-gray-700/80 text-gray-200 rounded-lg text-sm mx-1 mb-1">
      <form onSubmit={sendMessage} className="p-5 space-x-5 flex">
        <input
          disabled={!session}
          className=" flex-1 bg-transparent focus:outline-none disabled:cursor-not-allowed disabled:text-gray-400"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)} //so you can see what you type
          type="text"
          placeholder="Type a message here..."
        />
        <button
          disabled={!prompt || !session}
          type="submit"
          className="bg-[#00b0ff] px-4 py-2 rounded-lg text-white font-bold hover:opacity-50 disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-gray-400"
        >
          <PaperAirplaneIcon className="h-4 w-4 -rotate-45" />
        </button>
        <div>{/* Modelselection */}</div>
      </form>
    </div>
  );
}

export default ChatInput;
