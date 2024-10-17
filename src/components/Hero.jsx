import React from 'react'

function Hero() {
  return (
    <div id='hero-section'>
      <div id="hero-image"></div>
      <div id="hero-text">
      <h2 className='heading'>Make Your Choice</h2>
      <p className='body'>Choose from the options above and discover artwork from all over the world, from many different time periods, and so many different artists. If you just want to get your feet wet and see all pieces of art in the collection, select "All Artwork" first.</p>
      <a href="https://www.artic.edu/" target='_blank'>Check out the <span style={{fontWeight: "bold", textDecoration: "underline"}}>Art Institute of Chicago</span> to learn more</a>
      </div>
      
    </div>
  )
}

export default Hero
