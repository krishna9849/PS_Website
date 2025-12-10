


// // import React from 'react';
// // import dog from '../assets/dog.png';
// // import paw from '../assets/paw.png';
// // import doctor from '../assets/doctor.png';
// // import vaccum from '../assets/vaccum.png';
// // import spoon from '../assets/spoon.png';
// // import catbasket from '../assets/catbasket.png';

// // // Service Card Component
// // const ServiceCard = ({ icon, title, description }) => (
// //   <div
// //     style={{
// //       border: '2px solid rgba(237,109,78,1)',
// //       borderRadius: '15px',
// //       padding: '20px',
// //       boxShadow: '0 8px 15px rgba(0, 0, 0, 0.1)',
// //       textAlign: 'center',
// //     }}
// //   >
// //     <div
// //       style={{
// //         width: '70px',
// //         height: '70px',
// //         borderRadius: '50%',
// //         background: '#FF725E',
// //         margin: '0 auto 20px',
// //         display: 'flex',
// //         alignItems: 'center',
// //         justifyContent: 'center',
// //       }}
// //     >
// //       <img src={icon} alt={title} style={{ width: '40px', height: '40px' }} />
// //     </div>
// //     <h3
// //       style={{
// //         fontSize: '20px',
// //         fontWeight: 'bold',
// //         marginBottom: '15px',
// //         color: '#000080',
// //         fontFamily: 'Noto Sans',
// //       }}
// //     >
// //       {title}
// //     </h3>
// //     <p
// //       style={{
// //         fontSize: '14px',
// //         lineHeight: '1.6',
// //         margin: '0',
// //         fontFamily: 'Noto Sans',
// //       }}
// //     >
// //       {description}
// //     </p>
// //   </div>
// // );

// // // Main Services Component
// // const Services = () => {
// //   const services = [
// //     {
// //       icon: vaccum,
// //       title: 'At-Home Grooming Services',
// //       description:
// //         'PetSaviour offers comprehensive grooming services that cater to each pet’s unique needs, right from the comfort of home. Services include nail trimming, bathing, coat brushing, styling, and more, tailored to help pets look and feel their best without the anxiety of travel.',
// //     },
// //     {
// //       icon: spoon,
// //       title: 'At-Home Lab Tests',
// //       description:
// //         'With our at-home lab testing services, there’s no need to visit a clinic; our technicians bring all the equipment to you. Whether it’s a routine check or a specific health test, our team ensures that your pet stays calm and relaxed while receiving professional, accurate diagnostic services.',
// //     },
// //     {
// //       icon: doctor,
// //       title: 'At-Home Doctor Consultations',
// //       description:
// //         'From preventive health advice to treatment for minor ailments, our vet consultations provide professional care and peace of mind in your pet’s most comfortable environment – home. This service is ideal for routine exams, behavior consultations, vaccinations, and more.',
// //     },
// //     {
// //       icon: doctor,
// //       title: 'At-Home Doctor Consultations',
// //       description:
// //         'From preventive health advice to treatment for minor ailments, our vet consultations provide professional care and peace of mind in your pet’s most comfortable environment – home. This service is ideal for routine exams, behavior consultations, vaccinations, and more.',
// //     },
// //     {
// //       icon: paw,
// //       title: 'E-Commerce for Pet',
// //       description:
// //         'Our online store is stocked with premium, hand-picked pet products. From nutritious food options to toys and grooming supplies, PetSaviour has everything you need to keep your pet happy, healthy, and engaged. Our products are chosen for quality, safety, and comfort.',
// //     },
// //     {
// //       icon: dog,
// //       title: 'At-Home Dog Training',
// //       description:
// //         'Our trainers bring structured yet compassionate training sessions directly to your home, tailoring programs to address your dog’s specific behavior and obedience needs. Whether you’re looking to teach basic commands, we create a personalized training plan for lasting results.',
// //     },
// //   ];

// //   return (
// //     <div
// //       style={{
// //         padding: '50px 20px',
// //         fontFamily: 'Arial, sans-serif',
// //       }}
// //     >
// //       <br></br>
// //       <br></br>
// //       <h1
// //         style={{
// //           textAlign: 'center',
// //           fontFamily: 'Noto Sans',
// //           fontWeight: 700,
// //           fontSize: '48px',
// //           color: 'black',
// //           marginBottom: '125px',
// //           lineHeight: '65.38px',
// //         }}
// //       >
// //         Our Services
// //       </h1>

