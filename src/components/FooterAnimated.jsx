// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

// /**
//  * Uses local uploaded image at /mnt/data/footer.jpeg
//  * Replace src if you prefer another public path.
//  */

// const container = {
//   hidden: { opacity: 0, y: 20 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { staggerChildren: 0.12, when: "beforeChildren" }
//   }
// };

// const itemUp = {
//   hidden: { opacity: 0, y: 12 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
// };

// const iconHover = {
//   hover: { scale: 1.08, y: -4, transition: { type: 'spring', stiffness: 300 } }
// };

// export default function FooterAnimated() {
//   return (
//     <footer className="bg-white font-pop text-gray-800 border-t border-gray-100">
//       {/* Top content with subtle background image on very wide screens (decorative) */}
//       <div className="relative overflow-hidden">
//         <img
//           src="/mnt/data/footer.jpeg"
//           alt="decorative footer"
//           className="absolute right-0 top-0 opacity-5 pointer-events-none select-none w-1/3 hidden lg:block"
//         />
//         <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
//           <motion.div
//             variants={container}
//             initial="hidden"
//             animate="show"
//             className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
//           >
//             {/* Brand & Tagline */}
//             <motion.div variants={itemUp} className="space-y-3">
//               <h2 className="text-xl font-extrabold flex items-center gap-2">
//                 <span className="text-2xl">🐾</span>
//                 <span className="leading-none">Pet Saviour</span>
//               </h2>
//               <p className="text-sm text-textMuted max-w-xs">
//                 Where every pet is family. Providing loving care for your furry friends.
//               </p>
//             </motion.div>

//             {/* Quick Links */}
//             <motion.div variants={itemUp} className="">
//               <h3 className="text-md font-semibold mb-3">Quick Links</h3>
//               <ul className="space-y-2 text-sm text-gray-700">
//                 <li className="hover:text-pastelPeachDark cursor-pointer">Home</li>
//                 <li className="hover:text-pastelPeachDark cursor-pointer">Services</li>
//                 <li className="hover:text-pastelPeachDark cursor-pointer">About Us</li>
//                 <li className="hover:text-pastelPeachDark cursor-pointer">Contact</li>
//               </ul>
//             </motion.div>

//             {/* Services */}
//             <motion.div variants={itemUp} className="">
//               <h3 className="text-md font-semibold mb-3">Services</h3>
//               <ul className="space-y-2 text-sm text-gray-700">
//                 <li className="hover:text-pastelPeachDark cursor-pointer">Pet Boarding</li>
//                 <li className="hover:text-pastelPeachDark cursor-pointer">Dog Walking</li>
//                 <li className="hover:text-pastelPeachDark cursor-pointer">Pet Grooming</li>
//                 <li className="hover:text-pastelPeachDark cursor-pointer">Vet Checkups</li>
//               </ul>
//             </motion.div>

//             {/* Social */}
//             <motion.div variants={itemUp} className="">
//               <h3 className="text-md font-semibold mb-3">Follow Us</h3>
//               <div className="flex items-center gap-4 mt-2">
//                 <motion.button
//                   variants={iconHover}
//                   whileHover="hover"
//                   className="w-10 h-10 rounded-full bg-pastelPeach flex items-center justify-center shadow-sm"
//                   aria-label="facebook"
//                 >
//                   <FaFacebookF className="text-sm" />
//                 </motion.button>

//                 <motion.button
//                   variants={iconHover}
//                   whileHover="hover"
//                   className="w-10 h-10 rounded-full bg-pastelPeach flex items-center justify-center shadow-sm"
//                   aria-label="instagram"
//                 >
//                   <FaInstagram className="text-sm" />
//                 </motion.button>

//                 <motion.button
//                   variants={iconHover}
//                   whileHover="hover"
//                   className="w-10 h-10 rounded-full bg-pastelPeach flex items-center justify-center shadow-sm"
//                   aria-label="twitter"
//                 >
//                   <FaTwitter className="text-sm" />
//                 </motion.button>
//               </div>
//             </motion.div>
//           </motion.div>

