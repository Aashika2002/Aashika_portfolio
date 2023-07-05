import React,{useState} from 'react'
import {FaBars,FaTimes,FaLinkedin,FaGithub,FaInstagram} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

import logo from '../assets/logo.png';
import {Link} from 'react-scroll'


const Navbar = () => {
  const [nav, setNav]= useState(false)
  const handleClick =() => setNav(!nav)
  return (
    <div className='fixed w-full h-[100px] flex justify-between items-center px-8 bg-[#020617]   text-gray-300'>
           <div>
            <img src={logo} alt="logo" style={{width: '160px'}} />
           </div>
           {/*Menu*/}
           
            <ul className=' md: flex text-2xl px-8 '>
              <li className=" hover:text-pink-600  hover:font-bold px-8" >
              <Link  to="home"  smooth={true} offset={50} duration={500}>
                       Home
                   </Link>
              </li>
              <li className=" hover:text-pink-600  hover:font-bold px-8">
              <Link  to="about"  smooth={true} offset={50} duration={500}>
                       About
                   </Link>
              </li>
              <li className=" hover:text-pink-600  hover:font-bold px-8" >
              <Link  to="Skills"  smooth={true} offset={50} duration={500}>
                       Skills
                   </Link>
              </li>
              <li className=" hover:text-pink-600  hover:font-bold px-8" >
              <Link  to="work"  smooth={true} offset={50} duration={500}>
                      Work
                   </Link>
              </li>
              <li className=" hover:text-pink-600  hover:font-bold px-8">
              <Link  to="contact"  smooth={true} offset={50} duration={500}>
                       Contact
                   </Link>
              </li>
            </ul>
          
           {/*Hamburger*/}
           <div onClick={handleClick} className="md:hidden z-10 ">
                {!nav ? <FaBars /> :<FaTimes />}
           </div>
           {/*Mobile View*/}
           <ul className={!nav ? 'hidden':'absolute top-0 left-0 w-full h-screen bg-[#020617] flex flex-col justify-center items-center '}>
           <li className='py-6 text-4xl text-gray-300'>Home</li>
              <li className='py-6 text-4xl text-gray-300'>Experience</li>
              <li className='py-6 text-4xl text-gray-300'>Skills</li>
              <li className='py-6 text-4xl text-gray-300'>Projects</li>
              <li className='py-6 text-4xl text-gray-300' >About</li>
           </ul>
           {/*Social Icons*/}
           <div className="hidden lg:flex fixed flex-col top-[35%] left-0  "  >
            <ul>
              <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0077b5]'>
              <a href="https://www.linkedin.com/in/aashika-jain-701b56221/"  className='flex justify-between items-center w-full text-white'>
                Linkedin<FaLinkedin size="30px"></FaLinkedin></a></li>
              
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333]'>
                <a href="https://github.com/Aashika2002"  className='flex justify-between items-center w-full text-white '>Github<FaGithub size="30px"  ></FaGithub></a></li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#f538a3]'>
                <a href="https://www.instagram.com/__aashika.jainn/?hl=en" className='flex justify-between items-center w-full text-white ' >Instagram<FaInstagram size="40px"></FaInstagram></a></li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                <a href="aashikajain1326@gmail.com" className='flex justify-between items-center w-full text-white '>G-Mail<HiOutlineMail size="40px"></HiOutlineMail></a></li>
            </ul>
          
             
           </div>
           
        </div>
    
  )
}

export default Navbar
