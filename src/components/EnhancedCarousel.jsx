// import React from "react";
// import { useNavigate } from "react-router-dom";

// const carouselItems = [
//   {
//     id: 1,
//     image: "/oil-well.png",
//     title: "Well Completion Services",
//     description:
//       "At Anvey Industries, we offer tailored well completion services for all reservoir types, optimizing production efficiency. Our expertise covers a range of techniques to ensure your well achieves peak performance, no matter the complexity",
//   },
//   {
//     id: 2,
//     image: "/tools.png",
//     title: "Artificial lift design and installation services",
//     description:
//       "Our in-house team designs and installs advanced artificial lift systems for various well types, including gas, CBM, water, heavy oil, and sand influx wells. We offer solutions like plunger lifts, ES-PCPs, and our innovative Maglev Linear Motor Drive Plunger Pumps (MLMDP), enhancing productivity for wells producing from 400 m³/day to as low as 2-3 m³/day.",
//   },
//   {
//     id: 3,
//     image: "boom-lift.png",
//     title: "Stimulation rental tools",
//     description:
//       "Anvey provides rental tools for well stimulation and fracturing, including reliable, easy-to-use straddle packers that work efficiently under various conditions. We also offer sales and services for wellhead isolation tools to ensure safe and efficient frac operations, providing a cost-effective solution for your needs.",
//   },
//   {
//     id: 4,
//     image: "/robotic-arm.png",
//     title: "Well Fishing and Remedial Services",
//     description:
//       "We specialize in efficient fishing and remedial services, with years of experience retrieving equipment like coiled tubing, pumps, and drill pipes from challenging wells. Our extensive inventory includes tools such as jars, overshots, spears, and cutters, allowing us to tackle any fishing challenge and minimize downtime while restoring well productivity quickly.",
//   },
// ];

// const EnhancedCarousel = () => {
//   const navigate = useNavigate();
//   const handleDiscoverMore = () => {
//     navigate("/discover-more-2");
//   };

//   return (
//     <div className="relative w-full max-w-6xl mx-auto">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {carouselItems.map((item) => (
//           <div
//             key={item.id}
//             className="bg-white shadow-lg rounded-lg flex flex-col justify-between h-[100%] p-6"
//           >
//             {/* Image */}
//             <div className="flex justify-center mb-4">
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="w-16 h-16 object-contain"
//               />
//             </div>

//             {/* Title */}
//             <h3 className="text-[#1D3D71] text-xl font-bold text-center mb-2">
//               {item.title}
//             </h3>

//             {/* Description */}
//             <p className="text-[#1D3D71] text-sm text-center flex-grow">
//               {item.description}
//             </p>

//             {/* Discover More Button */}
//             <div className="mt-4 flex justify-center">
//               <button
//                 className="text-blue-600 font-normal py-2 px-4 rounded-lg flex items-center hover:underline"
//                 onClick={handleDiscoverMore}
//               >
//                 <span>DISCOVER MORE</span>
//                 <svg
//                   className="ml-2 w-4 h-4"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M5 12h14M12 5l7 7-7 7"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default EnhancedCarousel;











import React, { useRef } from 'react';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { products } from "../../data.js"; // Adjust this path to the products data array

const EnhancedCarousel = () => {
  const productsRef = useRef(null);
  const productsInView = true; // Adjust based on scroll logic, if needed

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


  return (
    <motion.section
      ref={productsRef}
      className="py-16 bg-white"
      initial="hidden"
      animate={productsInView ? "visible" : "hidden"}
      variants={fadeInUp}
    >
      <div className="mx-auto px-6 -mt-10">

        <div className="mx-auto w-[90%] grid grid-cols-1 md:grid-cols-3 gap-x-9 gap-y-9">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="rounded-3xl mx-auto w-[105%] bg-blue-50 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between" // Flexbox layout
              whileHover={{ scale: 1.05 }}
              variants={index % 2 === 0 ? slideFromLeft : slideFromRight}
            >
              <div>
                <img
                  className="rounded-t-3xl w-full"
                  src="xx.jpeg"
                  alt=""
                />
                <h3 className="text-2xl px-6 py-2 font-semibold mb-2 text-[#1D3D71]">
                  {product.title}
                </h3>
                <p className="px-6 font-medium text-base text-[#1D3D71]">
                  {product.description}
                </p>
              </div>
              <div>
                <div className="flex justify-between items-center rounded-lg mt-4">
                  <p className=" font-medium text-[#1D3D71] text-[12px] ml-2">Brocher-Well-Head Bypass Tool.pdf</p>
                  <button className="text-[10px] text-blue-400 px-1 py-1 rounded-lg transition duration-300">
                    <Download className="w-3 h-5 inline-block mr-1" />
                    Download
                  </button>
                </div>
                <div className="flex justify-between items-center rounded-lg mt-0.5">
                  <p className="font-medium text-[12px] text-[#1D3D71] ml-2">Brocher-Straddle-Stim.pdf</p>
                  <button className="text-[10px] text-blue-400 px-1 py-1 rounded-lg transition duration-300">
                    <Download className="w-3 h-5 inline-block mr-1" />
                    Download
                  </button>
                </div>
                <div className="flex justify-between items-center rounded-lg mt-0.5">
                  <p className="font-medium text-[12px] text-[#1D3D71] ml-2">Brocher-HYMA FRAC.pdf</p>
                  <button className="text-[10px] text-blue-400 px-1 py-1 rounded-lg transition duration-300">
                    <Download className="w-3 h-5 inline-block mr-1" />
                    Download
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
      </div>
    </div>
    </motion.section >

  );
};

export default EnhancedCarousel;

