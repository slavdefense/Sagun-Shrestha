import React from 'react';
import BackLog from './Backlog/Backlog';
import MountainBikeTrail from './Mountainbike-trail/Mountainbike-trail';
import CarRental from './Carrental/Carrental';
import Slot from './Slot/Slot';
import ScrollToTop from '../../Components/ScrollToTop/ScrollToTopOnMount';
import './Work.css'
const Work = () => {
  return (
    <div id="Work">
     
      <BackLog/>
      <CarRental/>
      <MountainBikeTrail/>
      <Slot/>
      
      
    </div>
    );
}
 
export default Work;