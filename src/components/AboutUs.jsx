// // // // // // // // // src/components/AboutUs.jsx
// // // // // // // // import React from "react";
// // // // // // // // import ProfileCard from "./ProfileCard";

// // // // // // // // import JastyImg from "../assets/saran.jpeg";
// // // // // // // // import KrishnaImg from "../assets/krishna.jpeg";
// // // // // // // // import PramodImg from "../assets/promod.png";
// // // // // // // // import AsthaImg from "../assets/astha.png";
// // // // // // // // import VenkatImg from "../assets/venkat.png";

// // // // // // // // import "./AboutUs.css"; // <- IMPORTANT

// // // // // // // // const team = [
// // // // // // // //   {
// // // // // // // //     name: "Jasty Saran",
// // // // // // // //     title: "Founder & Chief Technology Officer",
// // // // // // // //     handle: "jasty_saran",
// // // // // // // //     status: "Online",
// // // // // // // //     contactText: "Contact Me",
// // // // // // // //     avatarUrl: JastyImg,
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     name: "Krishna Yellapragada",
// // // // // // // //     title: "Senior Frontend Engineer",
// // // // // // // //     handle: "krishna_dev",
// // // // // // // //     status: "Available",
// // // // // // // //     contactText: "Message",
// // // // // // // //     avatarUrl: KrishnaImg,
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     name: "Pramod",
// // // // // // // //     title: "Head of DevOps & Co Founder",
// // // // // // // //     handle: "pramod_ops",
// // // // // // // //     status: "Online",
// // // // // // // //     contactText: "Contact Me",
// // // // // // // //     avatarUrl: PramodImg,
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     name: "Astha",
// // // // // // // //     title: "UI/UX & Product Designer",
// // // // // // // //     handle: "astha_designs",
// // // // // // // //     status: "Away",
// // // // // // // //     contactText: "Say Hi",
// // // // // // // //     avatarUrl: AsthaImg,
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     name: "Venkat",
// // // // // // // //     title: "Head of Backend Engineering & CIO",
// // // // // // // //     handle: "venkat_backend",
// // // // // // // //     status: "Busy",
// // // // // // // //     contactText: "Contact Me",
// // // // // // // //     avatarUrl: VenkatImg,
// // // // // // // //   },
// // // // // // // // ];

// // // // // // // // export default function AboutUs() {
// // // // // // // //   return (
// // // // // // // //     <div className="about-container">
// // // // // // // //       <h2 className="about-title">Meet Our Team</h2>

// // // // // // // //       <div className="team-scroll">
// // // // // // // //         {team.map((member, i) => (
// // // // // // // //           <div key={i} className="team-card-wrapper">
// // // // // // // //             <ProfileCard
// // // // // // // //             //   name={member.name}
// // // // // // // //             //   title={member.title}
// // // // // // // //               handle={member.handle}
// // // // // // // //               status={member.title}
// // // // // // // //               contactText={member.contactText}
// // // // // // // //               avatarUrl={member.avatarUrl}
// // // // // // // //               showUserInfo={true}
// // // // // // // //               enableTilt={false}
// // // // // // // //               enableMobileTilt={false}
// // // // // // // //               onContactClick={() =>
// // // // // // // //                 console.log("Contact clicked:", member.name)
// // // // // // // //               }
// // // // // // // //             />
// // // // // // // //           </div>
// // // // // // // //         ))}
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }



// // // // // // // // // import React from "react";
// // // // // // // // // import MaterialProfileCard from "./MaterialProfileCard";

// // // // // // // // // import JastyImg from "../assets/saran.jpeg";
// // // // // // // // // import KrishnaImg from "../assets/krishna.jpeg";
// // // // // // // // // import PramodImg from "../assets/promod.png";
// // // // // // // // // import AsthaImg from "../assets/astha.png";
// // // // // // // // // import VenkatImg from "../assets/venkat.png";

// // // // // // // // // export default function AboutUs() {
// // // // // // // // //   const team = [
// // // // // // // // //     {
// // // // // // // // //       name: "Jasty Saran",
// // // // // // // // //       title: "Founder & CTO",
// // // // // // // // //       avatar: JastyImg,
// // // // // // // // //       facebook: "#",
// // // // // // // // //       twitter: "#",
// // // // // // // // //       instagram: "#",
// // // // // // // // //     },
// // // // // // // // //     {
// // // // // // // // //       name: "Krishna Yellapragada",
// // // // // // // // //       title: "Senior Frontend Engineer",
// // // // // // // // //       avatar: KrishnaImg,
// // // // // // // // //     },
// // // // // // // // //     {
// // // // // // // // //       name: "Pramod",
// // // // // // // // //       title: "Head of DevOps & Co-Founder",
// // // // // // // // //       avatar: PramodImg,
// // // // // // // // //     },
// // // // // // // // //     {
// // // // // // // // //       name: "Astha",
// // // // // // // // //       title: "UI/UX & Product Designer",
// // // // // // // // //       avatar: AsthaImg,
// // // // // // // // //     },
// // // // // // // // //     {
// // // // // // // // //       name: "Venkat",
// // // // // // // // //       title: "Head of Backend Engineering & CIO",
// // // // // // // // //       avatar: VenkatImg,
// // // // // // // // //     },
// // // // // // // // //   ];

// // // // // // // // //   return (
// // // // // // // // //     <div className="team-container px-5 py-10">
// // // // // // // // //       <h2 className="text-center mb-8 text-3xl font-bold text-orange-600">
// // // // // // // // //         Our Team
// // // // // // // // //       </h2>

// // // // // // // // //       <div className="flex gap-6 overflow-x-auto pb-6">
// // // // // // // // //         {team.map((member, i) => (
// // // // // // // // //           <MaterialProfileCard key={i} {...member} />
// // // // // // // // //         ))}
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // }



// // // // // // // import React, { useState } from "react";
// // // // // // // import CircularGallery from "./CircularGallery";
// // // // // // // import ProfileModal from "./ProfileModal";
// // // // // // // import ProfileCard from "./ProfileCard";

// // // // // // // import Jasty from "../assets/saran.jpeg";
// // // // // // // import Krishna from "../assets/krishna.jpeg";
// // // // // // // import Pramod from "../assets/promod.png";
// // // // // // // import Astha from "../assets/astha.png";
// // // // // // // import Venkat from "../assets/venkat.png";

// // // // // // // const TEAM = [
// // // // // // //   { name: "Jasty Saran", title: "Founder & CTO", image: Jasty },
// // // // // // //   { name: "Krishna Y.", title: "Senior Frontend Engineer", image: Krishna },
// // // // // // //   { name: "Pramod", title: "Head of DevOps & Co-founder", image: Pramod },
// // // // // // //   { name: "Astha", title: "UI/UX Designer", image: Astha },
// // // // // // //   { name: "Venkat", title: "Backend Lead & CIO", image: Venkat },
// // // // // // // ];

