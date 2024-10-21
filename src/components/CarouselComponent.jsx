import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";


const CarouselComponent = () => {
  const settings = {
    dots: false,
    infinite: true, // Enables circular carousel
    speed: 500,
    slidesToShow: 3, // Number of cards to show
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
    const navigate = useNavigate();

    const handleDiscoverMore=()=>{
      navigate("/discover-more");
    };
  

  return (
    <div className="max-w-screen-lg mx-auto py-10">
      <h2 className="text-4xl font-bold mb-4 text-center text-[#1D3D71] font-yaro">
        Our Projects
      </h2>
      <Slider {...settings}>
        {cardData.map((card, index) => (
          <div key={index} className="p-4">
            <div className="bg-white shadow-md rounded-lg overflow-hidden h-96 flex flex-col justify-between">
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="font-bold text-[#1D3D71] text-lg mb-4">{card.title}</h2>
                <p className="text-[#1D3D71] text-base flex-grow">
                  {card.description}
                </p>
                <div className="flex justify-center items-center mt-2">
                  <button className="text-blue-600 flex items-center" onClick={handleDiscoverMore}>
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
          </div>
        ))}
      </Slider>
    </div>
  );
};

// Custom Arrow Components for the carousel
function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={`${className} text-black`} onClick={onClick}>
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="black"
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
    </div>
  );
}

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={`${className} text-black`} onClick={onClick}>
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="black"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 12H5m7 7-7-7 7-7"
        />
      </svg>
    </div>
  );
}

// Sample card data
const cardData = [
  {
    title: "Anvey’s First Customized Plunger Lift Completion",
    description: "A detailed account of our inaugural plunger lift system, tailored to client needs, delivering superior performance in well production. – Annexure1- Story & the Plunger lift catalogue and schematic of plunger-lift completion",
  },
  {
    title: "Successful Completion of a Mega Frac-Completion Campaign by Anvey",
    description: "An in-depth look at how Anvey executed a large-scale frac-completion campaign, achieving significant milestones in hydrocarbon recovery. - Annexure 2- Story & the Hyma-Frac straddle tool catalogue",
  },
  {
    title: "Anvey Develops Juggler: Cutting-Edge Sand Cleaning Technology in Collaboration with ONGC",
    description: "Discover how Anvey, in partnership with ONGC, has developed Juggler—a revolutionary technology designed for effective sand cleaning in wellbores. -  Annexure 3- Story and catalogue",
  },
];

export default CarouselComponent;
