import { CLINIC, LINKS } from '../data/links';

function IconBadge({ children }: { children: React.ReactNode }) {
  return <span className="contactIconBadge">{children}</span>;
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 64 64" className="contactIcon" aria-hidden="true">
      <circle cx="32" cy="32" r="30" fill="#0d55c7" />
      <path
        d="M32 13c-10 0-18 8-18 18 0 13 18 25 18 25s18-12 18-25c0-10-8-18-18-18z"
        fill="#ffffff"
      />
      <circle cx="32" cy="30" r="6" fill="#0d55c7" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 64 64" className="contactIcon" aria-hidden="true">
      <circle cx="32" cy="32" r="30" fill="#0d55c7" />
      <path
        d="M22 18c1.7-1.7 4.5-1.7 6.2 0l4.3 4.3c1.5 1.5 1.8 3.9.7 5.7l-2.2 3.7c2.7 5 6.4 8.7 11.4 11.4l3.7-2.2c1.8-1.1 4.2-.8 5.7.7l4.3 4.3c1.7 1.7 1.7 4.5 0 6.2l-2.8 2.8c-1.9 1.9-4.7 2.7-7.4 2.1-7.8-1.7-14.7-5.9-20.4-11.5-5.7-5.7-9.8-12.6-11.5-20.4-.6-2.7.2-5.5 2.1-7.4L22 18Z"
        fill="#ffffff"
      />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 64 64" className="contactIcon" aria-hidden="true">
      <circle cx="32" cy="32" r="30" fill="#0d55c7" />
      <circle cx="32" cy="32" r="18" fill="none" stroke="#ffffff" strokeWidth="4" />
      <path d="M14 32h36" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
      <path d="M32 14c6 5 9 11 9 18s-3 13-9 18c-6-5-9-11-9-18s3-13 9-18Z" fill="none" stroke="#ffffff" strokeWidth="4" />
      <path d="M32 14c-6 5-9 11-9 18s3 13 9 18c6-5 9-11 9-18s-3-13-9-18Z" fill="none" stroke="#ffffff" strokeWidth="4" />
    </svg>
  );
}

function Divider() {
  return <span className="contactDivider" aria-hidden="true" />;
}

export function LocationSection() {
  return (
    <section className="contactCard" aria-label="Location and contact">
      <div className="contactGrid">
        <div className="contactColumn contactColumnLeft">
          <div className="contactLead">
            <IconBadge>
              <LocationIcon />
            </IconBadge>

            <div className="contactCopy">
              <h2 className="sectionHeading">Locate us at</h2>
              <address className="contactAddress">
                {CLINIC.address.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </address>
            </div>
          </div>

          <Divider />

          <a className="contactRow" href={LINKS.phone} aria-label={`Call ${CLINIC.phoneDisplay}`}>
            <IconBadge>
              <PhoneIcon />
            </IconBadge>

            <span className="contactCopy">
              <strong className="contactPrimary">{CLINIC.phoneDisplay}</strong>
              <span className="contactSecondary">Tap to Call</span>
            </span>
          </a>

          <Divider />

          <a
            className="contactRow"
            href={LINKS.website}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open clinic website"
          >
            <IconBadge>
              <GlobeIcon />
            </IconBadge>

            <span className="contactCopy">
              <strong className="contactPrimary contactPrimaryLink">{CLINIC.websiteDisplay}</strong>
              <span className="contactSecondary">Tap to Visit Website</span>
            </span>
          </a>
        </div>

        <div className="contactColumn contactColumnRight">
          <a
            className="mapsTopButton"
            href={LINKS.maps}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open clinic location in Google Maps"
          >
            Google Maps
          </a>

          <a
            className="mapsVisualLink"
            href={LINKS.maps}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open clinic location in Google Maps"
          >
            <img src="/location.png" alt="Google Maps location pin" className="mapsVisual" />
          </a>

          <a
            className="mapsActionButton"
            href={LINKS.maps}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open clinic location in Google Maps"
          >
            Open in Google Maps
          </a>

          <p className="mapsHelpText">
            Tap to open location
            <br />
            in Google Maps
          </p>
        </div>
      </div>
    </section>
  );
}