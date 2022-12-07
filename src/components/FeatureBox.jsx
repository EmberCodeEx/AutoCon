import React from 'react';

function FeatureBox(props) {
  return (
   
      <div className='a-box'>
        <div className='a-b-img'>
              <img src = {props.image}/>
        </div>
        <div className='s-b-text'>
            <h2> {props.title} </h2>
            <p> Smart Contract is a piece of code which we use to deploy things on Blockchain </p>
         
        </div>

      </div>
  )
}
export default FeatureBox;
