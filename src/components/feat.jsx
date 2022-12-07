import React from 'react';

function FeatureBox1(props) {
  return (
   
      <div className='a-box'>
        <div className='a-b-img'>
              <img src = {props.image}/>
        </div>
        <div className='s-b-text'>
            <h2> {props.title} </h2>
            <p> A blockchain is a "distributed database" that contains the data in blocks. </p>
         
        </div>

      </div>
  )
}
export default FeatureBox1;
