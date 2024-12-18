import React, { useState } from 'react'
import pic from "../../public/photo.avif";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import {Link} from "react-scroll"
function Navbar() {
    const [menu, setMenu] = useState(false);
    const navItems = [
        {
            id: 1,
            text: "Home"
        },
        {
            id: 2,
            text: "About"
        },
        {
            id: 3,
            text: "Portfolio"
        },
        {
            id: 4,
            text: "Experiance"
        },
        {
            id: 5,
            text: "Contact"
        }
    ]
    return (
        <div className='max-w-screen-2xl container bg-white z-50 mx-auto px-4 md:px-20 shadow-md h-16 fixed right-0 left-0 top-0' >
            <div className='flex justify-between items-center h-16 '>
                <div className='flex space-x-2'>
                    <img src={pic} className='h-12 w-12 rounded-full' alt="" />
                    <h1 className='font-semibold text-xl cursor-pointer'>Dnyaneshwa<span className='text-green-500 text-2xl'>r</span>
                        <p className='text-sm '>Full Stack Developer</p>
                    </h1>
                </div>
                {/* Desktop Navbar */}
                <div>
                    <ul className='hidden md:flex space-x-8'>
                        {
                            navItems.map(({id, text}) => (
                                <li className='hover:scale-105 duration-200 cursor-pointer'  
                                key={id}>
                                    <Link to={text}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    activeClass="active"
                                    >{text}</Link>
                                </li>
                            ))
                        }
                    </ul>
                    <div className='md:hidden' onClick={() => setMenu(!menu)}>
                         {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
                         </div>
                </div>
            </div>
            {/* Mobail navabar */}
            {
                menu && (
                    <div>
                        <ul className='bg-white bmd:hidden flex flex-col h-screen items-center justify-center space-y-3'>
                        {
                            navItems.map(({id, text}) => (
                                <li className='hover:scale-105 font-semibold duration-200 cursor-pointer' key={id}>
                                     <Link onClick={() => setMenu(!menu)} to={text}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    activeClass="active"
                                    >{text}</Link></li>
                            ))
                        }
                        </ul>
                    </div>
                )
            }

        </div>
    )
}

export default Navbar
