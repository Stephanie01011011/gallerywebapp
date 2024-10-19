import React from 'react'

function Items({name, data}) {


    //array to hold each category of objects
  let byPainting = [];
  let byBook = [];
  let bySculpture = [];
  let byFurniture = [];
  let byMask = [];
  let byCeramics = [];
  let byMetalwork = [];
  let chosen;

  //another set of arrays for artists
let byClaude = [];
let byDiego = [];
let byPaul = [];
let byGeorges = [];
let bySandro = [];
let byDavid = [];
let byRoman = [];
let byGeorgia = [];

  //loop to move each object to correct category
  for (let i = 0; i < data[1][1].length; i++){
    
    if(data[1][1][i].artwork_type_title == "Painting"){
      
      byPainting.push(data[1][1][i]);
    } else if(data[1][1][i].artwork_type_title == "Book") {
      byBook.push(data[1][1][i]);
    } else if(data[1][1][i].artwork_type_title == "Sculpture") {
      bySculpture.push(data[1][1][i]);
    } else if(data[1][1][i].artwork_type_title == "Furniture") {
      byFurniture.push(data[1][1][i]);
    } else if(data[1][1][i].artwork_type_title == "Mask") {
      byMask.push(data[1][1][i]);
    } else if(data[1][1][i].artwork_type_title == "Ceramics") {
      byCeramics.push(data[1][1][i]);
    } else if(data[1][1][i].artwork_type_title == "Metalwork") {
      byMetalwork.push(data[1][1][i]);
    }
  }


  //loop to move each object to correct artist
  for (let i = 0; i < data[1][1].length; i++){
    
    if(data[1][1][i].artist_title == "Claude Monet"){
      
      byClaude.push(data[1][1][i]);
    } else if(data[1][1][i].artist_title == "Diego Velázquez") {
      byDiego.push(data[1][1][i]);
    } else if(data[1][1][i].artist_title == "Paul Cezanne") {
      byPaul.push(data[1][1][i]);
    } else if(data[1][1][i].artist_title == "Georges Seurat") {
      byGeorges.push(data[1][1][i]);
    } else if(data[1][1][i].artist_title == "Sandro Botticelli") {
      bySandro.push(data[1][1][i]);
    } else if(data[1][1][i].artist_title == "David Hockney") {
      byDavid.push(data[1][1][i]);
    } else if(data[1][1][i].artist_title == "Ancient Roman") {
      byRoman.push(data[1][1][i]);
    } else if(data[1][1][i].artist_title == "Georgia O'Keeffe") {
        byGeorgia.push(data[1][1][i]);
      }
  }


 
  //chosen selector
  if (name == "Painting"){
    chosen = byPainting;
  } else if(name == "Book"){
    chosen = byBook;
  } else if(name == "Sculpture"){
    chosen = bySculpture;
  } else if(name == "Furniture"){
    chosen = byFurniture;
  } else if(name == "Mask"){
    chosen = byMask;
  } else if(name == "Ceramics"){
    chosen = byCeramics;
  } else if(name == "Metalwork"){
    chosen = byMetalwork;
  } else if(name == "Claude Monet"){
    chosen = byClaude;
  } else if(name == "Diego Velázquez"){
    chosen = byDiego;
  } else if(name == "Paul Cezanne"){
    chosen = byPaul;
  } else if(name == "Georges Seurat"){
    chosen = byGeorges;
  } else if(name == "Sandro Botticelli"){
    chosen = bySandro;
  } else if(name == "David Hockney"){
    chosen = byDavid;
  } else if(name == "Ancient Roman"){
    chosen = byRoman;
  } else if(name == "Georgia O'Keeffe"){
    chosen = byGeorgia;
  }

  return (
    <div>
      {chosen &&
       <div id='all-display'>
            {chosen.map((data) => {return(
                <div className="display-card">
                    <img src={`https://www.artic.edu/iiif/2/${data.image_id}/full/200,/0/default.jpg`} alt="" className='image-display'/>
                <h4>{data.title}</h4>
                <h6>{data.artist_title} - {data.date_display}</h6>
               <div className="bottom-display">
                <p>{data.style_title ? data.style_title : "Style Unspecified"}</p>
                <p>{data.classification_title}</p>
               </div>
                </div>
            )})}
         
      
      </div>
}
    </div>
        
  )
}

export default Items