// // // // // // // export default function TeamSection() {
// // // // // // //   const [selected, setSelected] = useState(null);

// // // // // // //   return (
// // // // // // //     <>
// // // // // // //       <CircularGallery
// // // // // // //         items={TEAM.map((t) => ({ image: t.image }))}
// // // // // // //         onSelect={(index) => setSelected(TEAM[index])}
// // // // // // //       />

// // // // // // //       <ProfileModal open={!!selected} onClose={() => setSelected(null)}>
// // // // // // //         {selected && (
// // // // // // //           <ProfileCard
// // // // // // //             name={selected.name}
// // // // // // //             title={selected.title}
// // // // // // //             avatarUrl={selected.image}
// // // // // // //             handle={selected.name.replace(/\s/g, "_").toLowerCase()}
// // // // // // //             status="Online"
// // // // // // //             contactText="Contact Me"
// // // // // // //             showUserInfo={true}
// // // // // // //           />
// // // // // // //         )}
// // // // // // //       </ProfileModal>
// // // // // // //     </>
// // // // // // //   );
// // // // // // // }



// // // // // // // Example usage in AboutUs or TeamSection.jsx
// // // // // // import React, { useState } from "react";
// // // // // // import TeamCircularGallery from "./components/TeamCircularGallery";
// // // // // // import ProfileModal from "./components/ProfileModal"; // optional from earlier
// // // // // // import JastyImg from "../assets/saran.jpeg";
// // // // // // import KrishnaImg from "../assets/krishna.jpeg";
// // // // // // import PramodImg from "../assets/promod.png";
// // // // // // import AsthaImg from "../assets/astha.png";
// // // // // // import VenkatImg from "../assets/venkat.png";

// // // // // // const TEAM = [
// // // // // //   { name: "Jasty Saran", title: "Founder & CTO", avatarUrl: JastyImg, handle: "jasty_saran", status: "Online" },
// // // // // //   { name: "Krishna Yellapragada", title: "Senior Frontend Engineer", avatarUrl: KrishnaImg, handle: "krishna_dev", status: "Available" },
// // // // // //   { name: "Pramod", title: "Head of DevOps & Co Founder", avatarUrl: PramodImg, handle: "pramod_ops", status: "Online" },
// // // // // //   { name: "Astha", title: "UI/UX & Product Designer", avatarUrl: AsthaImg, handle: "astha_designs", status: "Away" },
// // // // // //   { name: "Venkat", title: "Head of Backend Engineering & CIO", avatarUrl: VenkatImg, handle: "venkat_backend", status: "Busy" }
// // // // // // ];

// // // // // // export default function TeamPage() {
// // // // // //   const [selected, setSelected] = useState(null);

// // // // // //   return (
// // // // // //     <>
// // // // // //       <TeamCircularGallery
// // // // // //         team={TEAM}
// // // // // //         radius={380}          /* adjust for desktop */
// // // // // //         cardScale={0.78}      /* adjust card non-linear scale */
// // // // // //         onSelect={(member) => setSelected(member)}
// // // // // //       />

// // // // // //       {/* optional modal to show the clicked member in detail */}
// // // // // //       {selected && (
// // // // // //         <ProfileModal open={!!selected} onClose={() => setSelected(null)}>
// // // // // //           <div style={{ width: 420, maxWidth: "92vw" }}>
// // // // // //             <ProfileCard
// // // // // //               name={selected.name}
// // // // // //               title={selected.title}
// // // // // //               handle={selected.handle}
// // // // // //               status={selected.status}
// // // // // //               contactText="Contact Me"
// // // // // //               avatarUrl={selected.avatarUrl}
// // // // // //               showUserInfo={true}
// // // // // //               enableTilt={true}
// // // // // //             />
// // // // // //           </div>
// // // // // //         </ProfileModal>
// // // // // //       )}
// // // // // //     </>
// // // // // //   );
// // // // // // }




// // // // // // src/components/AboutUs.jsx
// // // // // import React, { useState } from "react";
// // // // // import TeamCircularGallery from "./TeamCircularGallery";
// // // // // import ProfileModal from "./ProfileModal";
// // // // // import ProfileCard from "./ProfileCard";

// // // // // import JastyImg from "../assets/saran.jpeg";
// // // // // import KrishnaImg from "../assets/krishna.jpeg";
// // // // // import PramodImg from "../assets/promod.png";
// // // // // import AsthaImg from "../assets/astha.png";
// // // // // import VenkatImg from "../assets/venkat.png";

// // // // // import "./TeamCircularGallery.css"; // gallery + modal styles

// // // // // const TEAM = [
// // // // //   {
// // // // //     name: "Jasty Saran",
// // // // //     title: "Founder & Chief Technology Officer",
// // // // //     handle: "jasty_saran",
// // // // //     status: "Online",
// // // // //     contactText: "Contact Me",
// // // // //     avatarUrl: JastyImg,
// // // // //   },
// // // // //   {
// // // // //     name: "Krishna Yellapragada",
// // // // //     title: "Senior Frontend Engineer",
// // // // //     handle: "krishna_dev",
// // // // //     status: "Available",
// // // // //     contactText: "Message",
// // // // //     avatarUrl: KrishnaImg,
// // // // //   },
// // // // //   {
// // // // //     name: "Pramod",
// // // // //     title: "Head of DevOps & Co Founder",
// // // // //     handle: "pramod_ops",
// // // // //     status: "Online",
// // // // //     contactText: "Contact Me",
// // // // //     avatarUrl: PramodImg,
// // // // //   },
// // // // //   {
// // // // //     name: "Astha",
// // // // //     title: "UI/UX & Product Designer",
// // // // //     handle: "astha_designs",
// // // // //     status: "Away",
// // // // //     contactText: "Say Hi",
// // // // //     avatarUrl: AsthaImg,
// // // // //   },
// // // // //   {
// // // // //     name: "Venkat",
// // // // //     title: "Head of Backend Engineering & CIO",
// // // // //     handle: "venkat_backend",
// // // // //     status: "Busy",
// // // // //     contactText: "Contact Me",
// // // // //     avatarUrl: VenkatImg,
// // // // //   },
// // // // // ];

// // // // // export default function AboutUs() {
// // // // //   const [selected, setSelected] = useState(null);

// // // // //   return (
// // // // //     <div>
// // // // //       <h2 style={{ textAlign: "center", color: "#ff7a00", marginTop: 20 }}>
// // // // //         Meet Our Team
// // // // //       </h2>

// // // // //       <TeamCircularGallery
// // // // //         team={TEAM}
// // // // //         radius={380}
// // // // //         cardScale={0.78}
// // // // //         onSelect={(member) => setSelected(member)}
// // // // //       />

