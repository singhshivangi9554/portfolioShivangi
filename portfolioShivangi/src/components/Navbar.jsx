import React from 'react'
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
const Navbar = () => {  

    const[showMenu,setShowMenu]=React.useState(false);
  return (
    <nav className='fixed w-full z-50 bg-dark-100/90 backdrop-blur-sm py-4 px-8 shadow-lg'>   
    <div className='container mx-auto flex justify-between items-center'>
    <div>
        <a href='#' className='text-3xl font-bold text-white'>
            Shivangi
            <span className='text-purple'>Singh</span>
            <div className='w-4 h-4 bg-purple rounded-full'></div>
        </a>
    </div>
    <div className='hidden md:flex space-x-10'>
        <a href='#home' className='relative text-white/80 transition duration-300 hover:text-purple group'>
            <span>Home</span>
            <span className='absolute left-0 bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
        </a>

        <a href='#about' className='relative text-white/80 transition duration-300 hover:text-purple group'>
            <span>About</span>
            <span className='absolute left-0 bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
        </a>

        <a href='#skills' className='relative text-white/80 transition duration-300 hover:text-purple group'>
            <span>Skills</span>
            <span className='absolute left-0 bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
        </a>

        <a href='#projects' className='relative text-white/80 transition duration-300 hover:text-purple group'>
            <span>Projects</span>
            <span className='absolute left-0 bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
        </a>

        <a href='#experience' className='relative text-white/80 transition duration-300 hover:text-purple group'>
            <span>Experience</span>
            <span className='absolute left-0 bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
        </a>

        <a href='#contact' className='relative text-white/80 transition duration-300 hover:text-purple group'>
            <span>Contact</span>
            <span className='absolute left-0 bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
        </a>
    </div> 
     <div className='md:hidden'> 
        {
            showMenu ?
             <FaXmark onClick={()=>setShowMenu(!showMenu)} 
              className='text-2xl cursor-pointer'/>:
             <FaBars  onClick={()=>setShowMenu(!showMenu)} 
              className='text-2xl cursor-pointer'/>
        }
        
       
    </div>
</div> 


{
    showMenu &&(
        <div className='md:hidden bg-dark-300 pt-32 pb-32 space-y-8 rounded-lg p-4 grid grid-col-1  text-center justify-center' >
            <a href='#home' className='relative text-white/80 transition duration-300 hover:text-purple group'>
            {/* <span>Home</span> */}
            <span className='absolute left-0 bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'>Home</span>
        </a>

        <a href='#about' className='relative text-white/80 transition duration-300 hover:text-purple group'>
            {/* <span>About</span> */}
            <span className='absolute left-0 bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'>About</span>
        </a>

        <a href='#skills' className='relative text-white/80 transition duration-300 hover:text-purple group'>
            {/* <span>Skills</span> */}
            <span className='absolute left-0 bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'>Skills</span>
        </a>

        <a href='#projects' className='relative text-white/80 transition duration-300 hover:text-purple group'>
            {/* <span>Projects</span> */}
            <span className='absolute left-0 bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'>Projects</span>
        </a>

        <a href='#experience' className='relative text-white/80 transition duration-300 hover:text-purple group'>
            {/* <span>/</span> */}
            <span className='absolute left-0 bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'>Experience</span>
        </a>

        <a href='#contact' className='relative text-white/80 transition duration-300 hover:text-purple group'>
            {/* <span>Contact</span> */}
            <span className='absolute left-0 bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'>Contact</span>
        </a>
        </div>
    )
}

    </nav>
  )
}

export default Navbar
