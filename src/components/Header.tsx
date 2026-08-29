import React from 'react';
import { EyeLogo } from './EyeLogo';
import { CLINIC } from '../data/links';

function Rule() {
  return (
    <span className="flex flex-1 items-center gap-[calc(var(--u)*0.8)]">
      <span className="h-[1.5px] flex-1 bg-navy" />
      <span className="h-[calc(var(--u)*1.2)] w-[calc(var(--u)*1.2)] rounded-full bg-navy" />
    </span>);

}

export function Header() {
  return (
    <header className="flex flex-col items-center">
      <EyeLogo />
      <h1 className="mt-[calc(var(--u)*1)] whitespace-nowrap font-serif text-[calc(var(--u)*8.2)] font-600 leading-none text-navy">
        {CLINIC.name}
      </h1>
      <div className="mt-[calc(var(--u)*2)] flex w-full items-center gap-[calc(var(--u)*2)]">
        <Rule />
        <p className="whitespace-nowrap font-serif text-[calc(var(--u)*5)] font-500 italic leading-none text-navy">
          {CLINIC.tagline}
        </p>
        <span className="flex flex-1 flex-row-reverse items-center gap-[calc(var(--u)*0.8)]">
          <span className="h-[1.5px] flex-1 bg-navy" />
          <span className="h-[calc(var(--u)*1.2)] w-[calc(var(--u)*1.2)] rounded-full bg-navy" />
        </span>
      </div>
    </header>);

}