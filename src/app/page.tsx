'use client'


import React, { useEffect, useState } from "react";
import Image from 'next/image'
import styles from '@/app/ui/principal.module.css';


export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    // Show the button when the user scrolls down
    /*
    if (window.scrollY > 500) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }*/
    
    const absoluteDiv = document.getElementById('focusing');
    
    const rect1 = absoluteDiv.getBoundingClientRect();

    // Example: Check overlap with another element with id 'targetElement'
    //const targetElement = document.getElementById('targetElement');
    
    const items = document.getElementsByClassName("evolving");
    
    var output = [];
    var sticky = [];
    
    for (var item of items) {
      const rect2 = item.getBoundingClientRect();
      const isOverlap = !(rect1.bottom < rect2.top);
      
      output.push(isOverlap);
      
      const isSticking = (rect1.bottom > rect2.bottom -160) && (rect1.bottom < rect2.bottom);
      
      sticky.push(isSticking);
    
        //setIsVisible(isOverlap);
    }

    setIsVisible(output);
    setIsSticky(sticky);
    
        
  };

  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
<main>
<div id="focusing" className="fixed top-0 left-0 right-0 h-1/3 bg-transparent">
  
</div>
    <div className="h-screen flex items-center justify-center bg-blue-500 text-white">
        <h1 className="text-4xl font-bold">Bienvenido al Mundo del Ciclismo</h1>
    </div>


    <div id="targetElement" className={`evolving h-screen flex items-center justify-center transition-all ease-in-out delay-150 duration-1000  ${isVisible[0]? 'text-white bg-blue-500':'text-red bg-green-500'}`}>
        <h1 className={`text-4xl font-bold ${isSticky[0]? 'fixed top-0':''} `}>Descubre nuestro Videojuego de Ciclismo</h1>
    </div>
    <div id="targetElement2" className={`evolving h-screen flex items-center justify-center transition-all ease-in-out delay-150 duration-1000  ${isVisible[1]? 'text-white bg-blue-500':'text-red bg-green-500'}`}>
        <h1 className={`text-4xl font-bold ${isSticky[1]? 'fixed top-0':''} `}>El mas divertido del mundo</h1>
    </div>
    <div id="targetElement3" className={`evolving h-screen flex items-center justify-center transition-all ease-in-out delay-150 duration-1000 text-white bg-blue-500`}>
        <h1 className="text-4xl font-bold">Wheeling on the Road</h1>
    </div>
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Wheeling on the Road</h1>
        <img
          src="/background-image.jpg" // Replace with your background image
          alt="Background Image"
          className={styles.backgroundImage}
        />
      </div>
      <div className={styles.scrollContent}>
        <p>Get ready for the ultimate cycling season management experience!</p>
        <p>Explore the world of cycling, manage your team, and conquer the road.</p>
        <p>Click <a href="/game-link">here</a> to start your journey!</p>
      </div>
    </div>
    </main>
  )
}
