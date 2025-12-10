// src/components/TeamCircularGallery.jsx
import React, { useRef, useEffect, useState, useCallback } from "react";
import ProfileCard from "./ProfileCard";
import "./TeamCircularGallery.css";

/**
 * TeamCircularGallery
 * - team: array of members { name, title, avatarUrl, handle, status, contactText }
 * - radius: number (px)
 * - cardScale: base scale for cards
 * - onSelect(member): callback when a card is clicked
 */
export default function TeamCircularGallery({
  team = [],
  radius = 380,
  cardScale = 0.78,
  onSelect = null
}) {
  const containerRef = useRef(null);
  const rafRef = useRef(null);

  // rotation & velocity (for dragging / wheel inertia)
  const rotationRef = useRef(0);
  const velocityRef = useRef(0);
  const pointer = useRef({ down: false, x: 0, lastX: 0, moved: false });

  // responsive radius computed from container width
  const [computedRadius, setComputedRadius] = useState(radius);

  const friction = 0.92;

  // compute radius responsively
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handleResize = () => {
      const w = el.clientWidth || window.innerWidth;
      const r = Math.min(Math.max(w * 0.36, 200), 720);
      setComputedRadius(r);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // pointer/wheel handlers
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onDown = (e) => {
      pointer.current.down = true;
      pointer.current.moved = false;
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      pointer.current.x = x;
      pointer.current.lastX = x;
      velocityRef.current = 0;
    };

    const onMove = (e) => {
      if (!pointer.current.down) return;
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      const dx = x - pointer.current.lastX;
      pointer.current.lastX = x;
      if (Math.abs(x - pointer.current.x) > 4) pointer.current.moved = true;

      // convert dx to rotation
      const pxToRad = (dx / (computedRadius || radius)) * 0.8;
      rotationRef.current += pxToRad;
      velocityRef.current = pxToRad;
    };

    const onUp = () => {
      pointer.current.down = false;
    };

    const onWheel = (e) => {
      const delta = e.deltaY || e.wheelDelta || -e.detail;
      const pxToRad = (delta / (computedRadius || radius)) * 0.015;
      velocityRef.current += pxToRad;
    };

    // mouse
    el.addEventListener("mousedown", onDown);
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseup", onUp);

    // touch
    el.addEventListener("touchstart", onDown, { passive: true });
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("touchend", onUp);

    // wheel
    el.addEventListener("wheel", onWheel, { passive: true });

    return () => {
      el.removeEventListener("mousedown", onDown);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);

      el.removeEventListener("touchstart", onDown);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onUp);

      el.removeEventListener("wheel", onWheel);
    };
  }, [computedRadius, radius]);

  // animation loop: position cards around ring
  useEffect(() => {
    const step = () => {
      // inertia when not dragging
      if (!pointer.current.down) {
        rotationRef.current += velocityRef.current;
        velocityRef.current *= friction;
        if (Math.abs(velocityRef.current) < 0.00001) velocityRef.current = 0;
      }

      const container = containerRef.current;
      if (container) {
        const cards = container.querySelectorAll(".tcg-card");
        const n = Math.max(cards.length, 1);
        const baseAngle = (Math.PI * 2) / n;

        cards.forEach((cardEl, i) => {
          const angle = rotationRef.current + i * baseAngle;
          const x = Math.cos(angle) * computedRadius;
          const y = Math.sin(angle) * (computedRadius * 0.18);
          const depth = (Math.cos(angle) + 1) / 2;
          const scale = cardScale * (0.72 + 0.36 * depth);
          const zIndex = Math.round(depth * 100);

          cardEl.style.transform = `translate3d(${x}px, ${y}px, 0px) scale(${scale})`;
          cardEl.style.zIndex = `${zIndex}`;
          cardEl.style.opacity = `${0.6 + 0.4 * depth}`;
          // pointer-events remain active
        });
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [computedRadius, cardScale, radius]);

  // click handler (ignore click if user dragged)
  const handleCardClick = useCallback(
    (member, e) => {
      if (pointer.current.moved) return; // treated as drag
      if (onSelect) onSelect(member);
    },
    [onSelect]
  );

  return (
    <div className="tcg-root">
      <div className="tcg-stage">
        <div className="tcg-ring" ref={containerRef} aria-hidden={false}>
          {team.map((m, i) => (
            <div
              key={i}
              className="tcg-card"
              onClick={(e) => handleCardClick(m, e)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleCardClick(m, e);
              }}
            >
              <ProfileCard
                name={m.name}
                title={m.title}
                handle={m.handle}
                status={m.status}
                contactText={m.contactText ?? "Contact"}
                avatarUrl={m.avatarUrl}
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
                className="tcg-profilecard"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
