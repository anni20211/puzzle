import React from 'react';
import { useState,useEffect } from 'react';
import HomeClue from '../../componants/HomeCluePage/HomeClue';

const Play = () => {
    const [text, setText] = useState('');
    const fullText="Welcome to the Puzzle Battle";
    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
          if (currentIndex >= fullText.length) {
            clearInterval(interval);
            return;
          }
    
          setText(fullText.slice(0, currentIndex + 1));
          currentIndex++;
        }, 100);
        return () => clearInterval(interval);
      }, []);
  return (
 
    <div className='Play-Game'>
     <div className='container'>
      <h2>  {text}</h2>
      <HomeClue/>
     </div>
      
    </div>
  );
}

export default Play;

