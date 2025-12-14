import React, { useState, createContext, useContext } from "react";

/* =========================
   GLOBAL MODAL CONTEXT
========================= */
const VendorModalContext = createContext();

export const useVendorModal = () => useContext(VendorModalContext);

export function VendorModalProvider({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <VendorModalContext.Provider value={{ open, setOpen }}>
      {children}
      <VendorModal />
    </VendorModalContext.Provider>
  );
}

/* =========================
   GLOBAL VENDOR MODAL
========================= */
function VendorModal() {
  const { open, setOpen } = useVendorModal();

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="bg-white rounded-2xl w-full max-w-md p-6 relative animate-fadeIn">
        <button
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>

        <h3 className="text-xl font-semibold text-[#1f2a44] mb-4">
          Become a Vendor
        </h3>

        <form className="space-y-4">
          <input className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400" placeholder="Business Name" />
          <input className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400" placeholder="Contact Person" />
          <input className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400" placeholder="Email Address" />
          <input className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400" placeholder="Phone Number" />
          <textarea rows="3" className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400" placeholder="Services you provide"></textarea>

          <button className="w-full bg-[#E96443] text-white py-2 rounded-full font-medium hover:bg-[#d9583a] transition">
            Submit Details
          </button>
        </form>
      </div>
    </div>
  );
}

/* =========================
   BECOME VENDOR BANNER
========================= */
export default function BecomeVendor() {
  const { setOpen } = useVendorModal();

  return (
    <section className="bg-[#FFF6F0] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl">
          
          {/* Animated Background */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8')] bg-cover bg-center animate-slowZoom"></div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F47C5E]/80 via-[#F89B7A]/75 to-[#FBC4AE]/70"></div>

          {/* Content */}
          <div className="relative z-10 p-10 md:p-16 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
              Ready to grow your pet care business?
            </h2>

            <p className="text-white/95 text-sm md:text-base leading-relaxed mb-6">
              Join the PetSaviour vendor network and connect with pet parents who value quality, trust, and care.
            </p>

            <button
              onClick={() => setOpen(true)}
              className="inline-flex items-center gap-2 bg-white text-[#E96443] px-6 py-3 rounded-full font-semibold hover:bg-orange-100 transition"
            >
              Become a Vendor →
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
          animation: slowZoom 20s ease-in-out infinite alternate;
        }
      `}</style>
    </section>
  );
}
