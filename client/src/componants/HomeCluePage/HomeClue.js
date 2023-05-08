import React, { useState } from 'react';
import Final from '../Final/Final';
import "./HomeClue.css";
const HomeClue=()=> {
  const [level, setLevel] = useState(1);
  const [userInput, setUserInput] = useState('');
  const [score,setScore]=useState(1);
  // puzzle answers for each level
  const answers = ['David', 'jupiter', 'Mount Everest','tongue','Dozens'];
  
  // function to check user input against puzzle answer
  const checkAnswer = (input) => {
    return answers[level - 1] === input;
  }
  
  // function to handle user input
  const handleInput = (e) => {
    setUserInput(e.target.value);
  }
 let count=0;
  // function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkAnswer(userInput)) {
        
        setScore(score+1);
        alert(`score is ${score}`);
      setLevel(level + 1);
      setUserInput('');
    } else {    
      alert('Incorrect answer, please try again!');
      count++;
      if(count>2){
        setScore(1);
        setLevel(1);
      }
    }
  }
  // render game components based on level
  let gameContent;
  if (level === 1) {
    gameContent = (
      <div className='box-container'>
      <h2>Level 1</h2>
        <p>Question: David’s parents have three sons: Snap, Crackle, and what’s the name of the third son?</p>
        <form onSubmit={handleSubmit}>
          <input type="text" value={userInput} onChange={handleInput} />
          <button type="submit">Submit</button>
        </form>
      </div>
        
      
    );
  } else if (level === 2) {
    gameContent = (
      <div className='box-container'>
       <h2>Level 2</h2>
        <p>Question: What is the largest planet in our solar system?</p>
        <form onSubmit={handleSubmit}>
          <input type="text" value={userInput} onChange={handleInput} />
          <button type="submit">Submit</button>
        </form>
      </div>
       
      
    );
  } else if (level === 3) {
    gameContent = (
      <div className='box-container'>
        <h2>Level 3</h2>
        <p>Question: What is the tallest mountain in the world?</p>
        <form onSubmit={handleSubmit}>
          <input type="text" value={userInput} onChange={handleInput} />
          <button type="submit">Submit</button>
        </form>
      </div>
       
      
    );
  }
  else if (level === 4) {
    gameContent = (
      <div className='box-container'>
      <h2>Level 3</h2>
        <p>Question:What tastes better than it smells?</p>
        <form onSubmit={handleSubmit}>
          <input type="text" value={userInput} onChange={handleInput} />
          <button type="submit">Submit</button>
        </form>
      </div>
        
      
    );
  }else if (level === 5) {
    gameContent = (
      <div className='box-container'>
        <h2>Level 3</h2>
        <p>Question: A word I know, six letters it contains, remove one letter and 12 remains. What is it?</p>
        <form onSubmit={handleSubmit}>
          <input type="text" value={userInput} onChange={handleInput} />
          <button type="submit">Submit</button>
        </form>
      </div>
        
      
    );
  } else {
    gameContent = (
      <div>
    <Final score={score}/>
      </div>   
    );
  }
  return (
    <div className='container '>
      {gameContent}
    </div>
  );
}
export default HomeClue;
