import React from "react";
import { Download, Star } from "lucide-react";
import { services, capabilities, projects, products } from "../../data.js"; // Assuming products data is also in data.js
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CarouselComponent from "./CarouselComponent.jsx"; // Import the carousel component

const SecondPage = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const slideFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const slideFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const fadeInDown = {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Use Framer Motion's useInView hook for each section
  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [capabilitiesRef, capabilitiesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [projectsRef, projectsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [downloadRef, downloadInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [productsRef, productsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Scroll to Services Section
  const scrollToServices = () => {
    servicesRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="font-sans bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative h-screen -mt-10 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-blue-500 opacity-60"></div>
        <motion.div
          className="relative z-10 text-center text-white"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h1 className="text-[56px] md:text-6xl font-bold mb-4 font-yaro">
            Our Services
          </h1>
          <p className="text-[18px] font-normal md:text-2xl mb-6">
            Innovative solutions for a sustainable future
          </p>

        </motion.div>
        <div className="wave-container">
          <svg
            className="wave"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,240L48,230C96,220,192,200,288,185C384,170,480,160,576,170C672,180,768,210,864,210C960,210,1056,190,1152,180C1248,170,1344,170,1392,170L1440,170L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>





      </section>
      {/* Services Section */}
      <motion.section
        ref={servicesRef}
        className="py-16 bg-white"
        initial="hidden"
        animate={servicesInView ? "visible" : "hidden"}
        variants={fadeInDown} // Come from down
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-center text-[#1D3D71] font-yaro">
            Services
          </h2>
          <p className="text-lg text-center mb-12 text-[#1D3D71]">
            Comprehensive services tailored to your needs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {services.map((product, index) => (
              <motion.div
                key={index}
                className="bg-gray-200 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }} // Adds a hover effect
                variants={index % 2 === 0 ? slideFromLeft : slideFromRight}
              >
              <Star size={64} className="pl-4 pt-4" color="#1D3D71" fill />
                <h3 className="text-lg p-4 font-bold mb-2 text-[#1D3D71]">
                  {product.title}
                </h3>
                <p className="px-6 text-sm font-montserrat text-gray-600 mb-24">{product.description}</p>
                <button className="px-6 ml-6 py-2 font-bold bottom-10 absolute border-2 rounded-full border-[#1D3D71] text-[#1D3D71] p">Learn More</button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      {/* Capabilities Section */}
      <motion.section
        ref={capabilitiesRef}
        className="py-16 bg-[#00B3FF26]"
        initial="hidden"
        animate={capabilitiesInView ? "visible" : "hidden"}
        variants={fadeInDown} // Come from down
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-center text-[#1D3D71] font-yaro">
            Our Capabilities
          </h2>
          <p className="text-xl text-center mb-12 text-[#1D3D71]">
            Delivering excellence through expertise and innovation
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-36">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                className="bg-white p-3 rounded-3xl shadow-lg transition"
                variants={index < 3 ? slideFromLeft : slideFromRight} // First 3 from left, rest from right
                animate={capabilitiesInView ? "visible" : "hidden"}
              >
                <capability.icon className="w-16 h-16 mb-4 text-[#00B3FF]" />
                <h3 className="text-2xl font-semibold mb-2 text-[#1D3D71] ">
                  {capability.title}
                </h3>
                <p className="mb-4 text-gray-700">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      {/* Our Products Section */}
      <motion.section
        ref={productsRef}
        className="py-16 bg-white"
        initial="hidden"
        animate={productsInView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        <div className=" mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-center text-[#1D3D71] font-yaro">
            Our Products
          </h2>
          <p className="text-xl text-center mb-12 text-gray-600">
            Explore our innovative product offerings
          </p>
          <div className="mx-auto w-[90%] grid grid-cols-1 md:grid-cols-3 gap-4 px-36">
            {products.map((product, index) => (
              <motion.div
                key={index}
                className="rounded-3xl mx-auto w-[90%] bg-gray-200 shadow-md hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }} // Adds a hover effect
                variants={index % 2 === 0 ? slideFromLeft : slideFromRight}
              >
                <img
                  className="rounded-t-3xl w-full"
                  src="xx.jpeg"
                  alt=""
                  srcset=""
                />
                <h3 className=" text-2xl px-6 py-2 font-semibold mb-2 text-[#1D3D71]">
                  {product.title}
                </h3>
                <p className="px-6 pb-6 text-gray-600">{product.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      {/* Carousel Section */}
      <CarouselComponent /> {/* Add the Carousel component here */}
      {/* Downloads Section */}
      <motion.section
        ref={downloadRef}
        className="pt-16 bg-gray-100"
        initial="hidden"
        animate={downloadInView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        <div className="container mx-auto justify-center px-0">
          <h2 className=" underline-title-d mx-auto text-4xl font-bold mb-8 text-center text-[#1D3D71] font-yaro">
            Download
          </h2>
          <div className="flex flex-col md:flex-row">
            {/* First Card */}
            <div className=" rounded-tl-2xl bg-red-500 shadow-lg p-8 flex-1 mb-0">
              <h3 className="text-3xl font-semibold mb-4 text-white">
                2023 Annual & Sustainability Report Highlights
              </h3>
              <p className="mb-4 text-white">
                Discover our key achievements and sustainability efforts in 2023
              </p>
              <button className="bg-white text-red-600 px-4 py-2 rounded-lg transition duration-300 hover:bg-gray-100">
                <Download className="w-5 h-5 inline-block mr-2" />
                Download
              </button>
            </div>
            {/* Second Card */}
            <div className="bg-blue-500 p-6 shadow-lg flex-1 mb-0">
              <h3 className="text-3xl font-semibold mb-4 text-white">
                Stakeholder Relations Report
              </h3>
              <p className="mb-4 text-white">
                Learn about our engagement with key stakeholders.
              </p>
              <button className="bg-white text-blue-600 px-4 py-2 rounded-lg transition duration-300 hover:bg-gray-100">
                <Download className="w-5 h-5 inline-block mr-2" />
                Download
              </button>
            </div>
            {/* Third Card */}
            <div className=" rounded-tr-2xl bg-green-500 shadow-lg p-8 flex-1 mb-0">
              <h3 className="text-3xl font-semibold mb-4 text-white">
                Sustainability & Environmental Impact Report
              </h3>
              <p className="mb-4 text-white">
                Explore our environmental initiatives and sustainability
                projects.
              </p>
              <button className="bg-white text-green-600 px-4 py-2 rounded-lg transition duration-300 hover:bg-gray-100">
                <Download className="w-5 h-5 inline-block mr-2" />
                Download
              </button>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default SecondPage;