// //       <div
// //         style={{
// //           display: 'grid',
// //           gridTemplateColumns: 'repeat(3, 1fr)',
// //           gap: '20px',
// //           maxWidth: '1200px',
// //           margin: '0 auto',
// //           animation : 'hover:scale-105 hover:shadow-xl animate-fade-in-up'
// //         }}
// //       >
// //         {services.map((service, index) => (
// //           <ServiceCard key={index} {...service} />
// //         ))}
// //       </div>

// //       {/* Responsive Styles */}
// //       <style>
// //         {`
// //           @media (max-width: 1024px) {
// //             div[style*="gridTemplateColumns: repeat(3, 1fr)"] {
// //               grid-template-columns: repeat(2, 1fr);
// //             }
// //           }
// //           @media (max-width: 768px) {
// //             div[style*="gridTemplateColumns: repeat(3, 1fr)"] {
// //               grid-template-columns: 1fr;
// //             }
// //           }
// //         `}
// //       </style>
// //     </div>
// //   );
// // };

// // export default Services;



// /*
// Services_ExactStyling.jsx
// React + Tailwind component modeled after the provided design (soft pastel, rounded cards).

// Instructions:
// 1. This file uses Tailwind CSS. Make sure Tailwind is configured in your project.
// 2. Install framer-motion for entrance/hover subtle animations (optional): npm i framer-motion
// 3. Place your icons/photos in /public/images/ (recommended) and update the `services` array paths.
// 4. Import this component where needed: import Services from "./Services_ExactStyling";

// Fonts used in the design:
// - "Baloo 2" (for the playful heading). Add to index.html:
//   <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@700;800&display=swap" rel="stylesheet">
// - Use system fonts for body.

// This component tries to match the screenshot: large heading, soft peach background, 3-column grid on desktop, rounded white cards with subtle drop shadows, circular icon badges, and small decorative watermarks.
// */

// import React from "react";
// import { motion } from "framer-motion";

// const ServiceCard = ({ image, title, description }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 12 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.45 }}
//       whileHover={{ translateY: -6 }}
//       className="relative bg-white rounded-2xl shadow-[0_18px_30px_rgba(239,226,224,0.6)] border border-transparent overflow-hidden"
//     >
//       {/* subtle watermark decorative shapes (appears like the screenshot) */}
//       <div className="absolute right-4 top-4 opacity-10 pointer-events-none">
//         <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M12 2L15 8H9L12 2Z" fill="#FAD7CD" />
//         </svg>
//       </div>

//       <div className="p-8 min-h-[180px] flex flex-col items-center text-center">
//         <div className="w-16 h-16 rounded-full bg-[#FBD7CC] flex items-center justify-center mb-6 shadow-sm">
//           <img src={image} alt={title} className="w-9 h-9 object-contain" />
//         </div>

//         <h3 className="text-lg font-extrabold text-[#0f1724] mb-2" style={{ fontFamily: '"Baloo 2", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial' }}>
//           {title}
//         </h3>

//         <p className="text-sm text-slate-500 leading-relaxed max-w-[300px]">
//           {description}
//         </p>
//       </div>
//     </motion.div>
//   );
// };

// const Services = ({ servicesProp = null }) => {
//   const services = servicesProp ?? [
//     {
//       id: 1,
//       image: "/images/icon-boarding.png",
//       title: "Pet Boarding",
//       description: "A safe and fun home away from home for your beloved pet while you're away.",
//     },
//     {
//       id: 2,
//       image: "/images/icon-walking.png",
//       title: "Dog Walking",
//       description: "Daily walks and exercise to keep your dog active, healthy, and happy.",
//     },
//     {
//       id: 3,
//       image: "/images/icon-grooming.png",
//       title: "Pet Grooming",
//       description: "Pamper your pet with our professional grooming services for a fresh look.",
//     },
//     {
//       id: 4,
//       image: "/images/icon-vet.png",
//       title: "Vet Checkups",
//       description: "Regular health checkups to ensure your pet is always in top condition.",
//     },
//     {
//       id: 5,
//       image: "/images/icon-training.png",
//       title: "Pet Training",
//       description: "Expert training for puppies and adult dogs to teach good behaviors.",
//     },
//     {
//       id: 6,
//       image: "/images/icon-daycare.png",
//       title: "Day Care",
//       description: "A fun-filled day of play and socialization for your energetic companion.",
//     },
//   ];

