import React from "react";
import { useNavigate } from "react-router-dom";

const carouselItems = [
  {
    id: 1,
    image:
      "/oil-well.png",
    title: "Nature's Beauty",
    description:
      "Experience the tranquility of nature's most beautiful landscapes.",
  },
  {
    id: 2,
    image:
      "/tools.png",
    title: "Urban Exploration",
    description: "Discover the hidden gems of bustling city life.",
  },
  {
    id: 3,
    image:
      "boom-lift.png",
    title: "Adventure Awaits",
    description: "Join us on exciting adventures and explore the unknown.",
  },
  {
    id: 4,
    image:
      "/robotic-arm.png",
    title: "Culinary Delights",
    description: "Savor the flavors of world cuisines and culinary arts.",
  },
];

const EnhancedCarousel = () => {
  const navigate=useNavigate();
  const handleDiscoverMore=()=>{
    navigate("/discover-more-2");
  };
  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
      <div className="flex">
        {/* Display each card with a fixed height */}
        {carouselItems.map((item) => (
          <div key={item.id} className="flex-shrink-0 w-1/4 px-2 mb-5">
            <div className="relative overflow-hidden rounded-lg shadow-lg h-[40vh] hover:shadow-xl hover:scale-105 transition-transform duration-300 p-5">
              {/* Image with fixed height */}
              <img
                src={item.image}
                alt={item.title}
                className="w-[30%] object-cover"
              />
              {/* Content below the image */}
              <div className="pt-5 bg-white">
                <h3 className="text-gray-800 text-2xl font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
              <button className="mt-6 text-blue-600 flex items-center" onClick={handleDiscoverMore}>
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
