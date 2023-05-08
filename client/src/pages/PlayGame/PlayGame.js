import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./PlayGame.css";

const PlayGame = () => {
    const navigate=useNavigate();
    const handleClick=(e)=>{
        e.preventDefault();
        navigate("/play/game")
    }
    const [text, setText] = useState('');
    const fullText="Welcome to Puzzle Game";
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
    <div className="start-page">
      <h1>{text}</h1>
      <button onClick={handleClick} className='button-start'>Play Now</button>
    </div>
  );
}

export default PlayGame;
