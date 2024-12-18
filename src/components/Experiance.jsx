import React from 'react'
import java from "../../public/java.png"
import javascript from "../../public/javascript.png"
import springBoot from "../../public/springBoot.jpg"
import html from "../../public/html.png"
import css from "../../public/css.jpg"
import oracle from "../../public/oracle.png"
import spring from "../../public/spring.png"
import reactjs from "../../public/reactjs.png"
import mongodb from "../../public/mongodb.jpg"
import angular from "../../public/Angular.png"
import express from "../../public/express.png"
import nodejs from "../../public/node.png"
import mysql from "../../public/mysql logo.png"
import hibernate from "../../public/hibernate.png"
function Experiance() {
    const cardItem = [
        {
            id: 1,
            logo: java,
            name: "Java"
        },
        {
            id: 2,
            logo: springBoot,
            name: "SpringBoot"
        },
        {
            id: 3,
            logo: spring,
            name: "Spring"
        },
        {
            id: 4,
            logo: html,
            name: "HTML"
        },
        {
            id: 5,
            logo: css,
            name: "CSS"
        },
        {
            id: 6,
            logo: oracle,
            name: "Oracle"
        },
        {
            id: 7,
            logo: javascript,
            name: "JavaScript"
        },
        {
            id: 8,
            logo: reactjs,
            name: "React JS"
        },
        {
            id: 9,
            logo: mongodb,
            name: "Mongo DB"
        },
        {
            id: 10,
            logo: angular,
            name: "Angular"
        },
        {
            id: 11,
            logo: nodejs,
            name: "Node JS"
        },
        {
            id: 12,
            logo: express,
            name: "Express JS"
        },
        {
            id: 13,
            logo: mysql,
            name: "MySQL"
        },
        {
            id: 14,
            logo: hibernate,
            name: "Hibernate"
        }
    ]
    return (
        <div name="Experiance" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
            <div>
                <h1 className='text-3xl font-bold mb-5'>Working Technology</h1>
                <p className='font-semibold'>I've complete my project using this modul</p>
                <div className='grid grid-cols-2 md:grid-cols-5 gap-7 my-3'>
                    {cardItem.map(({ id, logo, name }) => (
                        <div className='flex flex-col items-center justify-center border-[2px] shadow-lg md:w-[145px] md:[400px] rounded-full p-1 cursor-pointer hover:scale-110 duration-300' key={id}>
                            <img src={logo} 
                            className='w-[100px] rounded-full' alt="" />
                           <div>{name}</div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Experiance
