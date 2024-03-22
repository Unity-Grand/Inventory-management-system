import React from "react";
import Form from "../components/Form";

export default function Login() {
  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <Form />
      </div>
      <div className="hidden relative lg:flex h-full items-center justify-center w-1/2  bg-gray-200">
        <div className="w-60 h-60 bg-gradient-to-tr from-gray-800 to-gray-200 rounded-full animate-bounce"></div>
        <div className="w-full absolute bottom-0 h-1/2  bg-white/10 backdrop-blur-lg "></div>
      </div>
    </div>
  );
}