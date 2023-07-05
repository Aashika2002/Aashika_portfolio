import React from 'react'

const Home = () => {
  return (
    <div name = 'home' className="w-full h-screen bg-[#0a192f]">
      {/*container*/}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600 text-3xl'>Hi, my name is</p>
        <h1 className ='text-4xl sm:text-6xl font-bold text-white'>Aashika Jain</h1>
        <h2 className ='text-4xl sm:text-4xl font-bold text-[#8892b0]'> I am a Web Developer and Graphic designer.</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px] text-xl'>Curently ---- </p>
      
            <div className="grid  grid-cols-2  sm:grid-cols-4 gap-8 ">
            
      <button className ='text-white border-2 px-7 py-3 my-2  hover:bg-pink-600 hover:border-pink-600 gap-3 hover:font-semibold'>View Work </button>
   <a href="Resume.pdf" download="Resume.pdf">      
 <button className ='text-white border-2 px-7 py-3 my-2 hover:bg-pink-600 hover:border-pink-600 hover:font-semibold' >Download Resume </button>
 </a> 
      </div>
      </div>
    </div>
  )
}

export default Home
