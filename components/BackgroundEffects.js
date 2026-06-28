"use client";

import { useEffect } from "react";

export default function BackgroundEffects() {
  useEffect(() => {
    const root = document.documentElement;

    function updatePointer(event) {
      root.style.setProperty("--pointer-x", `${event.clientX}px`);
      root.style.setProperty("--pointer-y", `${event.clientY}px`);
    }

    window.addEventListener("pointermove", updatePointer);
    return () => window.removeEventListener("pointermove", updatePointer);
  }, []);

  return (
    <div className="ambientLayer" aria-hidden="true">
      <div className="cursorGlow" />
      <div className="ambientGrid" />
      <div className="lightBeam beamOne" />
      <div className="lightBeam beamTwo" />
    </div>
  );
}