//   return (
//     <section className="bg-[color:var(--bg-rose,#fff6f4)] py-20 px-6">
//       <div className="max-w-6xl mx-auto">
//         <header className="text-center mb-12">
//           <h2 className="text-4xl md:text-5xl font-extrabold text-[#172026]" style={{ fontFamily: '"Baloo 2", system-ui, -apple-system, "Segoe UI", Roboto' }}>
//             Pawsitively Perfect Services
//           </h2>
//           <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
//             From grooming to boarding, we offer everything your pet needs to stay happy,
//             healthy, and safe.
//           </p>
//         </header>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((s) => (
//             <ServiceCard key={s.id} {...s} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;


/*
Services_ExactStyling.jsx

Updated to import your images from `../assets/` (the files you said are present in the same location).
This version keeps the exact styling and uses imported assets so builds won't fail if the files exist.

Notes:
- Make sure the files actually exist at `src/assets/` with the exact filenames used below.
  (dog.png, paw.png, doctor.png, vaccum.png, spoon.png)
- This file still uses Tailwind for styling and simple hover transitions (no framer-motion required).
*/

// import React from "react";
// // Import images from src/assets (these must exist in your project)
// import dog from "../assets/dog.png";
// import paw from "../assets/paw.png";
// import doctor from "../assets/doctor.png";
// import vaccum from "../assets/vaccum.png";
// import spoon from "../assets/spoon.png";

// // Small inline fallback SVG used when image fails to load (keeps UI tidy)
// const FallbackIcon = () => (
//   <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-rose-500">
//     <path d="M12 2C10.343 2 9 3.343 9 5s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zM5 21a7 7 0 0114 0H5z" fill="#FF8A66"/>
//   </svg>
// );

// const ServiceCard = ({ image, title, description }) => {
//   // image is an imported module (object/string) from webpack bundler
//   const src = typeof image === "string" ? image : image?.default || image;

//   return (
//     <div
//       className="relative bg-white rounded-2xl shadow-[0_18px_30px_rgba(239,226,224,0.6)] overflow-hidden border border-transparent transition-transform transform hover:-translate-y-2"
//     >
//       {/* decorative watermark (subtle) */}
//       <div className="absolute right-4 top-4 opacity-10 pointer-events-none">
//         <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M12 2L15 8H9L12 2Z" fill="#FAD7CD" />
//         </svg>
//       </div>

//       <div className="p-8 min-h-[180px] flex flex-col items-center text-center">
//         <div className="w-16 h-16 rounded-full bg-[#FBD7CC] flex items-center justify-center mb-6 shadow-sm">
//           {src ? (
//             <img
//               src={src}
//               alt={title}
//               className="w-9 h-9 object-contain"
//               loading="lazy"
//               onError={(e) => {
//                 // show fallback SVG if import path somehow fails at runtime
//                 e.currentTarget.style.display = 'none';
//                 const parent = e.currentTarget.parentNode;
//                 if (parent) parent.insertAdjacentHTML('beforeend', '<svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C10.343 2 9 3.343 9 5s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zM5 21a7 7 0 0114 0H5z" fill="#FF8A66"/></svg>');
//               }}
//             />
//           ) : (
//             <FallbackIcon />
//           )}
//         </div>

//         <h3
//           className="text-lg font-extrabold text-[#0f1724] mb-2"
//           style={{ fontFamily: '"Baloo 2", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial' }}
//         >
//           {title}
//         </h3>

//         <p className="text-sm text-slate-500 leading-relaxed max-w-[300px]">{description}</p>
//       </div>
//     </div>
//   );
// };

