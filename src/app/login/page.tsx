// pages/login.tsx

import React from 'react';
import Head from 'next/head';

export default function Login() {
  return (
  <div className="bg-hero bg-cover h-screen w-screen flex flex-col">
      <Head>
        <title>Legend of Cycling</title>
      </Head>

      { /* black top bar with logo and sign in and sign up buttons. position absolute */ }
      <div className="absolute flex flex-row items-center justify-between w-full p-4 bg-black bg-opacity-80">
        <div>
          <img src="logo.png" alt="logo" className="h-10" />
        </div>
        <div className="flex flex-row">
          <button className="border-2 border-orange-200 text-orange-200 px-4 py-2 rounded-md">Sign In</button>
          <button className="ms-1 border-2 border-orange-200 text-orange-200  px-4 py-2 rounded-md">Sign Up</button>
        </div>
      </div>


      <div className="flex flex-row items-center justify-center h-full">
        <div>
          <div className="font-sans text-9xl font-bold text-orange-200 drop-shadow-[0_1.2px_1.2px_rgba(67,20,7,0.8)]">
            Legends of Cycling
          </div>
        </div>
      </div>

      <div className="absolute right-0 bottom-0 p-4">
    <div className=" text-white p-2 rounded">
      Powered by (c) Xan 2024
    </div>
  </div>

  </div>
  );
};

