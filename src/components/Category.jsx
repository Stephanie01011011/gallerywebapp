import React, { useState } from 'react'
import Items from './Items';
function Category({artdata}) {
  const [artData, setArtData] = useState(Object.entries(artdata));
  
  //back button
  const [back, setBack] = useState(false);
  const [home, setHome] = useState(true);
  const [items, setItems] = useState(false);
  const [itemName, setItemName] = useState("");
  
  
  //category titles for menu
  let categories = ["Painting", "Book", "Sculpture", "Furniture", "Mask", "Ceramics", "Metalwork"];
  
  
  
let handleClick = () => {
  
  setItems(true);
    
}



  
  
  return (
    <div id='category-section'>
 
<div id="category-banner"></div>
{back &&
      <div className="back-btn" onClick={() => {setBack(!back); setHome(!home); setItemName("")}}>Back</div>
}


{home && 
<div className="category-home">
  <h1 id='category-header'>Pick A Category</h1>

  <div id="category-btns">
   {categories.map((category) => {
     return(
       <div className="item" onClick={()=> {setBack(!back); setHome(!home);handleClick(category); setItemName(category)}}>
         {category}
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
      
  )
}

export default Category
