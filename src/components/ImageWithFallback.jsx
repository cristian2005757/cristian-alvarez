"use client";

import { useState } from "react";

export default function ImageWithFallback({
  src,
  sources,
  alt,
  className = "",
  fallbackClassName = "",
  fallbackText = "Imagen no disponible",
}) {
  const [error, setError] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const urls = sources && sources.length > 0 ? sources : [src];
  const currentSrc = urls[currentIndex];

  const handleError = () => {
    if (currentIndex < urls.length - 1) {
      setCurrentIndex((i) => i + 1);
    } else {
      setError(true);
    }
  };

  if (error || !currentSrc) {
    return (
      <div
        className={`flex items-center justify-center bg-zinc-800/50 text-zinc-500 text-sm ${fallbackClassName}`}
      >
        {fallbackText}
      </div>
    );
  }

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      onError={handleError}
      loading="lazy"
    />
  );
}
