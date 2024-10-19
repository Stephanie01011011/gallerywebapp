import React, {useState} from 'react'
import Items from './Items';
function Artist({artdata}) {

  const [artData, setArtData] = useState(Object.entries(artdata));

  let artists = ["Claude Monet", "Diego Velázquez", "Paul Cezanne", "Georges Seurat", "Sandro Botticelli", "David Hockney", "Ancient Roman", "Georgia O'Keeffe"];
  const [back, setBack] = useState(false);
  const [home, setHome] = useState(true);
  const [items, setItems] = useState(false);
  const [itemName, setItemName] = useState("");

  let handleClick = () => {
  
    setItems(true);
      
  }
  return (
    <div>
        <div id='artist-section'>
 
 <div id="artist-banner"></div>
 {back &&
       <div className="back-btn" onClick={() => {setBack(!back); setHome(!home); setItemName("")}}>Back</div>
 }
 
 
 {home && 
 <div className="artist-home">
   <h1 id='artist-header'>Pick An Artist</h1>
 
   <div id="artist-btns">
    {artists.map((artist) => {
      return(
        <div className="item" onClick={()=> {setBack(!back); setHome(!home);handleClick(artist); setItemName(artist)}}>
          {artist}
        </div>
      )
    })}
   </div>
   </div>
 }
 
 {items &&
   
   <Items name={itemName} data={artData}/>
 }
        
 
     </div>
    </div>
  )
}

export default Artist
