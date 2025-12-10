// src/ui/3d-card/index.jsx
"use client";

import React, { useRef, useCallback, useEffect } from "react";
import "./styles.css";

/**
 * CardContainer
 * Simple wrapper (provides spacing / font if needed)
 */
export function CardContainer({ children, className = "" }) {
  return <div className={`rd-card-container ${className}`.trim()}>{children}</div>;
}

/**
 * CardBody
 * - Manages pointer movement and sets CSS vars --tiltX and --tiltY (in deg).
 * - Accepts className which usually contains tailwind classes for background / padding.
 */
export function CardBody({ children, className = "", maxTilt = 15, resetDelay = 250 }) {
  const ref = useRef(null);
  const resetTimer = useRef(null);

  const onPointerMove = useCallback(
    (e) => {
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width; // 0..1
      const py = (e.clientY - rect.top) / rect.height; // 0..1

      const tiltY = (px - 0.5) * (maxTilt * 2); // rotateY
      const tiltX = (0.5 - py) * (maxTilt * 2); // rotateX

      el.style.setProperty("--tiltX", `${tiltX.toFixed(2)}deg`);
      el.style.setProperty("--tiltY", `${tiltY.toFixed(2)}deg`);
      el.style.setProperty("--pointer-x", `${(px * 100).toFixed(2)}%`);
      el.style.setProperty("--pointer-y", `${(py * 100).toFixed(2)}%`);
      el.classList.add("hovered");

      // clear any pending reset
      if (resetTimer.current) {
        clearTimeout(resetTimer.current);
        resetTimer.current = null;
      }
    },
    [maxTilt]
  );

  const onPointerLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;

    // smooth reset
    el.style.setProperty("--tiltX", `0deg`);
    el.style.setProperty("--tiltY", `0deg`);
    el.classList.remove("hovered");

    // ensure any child transitions complete
    if (resetTimer.current) clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => {
      resetTimer.current = null;
    }, resetDelay);
  }, [resetDelay]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--tiltX", `0deg`);
    el.style.setProperty("--tiltY", `0deg`);
    el.style.setProperty("--pointer-x", `50%`);
    el.style.setProperty("--pointer-y", `50%`);
    return () => {
      if (resetTimer.current) clearTimeout(resetTimer.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`rd-card-body ${className}`.trim()}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      onMouseMove={onPointerMove}
      onMouseLeave={onPointerLeave}
      // support touch (basic)
      onTouchMove={(e) => {
        const touch = e.touches[0];
        if (touch) onPointerMove(touch);
      }}
      onTouchEnd={onPointerLeave}
      style={{
        // use CSS variables to apply global transform on body if needed
        transform: `perspective(1200px) rotateX(var(--tiltX, 0deg)) rotateY(var(--tiltY, 0deg))`
      }}
      role="group"
      aria-label="3d card body"
    >
      {children}
    </div>
  );
}

/**
 * CardItem
 * - Renders as given 'as' or default 'div'
 * - Accepts translateZ (number px), rotateX, rotateZ, translateX props to set base transforms
 * - Will combine those with --tiltX and --tiltY set on parent for richer parallax.
 */
export function CardItem({
  as = "div",
  children,
  className = "",
  translateZ = 0,
  translateX = 0,
  rotateX = 0,
  rotateZ = 0,
  style = {},
  ...rest
}) {
  const Tag = as;
  // ensure numeric -> px/deg strings
  const tz = typeof translateZ === "number" ? `${translateZ}px` : translateZ;
  const tx = typeof translateX === "number" ? `${translateX}px` : translateX;
  const rx = typeof rotateX === "number" ? `${rotateX}deg` : rotateX;
  const rz = typeof rotateZ === "number" ? `${rotateZ}deg` : rotateZ;

  // Combine parent tilt vars with base transform.
  // We use calc() so browser computes with CSS variables.
  const combinedTransform = `
    translateZ(${tz})
    translateX(${tx})
    rotateX(calc(var(--tiltX, 0deg) + ${rx}))
    rotateY(calc(var(--tiltY, 0deg)))
    rotateZ(${rz})
  `;

  return (
    <Tag
      className={`rd-card-item ${className}`.trim()}
      style={{
        transform: combinedTransform,
        WebkitTransform: combinedTransform,
        transformStyle: "preserve-3d",
        WebkitTransformStyle: "preserve-3d",
        ...style
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
