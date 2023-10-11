import logo from './Bexely 1.png';
import userLogo from './userlogo.png';

import pieceLogo from './piece.png';
import Add from './Add';
import './App.css';


function App() {
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
        
        <div className="card">
          <h2>Need quick poster done by tommorow</h2>
          <p>Carcinomas are cancers that originate from epithelial cells, which are cells that line the surfaces of organs and tissues throughout the body. Epithelial tissue can be found in many different parts of the bodyers that arise from connective tissue such as bone, muscle, or cartilage.</p>
          <div className='undercard'>
          <div className="coins">
          <img src={pieceLogo} alt="Logo pièce" />
          <span>45</span>
        </div>
        <div className="coins">
          <span>ET: 45 mins</span>
        </div>
        <div className='workingonit'>
        <p>Working on it...</p>
        <div className='workingonitimg'>
        <img src={userLogo} alt="Logo utilisateur" />
        <img src={userLogo} alt="Logo utilisateur" />
        </div>
        </div>
          </div>
        </div>
        <div className="card">
          <h2>Need quick poster done by tommorow</h2>
          <p>Carcinomas are cancers that originate from epithelial cells, which are cells that line the surfaces of organs and tissues throughout the body. Epithelial tissue can be found in many different parts of the bodyers that arise from connective tissue such as bone, muscle, or cartilage.</p>
          <div className='undercard'>
          <div className="coins">
          <img src={pieceLogo} alt="Logo pièce" />
          <span>45</span>
        </div>
        <div className="coins">
          <span>ET: 45 mins</span>
        </div>
        <div className='workingonit'>
        <p>Working on it...</p>
        <div className='workingonitimg'>
        <img src={userLogo} alt="Logo utilisateur" />
        <img src={userLogo} alt="Logo utilisateur" />
        </div>
        </div>
          </div>
        </div> <div className="card">
          <h2>Need quick poster done by tommorow</h2>
          <p>Carcinomas are cancers that originate from epithelial cells, which are cells that line the surfaces of organs and tissues throughout the body. Epithelial tissue can be found in many different parts of the bodyers that arise from connective tissue such as bone, muscle, or cartilage.</p>
          <div className='undercard'>
          <div className="coins">
          <img src={pieceLogo} alt="Logo pièce" />
          <span>45</span>
        </div>
        <div className="coins">
          <span>ET: 45 mins</span>
        </div>
        <div className='workingonit'>
        <p>Working on it...</p>
        <div className='workingonitimg'>
        <img src={userLogo} alt="Logo utilisateur" />
        <img src={userLogo} alt="Logo utilisateur" />
        </div>
        </div>
          </div>
        </div> 
        <div className="card">
          <h2>Need quick poster done by tommorow</h2>
          <p>Carcinomas are cancers that originate from epithelial cells, which are cells that line the surfaces of organs and tissues throughout the body. Epithelial tissue can be found in many different parts of the bodyers that arise from connective tissue such as bone, muscle, or cartilage.</p>
          <div className='undercard'>
          <div className="coins">
          <img src={pieceLogo} alt="Logo pièce" />
          <span>45</span>
        </div>
        <div className="coins">
          <span>ET: 45 mins</span>
        </div>
        <div className='workingonit'>
        <p>Working on it...</p>
        <div className='workingonitimg'>
        <img src={userLogo} alt="Logo utilisateur" />
        <img src={userLogo} alt="Logo utilisateur" />
        </div>
        </div>
          </div>
        </div> <div className="card">
          <h2>Need quick poster done by tommorow</h2>
          <p>Carcinomas are cancers that originate from epithelial cells, which are cells that line the surfaces of organs and tissues throughout the body. Epithelial tissue can be found in many different parts of the bodyers that arise from connective tissue such as bone, muscle, or cartilage.</p>
          <div className='undercard'>
          <div className="coins">
          <img src={pieceLogo} alt="Logo pièce" />
          <span>45</span>
        </div>
        <div className="coins">
          <span>ET: 45 mins</span>
        </div>
        <div className='workingonit'>
        <p>Working on it...</p>
        <div className='workingonitimg'>
        <img src={userLogo} alt="Logo utilisateur" />
        <img src={userLogo} alt="Logo utilisateur" />
        </div>
        </div>
          </div>
        </div>  
         {/* Ajoutez autant de cartes que nécessaire */}
      </main>
    </div>
  );
}

export default App;