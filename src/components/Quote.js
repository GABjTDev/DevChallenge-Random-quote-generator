import React from 'react';
import 'animate.css';

const Quote = ({quote}) => {

  return (
    <div className='quote animate__animated animate__backInLeft'>
      <p>{`“${quote}”`}</p>
    </div>
  )
}

export default Quote