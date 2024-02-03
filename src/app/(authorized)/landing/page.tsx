// pages/login.tsx
"use client";

import React, { useState } from 'react';

import Head from 'next/head';
import Link from 'next/link';

export default function Landing() {
  
  const [clickedItem, setClickedItem] = useState<string | null>(null);

  const handleClick = (item: string) => {
    // Check if the item is already clicked
    if (clickedItem === item) {
      // Execute the action based on the clicked item
      switch (item) {
        case 'play':
          // Handle play action
          break;
        case 'continue-season':
          // Handle continue season action
          break;
        case 'setup':
          // Handle setup action
          break;
        default:
          break;
      }

      // Reset the clicked item after executing the action
      setClickedItem(null);
    } else {
      // Set the clicked item if not already clicked
      setClickedItem(item);
    }
  };
  
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-darkblue">
      <h1 className="text-4xl font-bold mb-8">Cycling Race Game</h1>

      <nav className="flex flex-col items-center space-y-4">
        <Link href="/play" className="text-lg">Play a Race
        </Link>
        <Link href="/season" className="text-lg">Season
        </Link>
        <Link href="/setup" className="text-lg">Setup</Link>
      </nav>
    </div>
  );
};

