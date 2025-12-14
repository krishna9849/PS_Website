// import React , {useState }from 'react'
// import logo from '../assets/logo.png'
// import icon from '../assets/icon.png'
// import arrow from '../assets/arrow.png'
// import {AiOutlineClose , AiOutlineMenu} from 'react-icons/ai'
// const Navbar = () => {
//     const [nav,setNav] = useState(false);
//     const handleNav = ()=>{
//         setNav(!nav);
//     }
//   return (
//     <>
//       <div className='flex justify-between items-center h-24 max-w-[1200px] mx-auto px-50 animate-fade-in'>
//         <img src={logo} alt="Logo"
//          className="transition-transform duration-500 hover:scale-125 hover:rotate-0 animate-pulse"
//           />
//         <ul className='flex items-center justify-between  hidden md:flex'>
//           <li className="p-4 flex items-center space-x-2 group">
//             <img src={icon} alt="Icon" className="w-6 h-6 group-hover:animate-bounce  animate-bounce" />
//             <label className="group-hover:text-orange-500 transition-all duration-300 hover:scale-125 hover:rotate-0 animate-step-up "  style={{ fontFamily: 'Noto Sans' ,  fontWeight: 400 , fontStyle : 'inherit'}}>Home</label>
//           </li>
//           <li className='p-4 hover:text-orange-500 transition-all duration-300 hover:scale-125 hover:rotate-0 animate-step-up' style={{ fontFamily: 'Noto Sans' ,  fontStyle : 'inherit' }} >Why Us</li>
//           <li className='p-4 hover:text-orange-500 transition-all duration-300 hover:scale-125 hover:rotate-0 animate-step-up' style={{ fontFamily: 'Noto Sans',  fontStyle : 'inherit' }}>Services</li>
//           <li className='p-4 hover:text-orange-500 transition-all duration-300 hover:scale-125 hover:rotate-0 animate-step-up' style={{ fontFamily: 'Noto Sans',  fontStyle : 'inherit' }}>Unique</li>
//           <li className='p-4 hover:text-orange-500 transition-all duration-300 hover:scale-125 hover:rotate-0 animate-step-up' style={{ fontFamily: 'Noto Sans',  fontStyle : 'inherit' }}>Join Us</li>
//         </ul>
//         <ul>
//           <li className='p-4 flex items-center space-x-2 group hidden md:flex'>
//             <label className="group-hover:text-orange-500 transition-all duration-300 hover:scale-105 hover:rotate-0 animate-step-up" style={{ fontFamily: 'Noto Sans' ,  fontStyle : 'inherit'}}>Contact Us</label>
//             <img src={arrow} alt="Arrow" className="w-6 h-6 group-hover:animate-pulse animate-spin" />
//           </li>
//         </ul>
//         <div onClick={handleNav} className='block md:hidden'>
//             {!nav ? <AiOutlineClose size={20}/> :  <AiOutlineMenu size={20}/> }
//             {/* <AiOutlineMenu size={20}/> */}
//          </div>
//          <div className= {!nav ?  'fixed left-0 top-0 w-[40%] h-full border-r border-r-gray-900 bg-orange-300 ease-linear duration-500' : 'fixed left-[100%]'}>
//          <img src={logo} alt="Logo"
//          className="m-8 transition-transform duration-500 hover:scale-125 hover:rotate-0 animate-pulse"
//           />
//             <ul className='uppercase p-4'>
//                 <li className='pt-4 border-b  border-orange-800'>Home</li>
//                 <li className='pt-4 border-b   border-orange-800'>Why Us</li>
//                 <li className='pt-4 border-b   border-orange-800'>Services</li>
//                 <li className='pt-4 border-b   border-orange-800'>Unique</li>
//                 <li className='pt-4 border-b  border-orange-800'>Join Us</li>
//                 <li className='pt-4 border-b   border-orange-800'>Contact Us</li>
//             </ul>
//          </div>
//       </div>
      
//     </>
//   )
// }

// export default Navbar
