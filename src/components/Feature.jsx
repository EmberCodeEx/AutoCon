import React from 'react';
import FeatureBox from './FeatureBox';
import FeatureBox1 from './feat';
import FeatureBox2 from './feat2';
import featureimage from '../images/feature_1.png';
import featureimage1 from '../images/feature_2.png';
import featureimage2 from '../images/feature_3.png';
import featureimage3 from '../images/b2.jpg';
import featureimage4 from '../images/c1.png';
import featureimage5 from '../images/Ethereum-Logo.png';
import featureimage6 from '../img/autocon.png';
import featureimage7 from '../img/autocon png black.png';
import featureimage8 from '../images/c1-updated.png';
import featureimage9 from '../images/s2-updated.png';
import featureimage10 from '../images/b2-updated.png';
import featureimage11 from '../images/block1-removebg-preview.png';
import featureimage12 from '../images/bbb.png';


export default function Feature() {
  return (
    <div
      id = 'features'>
        <div className='a-container'>
            <FeatureBox image = {featureimage8} title = 'Smart Contracts '/>
            <FeatureBox1 image = {featureimage12} title = 'Blockchain '/>
            <FeatureBox2 image = {featureimage7} title = 'AutoCon '/>
            

        </div>
    </div>
  )
}
