import React from 'react';

/** Google-Maps style multi-colour location pin, drawn as vectors. */
export function GoogleMapsPin() {
  return (
    <svg
      viewBox="0 0 100 128"
      className="h-[calc(var(--u)*22)] w-auto"
      role="img"
      aria-label="Google Maps location pin">
      
      {/* tail */}
      <path d="M22 70c8 18 28 38 28 54 0-16 20-36 28-54Z" fill="#34a853" />
      {/* quadrants */}
      <path d="M50 50V12A38 38 0 0 0 12 50Z" fill="#4285f4" />
      <path d="M50 50V12a38 38 0 0 1 38 38Z" fill="#ea4335" />
      <path d="M50 50h38a38 38 0 0 1-38 38Z" fill="#fbbc05" />
      <path d="M50 50v38a38 38 0 0 1-38-38Z" fill="#34a853" />
      {/* centre hole */}
      <circle cx="50" cy="50" r="15" fill="#ffffff" />
    </svg>);

}