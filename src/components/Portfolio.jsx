import React from 'react';
import weatherApp from "../../public/weatherApp.png";
import spotifyClone from "../../public/spotifyClone.png";
import librarySystem from "../../public/librarySystem.jpg";
import foodOrdering from "../../public/foodOrdering.png";

function Portfolio() {
    const cardItem = [
        {
            id: 1,
            logo: foodOrdering,
            name: "Food Ordering System",
            description: "A system like Swiggy with roles for Restaurant Owner, Admin, and Customer.",
            liveDemo: "#",  // Add live demo link if available
            sourceCode: "https://github.com/dnyaneshwar910/FoodOrderingSystem"
        },
        {
            id: 4,
            logo: weatherApp,
            name: "Weather Application",
            description: "A weather forecasting app built with Advanced Java (Servlets, JSP).",
            liveDemo: "https://dnyaneshwar910.github.io/WeatherAppJavaScript/",  // Add live demo link if available
            sourceCode: "https://github.com/dnyaneshwar910/Weather-Application"
        },
        {
            id: 2,
            logo: spotifyClone,
            name: "Spotify Clone",
            description: "A Spotify clone built with HTML, CSS, and JavaScript.",
            liveDemo: "https://dnyaneshwar910.github.io/spotify/",  // Add live demo link if available
            sourceCode: "https://github.com/dnyaneshwar910/spotify"
        },
        {
            id: 3,
            logo: librarySystem,
            name: "Library Management System",
            description: "Library system using Advanced Java (Servlets, JSP, MySQL).",
            liveDemo: "#",  // Add live demo link if available
            sourceCode: "https://github.com/dnyaneshwar910/LibraryManagementSystem"
        },
       
    ];

    return (
        <div name="Portfolio" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 mt-12'>
            <div>
                <h1 className='text-3xl font-bold mb-5'>Portfolio</h1>
                <span className='underline'>Featured Projects</span>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-3 my-5'>
                    {cardItem.map(({ id, logo, name, description, liveDemo, sourceCode }) => (
                        <div className='md:w-[300px] md:h-[400px] border-[2px] rounded-lg shadow-lg p-4 cursor-pointer hover:scale-105 duration-300' key={id}>
                            <img src={logo} 
                            className='w-[120px] h-[120px] p-1 rounded-full border-[2px] mx-auto' alt={name} />
                            <div className='text-center mt-4'>
                                <h2 className='font-bold text-xl mb-2'>{name}</h2>
                                <p className='text-gray-700'>{description}</p>
                            </div>
                            <div className='px-6 py-4 space-x-3 flex justify-center'>
    <a href={liveDemo} target="_blank" rel="noopener noreferrer">
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-3 py-1 rounded'>Live Demo</button>
    </a>
    <a href={sourceCode} target="_blank" rel="noopener noreferrer">
        <button className='bg-green-500 hover:bg-green-700 text-white font-bold px-3 py-1 rounded'>Source Code</button>
    </a>
</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