// const Services = ({ servicesProp = null }) => {
//   // Services content taken from the user's earlier code — icons mapped to imported assets
//   const defaultServices = [
//     {
//       id: 1,
//       image: vaccum,
//       title: "At-Home Grooming Services",
//       description:
//         "PetSaviour offers comprehensive grooming services that cater to each pet’s unique needs, right from the comfort of home. Services include nail trimming, bathing, coat brushing, styling, and more, tailored to help pets look and feel their best without the anxiety of travel.",
//     },
//     {
//       id: 2,
//       image: spoon,
//       title: "At-Home Lab Tests",
//       description:
//         "With our at-home lab testing services, there’s no need to visit a clinic; our technicians bring all the equipment to you. Whether it’s a routine check or a specific health test, our team ensures that your pet stays calm and relaxed while receiving professional, accurate diagnostic services.",
//     },
//     {
//       id: 3,
//       image: doctor,
//       title: "At-Home Doctor Consultations",
//       description:
//         "From preventive health advice to treatment for minor ailments, our vet consultations provide professional care and peace of mind in your pet’s most comfortable environment – home. This service is ideal for routine exams, behavior consultations, vaccinations, and more.",
//     },
//     {
//       id: 4,
//       image: paw,
//       title: "E-Commerce for Pet",
//       description:
//         "Our online store is stocked with premium, hand-picked pet products. From nutritious food options to toys and grooming supplies, PetSaviour has everything you need to keep your pet happy, healthy, and engaged. Our products are chosen for quality, safety, and comfort.",
//     },
//     {
//       id: 5,
//       image: dog,
//       title: "At-Home Dog Training",
//       description:
//         "Our trainers bring structured yet compassionate training sessions directly to your home, tailoring programs to address your dog’s specific behavior and obedience needs. Whether you’re looking to teach basic commands, we create a personalized training plan for lasting results.",
//     },
//     {
//       id: 6,
//       image: doctor,
//       title: "At-Home Doctor Consultations",
//       description:
//         "From preventive health advice to treatment for minor ailments, our vet consultations provide professional care and peace of mind in your pet’s most comfortable environment – home. This service is ideal for routine exams, behavior consultations, vaccinations, and more.",
//     },
//   ];

//   const services = servicesProp ?? defaultServices;

//   return (
//     <section className="bg-[color:var(--bg-rose,#fff6f4)] py-20 px-6">
//       <div className="max-w-6xl mx-auto">
//         <header className="text-center mb-12">
//           <h2
//             className="text-4xl md:text-5xl font-extrabold text-[#172026]"
//             style={{ fontFamily: '"Baloo 2", system-ui, -apple-system, "Segoe UI", Roboto' }}
//           >
//             Positively Perfect Services
//           </h2>
//           <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
//             From grooming to boarding, we offer everything your pet needs to stay happy,
//             healthy, and safe.
//           </p>
//         </header>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((s) => (
//             <ServiceCard key={s.id} image={s.image} title={s.title} description={s.description} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;




// src/components/Services.jsx
import React from "react";
import ElectricBorder from "./ElectricBorder"; // adjust path if ElectricBorder is elsewhere

// Assets (ensure these files exist in src/assets)
import dog from "../assets/dog.png";
import paw from "../assets/paw.png";
import doctor from "../assets/doctor.png";
import vaccum from "../assets/vaccum.png";
import spoon from "../assets/spoon.png";

/* ---------------------------
   Small inline fallback SVG
   --------------------------- */
const FallbackIcon = () => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-rose-500"
  >
    <path
      d="M12 2C10.343 2 9 3.343 9 5s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zM5 21a7 7 0 0114 0H5z"
      fill="#FF8A66"
    />
  </svg>
);

/* ---------------------------
   ServiceCard
   --------------------------- */
const ServiceCard = ({ image, title, description, ebProps = {} }) => {
  // handle how bundler sometimes exposes images
  const src = typeof image === "string" ? image : image?.default || image;

  return (
    <ElectricBorder
      color={ebProps.color ?? "#7df9ff"}
      speed={ebProps.speed ?? 1.2}
      chaos={ebProps.chaos ?? 0.6}
      thickness={ebProps.thickness ?? 2}
      style={{ borderRadius: 16 }}
      className="w-full"
    >
      <div className="relative bg-white rounded-[12px] overflow-visible transition-transform transform hover:-translate-y-2">
        <div className="p-8 min-h-[180px] flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-[#FBD7CC] flex items-center justify-center mb-6 shadow-sm">
            {src ? (
              <img
                src={src}
                alt={title}
                className="w-9 h-9 object-contain"
                loading="lazy"
                onError={(e) => {
                  // swap to fallback svg if image fails to load
                  e.currentTarget.style.display = "none";
                  const parent = e.currentTarget.parentNode;
                  if (parent && !parent.querySelector('svg')) {
                    parent.insertAdjacentHTML(
                      "beforeend",
                      '<svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C10.343 2 9 3.343 9 5s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zM5 21a7 7 0 0114 0H5z" fill="#FF8A66"/></svg>'
                    );
                  }
                }}
              />
            ) : (
              <FallbackIcon />
            )}
          </div>

          <h3
            className="text-lg font-extrabold text-[#0f1724] mb-2"
            style={{
              fontFamily:
                '"Baloo 2", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
            }}
          >
            {title}
          </h3>

          <p className="text-sm text-slate-500 leading-relaxed max-w-[300px]">
            {description}
          </p>
        </div>
      </div>
    </ElectricBorder>
  );
};

