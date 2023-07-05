import React from 'react'

import Html from '../assets/Html.png'
import Canva from '../assets/Canva.png'
import Css from '../assets/Css.png'
import figma from '../assets/figma.png'
import Illustrator from '../assets/Illustrator.png'
import js from '../assets/js.png'
import mongodb from '../assets/mongodb.png'
import node from '../assets/node.png'
import Ps from '../assets/Ps.png'
import ret from '../assets/ret.png'
import Sql from '../assets/Sql.png'
import Tailwind_CSS from '../assets/Tailwind_CSS.png'

const Skills = () => {
   return (
      <div name='Skills' className='w-full min-h-screen bg-[#0a192f] text-gray-300 '>
         <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-center w-full h-full '>

            <div className='sm:text-right pb-8 pl-4'>
               <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
            </div>
            <div>

               <p className="py-2 text-xl  "> Here are the technologies I have worked with along with their learning sources.</p>
            </div>
            <div className='max-w-[1000px] w-full grid grid-cols-2 sm:grid-cols-4 gap-8 px-2 py-12 text-center'>
               <div className='h-38 w-50 shadow-md shadow-[#1d232c] hover:scale-110 duration-500'>
                  <img className='object-contain h-20 w-20 mx-auto' src={Html} alt="Html icon"></img>
                  <p className="py-4 text-xl hover:text-pink-600 hover:text-2xl hover:font-bold"><a href="https://www.w3schools.com/html/">HTML</a></p>
               </div>
               <div className='h-38 w-50 shadow-md shadow-[#1d232c] hover:scale-110 duration-500'>
                  <img className='object-contain h-20 w-20 mx-auto' src={Css} alt="Css icon"></img>
                  <p className="py-4 text-xl hover:text-pink-600 hover:text-2xl hover:font-bold"><a href="https://www.w3schools.com/css/default.asp">CSS</a></p>
               </div>
               <div className='h-38 w-50 shadow-md shadow-[#1d232c] hover:scale-110 duration-500'>
                  <img className='object-contain h-20 w-20 mx-auto' src={js} alt="JS icon"></img>
                  <p className="py-4 text-xl hover:text-pink-600 hover:text-2xl hover:font-bold"><a href="https://www.youtube.com/watch?v=ER9SspLe4Hg&list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR">Javascript</a></p>
               </div>
               <div className='h-38 w-50 shadow-md shadow-[#1d232c] hover:scale-110 duration-500'>
                  <img className='object-contain h-20 w-20 mx-auto' src={ret} alt="React icon"></img>
                  <p className="py-4 text-xl hover:text-pink-600 hover:text-2xl hover:font-bold"><a href="https://www.youtube.com/watch?v=-mJFZp84TIY&list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt">React.js</a></p>
               </div>
               <div className='h-38 w-50 shadow-md shadow-[#1d232c] hover:scale-110 duration-500'>
                  <img className='object-contain h-20 w-20 mx-auto' src={Tailwind_CSS} alt="Tailwind icon"></img>
                  <p className="py-4 text-xl hover:text-pink-600 hover:text-2xl hover:font-bold"><a href="https://www.youtube.com/watch?v=lCxcTsOHrjo&t=9914s">Tailwind</a></p>
               </div>
               <div className='h-38 w-50 shadow-md shadow-[#1d232c] hover:scale-110 duration-500'>
                  <img className='object-contain h-20 w-20 mx-auto' src={node} alt="Node.js icon"></img>
                  <p className="py-4 text-xl hover:text-pink-600 hover:text-2xl hover:font-bold"><a href=" https://www.youtube.com/watch?v=BLl32FvcdVM">Node.js</a></p>
               </div>
               <div className='h-38 w-50 shadow-md shadow-[#1d232c] hover:scale-110 duration-500'>
                  <img className='object-contain h-20 w-20 mx-auto' src={mongodb} alt="Mongo icon"></img>
                  <p className="py-4 text-xl hover:text-pink-600 hover:text-2xl hover:font-bold"><a href="https://www.youtube.com/watch?v=oSIv-E60NiU&t=3373s">MongoDB</a></p>
               </div>
               <div className='h-38 w-50 shadow-md shadow-[#1d232c] hover:scale-110 duration-500'>
                  <img className='object-contain h-20 w-20 mx-auto' src={Sql} alt="Sql icon"></img>
                  <p className="py-4 text-xl hover:text-pink-600 hover:text-2xl hover:font-bold"><a href="https://www.youtube.com/watch?v=D_wNQR3LeeM&t=18s">SQL</a></p>
               </div>
               <div className='h-38 w-50 shadow-md shadow-[#1d232c] hover:scale-110 duration-500'>
                  <img className='object-contain h-20 w-20 mx-auto' src={Canva} alt="Canva icon"></img>
                  <p className="py-4 text-xl hover:text-pink-600 hover:text-2xl hover:font-bold"><a href=" https://www.youtube.com/watch?v=yWJp7gQqCQ8&t=287s">Canva</a></p>
               </div>
               <div className='h-38 w-50 shadow-md shadow-[#1d232c] hover:scale-110 duration-500'>
                  <img className='object-contain h-20 w-20 mx-auto' src={figma} alt="Figma icon"></img>
                  <p className="py-4 text-xl hover:text-pink-600 hover:text-2xl hover:font-bold"><a href=" https://www.youtube.com/watch?v=kbZejnPXyLM">Figma</a></p>
               </div>
               <div className='h-38 w-50 shadow-md shadow-[#1d232c] hover:scale-110 duration-500'>
                  <img className='object-contain h-20 w-20 mx-auto' src={Illustrator} alt="Illustrator icon"></img>
                  <p className="py-4 text-xl hover:text-pink-600 hover:text-2xl hover:font-bold"><a href=" https://www.youtube.com/watch?v=vd1vRpoWC3M&list=PLW-zSkCnZ-gCq0DjkzY-YapCBEk0lA6lR"> Illustrator</a></p>
               </div>
               <div className='h-38 w-50 shadow-md shadow-[#1d232c] hover:scale-110 duration-500'>
                  <img className='object-contain h-20 w-20 mx-auto' src={Ps} alt="Ps icon"></img>
                  <p className="py-4 text-xl hover:text-pink-600 hover:text-2xl hover:font-bold"><a href="https://www.youtube.com/watch?v=ZByhs9mDtDg&list=PLW-zSkCnZ-gA5Jn6gZtUa6-aG0OoRZyb6"> Photosop</a></p>
               </div>



            </div>


         </div>
      </div>
   )
}

export default Skills
