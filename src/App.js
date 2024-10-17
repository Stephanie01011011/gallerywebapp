
import './App.css';

import Hero from './components/Hero';
import { useState } from 'react';
import Artwork from './components/Artwork';

function App() {
  const [hero, setHero] = useState(true);
  const [all, setAll] = useState(false);
  const [category, setCategory] = useState(true);
  const [artist, setArtist] = useState(true);
  const [color, setColor] = useState(true);

  let handleClick = () => {
    setHero(false);
    setAll(true);
  }
  
  return (
    <div className="App">
     <h1 id='top-header'>Let's Explore Art</h1>
     <div id='nav-section'>
      <ul id='navigation'>
       <li><div className="item" onClick={handleClick}>All Artwork</div></li>
        <li><div className="item">By Category</div></li>
        <li><div className="item">By Artist</div></li>
        <li><div className="item">By Color</div></li>
      </ul>
    </div>
     {hero &&
     <Hero />
}
{all &&
  <Artwork/>
}
    </div>
  );
}

export default App;
