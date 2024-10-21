import React from "react";
import { useNavigate } from "react-router-dom";

const carouselItems = [
  {
    id: 1,
    image: "/oil-well.png",
    title: "Well Completion Services",
    description:
      "At Anvey Industries, we offer tailored well completion services for all reservoir types, optimizing production efficiency. Our expertise covers a range of techniques to ensure your well achieves peak performance, no matter the complexity",
  },
  {
    id: 2,
    image: "/tools.png",
    title: "Artificial lift design and installation services",
    description:
      "Our in-house team designs and installs advanced artificial lift systems for various well types, including gas, CBM, water, heavy oil, and sand influx wells. We offer solutions like plunger lifts, ES-PCPs, and our innovative Maglev Linear Motor Drive Plunger Pumps (MLMDP), enhancing productivity for wells producing from 400 m³/day to as low as 2-3 m³/day.",
  },
  {
    id: 3,
    image: "boom-lift.png",
    title: "Stimulation rental tools",
    description:
      "Anvey provides rental tools for well stimulation and fracturing, including reliable, easy-to-use straddle packers that work efficiently under various conditions. We also offer sales and services for wellhead isolation tools to ensure safe and efficient frac operations, providing a cost-effective solution for your needs.",
  },
  {
    id: 4,
    image: "/robotic-arm.png",
    title: "Well Fishing and Remedial Services",
    description:
      "We specialize in efficient fishing and remedial services, with years of experience retrieving equipment like coiled tubing, pumps, and drill pipes from challenging wells. Our extensive inventory includes tools such as jars, overshots, spears, and cutters, allowing us to tackle any fishing challenge and minimize downtime while restoring well productivity quickly.",
  },
];

const EnhancedCarousel = () => {
  const navigate = useNavigate();
  const handleDiscoverMore = () => {
    navigate("/discover-more-2");
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
      <div className="flex">
        {carouselItems.map((item) => (
          <div key={item.id} className="flex-shrink-0 w-1/4 px-2 mb-5 h-[65vh]">
          <div className="relative overflow-hidden rounded-lg shadow-lg h-[100%] hover:shadow-xl hover:scale-105 transition-transform duration-300 p-5">
            {/* Image with fixed height */}
            <img
              src={item.image}
              alt={item.title}
              className="w-[30%] object-cover"
            />
              {/* Content */}
              <div className="flex flex-col justify-between flex-grow">
                <h3 className="text-[#1D3D71] text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-[#1D3D71] text-sm mb-4">{item.description}</p>
                <button
                  className=" text-blue-500 bottom-0 absolute font-lg py-5 px-2 rounded flex items-center justify-center mt-5"
                  onClick={handleDiscoverMore}
                >
                  <span>DISCOVER MORE</span>
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 12h14M12 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnhancedCarousel;
