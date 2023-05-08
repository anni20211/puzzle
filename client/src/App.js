
import './App.css';
import {BrowserRouter,Routes,Route } from "react-router-dom";
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Logout from './pages/Logout/Logout';
import Home from './pages/Home/Home';
import Play from './pages/Play/Play';
import PlayGame from './pages/PlayGame/PlayGame.js';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/register" element={<Register/>} />
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/play" element={<PlayGame/>} />
      <Route exact path="/play/game" element={<Play/>} />
      <Route exact path="/logout" element={<Logout/>} />
     
    </Routes>

    </BrowserRouter>
  );
}

export default App;
