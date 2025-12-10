// src/components/AboutUsGallery.jsx
import React, { useMemo, useRef, useState } from 'react';
import CircularGallery from './CircularGallery'; // your WebGL gallery
import ProfileCard from './ProfileCard';         // your component
import ProfileModal from './ProfileModal';
import './AboutUsGallery.css';

// team avatars - make sure these imports exist
import JastyImg from '../assets/saran.jpeg';
import KrishnaImg from '../assets/krishna.jpeg';
import PramodImg from '../assets/promod.png';
import AsthaImg from '../assets/astha.png';
import VenkatImg from '../assets/venkat.png';

const TEAM = [
  { id: 'jasty', name: 'Jasty Saran', title: 'Founder & CTO', avatar: JastyImg },
  { id: 'krishna', name: 'Krishna Yellapragada', title: 'Senior Frontend Engineer', avatar: KrishnaImg },
  { id: 'pramod', name: 'Pramod', title: 'Head of DevOps & Co-Founder', avatar: PramodImg },
  { id: 'astha', name: 'Astha', title: 'UI/UX & Product Designer', avatar: AsthaImg },
  { id: 'venkat', name: 'Venkat', title: 'Head of Backend Engineering & CIO', avatar: VenkatImg }
];

// Build items array for CircularGallery (it duplicates internally for wrap-around)
const buildItems = (team) =>
  team.map((t) => ({ image: t.avatar, text: t.name }));

export default function AboutUsGallery({
  bend = 3,
  borderRadius = 0.05,
  textColor = '#ffffff',
  font = 'bold 30px Figtree',
  scrollSpeed = 2,
  scrollEase = 0.05
}) {
  const galleryRef = useRef(null);
  const containerRef = useRef(null);
  const [selected, setSelected] = useState(null);

  // create doubled items (CircularGallery already doubles, but we pass original set)
  const items = useMemo(() => buildItems(TEAM), []);

  // When user clicks a hotspot (index refers to TEAM array), open modal with that member
  const onSelect = (index) => {
    const member = TEAM[index % TEAM.length];
    setSelected(member);
  };

  return (
    <section className="ps-about-gallery">
      <h2 className="ps-gallery-title">Meet Our Team</h2>
      <div className="ps-gallery-frame" ref={containerRef}>
        <CircularGallery
          ref={galleryRef}
          items={items}
          bend={bend}
          textColor={textColor}
          borderRadius={borderRadius}
          font={font}
          scrollSpeed={scrollSpeed}
          scrollEase={scrollEase}
        />

        {/* Hotspot row: horizontally centered, each hotspot maps to one TEAM member */}
        <div className="ps-gallery-hotspots" aria-hidden="false">
          {TEAM.map((m, i) => (
            <button
              key={m.id}
              type="button"
              className="ps-hotspot"
              onClick={() => onSelect(i)}
              title={`View ${m.name}`}
            />
          ))}
        </div>
      </div>

      <ProfileModal open={!!selected} onClose={() => setSelected(null)}>
        {selected && (
          <div style={{ width: 380, maxWidth: '90vw' }}>
            <ProfileCard
              name={selected.name}
              title={selected.title}
              handle={selected.name.toLowerCase().replace(/\s+/g, '_')}
              status="Online"
              contactText="Contact Me"
              avatarUrl={selected.avatar}
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => console.log('Contact clicked', selected.name)}
            />
          </div>
        )}
      </ProfileModal>
    </section>
  );
}
