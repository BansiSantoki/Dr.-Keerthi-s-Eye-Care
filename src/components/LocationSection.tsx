import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaGlobe } from 'react-icons/fa';
import { GoogleMapsPin } from './GoogleMapsPin';
import { CLINIC, LINKS } from '../data/links';

function Badge({ children }: {children: React.ReactNode;}) {
  return (
    <span className="flex h-[calc(var(--u)*9)] w-[calc(var(--u)*9)] shrink-0 items-center justify-center rounded-full bg-royal text-[calc(var(--u)*4.4)] text-white">
      {children}
    </span>);

}

export function LocationSection() {
  return (
    <section
      aria-label="Location and contact"
      className="mt-[calc(var(--u)*3)] rounded-[calc(var(--u)*3)] border border-hairline px-[calc(var(--u)*3)] py-[calc(var(--u)*3)]">
      
      <div className="grid grid-cols-[1.35fr_1fr] gap-[calc(var(--u)*3)]">
        {/* LEFT */}
        <div className="flex flex-col">
          <a
            href={LINKS.maps}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-[calc(var(--u)*2.5)] transition-colors duration-150 ease-out hover:text-royal">
            
            <Badge>
              <FaMapMarkerAlt />
            </Badge>
            <span className="block">
              <span className="block text-[calc(var(--u)*5)] font-700 leading-none text-royal">
                Locate us at
              </span>
              <span className="mt-[calc(var(--u)*1.4)] block text-[calc(var(--u)*3.6)] font-500 leading-[1.45] text-navy">
                {CLINIC.address.map((line) =>
                <span key={line} className="block">
                    {line}
                  </span>
                )}
              </span>
            </span>
          </a>

          <span className="my-[calc(var(--u)*2.4)] ml-[calc(var(--u)*11.5)] h-px bg-hairline" />

          <a
            href={LINKS.phone}
            className="flex items-center gap-[calc(var(--u)*2.5)]"
            aria-label={`Call ${CLINIC.phoneDisplay}`}>
            
            <Badge>
              <FaPhoneAlt />
            </Badge>
            <span className="block">
              <span className="block text-[calc(var(--u)*6.2)] font-800 leading-none text-royal">
                {CLINIC.phoneDisplay}
              </span>
              <span className="mt-[calc(var(--u)*1)] block text-[calc(var(--u)*3.4)] font-500 leading-none text-navy">
                Tap to Call
              </span>
            </span>
          </a>

          <span className="my-[calc(var(--u)*2.4)] ml-[calc(var(--u)*11.5)] h-px bg-hairline" />

          <a
            href={LINKS.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-[calc(var(--u)*2.5)]">
            
            <Badge>
              <FaGlobe />
            </Badge>
            <span className="block">
              <span className="block text-[calc(var(--u)*3.9)] font-700 leading-none text-royal underline decoration-royal/40 underline-offset-2">
                {CLINIC.websiteDisplay}
              </span>
              <span className="mt-[calc(var(--u)*1)] block text-[calc(var(--u)*3.4)] font-500 leading-none text-navy">
                Tap to Visit Website
              </span>
            </span>
          </a>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col items-center border-l border-dashed border-[#9db6e8] pl-[calc(var(--u)*3)]">
          <span className="w-full rounded-[calc(var(--u)*2)] bg-[#2b4f86] py-[calc(var(--u)*1.8)] text-center text-[calc(var(--u)*4.6)] font-700 leading-none text-white">
            Google Maps
          </span>

          <a
            href={LINKS.maps}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open clinic location in Google Maps"
            className="mt-[calc(var(--u)*1.5)] flex flex-col items-center">
            
            <GoogleMapsPin />
            <span className="mt-[calc(var(--u)*1.5)] flex w-full items-center justify-center gap-[calc(var(--u)*1.5)] rounded-[calc(var(--u)*2)] bg-navy px-[calc(var(--u)*2)] py-[calc(var(--u)*1.7)] text-[calc(var(--u)*3.5)] font-600 leading-none text-white transition-colors duration-150 ease-out hover:bg-royal">
              <FaMapMarkerAlt className="text-[calc(var(--u)*3.6)]" />
              Open in Google Maps
            </span>
            <span className="mt-[calc(var(--u)*1.8)] block text-center text-[calc(var(--u)*3.3)] font-500 leading-[1.4] text-navy">
              Tap to open location
              <br />
              in Google Maps
            </span>
          </a>
        </div>
      </div>
    </section>);

}