
import './App.css';

import Hero from './components/Hero';
import { useState, useEffect } from 'react';
import Artwork from './components/Artwork';
import Category from './components/Category';
import Artist from './components/Artist';


function App() {
  const [hero, setHero] = useState(true);
  const [all, setAll] = useState(false);
  const [category, setCategory] = useState(false);
  const [artist, setArtist] = useState(false);
  

  let resetAll = () => {
    setHero(false);
    setAll(false);
    setArtist(false);
    setCategory(false);
    
  }

  const [artData, setArtData] = useState();
    useEffect(() => {
        fetch("https://api.artic.edu/api/v1/artworks?page=5&limit=80")
        .then(response => response.json())
        .then(data => setArtData(data))
        
        
    }, []);


  
  return (
    <div className="App">
     <h1 id='top-header'>Let's Explore Art</h1>
     <div id='nav-section'>
      <ul id='navigation'>
       <li><div className="item" onClick={()=> {
        resetAll();
        setAll(true);
       }}>All Artwork</div></li>
        <li><div className="item" onClick={()=> {
        resetAll();
        setCategory(true);
       }}>By Category</div></li>
        <li><div className="item" onClick={()=> {
        resetAll();
        setArtist(true);
       }}>By Artist</div></li>
      </ul>
    </div>
     {hero &&
     <Hero />
}
{all &&
  <Artwork artdata={artData}/>
}

{category &&
  <Category artdata={artData}/>
}

{artist &&
  <Artist artdata={artData}/>
}
    </div>
  );
}

export default App;
