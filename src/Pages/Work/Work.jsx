import React from 'react';
import BackLog from './Backlog/Backlog';
import MountainBikeTrail from './Mountainbike-trail/Mountainbike-trail';
import Slot from './Slot/Slot';
import ScrollToTop from '../../Components/ScrollToTop/ScrollToTopOnMount';
import './Work.css'
const Work = () => {
  return (
    <div id="Work">
     
      <BackLog/>
      <MountainBikeTrail/>
      <Slot/>
      
      
    </div>
    );
}
 
export default Work;