import React from 'react'

const About = () => {
  return (
    <div name='about' className=' flex justify-center items-center w-full min-h-screen bg-[#0a192f] text-gray-300 '>
      <div className=' flex flex-col justify-center items-center w-full h-full'>
        
               <div className='sm:text-right pb-8 pl-4'>
                   <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
                
         
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-2'>
            <div className='sm:text-right text-4xl font-bold'>
                    <p>
                        Hi. I'm Aashika ,Nice to meet you.Please take a look around.
                    </p>
            </div>
            
              <div className='text-xl'>
                <p> I work as a web developer. 
                     I believe I am a very ambitious person who loves to work on making the website work well. 
                     Working on the web is my passion as I love to work on exciting projects.</p>
              </div>
        </div>
            
         
      </div>
    </div>
  )
}

export default About