// // // // //       <ProfileModal open={!!selected} onClose={() => setSelected(null)}>
// // // // //         {selected && (
// // // // //           <div style={{ width: 420, maxWidth: "92vw" }}>
// // // // //             <ProfileCard
// // // // //               name={selected.name}
// // // // //               title={selected.title}
// // // // //               handle={selected.handle}
// // // // //               status={selected.status}
// // // // //               contactText={selected.contactText}
// // // // //               avatarUrl={selected.avatarUrl}
// // // // //               showUserInfo={true}
// // // // //               enableTilt={true}
// // // // //             />
// // // // //           </div>
// // // // //         )}
// // // // //       </ProfileModal>
// // // // //     </div>
// // // // //   );
// // // // // }


// // // // import React, {useRef, useEffect} from 'react';
// // // // import JastyImg from "../assets/saran.jpeg";
// // // // import KrishnaImg from "../assets/krishna.jpeg";
// // // // import PramodImg from "../assets/promod.png";
// // // // import AsthaImg from "../assets/astha.png";
// // // // import VenkatImg from "../assets/venkat.png";

// // // // import "./TeamCircularGallery.css"; // optional gallery + modal styles for other parts

// // // // /**
// // // //  * PetSaviourProfileCarousel.jsx
// // // //  * Tailwind React component for Pet Saviour project.
// // // //  * Theme: white + orange
// // // //  * - Auto-scrolling horizontal profile cards (infinite loop via duplication)
// // // //  * - Pause on hover/focus, accessible, drag-to-scroll, responsive
// // // //  * - Uses Tailwind classes and an internal <style> block for keyframes
// // // //  */

// // // // const TEAM = [
// // // //   {
// // // //     id: 'jasty',
// // // //     name: "Jasty Saran",
// // // //     role: "Founder & Chief Technology Officer",
// // // //     handle: "jasty_saran",
// // // //     status: "Online",
// // // //     contactText: "Contact Me",
// // // //     initials: 'JS',
// // // //     img: JastyImg,
// // // //     tags: ['Founder','CTO']
// // // //   },
// // // //   {
// // // //     id: 'krishna',
// // // //     name: "Krishna Yellapragada",
// // // //     role: "Senior Frontend Engineer",
// // // //     handle: "krishna_dev",
// // // //     status: "Available",
// // // //     contactText: "Message",
// // // //     initials: 'KY',
// // // //     img: KrishnaImg,
// // // //     tags: ['Frontend','React']
// // // //   },
// // // //   {
// // // //     id: 'pramod',
// // // //     name: "Pramod",
// // // //     role: "Head of DevOps & Co Founder",
// // // //     handle: "pramod_ops",
// // // //     status: "Online",
// // // //     contactText: "Contact Me",
// // // //     initials: 'P',
// // // //     img: PramodImg,
// // // //     tags: ['DevOps','K8s']
// // // //   },
// // // //   {
// // // //     id: 'astha',
// // // //     name: "Astha",
// // // //     role: "UI/UX & Product Designer",
// // // //     handle: "astha_designs",
// // // //     status: "Away",
// // // //     contactText: "Say Hi",
// // // //     initials: 'A',
// // // //     img: AsthaImg,
// // // //     tags: ['Design','Figma']
// // // //   },
// // // //   {
// // // //     id: 'venkat',
// // // //     name: "Venkat",
// // // //     role: "Head of Backend Engineering & CIO",
// // // //     handle: "venkat_backend",
// // // //     status: "Busy",
// // // //     contactText: "Contact Me",
// // // //     initials: 'V',
// // // //     img: VenkatImg,
// // // //     tags: ['Backend','Golang']
// // // //   },
// // // // ];

// // // // export default function PetSaviourProfileCarousel({items}){
// // // //   const trackRef = useRef(null);
// // // //   const viewportRef = useRef(null);

// // // //   const people = (items && items.length) ? items : TEAM;

// // // //   useEffect(()=>{
// // // //     const track = trackRef.current;
// // // //     const viewport = viewportRef.current;
// // // //     if(!track || !viewport) return;

// // // //     const setPaused = (p) => track.classList.toggle('paused', p);

// // // //     const enter = ()=> setPaused(true);
// // // //     const leave = ()=> setPaused(false);
// // // //     viewport.addEventListener('mouseenter', enter);
// // // //     viewport.addEventListener('mouseleave', leave);
// // // //     viewport.addEventListener('focusin', enter);
// // // //     viewport.addEventListener('focusout', leave);

// // // //     let pointerDown = false;
// // // //     let lastX = 0;

// // // //     const onPointerDown = (e)=>{
// // // //       pointerDown = true;
// // // //       lastX = e.clientX;
// // // //       setPaused(true);
// // // //       try{ viewport.setPointerCapture(e.pointerId); }catch(err){}
// // // //     };
// // // //     const onPointerMove = (e)=>{
// // // //       if(!pointerDown) return;
// // // //       const dx = e.clientX - lastX;
// // // //       viewport.scrollLeft -= dx;
// // // //       lastX = e.clientX;
// // // //     };
// // // //     const onPointerUp = (e)=>{
// // // //       pointerDown = false;
// // // //       try{ viewport.releasePointerCapture(e.pointerId); }catch(err){}
// // // //       setTimeout(()=> setPaused(false), 500);
// // // //     };

// // // //     viewport.addEventListener('pointerdown', onPointerDown);
// // // //     viewport.addEventListener('pointermove', onPointerMove);
// // // //     viewport.addEventListener('pointerup', onPointerUp);
// // // //     viewport.addEventListener('pointercancel', onPointerUp);

// // // //     const media = window.matchMedia('(prefers-reduced-motion: reduce)');
// // // //     if(media.matches) setPaused(true);

// // // //     function syncDuration(){
// // // //       const baseSeconds = 24;
// // // //       const vw = viewport.clientWidth || 1;
// // // //       const tw = track.scrollWidth || 1;
// // // //       const scale = Math.max(1, tw / (vw * 1.4));
// // // //       track.style.animationDuration = `${Math.round(baseSeconds * scale)}s`;
// // // //     }
// // // //     window.addEventListener('resize', syncDuration);
// // // //     setTimeout(syncDuration, 80);

// // // //     return ()=>{
// // // //       viewport.removeEventListener('mouseenter', enter);
// // // //       viewport.removeEventListener('mouseleave', leave);
// // // //       viewport.removeEventListener('focusin', enter);
// // // //       viewport.removeEventListener('focusout', leave);
// // // //       viewport.removeEventListener('pointerdown', onPointerDown);
// // // //       viewport.removeEventListener('pointermove', onPointerMove);
// // // //       viewport.removeEventListener('pointerup', onPointerUp);
// // // //       viewport.removeEventListener('pointercancel', onPointerUp);
// // // //       window.removeEventListener('resize', syncDuration);
// // // //     }
// // // //   }, [people]);

