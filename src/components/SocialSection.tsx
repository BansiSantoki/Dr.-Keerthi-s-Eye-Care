import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { LINKS } from '../data/links';

type Social = {
  name: string;
  href: string;
  icon: React.ReactNode;
  buttonClass: string;
};

const SOCIALS: Social[] = [
{
  name: 'Facebook',
  href: LINKS.facebook,
  icon:
  <span className="flex h-[calc(var(--u)*8)] w-[calc(var(--u)*8)] items-center justify-center rounded-full bg-[#1877f2] text-[calc(var(--u)*4.6)] text-white">
        <FaFacebookF />
      </span>,

  buttonClass: 'bg-[#1877f2] hover:bg-[#0f5fd0]'
},
{
  name: 'Instagram',
  href: LINKS.instagram,
  icon:
  <span className="flex h-[calc(var(--u)*8)] w-[calc(var(--u)*8)] items-center justify-center rounded-[calc(var(--u)*2.4)] bg-[linear-gradient(45deg,#f9ce34,#ee2a7b,#6228d7)] text-[calc(var(--u)*5)] text-white">
        <FaInstagram />
      </span>,

  buttonClass:
  'bg-[linear-gradient(90deg,#f9ce34,#ee2a7b,#6228d7)] hover:opacity-90'
},
{
  name: 'YouTube',
  href: LINKS.youtube,
  icon:
  <span className="flex h-[calc(var(--u)*8)] w-[calc(var(--u)*11)] items-center justify-center rounded-[calc(var(--u)*2)] bg-[#ff0000] text-[calc(var(--u)*5.5)] text-white">
        <FaYoutube />
      </span>,

  buttonClass: 'bg-[#ff0000] hover:bg-[#cc0000]'
}];


export function SocialSection() {
  return (
    <section aria-label="Connect with us" className="mt-[calc(var(--u)*3)]">
      <div className="flex items-center gap-[calc(var(--u)*1.5)]">
        <span className="h-[calc(var(--u)*1.4)] w-[calc(var(--u)*1.4)] rounded-full bg-navy" />
        <span className="h-[1.5px] flex-1 bg-navy" />
        <h2 className="rounded-[calc(var(--u)*1.2)] bg-[#2b4f86] px-[calc(var(--u)*3)] py-[calc(var(--u)*1.2)] text-[calc(var(--u)*3.4)] font-700 leading-none tracking-[0.08em] text-white">
          CONNECT WITH US
        </h2>
        <span className="h-[1.5px] flex-1 bg-navy" />
        <span className="h-[calc(var(--u)*1.4)] w-[calc(var(--u)*1.4)] rounded-full bg-navy" />
      </div>

      <ul className="mt-[calc(var(--u)*2.5)] grid grid-cols-3 gap-[calc(var(--u)*2.5)]">
        {SOCIALS.map((social) =>
        <li key={social.name} className="flex">
            <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${social.name}`}
            className="flex w-full flex-col items-center rounded-[calc(var(--u)*2.4)] border border-hairline px-[calc(var(--u)*2)] py-[calc(var(--u)*2.2)] transition-colors duration-150 ease-out hover:border-royal">
            
              {social.icon}
              <span className="mt-[calc(var(--u)*1.6)] text-[calc(var(--u)*3.6)] font-600 leading-none text-navy">
                {social.name}
              </span>
              <span
              className={`mt-[calc(var(--u)*1.6)] w-full rounded-[calc(var(--u)*1.2)] py-[calc(var(--u)*1.2)] text-center text-[calc(var(--u)*3)] font-700 leading-none text-white transition-opacity duration-150 ease-out ${social.buttonClass}`}>
              
                Tap to Open
              </span>
            </a>
          </li>
        )}
      </ul>
    </section>);

}