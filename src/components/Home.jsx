import React from 'react'
import BGiamge from "../assets/bg.jpg"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useTypewriter,Cursor } from 'react-simple-typewriter';
import Quote1 from "../assets/Quote1.jpg"
import Quote2 from "../assets/Quote2.jpg"
import Quote3 from "../assets/Quote3.jpg"
import Quote4 from "../assets/Quote4.jpg"

import { FaQuoteLeft} from "react-icons/fa";
const Home = () => {

const settings = {
  
  dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      pauseOnHover: true,
      autoplaySpeed: 3000,
      cssEase: "linear"
  };
   const [text] = useTypewriter(
     {
        words:['Web Developer.','UI/UX Designer.','Freelancer.'],
        loop : {},
        typeSpeed: 120,
        deleteSpeed:80,
      }
     );
  
  return (
    <div name = 'home' className="w-full h-screen "  style={{ backgroundImage: `url(${BGiamge})`, backgroundSize: "cover",backgroundRepeat: "no-repeat",}}>
       
      <div className='max-w-[1000px] mx-auto  flex flex-col justify-center h-full'>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8  '>
        
            <div >
                  <p className=' text-[#8892b0] text-3xl'>Hi, my name is</p>
                    <h1 className ='text-4xl sm:text-5xl font-bold text-white'>Aashika Jain.</h1>
                    <h2 className ='text-4xl sm:text-4xl font-bold text-[#8892b0]'> 
                     I'm a {" "}
                        <span className='text-pink-600 text-4xl'> 
                       {text}
                       </span>
                        <Cursor/>
                    </h2>
                     <p className='text-white   py-4 max-w-[700px] text-xl'>“Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.” </p>
                              <div className="grid  grid-cols-2  sm:grid-cols-4 gap-8 ">
            
                    
                                <a href="Resume.pdf" download="Resume.pdf">      
                               <button className ='text-white border-2 px-7 py-3 my-2 hover:bg-pink-600 hover:border-pink-600 hover:font-semibold' > Resume </button>
                                 </a> 
                              </div>
             </div>
             <div>
                  
                  <FaQuoteLeft className=" text-white text-3xl"></FaQuoteLeft>
                  
                  
                  <Slider {...settings}>
                         
                        
                                <div >
                                
                                <img  className=' shadow-xl shadow-black h-auto max-w-full' src={Quote1} alt="logo" style={{borderRadius:"25px", opacity: "0.8"}}/>
                                   </div>
                          
                                <div >
                                <img className=" shadow-xl shadow-black h-auto max-w-full " src={Quote2}  alt="logo" style={{borderRadius:"25px",opacity: "0.8"}}/>
                               </div>
                               <div >
                                <img src={Quote3} className=' shadow-xl shadow-black h-auto max-w-full' alt="logo" style={{borderRadius:"25px",opacity: "0.8"}}/>
                               </div>
                               <div >
                                <img src={Quote4} className=' shadow-xl shadow-black h-auto max-w-full' alt="logo" style={{borderRadius:"25px",opacity: "0.8"}}/>
                               </div>
                               </Slider>
                 
              </div>
                  
                 
                  {/* <FaQuoteRight className=" text-white text-3xl text-right"></FaQuoteRight> */}
          {/* </div>
          */}
         
       
          
        </div>
         
        
                    
      </div>
     
    </div>
  )
}

export default Home
