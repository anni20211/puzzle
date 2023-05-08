import React, { useState } from 'react';
import Final from '../Final/Final';
import "./HomeClue.css";
const HomeClue=()=> {
  const [level, setLevel] = useState(1);
  const [userInput, setUserInput] = useState('');
  const [score,setScore]=useState(1);
  // puzzle answers for each level
  const answers = ['answer1', 'answer2', 'answer3','ankit','ankit kumar'];
  
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
      <>
        <h2>Level 1</h2>
        <p>Clue: What is the capital of France?</p>
        <form onSubmit={handleSubmit}>
          <input type="text" value={userInput} onChange={handleInput} />
          <button type="submit">Submit</button>
        </form>
      </>
    );
  } else if (level === 2) {
    gameContent = (
      <>
        <h2>Level 2</h2>
        <p>Clue: What is the largest planet in our solar system?</p>
        <form onSubmit={handleSubmit}>
          <input type="text" value={userInput} onChange={handleInput} />
          <button type="submit">Submit</button>
        </form>
      </>
    );
  } else if (level === 3) {
    gameContent = (
      <>
        <h2>Level 3</h2>
        <p>Clue: What is the tallest mountain in the world?</p>
        <form onSubmit={handleSubmit}>
          <input type="text" value={userInput} onChange={handleInput} />
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
  else if (level === 4) {
    gameContent = (
      <>
        <h2>Level 3</h2>
        <p>Clue: Who are you?</p>
        <form onSubmit={handleSubmit}>
          <input type="text" value={userInput} onChange={handleInput} />
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }else if (level === 5) {
    gameContent = (
      <>
        <h2>Level 3</h2>
        <p>Clue: What is the name of developer?</p>
        <form onSubmit={handleSubmit}>
          <input type="text" value={userInput} onChange={handleInput} />
          <button type="submit">Submit</button>
        </form>
      </>
    );
  } else {
    gameContent = (
      <>
       <Final score={score}/>
      </>
    );
  }
  return (
    <div>
      {gameContent}
    </div>
  );
}
export default HomeClue;
