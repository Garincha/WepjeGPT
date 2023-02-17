"use client";

import { useSession, signOut } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import React from "react";
import NewChat from "./NewChat";
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import ChatRow from "./ChatRow";

function SideBar() {
  const { data: session } = useSession();

  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session.user?.email!, "chats"),
        orderBy("createdAt", "asc")
      )
  );

  console.log(chats);
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          {/* NewChat */}
          <NewChat />

          <div> {/*ModelSelector*/} </div>
          {/* Map through ChatRows */}
          {chats?.docs.map((chat) => (
            <ChatRow key={chat.id} id={chat.id} />
          ))}
        </div>
      </div>

      {session && (
        <div>
          <img
            src={session.user?.image!}
            alt="Profile Picture"
            className="rounded-full h-12 w-12 cursor-pointer mx-auto mb-2 hover:opacity-50 transition duration-150 ease-out"
          />
          <button
            onClick={() => signOut()}
            className="cursor-pointer text-white text-center text-xs mx-auto mb-2 flex items-center justify-center"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}

export default SideBar;
