import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
function Footer() {
  return <>
  <hr />
  <footer className='py-12'>
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 '>
    <div className='flex flex-col items-center justify-center'>
        <div className='flex space-x-4'>
            <FaFacebook/>
            <FaInstagram/>
            <FaTwitter/>
            <FaLinkedin/>
        </div>
        <div className='mt-8 border-t border-gray-700 pt-8 flex flex-col items-center'>
            <p>&copy; 2025 Darade Dnyaneshwar. All right reserved.</p>
            <p className='text-sm'>"Great development isn’t just about building software; it’s about solving problems and creating experiences that make a difference."</p>
        </div>
    </div>
    </div>
  </footer>
  </>
}
export default Footer
