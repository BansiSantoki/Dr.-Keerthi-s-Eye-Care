import { LINKS } from '../data/links';

type Social = {
  name: string;
  href: string;
  iconSrc: string;
  iconAlt: string;
};

const SOCIALS: Social[] = [
{
  name: 'Facebook',
  href: LINKS.facebook,
  iconSrc: '/facebook.png',
  iconAlt: 'Facebook'
},
{
  name: 'Instagram',
  href: LINKS.instagram,
  iconSrc: '/insagram.png',
  iconAlt: 'Instagram'
},
{
  name: 'YouTube',
  href: LINKS.youtube,
  iconSrc: '/youtube.png',
  iconAlt: 'YouTube'
}];


function ConnectSeparator() {
  return (
    <div className="connectSeparator" aria-label="Connect with us">
      <span className="connectSeparatorLine" aria-hidden="true" />
      <span className="connectSeparatorDot" aria-hidden="true" />
      <span className="connectSeparatorPill">CONNECT WITH US</span>
      <span className="connectSeparatorDot" aria-hidden="true" />
      <span className="connectSeparatorLine" aria-hidden="true" />
    </div>
  );
}

export function SocialSection() {
  return (
    <section className="socialSection" aria-label="Connect with us">
      <ConnectSeparator />

      <ul className="socialGrid">
        {SOCIALS.map((social) => (
          <li key={social.name} className="socialCardWrap">
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${social.name}`}
              className="socialCard"
            >
              <span className="socialIconShell">
                <img src={social.iconSrc} alt={social.iconAlt} className="socialIcon" />
              </span>

              <span className="socialName">{social.name}</span>

              <span className="socialButton">Tap to Open</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}