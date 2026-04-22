import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin, FaTwitter, FaDribbble } from 'react-icons/fa'
import emailjs from 'emailjs-com'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    // Instructions:
    // 1. Sign up at https://www.emailjs.com/
    // 2. Add an Email Service and get the Service ID
    // 3. Create an Email Template and get the Template ID
    // 4. Go to Account -> API Keys to get the Public Key
    const serviceID = 'service_tusor2w';
    const templateID = 'template_oemp5ql';
    const publicKey = '_N7GeLr8My3yF_doG';

    emailjs.send(serviceID, templateID, formData, publicKey)
      .then(() => {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 5000); // Clear success message after 5 seconds
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        setStatus('error');
        setTimeout(() => setStatus(''), 5000); // Clear error message after 5 seconds
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      id='contact'
      className='py-20 bg-dark-100'
    >
      <div className='container mx-auto px-6'>
        {/* Heading */}
        <h2 className='text-3xl font-bold text-center mb-4'>
          Get In <span className='text-purple'>Touch</span>
        </h2>
        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>
          Have a project in mind or want to collaborate? Let's talk.
        </p>

        {/* 2-column grid: form (left) and info (right) */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>
          
          {/* LEFT: FORM */}
          <div>
            <form className='space-y-6' onSubmit={handleSubmit}>
              <div>
                <label htmlFor='name' className='block text-gray-300 mb-2'>
                  Your Name
                </label>
                <input
                  id='name'
                  name='name'
                  type='text'
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none'
                  placeholder='Enter your name'
                />
              </div>

              <div>
                <label htmlFor='email' className='block text-gray-300 mb-2'>
                  Email Address
                </label>
                <input
                  id='email'
                  name='email'
                  type='email'
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none'
                  placeholder='you@example.com'
                />
              </div>

              <div>
                <label htmlFor='message' className='block text-gray-300 mb-2'>
                  Your Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  rows='5'
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none'
                  placeholder='Write your message...'
                />
              </div>

              {status === 'success' && (
                <div className='text-green-500 text-sm'>Your message has been sent successfully!</div>
              )}
              {status === 'error' && (
                <div className='text-red-500 text-sm'>Failed to send the message. Please try again later.</div>
              )}

              <button
                type='submit'
                disabled={status === 'sending'}
                className={`w-full px-6 py-3 rounded-lg font-medium transition duration-300 ${
                  status === 'sending' 
                    ? 'bg-purple-500 cursor-not-allowed opacity-70' 
                    : 'bg-purple hover:bg-purple-700 cursor-pointer'
                }`}
              >
                {status === 'sending' ? 'Sending...' : 'Send'}
              </button>
            </form>
          </div>

          {/* RIGHT: CONTACT INFO */}
          <div className='flex flex-col justify-center space-y-8'>
            <div className='flex items-start'>
              <div className='text-purple text-2xl mr-4'>
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 className='text-lg font-semibold mb-2'>Location</h3>
                <p className='text-gray-400'>Ballia(UP)</p>
              </div>
            </div>

            <div className='flex items-start'>
              <div className='text-purple text-2xl mr-4'>
                <FaEnvelope />
              </div>
              <div>
                <h3 className='text-lg font-semibold mb-2'>Email</h3>
                <p className='text-gray-400'>shivanganisingh370@gmail.com</p>
              </div>
            </div>

            <div className='flex items-start'>
              <div className='text-purple text-2xl mr-4'>
                <FaPhoneAlt />
              </div>
              <div>
                <h3 className='text-lg font-semibold mb-2'>Phone</h3>
                <p className='text-gray-400'>+91 95543 18518</p>
              </div>
            </div>

            {/* ✅ Follow Me section */}
            <div className='pt-4'>
              <h3 className='text-lg font-semibold mb-3'>Follow Me</h3>
              <div className='flex space-x-4'>
                <a
                  href='https://github.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:bg-purple hover:text-white transition duration-300'
                >
                  <FaGithub />
                </a>

                 <a
                  href='https://linkedin.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:bg-purple hover:text-white transition duration-300'
                >
                  <FaLinkedin />
                </a>

                 <a
                  href='https://twitter.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:bg-purple hover:text-white transition duration-300'
                >
                  <FaTwitter />
                </a>

                 <a
                  href='https://dribble.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:bg-purple hover:text-white transition duration-300'
                >
                  <FaDribbble />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact
