"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";

function login() {
  return (
    <div className="bg-[#00b0ff] h-screen flex flex-col items-center justify-center text-center">
      <Image src="/./logo.png" width={300} height={300} alt="logo" />
      <button
        onClick={() => signIn("google")}
        className="text-white font-bold text-3xl animate-pulse"
      >
        Sign In to use WepjeGPT
      </button>
    </div>
  );
}

export default login;
