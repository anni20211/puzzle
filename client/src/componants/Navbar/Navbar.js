import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className='navbar'>
      <div className='container-navbar'>
      <Link to="/" style={{ textDecoration:"none"}}>
      <span className='logoNavbar'>PuzzleByAnkit
        </span>
      </Link>   
        <div className='nav-items'>
        <Link to="/login">
        <button className='buttonNav'>login</button>
        </Link>
        <Link to="/register">
        <button className='buttonNav'>register</button>
        </Link>
        <Link to="/logout">
        <button className='buttonNav'>Logout</button>
        </Link>
        </div>
      </div>
      
    </div>
  );
}

export default Navbar;
