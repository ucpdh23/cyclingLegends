// pages/login.tsx
"use client";

import React, { useState } from 'react';

import Head from 'next/head';
import Link from 'next/link';

export default function Landing() {
  
  const [clickedItem, setClickedItem] = useState<string | null>(null);

  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-darkblue text-white">
      <h1 className="text-4xl font-bold mb-8">Playing a Race Game</h1>

    </div>
  );
};

