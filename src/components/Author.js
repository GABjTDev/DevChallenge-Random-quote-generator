import React from 'react'
import 'animate.css';

const Author = ({author, quotes, handleLimit}) => {
  
  return (
    <div className='author animate__animated animate__backInLeft' onClick={handleLimit}>
      <div>
        <h1>{author}</h1>
        {
          quotes[0] &&
            <h2>{quotes[0].quoteGenre}</h2>
        }
      </div>
      <span className="material-icons">
        east
      </span>
    </div>
  )
}

export default Author