import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaPlay, FaPause, FaTimes } from "react-icons/fa"; // Font Awesome icons for play/pause

const slideInFromLeft = {
  hidden: { x: -200 }, // Sharp slide in from the left
  visible: { x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
const slideInFromTop = {
  hidden: { y: -300 }, // Sharp slide in from the left
  visible: { x: 0, transition: { duration: 1.5} },
};
const slideInFromBottom = {
  hidden: { y: 40 }, // Sharp slide in from the left
  visible: { y: 0, transition: { duration: 0.5} },
};

const fadeIn = {
  hidden: { opacity: 0, y: 50 }, // Sharp slide in from the left
  visible: { x: 0, opacity:1, transition: { duration: 1.0 } },
};

const fadeInFromRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const fadeInFromBottom = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeIn3D = {
  hidden: { opacity: 1, scale: 2.5, z: 200 },
  visible: {
    opacity: 1,
    scale: 1,
    z: 0,
    transition: { duration: 0.8 },
  },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const AnimatedSection = ({ children, animation = fadeInFromBottom }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={animation}
    >
      {children}
    </motion.div>
  );
};

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Track modal state
  const videoRef = useRef(null); // Reference the video element

  // Function to toggle play/pause
  const toggleModal = () => {
    setIsModalOpen((prevState) => {
      const newState = !prevState;
      console.log("Modal state:", newState);
      if (newState) {
        console.log("Opening modal, playing video...");
      } else {
        videoRef.current.pause(); // Pause video when closing the modal
        console.log("Closing modal, pausing video.");
      }
      return newState;
    });
  };

  return (
    <div className="font-montserrat">
      {/* Landing Section */}
      <div className="relative mx-auto w-full py-40 flex justify-center items-center bg-blue-50 overflow-hidden rounded-b-[200px] ">
        <div className="absolute inset-0 bg-blue-500 z-20 opacity-60"></div>
        <img
          src="/Aboutusbg.png"
          alt="Offshore Rig"
          className="absolute top-0 left-0 w-full h-full object-cover z-10"
        />

        <motion.div
          className="relative z-20 text-center text-white px-4"
          variants={fadeInFromBottom}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-[56px] font-bold mb-4 font-yaro z-50">About Us</h1>
          <h3 className="text-[18px] font-normal w-[50%] mx-auto mb-4">
            Explore our journey and mission as industry leaders, committed to
            transforming the oil and gas sector with innovative solutions.
          </h3>
        </motion.div>
      </div>
      {/* About Us Section */}
      <div className="w-full py-20">
        <div className="mx-auto flex flex-col md:flex-row items-center justify-center px-4">
          <AnimatedSection animation={slideInFromLeft}>
            <div className="ml-28  text-left mr-0">
              <h2 className="text-[34px] font-bold mb-4 underline-title-left text-[#1D3D71] font-yaro">
                About Us
              </h2>
              <h2 className="text-[18px] font-medium mb-4 text-[#1D3D71]">
              Delivering Smart, Sustainable Solutions.
              </h2>
              <p className="text-[16px] font-normal mb-6 text-[#1D3D71] w-[90%]">
              At Anvey Industries, we are committed to providing innovative and sustainable engineering solutions to the Oil & Gas industry in India, with a vision to expand globally
              Our expertise spans across artificial lift systems, well completions, fishing services, and wellhead isolation tools, where we bring cutting-edge technologies designed to enhance production efficiency, reduce downtime, and ensure operational safety. We aim to drive industry advancements by delivering solutions that optimize hydrocarbon production, streamline well intervention, and ensure seamless isolation during critical operations.
              As the demand for oil continues to grow, we focus on delivering cost-effective, reliable answers. Our advanced technologies, customer-first approach, and dedicated team drive the transition to more efficient and affordable hydrocarbon production systems.
              This is not just our goal—it’s our purpose. Together, we’re shaping a better tomorrow, starting today.
              </p>
              <button className="bg-[#1D3D71] text-white px-8 py-4 rounded-full text-base font-semibold transition-colors duration-300">
                ABOUT US
              </button>
            </div>
          </AnimatedSection>
          <div className="mt-8 md:mt-0 w-[270%] mr-5 ">
            <img 
              src="/Site_installation.png"
              alt="Oil Rig"
              className="rounded-2xl shadow-lg w-[100%] h-[60%]"
            />
          </div>
        </div>
      </div>
      {/* Pillars of Success Section */}
      <AnimatedSection>
        <div className="w-full flex justify-center py-20">
          <div className="max-w-7xl mx-auto text-center text-[#1D3D71] px-4">
            <h2 className="text-[31px] font-bold underline-title mb-8 font-yaro">
              The Pillars of Our Success
            </h2>
            <motion.div
              className="mx-auto w-[80%] grid grid-cols-1 md:grid-cols-3 gap-4 text-center"
              variants={staggerChildren}
            >
              <motion.div
                className="bg-[#00B3FF26] text-black p-3 rounded-3xl shadow-sm"
                variants={slideInFromLeft} // Left card slides in from the left
                whileHover={{ scale: 1.05, border: 2,}}
              >
                <h3 className="text-[18px] text-[#1D3D71] font-semibold mb-4 ">
                  Innovation & Technology
                </h3>
                <p className="text-[16px] text-[#1D3D71]">
                Continuously advancing cutting-edge tools and solutions with a commitment to excellence, driving efficiency and optimizing performance in the oil and gas industry
                </p>
              </motion.div>
              <motion.div
                className="bg-[#00B3FF26] text-black p-3 rounded-3xl shadow-sm"
                variants={fadeInFromBottom} // Middle card slides in from bottom
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-[18px] text-[#1D3D71] font-semibold mb-4 ">
                  Sustainability & Efficiency
                </h3>
                <p className="text-[16px] text-[#1D3D71]">
                Focusing on energy-efficient project management and sustainable practices to reduce environmental impact and operational costs.
                </p>
              </motion.div>
              <motion.div
                className="bg-[#00B3FF26] text-black p-3 rounded-3xl shadow-sm"
                variants={fadeInFromRight} // Right card slides in from the right
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-[18px] text-[#1D3D71] font-semibold mb-4 ">
                  Client-Centric Solutions
                </h3>
                <p className="text-[16px] text-[#1D3D71]">
                Delivering customized, high-quality engineering solutions that meet the specific needs of our clients and foster long-term partnerships                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>
      
      <div className="w-full pb-[30vw] pt-10 mb-80 bg-[#1D3D71] relative">
        <div className="max-w-7xl mx-auto text-center text-white px-4">
          <h2 className="text-4xl font-bold mb-8 font-yaro ">
            Listen What Our Experts Have To Say
          </h2>

          {/* Video Thumbnail Section */}
          <AnimatedSection animation={fadeIn3D}>
            <div className="absolute flex justify-center items-center w-full -mt-5">
              <div className="relative top-1/2 left-1/2 mr-52 mt-96 transform -translate-x-1/2 -translate-y-1/2 w-[80%]">
                {/* Video Thumbnail */}
                <img
                  src="/xx.jpeg"
                  alt="Video Thumbnail"
                  className="rounded-lg shadow-lg w-full"
                />

                {/* Play Button Icon (Center of Video) */}
                <button
                  onClick={toggleModal}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl bg-[#ffcc00] p-6 rounded-full shadow-lg focus:outline-none"
                >
                  <FaPlay />
                </button>
              </div>
            </div>
          </AnimatedSection>

          {/* Fullscreen Modal for Video */}
          {isModalOpen && (
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50">
              <div className="relative w-[80vw] h-[80vh]">
                {/* Close Button */}
                <button
                  onClick={toggleModal}
                  className="absolute top-4 right-4 text-white text-3xl p-4 z-50"
                >
                  <FaTimes />
                </button>

                {/* Fullscreen Video */}
                <video
                  ref={videoRef}
                  src="https://www.w3schools.com/html/mov_bbb.mp4"
                  className="w-full h-full rounded-lg shadow-lg"
                  controls
                  autoPlay
                />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="w-full bg-[#1D3D71] py-20">
        <div className="max-w-7xl mx-auto text-center text-white px-4">
          <AnimatedSection animation={slideInFromBottom}>
            <h2 className="text-[34px] font-bold underline-title-white mb-8 font-yaro">
              What Our Clients Say
            </h2>
          </AnimatedSection>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerChildren}
          >
            {[
              {
                name: "Joseph from Denmark",
                img: "https://randomuser.me/api/portraits/men/32.jpg",
              },
              {
                name: "Jade from USA",
                img: "https://randomuser.me/api/portraits/women/32.jpg",
              },
              {
                name: "Xin Paul from Singapore",
                img: "https://randomuser.me/api/portraits/men/33.jpg",
              },
            ].map((client, index) => (
              <motion.div
                key={index}
                className="bg-[#00B3FF26] text-white p-6 rounded-lg shadow-lg"
                variants={fadeIn}
                whileHover={{ scale: 1.05, backgroundColor: "#00B3FF40" }}
              >
                <p className="text-gray-300 text-[16px] font-normal">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Proin consequat, risus vitae scelerisque tincidunt, purus
                  turpis cursus erat, vel faucibus ligula lorem nec lectus."
                </p>
                <div className="mt-4 flex flex-col items-center">
                  <img
                    src={client.img}
                    alt={client.name}
                    className="w-12 h-12 rounded-full mb-2 shadow-md"
                  />
                  <p className="text-[18px] font-normal text-white ">{client.name}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
