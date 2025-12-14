import React from "react";
import { FaArrowRight } from "react-icons/fa";

/**
 * Reusable Call To Action Component
 * Style aligned with Unique.jsx
 * Premium gradient + slow background animation
 */

const CallToAction = ({
  title,
  description,
  buttonText = "Get Started",
  onClick,
  backgroundImage,
}) => {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* CTA Card */}
        <div className="relative overflow-hidden rounded-3xl">

          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center animate-slowZoom"
            style={{
              backgroundImage: `url(${backgroundImage})`,
            }}
          />

          {/* Premium Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F47C5E]/80 via-[#F89B7A]/75 to-[#FBC4AE]/70" />

          {/* Content */}
          <div className="relative z-10 max-w-3xl p-10 md:p-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
              {title}
            </h2>

            <p className="text-white/95 text-sm md:text-base leading-relaxed mb-6">
              {description}
            </p>

            <button
              onClick={onClick}
              className="inline-flex items-center gap-3 bg-white text-[#E96443] px-6 py-3 rounded-full font-semibold hover:bg-orange-100 transition"
            >
              {buttonText}
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* Animation */}
      <style>{`
        @keyframes slowZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.08); }
        }
        .animate-slowZoom {
          animation: slowZoom 22s ease-in-out infinite alternate;
        }
      `}</style>
    </section>
  );
};

export default CallToAction;
