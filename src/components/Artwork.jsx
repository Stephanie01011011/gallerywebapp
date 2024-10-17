import React, { useEffect, useState } from 'react'

function Artwork() {
    const [artData, setArtData] = useState();
    useEffect(() => {
        fetch("https://api.artic.edu/api/v1/artworks?page=1&limit=80")
        .then(response => response.json())
        .then(data => setArtData(data))
    }, []);
    
  return (
    <div>
        {artData &&
        <div id='all-display'>
            {artData.data.map((data) => {return(
                <div className="display-card">
                    <img src={`https://www.artic.edu/iiif/2/${data.image_id}/full/200,/0/default.jpg`} alt="" className='image-display'/>
                <h4>{data.title}</h4>
                <h6>{data.artist_title} - {data.date_display}</h6>
               
                </div>
            )})}
         
      
      </div>
        }
    </div>
  )
}

//<img src={`https://www.artic.edu/iiif/2/${artData.data[0].image_id}/full/200,/0/default.jpg`} alt="" />
export default Artwork
