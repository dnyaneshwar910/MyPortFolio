import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import { SiSpringboot } from "react-icons/si";
import { FaAngular } from "react-icons/fa6";
import { FaNode } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { ReactTyped, Typed } from "react-typed";
import pic from "../../public/myimg.png";
function Home() {
    return (
        <>
            <div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
                <div className='flex flex-col md:flex-row'>

                    <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
                        <span className='text-xl'>Welcome In My Feed</span>
                        <div className='flex space-x-1 text-2xl md:text-4xl'>
                            <h1>Hello, I'm a</h1>
                            {/* <span className='text-red-700 font-bold'>Developer</span> */}
                            <ReactTyped
                                className='text-red-700 font-bold'
                                strings={["Developer", "Programmer", "Coder"]}
                                typeSpeed={40}
                                backSpeed={50}
                                loop={true}
                            />
                        </div>
                        <br />
                        <p className='text-sm md:text-md text-justify'>Welcome to my portfolio! I’m a full-stack developer with a passion for creating innovative and efficient web solutions. With expertise in both front-end and back-end technologies, I craft seamless, user-centric applications that solve real-world problems. Whether building responsive websites, developing scalable applications, or optimizing system performance, my goal is to deliver exceptional results. Explore my work and let’s collaborate on your next project!.</p>
                        <br />
                        {/* socail media icons */}
                        <div className='flex items-center flex-col md:flex-row justify-between space-y-6 md:space-y-0'>
                            <div className='space-y-2 text-center'>
                                <h1 className='font-bold'>Available on</h1>
                                <ul className='flex space-x-5'>
                                    <li><a href="https://www.facebook.com/dada.raj.77312"><FaFacebook className='text-2xl cursor-pointer' /></a></li>
                                    <li><a href="https://linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=dnyaneshwardarade"><BsLinkedin className='text-2xl cursor-pointer' /></a></li>
                                    <li>{" "} <IoLogoYoutube className='text-2xl cursor-pointer' /></li>
                                    <li><a href="https://www.instagram.com/the_coder_dnyaneshwar_/profilecard/?igsh=dzRwbzJmMjV4ZnF3"><FaSquareInstagram className='text-2xl cursor-pointer' /></a></li>
                                    <li><a href="https://t.me/DnyaneshwarDarade"><FaTelegram className='text-2xl cursor-pointer' /></a></li>
                                </ul>
                            </div>
                            <div className='text-center space-y-2'>
                                <h1 className='font-bold text-clip'>Currently Working on</h1>
                                <div className='flex space-x-5'>
                                    <FaJava className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                                    <SiSpringboot className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                                    <SiMysql className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full ' />
                                    <FaAngular className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                                    <FaReact className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                                    {/* <FaNode className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' /> */}
                                    {/* <SiExpress className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' /> */}
                                    <SiMongodb className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' md:ml-48 md:mt-20 mt-5 order-1'>
                    <img src={pic} className='border rounded-full md:w-[550px md:h-[500px] shadow-lg' alt="" />
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default Home
