import React from 'react';

function Home({ handleClick }) {
  return (
    <header>
      <h1 className='intro-title'>Quizzical</h1>
      <p className='intro-text'>Welcome fellow sports fanatic!</p>
      <button className='intro-btn btn' onClick={handleClick}>Start quiz</button>
    </header>
  )
}

export default Home;
