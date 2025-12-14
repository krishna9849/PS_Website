// // // import React, { useState } from 'react';
// // // import logo from '../assets/logo.png';
// // // import icon from '../assets/icon.png';
// // // import arrow from '../assets/arrow.png';
// // // import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

// // // const Navbar = () => {
// // //   const [nav, setNav] = useState(false);

// // //   const handleNav = () => {
// // //     setNav(!nav);
// // //   };

// // //   return (
// // //     <>
// // //       <div className="flex justify-between items-center h-24 max-w-[1200px] mx-auto px-6 lg:px-12">
// // //         {/* Logo */}
// // //         <img
// // //           src={logo}
// // //           alt="Logo"
// // //           className="transition-transform duration-500 hover:scale-110"
// // //         />
// // //         {/* Desktop Menu */}
// // //         <ul className="hidden md:flex items-center space-x-8">
// // //           <li className="text-base hover:text-orange-500 transition duration-300">
// // //             <span className="flex items-center space-x-2">
// // //               <img src={icon} alt="Icon" className="w-6 h-6 group-hover:animate-bounce  animate-bounce" />
// // //               <span>Home</span>
// // //             </span>
// // //           </li>
// // //           <li className="text-base hover:text-orange-500 transition duration-300">Our Services</li>
// // //           <li className="text-base hover:text-orange-500 transition duration-300">Why Us</li>
// // //           <li className="text-base hover:text-orange-500 transition duration-300">Become a Vendor</li>
// // //           <li className="text-base hover:text-orange-500 transition duration-300">Meet our team</li>
// // //         </ul>
// // //         {/* Contact Us */}
// // //         {/* <div className="hidden md:flex items-center space-x-2">
// // //           <span className="text-base hover:text-orange-500 transition duration-300">
// // //             Contact Us
// // //           </span>
// // //           <img src={arrow} alt="Arrow" className="w-6 h-6" />
// // //         </div> */}
// // //         {/* /* download our app */ }
// // //         <div className="hidden md:flex items-center">
// // //   <button
// // //     className="
// // //       bg-[#ff7a2f]
// // //       hover:bg-[#e96a24]
// // //       text-white
// // //       px-6
// // //       py-2.5
// // //       rounded-full
// // //       text-sm
// // //       font-semibold
// // //       shadow-sm
// // //       transition-all
// // //       duration-300
// // //       hover:scale-[1.03]
// // //     "
// // //   >
// // //     Download our app
// // //   </button>
// // // </div>

// // //         {/* Mobile Menu Toggle */}
// // //         <div onClick={handleNav} className="block md:hidden cursor-pointer">
// // //           {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
// // //         </div>
// // //         {/* Mobile Menu */}
// // //         <div
// // //           className={`fixed left-0 top-0 w-[75%] h-full bg-orange-300 border-r border-gray-900 transform ${
// // //             nav ? 'translate-x-0' : '-translate-x-full'
// // //           } transition-transform duration-500 ease-in-out z-50`}
// // //         >
// // //           <div className="flex items-center justify-between px-6 py-4">
// // //             <img
// // //               src={logo}
// // //               alt="Logo"
// // //               className="transition-transform duration-500 hover:scale-110"
// // //             />
// // //             <AiOutlineClose
// // //               size={24}
// // //               className="cursor-pointer"
// // //               onClick={handleNav}
// // //             />
// // //           </div>
// // //           <ul className="uppercase text-lg">
// // //             <li className="py-4 px-6 border-b border-orange-800 hover:bg-orange-400">
// // //               Home
// // //             </li>
// // //             <li className="py-4 px-6 border-b border-orange-800 hover:bg-orange-400">
// // //              Our Services
// // //             </li>
// // //             <li className="py-4 px-6 border-b border-orange-800 hover:bg-orange-400">
// // //               Why Us
// // //             </li>
// // //             <li className="py-4 px-6 border-b border-orange-800 hover:bg-orange-400">
// // //               Become a Vendor
// // //             </li>
// // //             <li className="py-4 px-6 border-b border-orange-800 hover:bg-orange-400">
// // //               Meet Our Team
// // //             </li>
// // //             <li className="py-4 px-6 border-b border-orange-800 hover:bg-orange-400">
// // //               Download our app
// // //             </li>
// // //           </ul>
// // //         </div>
// // //       </div>
// // //     </>
// // //   );
// // // };

