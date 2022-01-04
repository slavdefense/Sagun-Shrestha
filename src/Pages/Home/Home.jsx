import React from 'react';
import Contact from '../Contact/Contact';
import Work from '../Work/Work';
import AboutMe from '../Aboutme/Aboutme';
import "./Home.css"
import ScrollHome from '../../Components/ScrollToTop/ScrollHome';
import ScrollToTop from '../../Components/ScrollToTop/ScrollToTopOnMount';
const Home = () => {
  return ( 

    
    <div className="home-div" id="Home">
     
     <Work/>
     <AboutMe/> 
     <Contact/>
     
    </div>
      
      

      

  


  
  
   );
}
 
export default Home;