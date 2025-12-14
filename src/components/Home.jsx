// import React from 'react';
// import Typewriter from 'react-typewriter-effect';
// import { FaPaw, FaDog, FaCat } from 'react-icons/fa';
// import leftdog from '../assets/leftdog.png';
// import rightdog from '../assets/rightdog.png';
// import middledog from '../assets/middledog.png';
// import runningdog from '../assets/runningdog.gif'; // Import the running dog GIF

// const Home = () => {
//   return (
//     <>
//       {/* Running Dog GIF */}
//       <div className="relative w-full flex justify-center mb-4">
//         <img
//           src={runningdog}
//           alt="Running Dog"
//           className="w-16 h-16 lg:w-20 lg:h-20 animate-dog-run"
//           style={{
//             animation: 'dogRun 60s linear infinite', // Add animation here
//           }}
//         />
//       </div>

//       <div
//         className="text-center mx-auto max-w-6xl px-4 lg:px-6 py-10 lg:py-16"
//         style={{
//           fontFamily: 'Inter',
//         }}
//       >
//         {/* Heading with Paw Icon */}
//         <h1
//           className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 flex justify-center items-center"
//           style={{
//             lineHeight: '1.4',
//             fontWeight: '700',
//           }}
//         >
//           <FaPaw className="text-orange-500 mr-2" />
//           Your Partner in At-Home Pet Care and Beyond!
//         </h1>

//         {/* Subheading */}
//         <p
//           className="text-gray-600 text-sm sm:text-base lg:text-lg mb-6"
//           style={{
//             lineHeight: '1.6',
//             fontWeight: '400',
//           }}
//         >
//           At Pet Saviour, we understand that your furry friends deserve the best
//           care. From grooming to wellness, we're here to make your life easier
//           while keeping your pets happy and healthy.
//         </p>

//         {/* Typewriter Effect */}
//         <div
//           className="flex justify-center items-center text-center mb-8"
//           style={{
//             fontWeight: '400',
//           }}
//         >
//           <Typewriter
//             multiText={[
//               '🐾 Grooming services tailored for your pets!',
//               '🐕 Expert pet wellness care at your doorstep.',
//               '🐾 Keeping tails wagging with love and care.',
//               '🐶 Affordable and reliable pet sitting services.',
//               '🐾 We treat your pets like family!',
//             ]}
//             typeSpeed={50}
//             startDelay={500}
//             multiTextDelay={500}
//             loop={true} // Infinite loop enabled
//             textStyle={{
//               fontSize: '20px',
//               fontWeight: '400',
//               color: '#FB923C', // Tailwind's orange-500
//               textAlign: 'center',
//             }}
//           />
//         </div>

//         {/* Buttons */}
//         <div className="flex flex-wrap justify-center gap-4 mb-10">
//           {/* Our Services Button with Dog Icon */}
//           <button className="bg-orange-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-orange-600 transition duration-300 flex items-center">
//             <FaDog className="mr-2 text-lg" />
//             Our Services
//             <span className="ml-2 text-white text-lg">&rarr;</span>
//           </button>

//           {/* Download App Button with Cat Icon */}
//           <button className="text-orange-500 border border-orange-500 px-6 py-3 rounded-full hover:bg-orange-100 transition duration-300 flex items-center">
//             <FaCat className="mr-2 text-lg" />
//             Download our App
//           </button>
//         </div>

//         {/* Dog Images Section */}
//         <div className="flex justify-center items-center gap-20 mx-auto max-w-6xl">
//           {/* Left Dog */}
//           <div className="text-center animate-playful-jump">
//             <img src={leftdog} alt="Left Dog" />
//           </div>

//           {/* Middle Dog */}
//           <div className="text-center animate-head-tilt">
//             <img src={middledog} alt="Middle Dog" />
//           </div>

//           {/* Right Dog */}
//           <div className="text-center animate-tail-wag">
//             <img src={rightdog} alt="Right Dog" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;



import React from 'react';
import Typewriter from 'react-typewriter-effect';
import { FaPaw, FaDog, FaCat } from 'react-icons/fa';
import leftdog from '../assets/leftdog.png';
import rightdog from '../assets/rightdog.png';
import middledog from '../assets/middledog.png';
import runningdog from '../assets/runningdog.gif';