// // // export default Navbar;




// // import React, { useState, useEffect } from "react";
// // import logo from "../assets/logo.png";
// // import icon from "../assets/icon.png";
// // import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

// // const Navbar = () => {
// //   const [nav, setNav] = useState(false);
// //   const [scrolled, setScrolled] = useState(false);

// //   const handleNav = () => setNav(!nav);

// //   // sticky effect on scroll
// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setScrolled(window.scrollY > 10);
// //     };
// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   return (
// //     <>
// //       {/* HEADER */}
// //      <header
// //   className={`sticky top-0 z-50 transition-all duration-300 ${
// //     scrolled ? "shadow-md" : ""
// //   }`}
// // >

// //         <div className="flex justify-between items-center h-24 max-w-[1200px] mx-auto px-6 lg:px-12">
          
// //           {/* Logo */}
// //          <img
// //   src={logo}
// //   alt="PetSaviour Logo"
// //   className="h-5 w-auto object-contain transition-transform duration-300 hover:scale-105"
// // />


// //           {/* Desktop Menu */}
// //           <ul className="hidden md:flex items-center space-x-8 text-base">
// //             <li className="hover:text-orange-500 transition duration-300 cursor-pointer">
// //               <span className="flex items-center space-x-2">
// //                 <img
// //                   src={icon}
// //                   alt="icon"
// //                   className="w-6 h-6 animate-bounce"
// //                 />
// //                   <a href="#home" className="hover:text-orange-500 transition">Home</a>

// //               </span>
// //             </li>
// //             <li className="hover:text-orange-500 cursor-pointer">
// //                <a
// //     href="#services"
// //     className="hover:text-orange-500 transition duration-300"
// //   >
// //     Our Services
// //   </a>
// //             </li>
// //             <li className="hover:text-orange-500 cursor-pointer"><a href="#unique" className="hover:text-orange-500 transition">
// //       Why Us
// //     </a></li>
// //             <li className="hover:text-orange-500 cursor-pointer">
// //                <a href="#vendor" className="hover:text-orange-500 transition">
// //       Become a Vendor
// //     </a>
// //             </li>
// //             <li className="hover:text-orange-500 cursor-pointer">
// //                <a href="#contact" className="hover:text-orange-500 transition">
// //       Meet the Team
// //     </a>
// //             </li>
// //           </ul>

// //           {/* Download App Button (Desktop) */}
// //           <div className="hidden md:flex items-center">
// //             <button
// //               className="
// //                 bg-[#ff7a2f]
// //                 hover:bg-[#e96a24]
// //                 text-white
// //                 px-6
// //                 py-2.5
// //                 rounded-full
// //                 text-sm
// //                 font-semibold
// //                 shadow-sm
// //                 transition-all
// //                 duration-300
// //                 hover:scale-[1.03]
// //               "
// //             >
// //               Download our app
// //             </button>
// //           </div>

// //           {/* Mobile Menu Toggle */}
// //           <div
// //             onClick={handleNav}
// //             className="block md:hidden cursor-pointer"
// //           >
// //             {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
// //           </div>
// //         </div>
// //       </header>

// //       {/* Mobile Menu */}
// //       <div
// //         className={`fixed left-0 top-0 w-[75%] h-full bg-orange-300 border-r border-orange-500 transform ${
// //           nav ? "translate-x-0" : "-translate-x-full"
// //         } transition-transform duration-500 ease-in-out z-50`}
// //       >
// //         <div className="flex items-center justify-between px-6 py-4">
// //           <img
// //             src={logo}
// //             alt="PetSaviour Logo"
// //             className="h-10"
// //           />
// //           <AiOutlineClose
// //             size={24}
// //             className="cursor-pointer"
// //             onClick={handleNav}
// //           />
// //         </div>