// // // //   const visible = [...people, ...people];

// // // //   return (
// // // //     <div className="w-full max-w-6xl mx-auto p-4">
// // // //       <style>{`
// // // //         /* white + orange theme */
// // // //         @keyframes ps-scroll-left { from { transform: translateX(0); } to { transform: translateX(calc(-50% - 1rem)); } }
// // // //         .ps-track{ animation: ps-scroll-left linear infinite; will-change: transform; }
// // // //         .ps-track.paused{ animation-play-state: paused !important; }

// // // //         /* subtle shine on cards */
// // // //         .ps-card::after{ content: ''; position: absolute; inset: 0; border-radius: 0.75rem; pointer-events: none; background: linear-gradient(90deg, rgba(255,255,255,0.02), rgba(255,255,255,0)); }
// // // //       `}</style>

// // // //       <div
// // // //         ref={viewportRef}
// // // //         className="ps-viewport relative overflow-hidden rounded-2xl bg-white shadow-lg p-4"
// // // //         tabIndex={0}
// // // //         aria-label="Pet Saviour team carousel — profiles">

// // // //         <div
// // // //           ref={trackRef}
// // // //           className="ps-track flex items-center gap-4"
// // // //           role="list"
// // // //         >
// // // //           {visible.map((p, idx)=>{
// // // //             const isDuplicate = idx >= people.length;
// // // //             return (
// // // //               <article
// // // //                 key={`${p.id}-${idx}`}
// // // //                 role="listitem"
// // // //                 aria-hidden={isDuplicate}
// // // //                 tabIndex={isDuplicate ? -1 : 0}
// // // //                 className="ps-card relative flex-shrink-0 w-64 sm:w-56 md:w-64 bg-white rounded-xl p-3 flex gap-3 items-center shadow-md hover:scale-[1.02] transition-transform duration-200 border border-orange-50"
// // // //               >
// // // //                 {p.img ? (
// // // //                   <img src={p.img} alt={`${p.name} avatar`} className="w-14 h-14 rounded-full object-cover flex-shrink-0 ring-2 ring-orange-400" />
// // // //                 ) : (
// // // //                   <div className="w-14 h-14 rounded-full flex items-center justify-center text-white font-semibold text-lg flex-shrink-0" style={{ background: 'linear-gradient(135deg,#fb923c,#f97316)' }}>
// // // //                     {p.initials}
// // // //                   </div>
// // // //                 )}

// // // //                 <div className="flex-1 min-w-0">
// // // //                   <div className="flex items-start justify-between gap-2">
// // // //                     <div className="min-w-0">
// // // //                       <h3 className="text-sm font-semibold text-slate-900 truncate">{p.name}</h3>
// // // //                       <p className="text-xs text-slate-500 truncate">{p.role}</p>
// // // //                     </div>
// // // //                     <span className={`text-xs font-medium px-2 py-1 rounded-full ${p.status === 'Online' || p.status === 'Available' ? 'bg-orange-100 text-orange-700' : 'bg-slate-100 text-slate-500'}`}>
// // // //                       {p.status}
// // // //                     </span>
// // // //                   </div>

// // // //                   <p className="text-xs text-slate-400 truncate mt-2">{p.tags && p.tags.join(' • ')}</p>

// // // //                   <div className="mt-3 flex gap-2">
// // // //                     <button className="text-xs px-3 py-1 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition">{p.contactText}</button>
// // // //                     <button className="text-xs px-3 py-1 rounded-full border border-orange-200 text-orange-600 hover:bg-orange-50 transition">View</button>
// // // //                   </div>
// // // //                 </div>
// // // //               </article>
// // // //             )
// // // //           })}
// // // //         </div>

// // // //       </div>

// // // //       {/* <div className="mt-3 text-xs text-slate-500">
// // // //         Tip: pass an `items` array prop to <code>PetSaviourProfileCarousel</code> with fields: <code>id,name,role,initials,img,tags,status,contactText</code> to override defaults.
// // // //       </div> */}
// // // //     </div>
// // // //   )
// // // // }



// // // import React, {useRef, useEffect} from 'react';
// // // import JastyImg from "../assets/saran.jpeg";
// // // import KrishnaImg from "../assets/krishna.jpeg";
// // // import PramodImg from "../assets/promod.png";
// // // import AsthaImg from "../assets/astha.png";
// // // import VenkatImg from "../assets/venkat.png";

// // // import "./TeamCircularGallery.css"; // optional gallery + modal styles for other parts

// // // /**
// // //  * PetSaviourProfileCarousel.jsx
// // //  * Tailwind React component for Pet Saviour project.
// // //  * Theme: white + orange
// // //  * - Auto-scrolling horizontal profile cards (infinite loop via duplication)
// // //  * - Pause on hover/focus, accessible, drag-to-scroll, responsive
// // //  * - Uses Tailwind classes and an internal <style> block for keyframes
// // //  */

// // // const TEAM = [
// // //   {
// // //     id: 'jasty',
// // //     name: "Jasty Saran",
// // //     role: "Founder & Chief Technology Officer",
// // //     handle: "jasty_saran",
// // //     status: "Online",
// // //     contactText: "Contact Me",
// // //     initials: 'JS',
// // //     img: JastyImg,
// // //     tags: ['Founder','CTO']
// // //   },
// // //   {
// // //     id: 'krishna',
// // //     name: "Krishna Yellapragada",
// // //     role: "Senior Frontend Engineer",
// // //     handle: "krishna_dev",
// // //     status: "Available",
// // //     contactText: "Message",
// // //     initials: 'KY',
// // //     img: KrishnaImg,
// // //     tags: ['Frontend','React']
// // //   },
// // //   {
// // //     id: 'pramod',
// // //     name: "Pramod",
// // //     role: "Head of DevOps & Co Founder",
// // //     handle: "pramod_ops",
// // //     status: "Online",
// // //     contactText: "Contact Me",
// // //     initials: 'P',
// // //     img: PramodImg,
// // //     tags: ['DevOps','K8s']
// // //   },
// // //   {
// // //     id: 'astha',
// // //     name: "Astha",
// // //     role: "UI/UX & Product Designer",
// // //     handle: "astha_designs",
// // //     status: "Away",
// // //     contactText: "Say Hi",
// // //     initials: 'A',
// // //     img: AsthaImg,
// // //     tags: ['Design','Figma']
// // //   },
// // //   {
// // //     id: 'venkat',
// // //     name: "Venkat",
// // //     role: "Head of Backend Engineering & CIO",
// // //     handle: "venkat_backend",
// // //     status: "Busy",
// // //     contactText: "Contact Me",
// // //     initials: 'V',
// // //     img: VenkatImg,
// // //     tags: ['Backend','Golang']
// // //   },
// // // ];

// // // export default function PetSaviourProfileCarousel({items}){
// // //   const trackRef = useRef(null);
// // //   const viewportRef = useRef(null);