const Home = () => {
  return (
    <>
      {/* Running Dog GIF */}
      {/* <div className="relative w-full flex justify-center mb-4 font-pop">
        <img
          src={runningdog}
          alt="Running Dog"
          className="w-16 h-16 lg:w-20 lg:h-20 animate-dog-run"
          style={{ animation: 'dogRun 60s linear infinite' }}
        />
      </div> */}

      {/* <div className="text-center mx-auto max-w-6xl px-4 lg:px-6 py-10 lg:py-16 font-pop"> */}
    <div className="text-center mx-auto max-w-6xl px-4 lg:px-6 pt-2 pb-10 lg:pb-16 font-pop">
    
        {/* Heading with Paw Icon */}
        {/* <h1
          className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 flex justify-center items-center"
          style={{ lineHeight: '1.4' }}
        >
          <FaPaw className="text-orange-500 mr-2" />
          Your Partner in At-Home Pet Care and Beyond!
        </h1> */}
        <h1
  className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 flex justify-center items-center text-center"
  style={{ lineHeight: '1.4' }}
>
  {/* <FaPaw className="text-orange-500 mr-2" /> */}
  <span>
    Your Partner in At-Home Pet Care
    <br />
    <span className="text-orange-500">and Beyond!</span>
  </span>
</h1>


        {/* Subheading */}
        {/* <p
          className="text-gray-600 text-sm sm:text-base lg:text-lg mb-6 font-normal"
          style={{ lineHeight: '1.6' }}
        >
          At Pet Saviour, we understand that your furry friends deserve the best
          care. From grooming to wellness, we're here to make your life easier
          while keeping your pets happy and healthy.
        </p> */}

        {/* Typewriter Effect */}
        <div className="flex justify-center items-center text-center mb-8 font-medium">
          <Typewriter
            multiText={[
              '🐾 At Pet Saviour, we understand your furry friends deserve the best care.',
              '🐕 From grooming to complete wellness support.',
              '🐾 We’re here to make your life easier as a pet parent.',
              '🐶 While keeping your pets happy, safe, and healthy.',
              '🐾 We treat your pets like family!',
              '🐾 Grooming services tailored for your pets!',
              '🐕 Expert pet wellness care at your doorstep.',
              '🐾 Keeping tails wagging with love and care.',
              '🐶 Affordable and reliable pet sitting services.',
              '🐾 We treat your pets like family!',
            ]}
            typeSpeed={50}
            startDelay={500}
            multiTextDelay={500}
            loop={true}
            textStyle={{
              fontSize: '20px',
              fontWeight: '500',
              color: '#4B5563',
              textAlign: 'center',
              fontFamily: 'Poppins',
            }}
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          
          {/* Our Services Button */}
          <button className="bg-orange-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-orange-600 transition duration-300 flex items-center font-medium">
            <FaDog className="mr-2 text-lg" />
            Our Services
            <span className="ml-2 text-white text-lg">&rarr;</span>
          </button>

          {/* Download App Button */}
          <button className="text-orange-500 border border-orange-500 px-6 py-3 rounded-full hover:bg-orange-100 transition duration-300 flex items-center font-medium">
            <FaCat className="mr-2 text-lg" />
            Download our App
          </button>
        </div>

        {/* Dog Images Section */}
        {/* <div className="flex justify-center items-center gap-20 mx-auto max-w-6xl">
          <div className="text-center animate-playful-jump">
            <img src={leftdog} alt="Left Dog" />
          </div>

          <div className="text-center animate-head-tilt">
            <img src={middledog} alt="Middle Dog" />
          </div>

          <div className="text-center animate-tail-wag">
            <img src={rightdog} alt="Right Dog" />
          </div>
        </div> */}
{/* <div className="flex justify-center items-center gap-20 mx-auto max-w-6xl -mt-8"> */}
  <div className="flex justify-center items-center gap-24 lg:gap-28 mx-auto max-w-6xl -mt-8">

  <div className="text-center animate-playful-jump">
    <img src={leftdog} alt="Left Dog" className="w-40 lg:w-44 mx-auto" />
  </div>

  <div className="text-center animate-head-tilt">
    <img src={middledog} alt="Middle Dog" className="w-44 lg:w-48 mx-auto" />
  </div>

  <div className="text-center animate-tail-wag">
    <img src={rightdog} alt="Right Dog" className="w-40 lg:w-44 mx-auto" />
  </div>
</div>

      </div>
    </>
  );
};

export default Home;