// //         <ul className="uppercase text-lg">
// //           <li className="py-4 px-6 border-b border-orange-800 hover:bg-orange-400">
// //             Home
// //           </li>
// //           <li className="py-4 px-6 border-b border-orange-800 hover:bg-orange-400">
// //             Our Services
// //           </li>
// //           <li className="py-4 px-6 border-b border-orange-800 hover:bg-orange-400">
// //             Why Us
// //           </li>
// //           <li className="py-4 px-6 border-b border-orange-800 hover:bg-orange-400">
// //             Become a Vendor
// //           </li>
// //           <li className="py-4 px-6 border-b border-orange-800 hover:bg-orange-400">
// //             Meet Our Team
// //           </li>
// //           <li className="py-4 px-6">
// //             <button className="w-full bg-white text-orange-600 py-2 rounded-full font-semibold">
// //               Download our app
// //             </button>
// //           </li>
// //         </ul>
// //       </div>
// //     </>
// //   );
// // };

// // export default Navbar;








// import React, { useState, useEffect } from "react";
// import logo from "../assets/logo.png";
// import icon from "../assets/icon.png";
// import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

// const Navbar = () => {
//   const [nav, setNav] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const handleNav = () => setNav(!nav);

//   // Scroll detection
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       {/* NAVBAR */}
//       <header
//         className={`
//           fixed top-0 left-0 w-full z-50
//           transition-all duration-300
//           ${scrolled
//             ? "bg-white/70 backdrop-blur-xl shadow-md border-b border-white/30"
//             : "bg-transparent"
//           }
//         `}
//       >
//         <div className="flex justify-between items-center h-24 max-w-[1200px] mx-auto px-6 lg:px-12">
          
//           {/* Logo */}
//           <img
//             src={logo}
//             alt="PetSaviour Logo"
//             className="h-5 w-auto object-contain transition-transform duration-300 hover:scale-105"
//           />

//           {/* Desktop Menu */}
//           <ul className="hidden md:flex items-center space-x-8 text-base font-medium text-gray-800">
//             <li className="cursor-pointer hover:text-orange-500 transition">
//               <span className="flex items-center space-x-2">
//                 <img src={icon} alt="icon" className="w-6 h-6 animate-bounce" />
//                 <a href="#home">Home</a>
//               </span>
//             </li>

//             <li className="cursor-pointer hover:text-orange-500 transition">
//               <a href="#services">Our Services</a>
//             </li>

//             <li className="cursor-pointer hover:text-orange-500 transition">
//               <a href="#unique">Why Us</a>
//             </li>

//             <li className="cursor-pointer hover:text-orange-500 transition">
//               <a href="#vendor">Become a Vendor</a>
//             </li>

//             <li className="cursor-pointer hover:text-orange-500 transition">
//               <a href="#contact">Meet the Team</a>
//             </li>
//           </ul>

//           {/* Download App Button */}
//           <div className="hidden md:flex items-center">
//             <button
//               className="
//                 bg-[#ff7a2f]
//                 hover:bg-[#e96a24]
//                 text-white
//                 px-6
//                 py-2.5
//                 rounded-full
//                 text-sm
//                 font-semibold
//                 shadow-sm
//                 transition-all
//                 duration-300
//                 hover:scale-[1.03]
//               "
//             >
//               Download our app
//             </button>
//           </div>

//           {/* Mobile Toggle */}
//           <div onClick={handleNav} className="block md:hidden cursor-pointer">
//             {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
//           </div>
//         </div>
//       </header>

//       {/* MOBILE MENU */}
//       <div
//         className={`fixed left-0 top-0 w-[75%] h-full bg-orange-300 border-r border-orange-500 transform ${
//           nav ? "translate-x-0" : "-translate-x-full"
//         } transition-transform duration-500 ease-in-out z-[60]`}
//       >
//         <div className="flex items-center justify-between px-6 py-4">
//           <img src={logo} alt="PetSaviour Logo" className="h-10" />
//           <AiOutlineClose size={24} className="cursor-pointer" onClick={handleNav} />
//         </div>