//           {/* divider */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5, duration: 0.6 }}
//             className="mt-10 border-t border-gray-100 pt-6"
//           >
//             <p className="text-center text-sm text-gray-500">
//               © 2024 Pet Saviour. All rights reserved. Made with <span aria-hidden>❤️</span> for pets.
//             </p>
//           </motion.div>
//         </div>
//       </div>
//     </footer>
//   );
// }



import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function FooterAnimated() {
  return (
    <footer className="relative bg-white overflow-hidden">
      {/* Soft background gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#FFF4ED] via-white to-[#FFE6D9] opacity-80" />

      <div className="relative max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-start">

          {/* BRAND */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#FF6A3D] tracking-wide">
              PETSAVIOUR
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              © 2025 Petsaviour. All Rights Reserved <br />
              All trademarks, logos, and brand names are the property of their respective owners.
            </p>

            <div className="text-sm text-gray-600 space-y-1">
              <p className="cursor-pointer hover:text-[#FF6A3D]">Privacy</p>
              <p className="cursor-pointer hover:text-[#FF6A3D]">Terms & condition</p>
            </div>
          </div>

          {/* ABOUT */}
          <div className="space-y-4">
            <h3 className="text-md font-semibold text-[#1F2A44]">About</h3>
            {/* <ul className="space-y-2 text-sm text-gray-600">
              <li className="hover:text-[#FF6A3D] cursor-pointer">Home</li>
              <li className="hover:text-[#FF6A3D] cursor-pointer">Our Services</li>
              <li className="hover:text-[#FF6A3D] cursor-pointer">Why Us</li>
              <li className="hover:text-[#FF6A3D] cursor-pointer">Become a Vendor</li>
              <li className="hover:text-[#FF6A3D] cursor-pointer">Meet the Team</li>
            </ul> */}
            <ul className="space-y-2 text-sm text-gray-600">
  <li>
    <a href="#home" className="hover:text-[#FF6A3D]">Home</a>
  </li>
  <li>
    <a href="#services" className="hover:text-[#FF6A3D]">Our Services</a>
  </li>
  <li>
    <a href="#unique" className="hover:text-[#FF6A3D]">Why Us</a>
  </li>
  <li>
    <a href="#vendor" className="hover:text-[#FF6A3D]">Become a Vendor</a>
  </li>
  <li>
    <a href="#contact" className="hover:text-[#FF6A3D]">Meet Our Team</a>
  </li>
</ul>

          </div>

          {/* SOCIAL */}
          <div className="space-y-4">
            <h3 className="text-md font-semibold text-[#1F2A44]">Social</h3>
            <div className="flex gap-4">
              <div className="w-9 h-9 rounded-full bg-[#FFE6D9] flex items-center justify-center hover:bg-[#FF6A3D] hover:text-white transition cursor-pointer">
                <FaFacebookF size={14} />
              </div>
              <div className="w-9 h-9 rounded-full bg-[#FFE6D9] flex items-center justify-center hover:bg-[#FF6A3D] hover:text-white transition cursor-pointer">
                <FaInstagram size={14} />
              </div>
              <div className="w-9 h-9 rounded-full bg-[#FFE6D9] flex items-center justify-center hover:bg-[#FF6A3D] hover:text-white transition cursor-pointer">
                <FaTwitter size={14} />
              </div>
              <div className="w-9 h-9 rounded-full bg-[#FFE6D9] flex items-center justify-center hover:bg-[#FF6A3D] hover:text-white transition cursor-pointer">
                <FaLinkedinIn size={14} />
              </div>
            </div>
          </div>

          {/* QR */}
          <div className="space-y-4 flex flex-col items-start md:items-end">
            <div className="w-28 h-28 bg-gray-200 flex items-center justify-center text-xs text-gray-600 rounded-md">
              Keep QR here
            </div>
            <p className="text-xs text-gray-600 text-right">
              Scan to download <br /> our app
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}

