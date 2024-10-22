import React, { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

import "../contact.scss"; // Import the combined CSS file

const LastPage = () => {
  const headerRef = useRef();
  const para1Ref = useRef();
  const para2Ref = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const formRef = useRef();
  const leftContentRef = useRef();
  const rightContentRef = useRef();

  useEffect(() => {
    const animateContent = () => {
      if (headerRef.current) headerRef.current.classList.add("animate-pop-up");
      if (para1Ref.current) para1Ref.current.classList.add("animate-pop-up");
      if (para2Ref.current) para2Ref.current.classList.add("animate-pop-up");

      if (leftContentRef.current) {
        leftContentRef.current.classList.add("animate-slide-in-left");
        leftContentRef.current.style.opacity = "1";
        leftContentRef.current.style.transform = "translateX(0)";
      }
      if (rightContentRef.current) {
        rightContentRef.current.classList.add("animate-slide-in-right");
        rightContentRef.current.style.opacity = "1";
        rightContentRef.current.style.transform = "translateX(0)";
      }
    };

    setTimeout(animateContent, 100);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-in-left");
          }
        });
      },
      { threshold: 0.5 }
    );

    [emailRef, phoneRef, formRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <div>
        {/* Contact Us Section */}
        <section className="contact-section ">
          <div className="contact-content">
            <h1 className="heading text-[56px] font-semibold font-yaro" ref={headerRef}>
              Contact Us
            </h1>
            <p ref={para1Ref} className="text-[18px] font-normal">
            Get in touch with us! We’re here to answer your questions 
            </p>
            <p ref={para2Ref} className="text-[18px] font-normal">and discuss how we can support your needs.</p>
          </div>

          {/* Team Photo */}
          <div className="team-photo">
            <img src="/contactusbg.png" alt="Team" className="team-image" />
          </div>

          {/* Wavy Curve */}
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

        <div className="flex justify-center items-center min-h-screen bg-white -mt-24">
          <div className="w-full max-w-6xl flex flex-col lg:flex-row justify-center items-center gap-12">
            {/* Contact Info Section */}
            <div
              ref={leftContentRef}
              className="bg-white p-10 rounded-lg flex-1 flex flex-col justify-between h-full lg:h-[500px] transition-all duration-700"
            >
              <div>
                <h1 className="text-[43px] -mt-16 font-bold text-[#1D3D71] font-yaro mb-6">
                  Contact Us For More Info About Us!
                </h1>
                <p className="text-[16px] font-medium  text-[#1D3D71] mb-8">
                We’d love to hear from you! Whether you have questions, need more information, or want to explore partnership opportunities, feel free to reach out, and our team will be happy to assist. and discuss how we can support your needs.
                </p>
              </div>
              <div>
                <div className="mb-6 border border-gray-300 p-4 rounded-3xl flex items-center">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-[#1D3D71] text-4xl mr-6 ml-6"
                  />
                  <div>
                    <h2 className="text-[20px] font-bold text-[#1D3D71]">
                      Email Address:
                    </h2>
                    <p className="text-[15px] text-[#1D3D71]">Sales@anvey.in</p>
                    <p className="text-[15px] text-[#1D3D71]">info@anvey.in</p>
                  </div>
                </div>
                <div className="border border-gray-300 p-4 rounded-3xl flex items-center">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="text-[#1D3D71] text-4xl mr-6 ml-6"
                  />
                  <div>
                    <h2 className="text-[20px] font-bold text-[#1D3D71]">
                      Phone Numbers:
                    </h2>
                    <p className="text-[15px] text-[#1D3D71]">
                      Telephone No: +917300534848
                    </p>
                    <p className="text-[15px] text-[#1D3D71]">
                      Mobile No: +917060060039
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div
              ref={rightContentRef}
              className="bg-white shadow-2xl p-10 rounded-3xl flex-1 h-full lg:h-[600px] transition-all duration-700"
            >
              <form className="space-y-6" ref={formRef}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label
                      htmlFor="name"
                      className="mb-2 text-lg font-semibold text-[#1D3D71]"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Name"
                      className="w-full p-4 border border-gray-300 rounded-lg text-lg focus:ring-green-600 focus:border-green-600 bg-[#00B3FF26]"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="email"
                      className="mb-2 text-lg font-semibold text-[#1D3D71]"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Email"
                      className="w-full p-4 border border-gray-300 rounded-lg text-lg focus:ring-green-600 focus:border-green-600 bg-[#00B3FF26]"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label
                      htmlFor="subject"
                      className="mb-2 text-lg font-semibold text-[#1D3D71]"
                    >
                      Subjects
                    </label>
                    <input
                      type="text"
                      id="subject"
                      placeholder="Subjects"
                      className="w-full p-4 border border-gray-300 rounded-lg text-lg focus:ring-green-600 focus:border-green-600 bg-[#00B3FF26]"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="phone"
                      className="mb-2 text-lg font-semibold text-[#1D3D71]"
                    >
                      Phone No
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="Phone No"
                      className="w-full p-4 border border-gray-300 rounded-lg text-lg focus:ring-green-600 focus:border-green-600 bg-[#00B3FF26]"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="message"
                    className="mb-2 text-lg font-semibold text-[#1D3D71]"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    placeholder="Your message..."
                    className="w-full p-4 border border-gray-300 rounded-lg text-lg focus:ring-green-600 focus:border-green-600 bg-[#00B3FF26]"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#00B3FF] text-white py-3 rounded-lg font-semibold hover:bg-[#1D3D71] transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="map-container mt-12 m-40 mb-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.959193395854!2d77.58162287554636!3d28.450646475764543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cbf94deb6bc39%3A0x7ba6bedc9a2b537f!2sBennett%20University!5e0!3m2!1sen!2sin!4v1728858663465!5m2!1sen!2sin"
            className="map-iframe w-full h-[450px] border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        ;
      </div>
    </div>
  );
};

export default LastPage;

