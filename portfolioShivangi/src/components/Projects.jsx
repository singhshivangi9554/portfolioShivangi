// import React from 'react'
// import {motion} from 'framer-motion'
// const Projects = () => {
//   return (
//     <motion.div
//        initial={{ opacity: 0, y: -50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, ease: 'easeOut' }}
//       viewport={{ once: false, amount: 0.2 }}
//         id='projects'
//         className='py-20 bg-dark-200'
//       >
//         <div className='container mx-auto px-6'>
//             <h2 className='text-3xl font-bold text-center mb-4'>
//                 My 
//                 <span className='text-purple'>Projects</span>
//             </h2>
//             <p className='text-gray-400 text-center max-w-2xl ms-auto mb-16'> A Selection of my recent work </p>
//             <div className='grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
//             {/* projects cards */}
//             {
//                 projects.map((project,index)=>(
//                     <ProjectCard key={index} {...project}/>

//                 ) )
//             }
//             </div>
//             <div className='text-center mt-12'>
//                 <a href='#' className='inline-flex items-center px-6 py-3 border border-purple rounded-lg font-medium hover:bg-purple/20 transition duration-300'>
//                 <span>View More Projects</span>
//                 <FaArrowRight className='ml-2'/>
//                 </a>

//             </div>
//         </div>
//     </motion.div>
//   )
// }

// export default Projects


import React from 'react'
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'
import ProjectCard from '../components/ProjectCard'   // ✅ Make sure path is correct

// ✅ Define the projects array
const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio built with React, Tailwind CSS, and Framer Motion.',
    image: '/projects/portfolio.jpg',
    tech: ['React', 'Tailwind', 'Framer Motion']
  },
  {
    title: 'HostelHub Platform',
    description: 'A full-stack web app to find and post hostels with user authentication.',
    image: '/projects/hostelhub.jpg',
    tech: ['React', 'Node.js', 'MongoDB', 'Express']
  },
  {
    title: 'E-Commerce Store',
    description: 'An online store with product filtering, cart, and checkout system.',
    image: '/projects/ecommerce.jpg',
    tech: ['React', 'Redux', 'Stripe', 'Firebase']
  },
  {
    title: 'Blog Website',
    description: 'A dynamic blog platform with markdown editor and authentication.',
    image: '/projects/blog.jpg',
    tech: ['Next.js', 'Tailwind', 'MongoDB']
  },
  {
    title: 'Weather App',
    description: 'A simple weather forecasting app using OpenWeather API.',
    image: '/projects/weather.jpg',
    tech: ['React', 'API', 'CSS']
  },
  {
    title: 'Task Manager',
    description: 'A productivity app to manage daily tasks and to-do lists.',
    image: '/projects/taskmanager.jpg',
    tech: ['React', 'Context API', 'LocalStorage']
  }
]

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 1, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
      id='projects'
      className='py-20 bg-dark-200'
    >
      <div className='container mx-auto px-6'>
        <h2 className='text-3xl font-bold text-center mb-4'>
          My <span className='text-purple'>Projects</span>
        </h2>
        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>
          A selection of my recent work
        </p>

        {/* ✅ Projects Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* ✅ View More Button */}
        <div className='text-center mt-12'>
          <a
            href='#'
            className='inline-flex items-center px-6 py-3 border border-purple rounded-lg font-medium hover:bg-purple/20 transition duration-300'
          >
            <span>View More Projects</span>
            <FaArrowRight className='ml-2' />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default Projects