// // //   const people = (items && items.length) ? items : TEAM;

// // //   useEffect(()=>{
// // //     const track = trackRef.current;
// // //     const viewport = viewportRef.current;
// // //     if(!track || !viewport) return;

// // //     const setPaused = (p) => track.classList.toggle('paused', p);

// // //     const enter = ()=> setPaused(true);
// // //     const leave = ()=> setPaused(false);
// // //     viewport.addEventListener('mouseenter', enter);
// // //     viewport.addEventListener('mouseleave', leave);
// // //     viewport.addEventListener('focusin', enter);
// // //     viewport.addEventListener('focusout', leave);

// // //     let pointerDown = false;
// // //     let lastX = 0;

// // //     const onPointerDown = (e)=>{
// // //       pointerDown = true;
// // //       lastX = e.clientX;
// // //       setPaused(true);
// // //       try{ viewport.setPointerCapture(e.pointerId); }catch(err){}
// // //     };
// // //     const onPointerMove = (e)=>{
// // //       if(!pointerDown) return;
// // //       const dx = e.clientX - lastX;
// // //       viewport.scrollLeft -= dx;
// // //       lastX = e.clientX;
// // //     };
// // //     const onPointerUp = (e)=>{
// // //       pointerDown = false;
// // //       try{ viewport.releasePointerCapture(e.pointerId); }catch(err){}
// // //       setTimeout(()=> setPaused(false), 500);
// // //     };

// // //     viewport.addEventListener('pointerdown', onPointerDown);
// // //     viewport.addEventListener('pointermove', onPointerMove);
// // //     viewport.addEventListener('pointerup', onPointerUp);
// // //     viewport.addEventListener('pointercancel', onPointerUp);

// // //     const media = window.matchMedia('(prefers-reduced-motion: reduce)');
// // //     if(media.matches) setPaused(true);

// // //     function syncDuration(){
// // //       const baseSeconds = 24;
// // //       const vw = viewport.clientWidth || 1;
// // //       const tw = track.scrollWidth || 1;
// // //       const scale = Math.max(1, tw / (vw * 1.4));
// // //       track.style.animationDuration = `${Math.round(baseSeconds * scale)}s`;
// // //     }
// // //     window.addEventListener('resize', syncDuration);
// // //     // run once after layout
// // //     const t = setTimeout(syncDuration, 80);

// // //     // CLEANUP: only remove event listeners and timeouts. Do NOT return JSX here.
// // //     return ()=>{
// // //       clearTimeout(t);
// // //       viewport.removeEventListener('mouseenter', enter);
// // //       viewport.removeEventListener('mouseleave', leave);
// // //       viewport.removeEventListener('focusin', enter);
// // //       viewport.removeEventListener('focusout', leave);
// // //       viewport.removeEventListener('pointerdown', onPointerDown);
// // //       viewport.removeEventListener('pointermove', onPointerMove);
// // //       viewport.removeEventListener('pointerup', onPointerUp);
// // //       viewport.removeEventListener('pointercancel', onPointerUp);
// // //       window.removeEventListener('resize', syncDuration);
// // //     }
// // //   }, [people]);

// // //   const visible = [...people, ...people];

// // //   return (
// // //     <div className="w-full max-w-6xl mx-auto p-4 ps-team-section">
// // //       {/* Team Heading */}
// // //       <div className="text-center mb-8">
// // //         <h2 className="text-3xl font-extrabold text-orange-600 tracking-wide uppercase">Meet Our Team</h2>
// // //         <p className="text-slate-600 text-sm mt-1 font-medium">The People Who Build PetSaviour</p>
// // //       </div>

// // //       <style>{`
// // //         /* white + orange theme */
// // //         @keyframes ps-scroll-left { from { transform: translateX(0); } to { transform: translateX(calc(-50% - 1rem)); } }
// // //         .ps-track{ animation: ps-scroll-left linear infinite; will-change: transform; }
// // //         .ps-track.paused{ animation-play-state: paused !important; }

// // //         /* subtle shine on cards */
// // //         .ps-card::after{ content: ''; position: absolute; inset: 0; border-radius: 0.75rem; pointer-events: none; background: linear-gradient(90deg, rgba(255,255,255,0.02), rgba(255,255,255,0)); }
// // //       `}</style>

// // //       <div
// // //         ref={viewportRef}
// // //         className="ps-viewport relative overflow-hidden rounded-2xl bg-white shadow-lg p-4"
// // //         tabIndex={0}
// // //         aria-label="Pet Saviour team carousel — profiles">

// // //         <div
// // //           ref={trackRef}
// // //           className="ps-track flex items-center gap-4"
// // //           role="list"
// // //         >
// // //           {visible.map((p, idx)=>{
// // //             const isDuplicate = idx >= people.length;
// // //             return (
// // //               <article
// // //                 key={`${p.id}-${idx}`}
// // //                 role="listitem"
// // //                 aria-hidden={isDuplicate}
// // //                 tabIndex={isDuplicate ? -1 : 0}
// // //                 className="ps-card relative flex-shrink-0 w-64 sm:w-56 md:w-64 bg-white rounded-xl p-3 flex gap-3 items-center shadow-md hover:scale-[1.02] transition-transform duration-200 border border-orange-50"
// // //               >
// // //                 {p.img ? (
// // //                   <img src={p.img} alt={`${p.name} avatar`} loading="lazy" className="w-14 h-14 rounded-full object-cover flex-shrink-0 ring-2 ring-orange-400" />
// // //                 ) : (
// // //                   <div className="w-14 h-14 rounded-full flex items-center justify-center text-white font-semibold text-lg flex-shrink-0" style={{ background: 'linear-gradient(135deg,#fb923c,#f97316)' }}>
// // //                     {p.initials}
// // //                   </div>
// // //                 )}

// // //                 <div className="flex-1 min-w-0">
// // //                   <div className="flex items-start justify-between gap-2">
// // //                     <div className="min-w-0">
// // //                       <h3 className="text-sm font-semibold text-slate-900 truncate">{p.name}</h3>
// // //                       <p className="text-xs text-slate-500 truncate">{p.role}</p>
// // //                     </div>
// // //                     <span className={`text-xs font-medium px-2 py-1 rounded-full ${p.status === 'Online' || p.status === 'Available' ? 'bg-orange-100 text-orange-700' : 'bg-slate-100 text-slate-500'}`}>
// // //                       {p.status}
// // //                     </span>
// // //                   </div>

// // //                   <p className="text-xs text-slate-400 truncate mt-2">{p.tags && p.tags.join(' • ')}</p>

// // //                   <div className="mt-3 flex gap-2">
// // //                     <button className="text-xs px-3 py-1 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition">{p.contactText}</button>
// // //                     <button className="text-xs px-3 py-1 rounded-full border border-orange-200 text-orange-600 hover:bg-orange-50 transition">View</button>
// // //                   </div>
// // //                 </div>
// // //               </article>
// // //             )
// // //           })}
// // //         </div>

