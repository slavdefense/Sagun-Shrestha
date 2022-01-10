import React from 'react';
const Slot = () => {
  return ( 
    <div className="slot-machine">
      <div className="backlog-container">
          <div className="backlog-info">
              <h1>Slot-Machine
              <p className="italic">A JavaScript game</p>
              </h1>
              <ul>
                <li>Javascript, HTML5, CSS, </li>
                <li>Animate.css, Whimsical Wireframes</li>
                <li>Bootstrap, Html, CSS</li>
                <li>Multer, Cloudinary, Mapbox, JWT</li>
                <li>Git, JavaScript, dotenv</li>
              </ul>
              <div className="site-github">
                <a className="site-github-atag"  href="https://sagun-shresthaslotmachine.surge.sh/"> Visit Site</a> 
              <div className="arrimg"><  img src="/arr1.png" alt="" /></div>
              
              <a className="site-github-atag-octocat" href="https://github.com/slavdefense/mountainbike-trail-youlove"><img src="/Octocat.png" alt="" /></a></div>
              
          </div>


              <div className="backlog-img">
              <video className="video" autoPlay muted loop>

<source src="/slotvid.mp4" type="video/mp4">
 
  </source>              
</video> 
              </div>

      </div>


    </div>
   );
}
 
export default Slot;