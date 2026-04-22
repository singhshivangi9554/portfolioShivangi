import React from 'react'
import { motion } from 'framer-motion'
import { Code, Server, Database, Smartphone, Cloud, Wrench } from 'lucide-react'  // icons

// ✅ Skills Data Array
const skillsData = [
  {
    title: 'Frontend Development',
    description: 'Building responsive and modern user interfaces using the latest frontend technologies.',
    icon: Code,
    tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind', 'Framer Motion']
  },
  {
    title: 'Backend Development',
    description: 'Creating RESTful APIs, server-side logic, and integrating with databases and frontend.',
    icon: Server,
    tags: ['Node.js', 'Express.js', 'REST API', 'JWT', 'Authentication']
  },
  {
    title: 'Database Management',
    description: 'Designing, managing, and optimizing databases for efficient data storage and retrieval.',
    icon: Database,
    tags: ['MongoDB', 'MySQL', 'Mongoose', 'SQL', 'NoSQL']
  },
  {
    title: 'Mobile Development',
    description: 'Building mobile-friendly and cross-platform applications with modern tools.',
    icon: Smartphone,
    tags: ['React Native', 'Expo', 'Responsive Design', 'UI/UX']
  },
  {
    title: 'Cloud Computing',
    description: 'Deploying and scaling applications using cloud platforms and services.',
    icon: Cloud,
    tags: ['AWS', 'Vercel', 'Netlify', 'Firebase', 'GitHub Pages']
  },
  {
    title: 'DevOps & Tools',
    description: 'Using DevOps practices, CI/CD pipelines, and development tools for efficient workflows.',
    icon: Wrench,
    tags: ['Git', 'GitHub', 'Docker', 'CI/CD', 'Postman']
  }
]

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
      id='skills'
      className='py-20 bg-dark-100'
    >
      <div className='container mx-auto px-6'>
        <h2 className='text-3xl font-bold text-center mb-4'>
          My <span className='text-purple'>Skills</span>
        </h2>
        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>
          Technologies and tools I work with
        </p>

        {/* ✅ Skill Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className='bg-dark-300 rounded-2xl p-6 hover:-translate-y-2 transition duration-300 cursor-pointer shadow-lg'
            >
              <div className='flex items-center mb-4'>
                <skill.icon className='w-12 h-12 text-purple mr-6' />
                <h3 className='text-xl font-semibold'>{skill.title}</h3>
              </div>
              <p className='text-gray-400 mb-4'>{skill.description}</p>
              <div className='flex flex-wrap gap-2'>
                {skill.tags.map((tech) => (
                  <span
                    key={tech}
                    className='px-3 py-1 bg-dark-400 rounded-full text-sm'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Skills
