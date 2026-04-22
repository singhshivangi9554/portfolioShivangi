// import React from 'react'
// import { motion } from 'framer-motion'
// const work = () => {
//   return (
//     <div>
//         <motion.div
//               initial={{opacity:0, y:-50}}
//             whileInView={{opacity:1, y:0}}
//             transition={{duration:0.6, case: 'caseOut' }}
//             viewport={{once:true}}
//             id='experience'
//             className='py-20 bg-dark-100' 
//             >
//                     <div className='container mx-auto px-6'>
//                         <h2 className='text-3xl font-bold text-center mb-4'>Work 
//                             <span className=' text-purple'>Experience</span>
//                             </h2>
//                             <p className='test-gray-400 text-center mx-w-2xl mx-auto mb-16'>My professional journey so far</p>
//                         <div className='max-w-3xl mx-auto'>
//                             <div className='space-y-12'>
//                                 {
//                                     workData.map((data,index)=>(
//                                             <div key={index} className='relative pl-12
//                                             before:content-[""] before:absolute before:left-0
//                                             before:top-0 before:w-[2px] before:h-full before:bg-purple
//                                             cursor-pointer hover:-translate-y-2 transition-all duration-300'>
//                                             {/* timeline */}
//                                             <div className='absolute left-[-0.5rem] top-0 w-6 h-6 rounded-full bg-purple'>

//                                             </div>


//                                             {/* box */}
//                                             <div className='bg-dark-300 p-6 rounded-2xl'>
//                                                <div className='flex justify-between items-start mb-2'>
//                                                 <h3 className='text-xl font-semibold'>{data.role}</h3>
//                                                 <span className='px-3 py-1 bg-purple/20 text-purple rounded-full text-sm'>{data.duration}</span>
//                                                </div>
//                                                <p className='text-gray-400 mb-2'>{data.company}</p>
//                                                <p className='text-gray-300 '>{data.description}</p>
//                                             </div>
//                                             </div>
                                            
//                                     ))
//                                 }
//                             </div>
//                         </div>
//                     </div>
//             </motion.div>
//     </div>
//   )
// }

// export default work


import React from 'react'
import { motion } from 'framer-motion'

// ✅ Define some dummy data (you can replace this with real data later)
const workData = [
  {
    role: 'Frontend Developer',
    company: 'ABC Company',
    duration: 'Jan 2023 - Dec 2023',
    description: 'Built and maintained responsive web applications using React.'
  },
  {
    role: 'Intern',
    company: 'XYZ Startups',
    duration: 'Jun 2022 - Dec 2022',
    description: 'Worked on UI components and collaborated with backend team.'
  }
]

const Work = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}  // ✅ fixed typo
      viewport={{ once: true }}
      id='experience'
      className='py-20 bg-dark-100'
    >
      <div className='container mx-auto px-6'>
        <h2 className='text-3xl font-bold text-center mb-4'>
          Work <span className='text-purple'>Experience</span>
        </h2>
        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>
          My professional journey so far
        </p>

        <div className='max-w-3xl mx-auto'>
          <div className='space-y-12'>
            {workData.map((data, index) => (
              <div
                key={index}
                className='relative pl-12 before:content-[""] before:absolute before:left-0 before:top-0 before:w-[2px] before:h-full before:bg-purple cursor-pointer hover:-translate-y-2 transition-all duration-300'
              >
                {/* timeline dot */}
                <div className='absolute left-[-0.5rem] top-0 w-6 h-6 rounded-full bg-purple'></div>

                {/* box */}
                <div className='bg-dark-300 p-6 rounded-2xl'>
                  <div className='flex justify-between items-start mb-2'>
                    <h3 className='text-xl font-semibold'>{data.role}</h3>
                    <span className='px-3 py-1 bg-purple/20 text-purple rounded-full text-sm'>
                      {data.duration}
                    </span>
                  </div>
                  <p className='text-gray-400 mb-2'>{data.company}</p>
                  <p className='text-gray-300'>{data.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Work

