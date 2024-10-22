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
    <div className="relative w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {carouselItems.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-lg flex flex-col justify-between h-[100%] p-6"
          >
            {/* Image */}
            <div className="flex justify-center mb-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-contain"
              />
            </div>

            {/* Title */}
            <h3 className="text-[#1D3D71] text-xl font-bold text-center mb-2">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-[#1D3D71] text-sm text-center flex-grow">
              {item.description}
            </p>

            {/* Discover More Button */}
            <div className="mt-4 flex justify-center">
              <button
                className="text-blue-600 font-normal py-2 px-4 rounded-lg flex items-center hover:underline"
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
        ))}
      </div>
    </div>
  );
};

export default EnhancedCarousel;
