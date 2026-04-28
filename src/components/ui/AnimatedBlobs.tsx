"use client"

import type React from "react"

/**
 * AnimatedBlobs — composant 21st.dev (exact)
 * 4 blobs en mix-blend-mode: screen sur fond blanc → effet arc-en-ciel
 */
export function AnimatedBlobs() {
  const blobStyle: React.CSSProperties = {
    // @ts-expect-error CSS custom property
    "--border-radius": "115% 140% 145% 110% / 125% 140% 110% 125%",
    "--border-width": "5vmin",
    aspectRatio: "1",
    display: "block",
    gridArea: "stack",
    backgroundSize: "calc(100% + var(--border-width) * 2)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    border: "var(--border-width) solid transparent",
    borderRadius: "var(--border-radius)",
    WebkitMaskImage:
      "linear-gradient(transparent, transparent), linear-gradient(black, white)",
    maskImage:
      "linear-gradient(transparent, transparent), linear-gradient(black, white)",
    WebkitMaskClip: "padding-box, border-box",
    maskClip: "padding-box, border-box",
    WebkitMaskComposite: "destination-in",
    maskComposite: "intersect",
    mixBlendMode: "screen" as const,
    height: "80vmin",
    filter: "blur(1vmin)",
  }

  const blobs = [
    {
      backgroundColor: "#0074D9",
      backgroundImage: "linear-gradient(#0074D9, #39CCCC, #0074D9)",
      transform: "rotate(30deg) scale(1.03)",
    },
    {
      backgroundColor: "#FF4136",
      backgroundImage: "linear-gradient(#FF4136, #FF851B, #FF4136)",
      transform: "rotate(60deg) scale(0.95)",
    },
    {
      backgroundColor: "#3D9970",
      backgroundImage: "linear-gradient(#3D9970, #01FF70, #3D9970)",
      transform: "rotate(90deg) scale(0.97)",
    },
    {
      backgroundColor: "#B10DC9",
      backgroundImage: "linear-gradient(#B10DC9, #85144B, #B10DC9)",
      transform: "rotate(120deg) scale(1.02)",
    },
  ]

  return (
    <div style={{ display: "grid", gridTemplateAreas: "'stack'" }}>
      <div
        style={{
          gridTemplateAreas: "'stack'",
          gridArea: "stack",
          display: "grid",
          animation: "blobSpin 5s linear infinite",
        }}
      >
        {blobs.map((blob, index) => (
          <span
            key={index}
            style={{
              ...blobStyle,
              ...blob,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes blobSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}
