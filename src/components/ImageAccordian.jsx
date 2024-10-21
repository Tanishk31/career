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
          
          <div className="p-6 flex-1 flex flex-col">
            <h2 className="text-xl font-bold mb-2 text-[#1D3D71]">
              {card.title}
            </h2>
            <p className="mt-2 text-[#1D3D71] flex-grow">
              {card.description}
            </p>
            <button className="mt-2 text-blue-600 flex items-center" onClick={handleDiscoverMore}>
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
    title: "Anvey’s First Customized Plunger Lift Completion",
    description: "A detailed account of our inaugural plunger lift system, tailored to client needs, delivering superior performance in well production. – Annexure1- Story & the Plunger lift catalogue and schematic of plunger-lift completion",
  },
  {
    title: "Successful Completion of a Mega Frac-Completion Campaign by Anvey",
    description: "An in-depth look at how Anvey executed a large-scale frac-completion campaign, achieving significant milestones in hydrocarbon recovery. - Annexure 2- Story & the Hyma-Frac straddle tool catalogue.",
  },
  {
    title: "Anvey Develops Juggler: Cutting-Edge Sand Cleaning Technology in Collaboration with ONGC",
    description: "Discover how Anvey, in partnership with ONGC, has developed Juggler—a revolutionary technology designed for effective sand cleaning in wellbores. -  Annexure 3- Story and catalogue",
  },
  
];

export default CardComponent;
