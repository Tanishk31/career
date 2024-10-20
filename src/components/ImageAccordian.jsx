import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

const CardComponent = () => {
  const navigate=useNavigate();

  const handleDiscoverMore=()=>{
    navigate("/discover-more");
  };
  return (
    <div className="max-w-screen-lg mx-auto py-10 grid grid-cols-1 md:grid-cols-3 gap-4">
      {cardData.map((card, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden h-[500px] flex flex-col">
          <img
            src={card.imageUrl}
            alt={`Card ${index + 1}`}
            className="h-64 w-full object-cover"
          />
          <div className="p-6 flex-1 flex flex-col">
            <h2 className="text-2xl font-bold mb-2 text-[#1D3D71]">
              {card.title}
            </h2>
            <p className="mt-2 text-gray-600 flex-grow">
              {card.description}
            </p>
            <button className="mt-4 text-blue-600 flex items-center" onClick={handleDiscoverMore}>
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
  );
};
// Sample card data
const cardData = [
  {
    imageUrl: "/xx.jpeg",
    title: "Innovative Marine Solutions",
    description: "Advanced underwater technologies for exploration.",
  },
  {
    imageUrl: "/xx.jpeg",
    title: "Renewable Energy Projects",
    description: "Harnessing nature to power our future efficiently.",
  },
  {
    imageUrl: "/xx.jpeg",
    title: "Sustainable Resource Management",
    description: "Minimizing waste while maximizing resource usage.",
  },
  
];

export default CardComponent;
