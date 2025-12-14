// import React, { useState } from "react";
// import logo from "../assets/logo.png";
// import icon from "../assets/icon.png";
// import arrow from "../assets/arrow.png";
// import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

// const Navbar = () => {
//   const [nav, setNav] = useState(false);

//   const handleNav = () => {
//     setNav(!nav);
//   };

//   return (
//     <>
//       {/* Fixed Navbar */}
//       <nav
//         className="fixed top-0 w-full z-50 flex justify-between items-center h-24 max-w-[1200px] px-6 animate-fade-in"
//         style={{
//           fontFamily: "Inter",
//         }}
//       >
//         {/* Logo */}
//         <img
//           src={logo}
//           alt="Logo"
//           className="transition-transform duration-500 hover:scale-125 hover:rotate-6 animate-pulse"
//         />

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex items-center space-x-6">
//           <li className="flex items-center space-x-2 group">
//             <img
//               src={icon}
//               alt="Icon"
//               className="w-6 h-6 group-hover:animate-bounce animate-step-up"
//             />
//             <span
//               className="group-hover:text-orange-500 transition duration-300 font-sans animate-slide-in"
//               style={{ fontFamily: "Noto Sans", fontStyle: "inherit" }}
//             >
//               Home
//             </span>
//           </li>
//           <li
//             className="p-4 hover:text-orange-500 transition duration-300 animate-slide-in"
//             style={{ fontFamily: "Noto Sans", fontStyle: "inherit" }}
//           >
//             Why Us
//           </li>
//           <li
//             className="p-4 hover:text-orange-500 transition duration-300 animate-slide-in"
//             style={{ fontFamily: "Noto Sans", fontStyle: "inherit" }}
//           >
//             Services
//           </li>
//           <li
//             className="p-4 hover:text-orange-500 transition duration-300 animate-slide-in"
//             style={{ fontFamily: "Noto Sans", fontStyle: "inherit" }}
//           >
//             Unique
//           </li>
//           <li
//             className="p-4 hover:text-orange-500 transition duration-300 animate-slide-in"
//             style={{ fontFamily: "Noto Sans", fontStyle: "inherit" }}
//           >
//             Join Us
//           </li>
//         </ul>

//         {/* Contact Us */}
//         <div className="hidden md:flex items-center space-x-2 group">
//           <span
//             className="group-hover:text-orange-500 transition duration-300 font-sans animate-fade-in"
//             style={{ fontFamily: "Noto Sans", fontStyle: "inherit" }}
//           >
//             Contact Us
//           </span>
//           <img
//             src={arrow}
//             alt="Arrow"
//             className="w-6 h-6 group-hover:animate-spin"
//           />
//         </div>

//         {/* Mobile Menu Toggle */}
//         <div
//           onClick={handleNav}
//           className="block md:hidden cursor-pointer"
//           aria-label="Toggle navigation menu"
//         >
//           {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
//         </div>

//         {/* Mobile Menu */}
//         <div
//           className={`fixed left-0 top-0 w-[60%] h-full ease-in-out duration-500 ${
//             nav ? "translate-x-0" : "-translate-x-full"
//           }`}
//         >
//           <img
//             src={logo}
//             alt="Logo"
//             className="m-8 transition-transform duration-500 hover:scale-125 hover:rotate-6 animate-pulse"
//           />
//           <ul className="uppercase p-4 animate-fade-in">
//             <li className="pt-4 border-b animate-step-up">Home</li>
//             <li className="pt-4 border-b animate-step-up">Why Us</li>
//             <li className="pt-4 border-b animate-step-up">Services</li>
//             <li className="pt-4 border-b animate-step-up">Unique</li>
//             <li className="pt-4 border-b animate-step-up">Join Us</li>
//             <li className="pt-4 border-b animate-step-up">Contact Us</li>
//           </ul>
//         </div>
//       </nav>

//       {/* Spacer to prevent content overlap */}
//       <div className="h-24"></div>
//     </>
//   );
// };

// export default Navbar;
