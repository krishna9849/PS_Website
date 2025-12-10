// // src/components/ProfileModal.jsx
// import React, { useEffect } from 'react';
// import './AboutUsGallery.css'; // modal styles included here

// export default function ProfileModal({ open, onClose, children }) {
//   useEffect(() => {
//     if (!open) return;
//     const onKey = (e) => {
//       if (e.key === 'Escape') onClose();
//     };
//     document.addEventListener('keydown', onKey);
//     document.body.style.overflow = 'hidden';
//     return () => {
//       document.removeEventListener('keydown', onKey);
//       document.body.style.overflow = '';
//     };
//   }, [open, onClose]);

//   if (!open) return null;
//   return (
//     <div className="ps-modal-backdrop" role="dialog" aria-modal="true" onMouseDown={onClose}>
//       <div
//         className="ps-modal-panel"
//         onMouseDown={(e) => e.stopPropagation()}
//         tabIndex={-1}
//       >
//         <button className="ps-modal-close" aria-label="Close" onClick={onClose}>
//           ×
//         </button>
//         <div className="ps-modal-content">{children}</div>
//       </div>
//     </div>
//   );
// }



// src/components/ProfileModal.jsx
import React, { useEffect } from "react";
import "./TeamCircularGallery.css"; // modal styles included here (we included modal CSS in same file earlier)

export default function ProfileModal({ open, onClose, children }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className="ps-modal-backdrop" role="dialog" aria-modal="true" onMouseDown={onClose}>
      <div className="ps-modal-panel" onMouseDown={(e) => e.stopPropagation()}>
        <button className="ps-modal-close" aria-label="Close" onClick={onClose}>
          ×
        </button>
        <div className="ps-modal-content">{children}</div>
      </div>
    </div>
  );
}
