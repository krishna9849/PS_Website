import React, { useState, useEffect, useRef } from "react";
import {
  FaUserShield,
  FaHome,
  FaPaw,
  FaHeadset,
  FaPlus,
  FaMinus,
} from "react-icons/fa";
import uniqueFrame from "../assets/uniqueFrame.png";

const Unique = () => {
  const [active, setActive] = useState(null);
  const sectionRef = useRef(null);

  // Auto-open first accordion on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(0);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const items = [
    {
      title: "Trusted Professionals",
      icon: <FaUserShield />,
      desc: "Each member of our team is certified, background-checked, and passionate about pet care. With years of experience and deep understanding of pet health and behavior, we deliver care you can truly trust.",
    },
    {
      title: "Stress-Free, Convenient Care",
      icon: <FaHome />,
      desc: "No clinic visits, no long waits, and no stressful travel. Our at-home services ensure your pet stays comfortable in familiar surroundings.",
    },
    {
      title: "Customized for Your Pet",
      icon: <FaPaw />,
      desc: "Every pet is unique. We personalize each service based on your pet’s breed, age, health condition, and behavior for the best results.",
    },
    {
      title: "Continuous Support",
      icon: <FaHeadset />,
      desc: "Our support doesn’t stop after one visit. We provide follow-ups, guidance, and long-term assistance for your pet’s well-being.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 px-6 overflow-hidden"
      style={{
        backgroundImage: `url(${uniqueFrame})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold text-center text-[#1f2a44] mb-16">
          What Sets Us Apart?
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* LEFT IMAGE CLUSTER (placeholders – safe) */}
          <div className="relative w-full flex justify-center lg:justify-start">
            {/* Decorative dots */}
            <span className="absolute left-2 top-20 w-3 h-3 bg-orange-400 rounded-full" />
            <span className="absolute left-44 top-4 w-5 h-5 bg-orange-300 rounded-full" />
            <span className="absolute left-24 bottom-10 w-4 h-4 bg-orange-400 rounded-full" />
            <span className="absolute left-40 bottom-0 w-6 h-6 bg-orange-300 rounded-full" />

            {/* Big circle */}
            {/* <div className="absolute left-0 top-10 w-60 h-60 rounded-full border-[5px] border-orange-300 bg-orange-100 flex items-center justify-center text-orange-500 font-medium">
              Pet Image
            </div> */}

            {/* Small top circle */}
            {/* <div className="absolute left-48 top-0 w-24 h-24 rounded-full border-[5px] border-orange-300 bg-orange-100 flex items-center justify-center text-orange-500 text-xs">
              Pet
            </div> */}

            {/* Bottom-left circle */}
            {/* <div className="absolute left-4 bottom-0 w-28 h-28 rounded-full border-[5px] border-orange-300 bg-orange-100 flex items-center justify-center text-orange-500 text-xs">
              Pet
            </div> */}

            {/* Bottom-right rounded rectangle */}
            {/* <div className="relative ml-36 mt-32 w-72 h-48 rounded-2xl border-[5px] border-orange-300 bg-orange-100 flex items-center justify-center text-orange-500 text-xs">
              Owner + Pet
            </div> */}
          </div>

          {/* RIGHT ACCORDION */}
          <div className="space-y-4">
            {items.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setActive(idx)}
                className={`cursor-pointer rounded-xl transition-all duration-300 shadow-sm ${
                  active === idx
                    ? "bg-[#FFE9D6] p-6"
                    : "bg-[#FFF1E6] p-4"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-orange-500 text-lg">
                      {item.icon}
                    </span>
                    <h3 className="text-base md:text-lg font-semibold text-[#1f2a44]">
                      {item.title}
                    </h3>
                  </div>
                  <span className="text-orange-500 text-sm">
                    {active === idx ? <FaMinus /> : <FaPlus />}
                  </span>
                </div>

                {active === idx && (
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Unique;
