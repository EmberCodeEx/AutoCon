import React from 'react';
import videoBg from '../assets/pexels.mp4';

const Main = () => {
  return (
    <div className='main'>

      <video src = {videoBg } autoPlay loop muted />
      
    </div>
  )
}

export default Main