// // //       </div>

// // //       <div className="mt-3 text-xs text-slate-500">
// // //         Tip: pass an `items` array prop to <code>PetSaviourProfileCarousel</code> with fields: <code>id,name,role,initials,img,tags,status,contactText</code> to override defaults.
// // //       </div>
// // //     </div>
// // //   )
// // // }



// // import React, { useRef, useEffect } from 'react';
// // import JastyImg from "../assets/saran.jpeg";
// // import KrishnaImg from "../assets/krishna.jpeg";
// // import PramodImg from "../assets/promod.png";
// // import AsthaImg from "../assets/astha.png";
// // import VenkatImg from "../assets/venkat.png";

// // /**
// //  * New PetSaviourProfileCarousel — Dark Neon Premium Card (like reference image)
// //  * - Full-bleed image card
// //  * - Bottom glassmorphic info bar
// //  * - Dark neon gradient overlay
// //  * - Auto-scroll, pause on hover, drag-scroll
// //  */

// // const TEAM = [
// //   { id:'jasty', name:"Jasty Saran", role:"Founder & CTO", handle:"@Jasty Saran", img:JastyImg, contactText:"Contact Me" },
// //   { id:'krishna', name:"Krishna Yellapragada", role:"Senior Frontend Engineer", handle:"@Krishna", img:KrishnaImg, contactText:"Message" },
// //   { id:'pramod', name:"Pramod", role:"Head of DevOps & Co Founder", handle:"@Pramod", img:PramodImg, contactText:"Contact Me" },
// //   { id:'astha', name:"Astha", role:"UI/UX & Product Designer", handle:"@Astha", img:AsthaImg, contactText:"Say Hi" },
// //   { id:'venkat', name:"Venkat", role:"Head of Backend Engineering & CIO", handle:"@Venkat", img:VenkatImg, contactText:"Contact Me" },
// // ];

// // export default function PetSaviourProfileCarousel({ items }){
// //   const trackRef = useRef(null);
// //   const viewportRef = useRef(null);
// //   const people = items?.length ? items : TEAM;

// //   useEffect(() => {
// //     const track = trackRef.current;
// //     const viewport = viewportRef.current;
// //     if (!track || !viewport) return;

// //     const setPaused = (p) => track.classList.toggle("paused", p);

// //     const enter = () => setPaused(true);
// //     const leave = () => setPaused(false);
// //     viewport.addEventListener("mouseenter", enter);
// //     viewport.addEventListener("mouseleave", leave);

// //     let pointerDown = false;
// //     let lastX = 0;

// //     const onPointerDown = (e) => {
// //       pointerDown = true;
// //       lastX = e.clientX;
// //       setPaused(true);
// //       try { viewport.setPointerCapture(e.pointerId); } catch {}
// //     };

// //     const onPointerMove = (e) => {
// //       if (!pointerDown) return;
// //       const dx = e.clientX - lastX;
// //       viewport.scrollLeft -= dx;
// //       lastX = e.clientX;
// //     };

// //     const onPointerUp = (e) => {
// //       pointerDown = false;
// //       try { viewport.releasePointerCapture(e.pointerId); } catch {}
// //       setTimeout(() => setPaused(false), 400);
// //     };

// //     viewport.addEventListener("pointerdown", onPointerDown);
// //     viewport.addEventListener("pointermove", onPointerMove);
// //     viewport.addEventListener("pointerup", onPointerUp);
// //     viewport.addEventListener("pointercancel", onPointerUp);

// //     function syncDuration() {
// //       const base = 28;
// //       const vw = viewport.clientWidth;
// //       const tw = track.scrollWidth;
// //       const scale = Math.max(1, tw / (vw * 1.3));
// //       track.style.animationDuration = `${Math.round(base * scale)}s`;
// //     }

// //     const t = setTimeout(syncDuration, 100);
// //     window.addEventListener("resize", syncDuration);

// //     return () => {
// //       clearTimeout(t);
// //       viewport.removeEventListener("mouseenter", enter);
// //       viewport.removeEventListener("mouseleave", leave);
// //       viewport.removeEventListener("pointerdown", onPointerDown);
// //       viewport.removeEventListener("pointermove", onPointerMove);
// //       viewport.removeEventListener("pointerup", onPointerUp);
// //       viewport.removeEventListener("pointercancel", onPointerUp);
// //       window.removeEventListener("resize", syncDuration);
// //     };
// //   }, [people]);

// //   const visible = [...people, ...people];

// //   return (
// //     <div className="w-full max-w-6xl mx-auto p-4">
// //       <style>{`
// //         @keyframes ps-scroll-left { from { transform: translateX(0); } to { transform: translateX(calc(-50%)); } }
// //         .ps-track { animation: ps-scroll-left linear infinite; }
// //         .ps-track.paused { animation-play-state: paused !important; }
// //       `}</style>

// //       <div className="text-center mb-10">
// //         <h2 className="text-4xl font-extrabold text-orange-400 tracking-wide">Meet Our Team</h2>
// //         <p className="text-slate-400 mt-1">Founders • Engineers • Designers • Innovators</p>
// //       </div>

// //       <div ref={viewportRef} className="overflow-hidden rounded-3xl p-2">
// //         <div ref={trackRef} className="ps-track flex gap-6 items-center">
// //           {visible.map((m, i) => (
// //             <div key={i} className="relative flex-shrink-0 w-80 h-[480px] rounded-3xl overflow-hidden shadow-2xl bg-black/90">
// //               {/* Full Image */}
// //               <img src={m.img} className="w-full h-full object-cover opacity-70" />

// //               {/* Dark Neon Gradient Overlay */}
// //               <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/90"></div>

// //               {/* Bottom Glass Info */}
// //               <div className="absolute bottom-4 left-4 right-4 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-4 flex items-center justify-between">
// //                 <div>
// //                   <div className="text-white font-semibold text-sm">{m.handle}</div>
// //                   <div className="text-slate-300 text-xs">{m.role}</div>
// //                 </div>
// //                 <button className="px-4 py-2 text-xs rounded-full bg-white/20 text-white border border-white/30 hover:bg-white/30 transition">
// //                   {m.contactText}
// //                 </button>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }



// import React, { useRef, useEffect } from 'react';
// import JastyImg from "../assets/saran.jpeg";
// import KrishnaImg from "../assets/krishna.jpeg";
// import PramodImg from "../assets/promod.png";
// import AsthaImg from "../assets/astha.png";
// import VenkatImg from "../assets/venkat.png";

