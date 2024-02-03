// pages/login.tsx

import React from 'react';
import Head from 'next/head';

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-darkblue relative">
      <Head>
        <title>War of Wheels Login</title>
      </Head>

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="object-cover absolute inset-0 w-full h-full z-0"
      >
        <source
          src="your-cycling-race-video.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Darkblue Layer */}
      <div className="absolute inset-0 bg-darkblue opacity-75"></div>

      {/* Login Form */}
      <div className="z-10 text-white text-center">
        <h1 className="text-4xl font-bold mb-6">War of Wheels Login</h1>
        <form action="/landing" method="post" className="max-w-md mx-auto">
          {/* Add your form elements here */}
          {/* For example: */}
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-semibold mb-1">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full px-4 py-2 rounded bg-gray-800 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-semibold mb-1">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 rounded bg-gray-800 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded py-2 hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