//         <ul className="uppercase text-lg">
//           {[
//             "Home",
//             "Our Services",
//             "Why Us",
//             "Become a Vendor",
//             "Meet Our Team",
//           ].map((item) => (
//             <li
//               key={item}
//               className="py-4 px-6 border-b border-orange-800 hover:bg-orange-400"
//             >
//               {item}
//             </li>
//           ))}

//           <li className="py-4 px-6">
//             <button className="w-full bg-white text-orange-600 py-2 rounded-full font-semibold">
//               Download our app
//             </button>
//           </li>
//         </ul>
//       </div>

//       {/* Spacer for fixed navbar */}
//       <div className="h-24"></div>
//     </>
//   );
// };

// export default Navbar;




import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.png";
import icon from "../assets/icon.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const SECTIONS = [
  ["home", "Home"],
  ["services", "Our Services"],
  ["unique", "Why Us"],
  ["vendor", "Become a Vendor"],
  ["contact", "Meet Our Team"],
];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hide, setHide] = useState(false);
  const [active, setActive] = useState("home");
  const [progress, setProgress] = useState(0);
  const lastScroll = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      // Progress bar
      setProgress((current / height) * 100);

      // Glass state
      setScrolled(current > 20);

      // Hide / show
      setHide(current > lastScroll.current && current > 140);
      lastScroll.current = current;

      // Active section
      SECTIONS.forEach(([id]) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress */}
      <div className="fixed top-0 left-0 w-full h-[3px] z-[70]">
        <div
          className="h-full bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* NAVBAR */}
      <header
        className={`
          fixed top-0 left-0 w-full z-50
          transition-all duration-300
          ${hide ? "-translate-y-full" : "translate-y-0"}
          ${
            scrolled
              ? "bg-gradient-to-r from-white/80 via-orange-50/70 to-white/80 backdrop-blur-xl shadow-md border-b border-white/30"
              : "bg-transparent"
          }
        `}
      >
        <div className="max-w-[1200px] mx-auto h-24 px-6 lg:px-12 flex items-center justify-between">
          
          {/* Logo */}
          <img
            src={logo}
            alt="PetSaviour"
            className={`transition-all duration-300 ${
              scrolled ? "h-4" : "h-5"
            } object-contain`}
          />

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-8 text-sm font-semibold">
            {SECTIONS.map(([id, label]) => (
              <li key={id} className="relative">
                <a
                  href={`#${id}`}
                  className={`transition-colors ${
                    active === id
                      ? "text-orange-500"
                      : "text-gray-800 hover:text-orange-500"
                  }`}
                >
                  {label}
                </a>

                {active === id && (
                  <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-orange-500 rounded-full animate-fadeIn" />
                )}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden md:block">
            <button className="bg-[#ff7a2f] hover:bg-[#e96a24] text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow hover:scale-[1.04] transition">
              Download our app
            </button>
          </div>

          {/* Mobile Toggle */}
          <div onClick={() => setNav(!nav)} className="md:hidden cursor-pointer">
            {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </div>
        </div>
      </header>

      {/* MOBILE OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] transition ${
          nav ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setNav(false)}
      />

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 left-0 h-full w-[75%] bg-orange-300 z-[65]
          transform transition-transform duration-500
          ${nav ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex justify-between items-center px-6 py-4">
          <img src={logo} alt="logo" className="h-8" />
          <AiOutlineClose size={22} onClick={() => setNav(false)} />
        </div>

        <ul className="uppercase text-lg">
          {SECTIONS.map(([id, label]) => (
            <li key={id} className="border-b border-orange-800">
              <a
                href={`#${id}`}
                onClick={() => setNav(false)}
                className="block py-4 px-6 hover:bg-orange-400"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Spacer */}
      <div className="h-24" />
    </>
  );
};

export default Navbar;
