import React from "react";

function DiscoverMore() {
  return (
    <div className="text-[#1D3D71] pt-[18vh] w-full px-[5%]">
      <div className="flex justify-between items-center gap-10">
        {/* Text Section */}
        <div className="w-[50%] ">
          <h1 className="text-5xl font-bold mb-4 text-[#1D3D71] animate-fadeInUp">
            Explore Our Product
          </h1>
          <div className="animate-fadeInUp delay-100">
            <p className="text-lg mb-4 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro rem tempora odit aspernatur corporis reiciendis commodi repellendus fuga. Sunt cumque magni est. Quasi deserunt laudantium quas assumenda velit magni similique consequatur voluptas distinctio veniam quod vitae necessitatibus obcaecati rerum mollitia, ab quaerat a dolorum unde eius optio soluta officiis cumque?
            </p>
            <ul className="list-disc pl-5 mb-6">
              <li className="mb-1">High Quality</li>
              <li className="mb-1">Affordable Price</li>
              <li className="mb-1">24/7 Customer Support</li>
              <li className="mb-1">Free Shipping</li>
              <li className="mb-1">Satisfaction Guaranteed</li>
            </ul>
          </div>

          {/* Price and Button */}
          <div className="animate-fadeInUp delay-200 flex justify-center">
            
            <button className="bg-[#1D3D71] p-3 px-6 text-white font-semibold text-lg rounded-full hover: transition-transform duration-300 ease-in-out transform hover:scale-105">
              Download
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-[50%]">
          <div className="relative group">
            <img
              src="xx.jpeg"
              alt="Product"
              className="w-full h-auto rounded-lg shadow-lg "
            />
            {/* Optional image overlay */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-500 ease-in-out rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiscoverMore;
