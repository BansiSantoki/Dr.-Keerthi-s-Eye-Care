import React from 'react';

function HeartEyeIcon() {
  return (
    <svg
      viewBox="0 0 100 92"
      className="h-[calc(var(--u)*13)] w-auto"
      role="img"
      aria-label="Caring for your eyes">
      
      <path
        d="M50 86C30 70 8 54 8 33 8 19 19 8 32 8c8 0 14 4 18 10 4-6 10-10 18-10 13 0 24 11 24 25 0 21-22 37-42 53Z"
        fill="none"
        stroke="#ffffff"
        strokeWidth="4" />
      
      <path
        d="M26 44c7-9 16-13 24-13s17 4 24 13c-7 9-16 13-24 13s-17-4-24-13Z"
        fill="#ffffff" />
      
      <circle cx="50" cy="44" r="8" fill="#0b2265" />
      <circle cx="50" cy="44" r="3.5" fill="#25aee0" />
    </svg>);

}

function DotColumn() {
  return (
    <span className="flex flex-col gap-[calc(var(--u)*1.2)]">
      {[0, 1, 2, 3].map((row) =>
      <span key={row} className="flex gap-[calc(var(--u)*1.2)]">
          {[0, 1].map((col) =>
        <span
          key={col}
          className="h-[calc(var(--u)*0.8)] w-[calc(var(--u)*0.8)] rounded-full bg-white/35" />

        )}
        </span>
      )}
    </span>);

}

export function Footer() {
  return (
    <footer className="mt-[calc(var(--u)*3)]">
      <div className="flex items-center justify-between rounded-[calc(var(--u)*2.4)] bg-navy px-[calc(var(--u)*2.5)] py-[calc(var(--u)*2.2)]">
        <DotColumn />
        <HeartEyeIcon />
        <div className="flex-1 text-center">
          <p className="text-[calc(var(--u)*5.4)] font-800 leading-none tracking-[0.01em] text-white">
            BETTER VISION; BETTER LIFE
          </p>
          <p className="mt-[calc(var(--u)*1.6)] text-[calc(var(--u)*3.8)] font-700 leading-none tracking-[0.06em] text-sky">
            WE CARE FOR YOUR EYES
          </p>
        </div>
        <DotColumn />
      </div>

      <p className="mt-[calc(var(--u)*2.5)] rounded-[calc(var(--u)*1.6)] bg-[#dbeafe] py-[calc(var(--u)*1.8)] text-center text-[calc(var(--u)*3.6)] font-700 leading-none tracking-[0.05em] text-navy">
        TRUSTED CARE FOR YOUR VISION
      </p>
    </footer>);

}