import React, { useEffect, useState } from 'react'

function Artwork({artdata}) {
    const [artData, setArtData] = useState(artdata);
    
    
  return (
    <div>
        {artData &&
        <div id='all-display'>
            {artData.data.map((data) => {return(
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

//<img src={`https://www.artic.edu/iiif/2/${artData.data[0].image_id}/full/200,/0/default.jpg`} alt="" />
export default Artwork