/* ---------------------------
   Services (section)
   --------------------------- */
const Services = ({ servicesProp = null }) => {
  const defaultServices = [
    {
      id: 1,
      image: vaccum,
      title: "At-Home Grooming Services",
      ebColor: "#ff8a66",
      ebSpeed: 1.1,
      ebChaos: 0.6,
      ebThickness: 2,
      description:
        "PetSaviour offers comprehensive grooming services that cater to each pet’s unique needs, right from the comfort of home. Services include nail trimming, bathing, coat brushing, styling, and more, tailored to help pets look and feel their best without the anxiety of travel.",
    },
    {
      id: 2,
      image: spoon,
      title: "At-Home Lab Tests",
      ebColor: "#7df9ff",
      ebSpeed: 1,
      ebChaos: 0.5,
      ebThickness: 2,
      description:
        "With our at-home lab testing services, there’s no need to visit a clinic; our technicians bring all the equipment to you. Whether it’s a routine check or a specific health test, our team ensures that your pet stays calm and relaxed while receiving professional, accurate diagnostic services.",
    },
    {
      id: 3,
      image: doctor,
      title: "At-Home Doctor Consultations",
      ebColor: "#a08bff",
      ebSpeed: 1,
      ebChaos: 0.5,
      ebThickness: 2,
      description:
        "From preventive health advice to treatment for minor ailments, our vet consultations provide professional care and peace of mind in your pet’s most comfortable environment – home. This service is ideal for routine exams, behavior consultations, vaccinations, and more.",
    },
    {
      id: 4,
      image: paw,
      title: "E-Commerce for Pet",
      ebColor: "#7af59c",
      ebSpeed: 0.9,
      ebChaos: 0.45,
      ebThickness: 2,
      description:
        "Our online store is stocked with premium, hand-picked pet products. From nutritious food options to toys and grooming supplies, PetSaviour has everything you need to keep your pet happy, healthy, and engaged. Our products are chosen for quality, safety, and comfort.",
    },
    {
      id: 5,
      image: dog,
      title: "At-Home Dog Training",
      ebColor: "#ffd36b",
      ebSpeed: 1.15,
      ebChaos: 0.55,
      ebThickness: 2,
      description:
        "Our trainers bring structured yet compassionate training sessions directly to your home, tailoring programs to address your dog’s specific behavior and obedience needs. Whether you’re looking to teach basic commands, we create a personalized training plan for lasting results.",
    },
    {
      id: 6,
      image: doctor,
      title: "At-Home Doctor Consultations",
      ebColor: "#a08bff",
      ebSpeed: 1,
      ebChaos: 0.5,
      ebThickness: 2,
      description:
        "From preventive health advice to treatment for minor ailments, our vet consultations provide professional care and peace of mind in your pet’s most comfortable environment – home. This service is ideal for routine exams, behavior consultations, vaccinations, and more.",
    },
  ];

  const services = servicesProp ?? defaultServices;

  return (
    <section className="bg-[color:var(--bg-rose,#fff6f4)] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl font-extrabold text-[#172026]"
            style={{
              fontFamily:
                '"Baloo 2", system-ui, -apple-system, "Segoe UI", Roboto',
            }}
          >
            Positively Perfect Services
          </h2>
          <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
            From grooming to boarding, we offer everything your pet needs to stay
            happy, healthy, and safe.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <ServiceCard
              key={s.id}
              image={s.image}
              title={s.title}
              description={s.description}
              ebProps={{
                color: s.ebColor,
                speed: s.ebSpeed,
                chaos: s.ebChaos,
                thickness: s.ebThickness,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
