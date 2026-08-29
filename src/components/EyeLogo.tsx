import React from 'react';

/** Vector recreation of the clinic's lashed-eye mark. */
export function EyeLogo() {
  return (
    <svg
      viewBox="0 0 220 90"
      className="h-[calc(var(--u)*13)] w-auto"
      role="img"
      aria-label="Dr. Keerthi's Eye Care eye logo">
      
      {/* upper lash flourish */}
      <path
        d="M6 62C34 26 78 6 118 6c34 0 62 14 84 34-24-14-52-22-82-22-42 0-82 18-114 44Z"
        fill="#0a0a0a" />
      
      {/* small inner upper stroke */}
      <path
        d="M52 40C74 24 100 16 128 16c-26 4-50 12-70 26Z"
        fill="#0a0a0a" />
      
      {/* lower lash flourish */}
      <path
        d="M14 66c30 18 66 26 100 22 26-3 48-13 66-28-20 12-42 19-66 21-34 3-70-4-100-15Z"
        fill="#0a0a0a" />
      
      {/* left tail */}
      <path d="M6 62c-4 8-5 16-2 24 4-9 9-17 14-24Z" fill="#0a0a0a" />
      {/* right tail */}
      <path d="M202 40c8 2 14 7 18 14-8-5-15-9-24-11Z" fill="#0a0a0a" />

      {/* iris */}
      <circle cx="118" cy="45" r="25" fill="#0b2265" />
      <circle cx="118" cy="45" r="20" fill="#1f5fd0" />
      <circle cx="118" cy="45" r="12" fill="#0b2265" />
      <circle cx="118" cy="45" r="6" fill="#050a1c" />
      <circle cx="110" cy="36" r="5" fill="#ffffff" />
      <circle cx="127" cy="55" r="2.5" fill="#ffffff" opacity="0.8" />
    </svg>);

}