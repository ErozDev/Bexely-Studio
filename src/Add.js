import logo from './Bexely 1.png';
import userLogo from './userlogo.png';
import pieceLogo from './piece.png';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Add() {
  return (
    <div className="App">
     <header>
  <div class="left-section">
    <div class="logo">
      <img src={logo} alt="Logo" />
    </div>
  </div>
  
  <div class="center-section">
    <div class="search-bar">
      <input type="text" placeholder="Ask a Question or Upload your task..." />
    </div>
  </div>
  
  <div class="right-section">
    <nav class="menu">
      <a href="#">Store</a>
      <a href="#">About</a>
    </nav>
    <div class="coins">
      <img src={pieceLogo} alt="Logo pièce" />
      <span>100</span>
    </div>
    <div class="user-profile">
      <img src={userLogo} alt="Logo utilisateur" />
    </div>
  </div>
</header>



      <main>
   {/* Ajoutez autant de cartes que nécessaire */}
      </main>
    </div>
  );
}

export default Add;