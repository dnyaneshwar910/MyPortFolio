import React from "react";
// import avatar from "../assets/av.png"; // Path to your uploaded image file
import avatar from "../../public/photo.avif";


const About = () => {
  return (
    <div name="About" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
      <h1 className="text-3xl font-bold mb-5 text-black">About</h1>
      <p className="text-gray-600 mb-10">
        As a full-stack developer, I thrive on turning ideas into functional and engaging digital experiences. With expertise spanning both front-end and back-end technologies, I focus on building scalable, responsive, and intuitive applications
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Section - Image */}
        <div className="flex items-center justify-center">
          <img
            src={avatar}
            alt="Profile"
            className="w-[450px] h-[450px] rounded-xl shadow-lg"
          />
        </div>

        {/* Right Section - Information */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-green-700">Full-Stack Developer</h2>
          <hr />
          <p className="italic font-semibold text-green-600 mb-4">
            Information
          </p>

          <div className="space-y-2 text-gray-700">

            <p>
              <span className="font-semibold text-green-600">Phone:</span> +91 8554860795
            </p>
            <p>
              <span className="font-semibold text-green-600">City:</span> Pimpri-Chinchwad, Pune
            </p>
            <p>
              <span className="font-semibold text-green-600">Age:</span> 21
            </p>
            <p>
              <span className="font-semibold text-green-600">Degree:</span> Bsc Computer Science
            </p>
            <p>
              <span className="font-semibold text-green-600">Email:</span>{" "}
              <a href="mailto:email@example.com" className="text-blue-500 underline">
                dnyaneshwardarade88@gmail.com
              </a>
            </p>
            <p>
              <span className="font-semibold text-green-600">Freelance:</span> Available
            </p>
          </div>

          {/* Extra Text */}
          <p className="mt-6 text-gray-600 leading-relaxed">
          A passionate full-stack developer with a strong foundation in computer science, I specialize in building dynamic and scalable web applications. With expertise in both front-end and back-end technologies, I strive to deliver high-quality solutions that meet user need.
          </p>
        </div>
      </div>


    </div>
  );
};

export default About;