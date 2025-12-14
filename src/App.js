// // import React from 'react';
// // import Navbar from './components/Navbar';
// // import Home from './components/Home';
// // import Services from './components/Services';
// // import Unique from './components/Unique';
// // import FooterAnimated from './components/FooterAnimated';
// // function App() {
// //   return (
// //     <div className="App">     
// //      <Navbar/>
// //      <Home/>
// //      <Services/>
// //      <Unique/>
// //      <FooterAnimated/>
// //     </div>
// //   );
// // }

// // export default App;



// import React from 'react';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import Services from './components/Services';
// import Unique from './components/Unique';
// import FooterAnimated from './components/FooterAnimated';
// import AboutUs from "./components/AboutUs";
// import BecomeVendorPreview from './components/BecomeVendor';
// // import AboutUsGallery from './components/AboutUsGallery';

// function App() {
//   return (
//     <div className="App">
//       <Navbar />

//       <section id="home">
//         <Home />
//       </section>

//       <section id="services">
//         <Services />
//       </section>

//       <section id="unique">
//         <Unique />
//       </section>

//       <section id="vendor">
//         <BecomeVendorPreview />
//       </section>

//       <section id="contact">
//         <AboutUs />
//       </section>
//       <section id="footer">
//         <FooterAnimated />
//       </section>
//     </div>
//   );
// }

// export default App;



import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Unique from "./components/Unique";
import FooterAnimated from "./components/FooterAnimated";
import AboutUs from "./components/AboutUs";

// 👇 IMPORTANT: import BOTH
import BecomeVendor, {
  VendorModalProvider,
} from "./components/BecomeVendor";

function App() {
  return (
    // ✅ Wrap whole app with provider
    <VendorModalProvider>
      <div className="App">
        <Navbar />

        <section id="home">
          <Home />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="unique">
          <Unique />
        </section>

        <section id="vendor">
          <BecomeVendor />
        </section>

        <section id="contact">
          <AboutUs />
        </section>

        <section id="footer">
          <FooterAnimated />
        </section>
      </div>
    </VendorModalProvider>
  );
}

export default App;