// /**
//  * PetSaviourProfileCarousel — Polished glowing card treatment
//  * Improvements made:
//  * 1) Converted the inline <script> into React useEffect with IntersectionObserver.
//  * 2) Added animated neon/orange stroked border around the container.
//  * 3) Card hover: subtle scale, parallax tilt (pointermove), and stronger rim glow.
//  * 4) Smooth shimmer effect on the glass info bar.
//  * 5) Better accessibility: focus styles, pause on focus, reduced-motion support.
//  * 6) Kept auto-scroll, drag-to-scroll and duplication trick.
//  *
//  * Drop directly into your PetSaviour project (Tailwind available).
//  */

// const TEAM = [
//   { id:'jasty', name:"Jasty Saran", role:"Founder & CTO", handle:"@Jasty Saran", img:JastyImg, contactText:"Contact Me" },
//   { id:'krishna', name:"Krishna Yellapragada", role:"Senior Frontend Engineer", handle:"@Krishna", img:KrishnaImg, contactText:"Message" },
//   { id:'pramod', name:"Pramod", role:"Head of DevOps & Co Founder", handle:"@Pramod", img:PramodImg, contactText:"Contact Me" },
//   { id:'astha', name:"Astha", role:"UI/UX & Product Designer", handle:"@Astha", img:AsthaImg, contactText:"Say Hi" },
//   { id:'venkat', name:"Venkat", role:"Head of Backend Engineering & CIO", handle:"@Venkat", img:VenkatImg, contactText:"Contact Me" },
// ];

// export default function PetSaviourProfileCarousel({ items }){
//   const trackRef = useRef(null);
//   const viewportRef = useRef(null);
//   const cardRefs = useRef([]);
//   const people = items?.length ? items : TEAM;

//   useEffect(() => {
//     const track = trackRef.current;
//     const viewport = viewportRef.current;
//     if (!track || !viewport) return;

//     // Pause helper
//     const setPaused = (p) => track.classList.toggle('paused', p);

//     // Pause on hover & focus for accessibility
//     const enter = () => setPaused(true);
//     const leave = () => setPaused(false);
//     viewport.addEventListener('mouseenter', enter);
//     viewport.addEventListener('mouseleave', leave);
//     viewport.addEventListener('focusin', enter);
//     viewport.addEventListener('focusout', leave);

//     // Drag support
//     let pointerDown = false, lastX = 0;
//     const onPointerDown = (e) => { pointerDown = true; lastX = e.clientX; setPaused(true); try{ viewport.setPointerCapture(e.pointerId); }catch{} };
//     const onPointerMove = (e) => { if(!pointerDown) return; const dx = e.clientX - lastX; viewport.scrollLeft -= dx; lastX = e.clientX; };
//     const onPointerUp = (e) => { pointerDown = false; try{ viewport.releasePointerCapture(e.pointerId);}catch{}; setTimeout(()=>setPaused(false), 350); };
//     viewport.addEventListener('pointerdown', onPointerDown);
//     viewport.addEventListener('pointermove', onPointerMove);
//     viewport.addEventListener('pointerup', onPointerUp);
//     viewport.addEventListener('pointercancel', onPointerUp);

//     // auto duration sync
//     function syncDuration(){ const base=28; const vw=viewport.clientWidth||1; const tw=track.scrollWidth||1; const scale=Math.max(1, tw/(vw*1.3)); track.style.animationDuration = `${Math.round(base*scale)}s`; }
//     const t = setTimeout(syncDuration,120); window.addEventListener('resize', syncDuration);

//     // IntersectionObserver for card reveal
//     const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
//     let io;
//     if(!prefersReducedMotion){
//       io = new IntersectionObserver((entries)=>{
//         entries.forEach(en=>{
//           if(en.isIntersecting) en.target.classList.add('ps-card-visible');
//         });
//       }, {threshold:0.25});
//       cardRefs.current.forEach(c=> c && io.observe(c));
//     } else {
//       // if reduced motion, reveal all immediately
//       cardRefs.current.forEach(c=> c && c.classList.add('ps-card-visible'));
//     }

//     return ()=>{
//       clearTimeout(t);
//       viewport.removeEventListener('mouseenter', enter);
//       viewport.removeEventListener('mouseleave', leave);
//       viewport.removeEventListener('focusin', enter);
//       viewport.removeEventListener('focusout', leave);
//       viewport.removeEventListener('pointerdown', onPointerDown);
//       viewport.removeEventListener('pointermove', onPointerMove);
//       viewport.removeEventListener('pointerup', onPointerUp);
//       viewport.removeEventListener('pointercancel', onPointerUp);
//       window.removeEventListener('resize', syncDuration);
//       if(io) io.disconnect();
//     }
//   }, [people]);

//   // Mouse-driven tilt effect per card (uses inline handlers for simplicity)
//   function handlePointerMove(e, idx){
//     const el = cardRefs.current[idx];
//     if(!el) return;
//     const rect = el.getBoundingClientRect();
//     const px = (e.clientX - rect.left) / rect.width; // 0-1
//     const py = (e.clientY - rect.top) / rect.height;
//     const rotY = (px - 0.5) * 8; // degrees
//     const rotX = (0.5 - py) * 6;
//     el.style.transform = `perspective(800px) rotateY(${rotY}deg) rotateX(${rotX}deg) translateZ(6px)`;
//   }
//   function handlePointerLeave(idx){ const el = cardRefs.current[idx]; if(!el) return; el.style.transform = ''; }

//   const visible = [...people, ...people];

//   return (
//     <div className="w-full max-w-6xl mx-auto p-4 relative">
//       <style>{`
//         /* container neon border */
//         .ps-container {
//           position: relative; padding: 28px; border-radius: 28px;
//           background: linear-gradient(180deg, rgba(0,0,0,0.6), rgba(0,0,0,0.35));
//           box-shadow: 0 10px 60px rgba(0,0,0,0.6);
//         }
//         .ps-container::before{ content:''; position:absolute; inset:-2px; border-radius:32px; padding:2px; background: linear-gradient(90deg, rgba(255,165,55,0.25), rgba(255,255,255,0.08)); -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0); mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0); pointer-events:none; animation: stroke-rotate 6s linear infinite; }
//         @keyframes stroke-rotate{ 0%{transform: rotate(0deg)} 100%{transform: rotate(360deg)} }

//         /* scrolling */
//         @keyframes ps-scroll-left{ from{ transform: translateX(0)} to{ transform: translateX(calc(-50%)) } }
//         .ps-track{ display:flex; gap:28px; align-items:center; flex-wrap:nowrap; animation: ps-scroll-left linear infinite; }
//         .ps-track.paused{ animation-play-state: paused !important }

//         /* card base */
//         .ps-card { flex: 0 0 320px; width: 320px; height: 520px; box-sizing: border-box; border-radius: 22px; overflow: hidden; position: relative; background: #0b0b0c; box-shadow: 0 18px 30px rgba(2,2,2,0.6); transition: transform .35s cubic-bezier(.2,.9,.2,1), box-shadow .35s; transform-origin: center; }
//         .ps-card img{ width:100%; height:100%; object-fit:cover; display:block; }

