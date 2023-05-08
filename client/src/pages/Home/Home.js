import React from 'react';
import Navbar from '../../componants/Navbar/Navbar';
import PlayGame from '../PlayGame/PlayGame';
// import Treasure from '../../componants/Treasure/Treasure';

const Home = () => {
  return (
    <div className='Home'>
    <Navbar/>
    <PlayGame/> 
    </div>
  );
}
export default Home;
