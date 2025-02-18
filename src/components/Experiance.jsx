import React from 'react';
import java from "../../public/java.png";
import javascript from "../../public/javascript.png";
import springBoot from "../../public/springBoot.jpg";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import oracle from "../../public/oracle.png";
import spring from "../../public/spring.png";
import reactjs from "../../public/reactjs.png";
import mongodb from "../../public/mongodb.jpg";
import angular from "../../public/Angular.png";
import express from "../../public/express.png";
import nodejs from "../../public/node.png";
import mysql from "../../public/mysql logo.png";
import hibernate from "../../public/hibernate.png";

function Skills() {
    const cardItem = [
        { id: 1, logo: java, name: "Java", percentage: 92 },
        { id: 2, logo: springBoot, name: "SpringBoot", percentage: 80 },
        { id: 4, logo: html, name: "HTML", percentage: 99 },
        { id: 5, logo: css, name: "CSS", percentage: 90 },
        { id: 8, logo: reactjs, name: "React JS", percentage: 90 },
        { id: 13, logo: mysql, name: "MySQL", percentage: 90 },
        { id: 7, logo: javascript, name: "JavaScript", percentage: 85 },
        { id: 14, logo: hibernate, name: "Hibernate", percentage: 80 },
        { id: 10, logo: angular, name: "Angular", percentage: 75 },
        { id: 3, logo: spring, name: "Spring", percentage: 70 },
        { id: 9, logo: mongodb, name: "Mongo DB", percentage: 65 },
        { id: 6, logo: oracle, name: "Oracle", percentage: 60 },
        { id: 11, logo: nodejs, name: "Node JS", percentage: 60 },
        { id: 12, logo: express, name: "Express JS", percentage: 60 },
    ];

    return (
        <div name="Skills" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
            <div>
                <h1 className="text-3xl font-bold mb-5">Skills</h1>
                <p className="font-semibold">I've completed my projects using these technologies</p>
                <div className="grid grid-cols-2 md:grid-cols-7 gap-7 my-3">
                    {cardItem.map(({ id, logo, name, percentage }) => (
                        <div className="flex flex-col items-center justify-center border-[2px] shadow-lg md:w-[150px] md:h-[150px] rounded-full p-1 cursor-pointer hover:scale-110 duration-300" key={id}>
                            <img src={logo} className="w-[50px] rounded-full" alt={name} />
                            <div>{name}</div>

                            {/* Circular Progress Bar */}
                            <div className="w-[60px] h-[60px] rounded-full border-4 border-gray-300 flex items-center justify-center mt-3 relative">
                                <div
                                    className="absolute top-0 left-0 right-0 bottom-0 rounded-full"
                                    style={{
                                        background: `conic-gradient(#4CAF50 ${percentage}%, #ddd ${percentage}%)`,
                                    }}
                                ></div>
                                <span className="z-10 text-black font-bold">{percentage}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;
