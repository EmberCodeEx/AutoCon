import React from 'react';

function FeatureBox2(props) {
  return (
   
      <div className='a-box'>
        <div className='a-b-img'>
              <img src = {props.image}/>
        </div>
        <div className='s-b-text'>
            <h2> {props.title} </h2>
            <p> AutoCon is Automated Generation of Smart Contract using Graphical User Interface </p>
         
        </div>

      </div>
  )
}
export default FeatureBox2;
