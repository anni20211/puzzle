import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Final.css";

const Final = ({score}) => {
    const navigate= useNavigate();
    const handleClick=(e)=>{
        e.preventDefault();
        navigate("/play")


    }
  return (
    <div class="congrats-container">
    <h1>Congratulations! Your total score is {score-1}</h1>
    <p>You have successfully completed the game!</p>
    <p>We hope you had a great time playing and enjoyed the challenge.</p>
    <button onClick={handleClick} className="play-again-btn">Play Again</button>
   </div>
  );
}

export default Final;