//         /* overlay & rim */
//         .ps-overlay{ position:absolute; inset:0; background: linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.8) 100%); }
//         .ps-rim{ position:absolute; inset:0; pointer-events:none; box-shadow: inset 0 0 120px rgba(255,165,55,0.06), inset 0 10px 60px rgba(0,0,0,0.5); }

//         /* glass info bar */
//         .ps-info{ position:absolute; left:18px; right:18px; bottom:18px; border-radius:16px; padding:18px; display:flex; align-items:center; justify-content:space-between; gap:12px; background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01)); border: 1px solid rgba(255,255,255,0.06); backdrop-filter: blur(8px); box-shadow: 0 8px 30px rgba(2,2,2,0.6); }
//         .ps-info .left{ color: #fff }
//         .ps-info .name{ font-weight:700; font-size:15px }
//         .ps-info .role{ font-size:12px; color: rgba(255,255,255,0.75); margin-top:4px }

//         /* shimmer on button */
//         .ps-btn{ position:relative; padding:8px 14px; border-radius:999px; background: linear-gradient(90deg, rgba(255,140,0,0.98), rgba(255,90,0,0.95)); color:#fff; font-weight:600; border: none; box-shadow: 0 6px 18px rgba(255,140,0,0.16); overflow:hidden; }
//         .ps-btn::after{ content:''; position:absolute; left:-60%; top:0; width:40%; height:100%; background: linear-gradient(90deg, rgba(255,255,255,0.3), rgba(255,255,255,0.06), rgba(255,255,255,0.0)); transform: skewX(-18deg); transition: transform .8s cubic-bezier(.2,.9,.2,1); }
//         .ps-btn:hover::after{ transform: translateX(200%) skewX(-18deg); }

//         /* reveal */
//         .ps-card-scale{ transform: translateY(12px) scale(.995); opacity:0; transition: transform .7s cubic-bezier(.2,.9,.2,1), opacity .6s; }
//         .ps-card-visible{ transform: none; opacity:1; }

//         /* hover emphasis */
//         .ps-card:focus-within, .ps-card:hover{ box-shadow: 0 30px 60px rgba(2,2,2,0.75); transform: translateY(-6px) scale(1.02); }

//         /* responsive */
//         @media (max-width:900px){ .ps-track{ gap: 18px } .ps-card{ width: 280px; height:420px } }

//       `}</style>

//       <div className="ps-container z-10">
//         <div className="text-center mb-8">
//           <h2 className="text-3xl font-extrabold text-orange-400">Meet Our Team</h2>
//           <p className="text-slate-300 mt-1">Founders • Engineers • Designers • Innovators</p>
//         </div>

//         <div ref={viewportRef} className="overflow-hidden rounded-3xl">
//           <div ref={trackRef} className="ps-track" role="list" aria-label="team carousel">
//             {visible.map((m, i) => (
//               <div
//                 key={i}
//                 role="listitem"
//                 ref={el => cardRefs.current[i] = el}
//                 tabIndex={0}
//                 className="ps-card ps-card-scale"
//                 onPointerMove={(e)=> handlePointerMove(e, i)}
//                 onPointerLeave={()=> handlePointerLeave(i)}
//               >
//                 <img src={m.img} alt={`${m.name} photo`} loading="lazy" />
//                 <div className="ps-overlay" aria-hidden="true"></div>
//                 <div className="ps-rim" aria-hidden="true"></div>

//                 <div className="ps-info">
//                   <div className="left">
//                     <div className="name">{m.handle}</div>
//                     <div className="role">{m.role}</div>
//                   </div>
//                   <div>
//                     <button className="ps-btn" aria-label={`${m.contactText} ${m.name}`}>{m.contactText}</button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



import React from "react";

import JastyImg from "../assets/saran.jpeg";
import KrishnaImg from "../assets/krishna.jpeg";
import PramodImg from "../assets/promod.png";
import AsthaImg from "../assets/astha.png";
import VenkatImg from "../assets/venkat.png";

const TEAM = [
  {
    id: "jasty",
    name: "Jasty Saran",
    role: "Founder & CTO",
    img: JastyImg,
  },
  {
    id: "pramod",
    name: "Pramod",
    role: "Head of DevOps & Co Founder",
    img: PramodImg,
  },
  
  {
    id: "venkat",
    name: "Venkat",
    role: "Head of Engineering & CIO",
    img: VenkatImg,
  },
   {
    id: "astha",
    name: "Astha Chouhan",
    role: "UI/UX & Product Designer",
    img: AsthaImg,
  },
  {
    id: "krishna",
    name: "Krishna Yellapragada",
    role: "Product Engineer",
    img: KrishnaImg,
  }
];

function TeamCard({ name, role, img }) {
  return (
    <div
      className="
        relative
        w-[260px] h-[300px]
        rounded-2xl
        bg-gradient-to-br from-[#FFD6BD] to-[#FFB88C]
        shadow-md
        overflow-hidden
        transition-all duration-300 ease-out
        hover:-translate-y-2
        hover:shadow-xl
      "
    >
      {/* Image */}
      <img
        src={img}
        alt={name}
        className="w-full h-full object-cover object-top"
      />

      {/* Name strip */}
      <div
        className="
          absolute bottom-3 left-3 right-3
          bg-white/80 backdrop-blur-md
          rounded-xl
          py-2 px-3
          text-center
        "
      >
        <p className="text-sm font-semibold text-[#1f2a44] leading-tight">
          {name}
        </p>
        <p className="text-xs text-gray-600">{role}</p>
      </div>
    </div>
  );
}

export default function AboutUs() {
  return (
    <section className="relative py-20 px-6 bg-[#FFF4EC]">
      {/* Background gradient waves */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFF7F1] via-[#FFE2CF] to-[#FFF7F1] opacity-70"></div>

      <div className="relative max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1f2a44]">
            Meet Our Team
          </h2>
          <p className="mt-3 text-sm text-gray-600 max-w-xl mx-auto">
            Meet the humans behind PetSaviour—pet lovers, problem solvers, and
            builders working together to create better experiences for pets and
            their parents.
          </p>
        </div>

        {/* Cards layout */}
        <div className="flex flex-col items-center gap-10">
          {/* Top row */}
          <div className="flex flex-wrap justify-center gap-6">
            <TeamCard {...TEAM[0]} />
            <TeamCard {...TEAM[1]} />
            <TeamCard {...TEAM[2]} />
          </div>

          {/* Bottom row (centered, closer) */}
          <div className="flex justify-center gap-6 -mt-4">
            <TeamCard {...TEAM[3]} />
            <TeamCard {...TEAM[4]} />
          </div>
        </div>
      </div>
    </section>
  );
}
