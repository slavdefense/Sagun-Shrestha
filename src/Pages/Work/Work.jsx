import React from "react";
import BackLog from "./Backlog/Backlog";
import MountainBikeTrail from "./Mountainbike-trail/Mountainbike-trail";
import CarRental from "./Carrental/Carrental";
import Slot from "./Slot/Slot";

import "./Work.css";
const Work = () => {
  return (
    <div id="Work">
      <Slot />
      <MountainBikeTrail />
      <BackLog />
      <CarRental />
      
    </div>
  );
};

export default Work;
