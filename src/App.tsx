const links = {
  website: "https://www.drkeerthiseyecare.com/lander",
  maps: "https://maps.app.goo.gl/sbxDWJd1F4TLJFLeA?g_st=awb",
  phone: "tel:+917670811451",

  facebook:
    "https://www.facebook.com/people/Dr-Keerthi-Bavandla/61576515153183/?rdid=7A2nM5jg4pduGsZQ&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1YDoc18tNL%2F",

  instagram:
    "https://www.instagram.com/drkeerthibavandla",

  youtube:
    "https://www.youtube.com/@Dr.KeerthiBavandla",
};


function LocationIcon() {
  return (
    <svg viewBox="0 0 64 64" className="blueIcon">
      <circle cx="32" cy="32" r="30" fill="#0754c9" />

      <path
        d="M32 13c-10 0-18 8-18 18 0 13 18 25 18 25s18-12 18-25c0-10-8-18-18-18z"
        fill="white"
      />

      <circle cx="32" cy="30" r="6" fill="#0754c9" />
    </svg>
  );
}


function PhoneIcon() {
  return (
    <svg viewBox="0 0 64 64" className="blueIcon">
      <circle cx="32" cy="32" r="30" fill="#0754c9" />

      <path
        d="M20 14l9 7-5 9c3 6 7 10 13 13l9-5 7 9-5 7c-3 4-10 2-16-1-10-5-18-13-23-23-3-6-5-13-1-16l12-6z"
        fill="white"
      />
    </svg>
  );
}


function GlobeIcon() {
  return (
    <svg viewBox="0 0 64 64" className="blueIcon">
      <circle cx="32" cy="32" r="30" fill="#0754c9" />

      <circle
        cx="32"
        cy="32"
        r="18"
        fill="none"
        stroke="white"
        strokeWidth="2.5"
      />

      <path
        d="M14 32h36M32 14c7 7 7 29 0 36M32 14c-7 7-7 29 0 36"
        fill="none"
        stroke="white"
        strokeWidth="2"
      />

      <path
        d="M18 22c8 3 20 3 28 0M18 42c8-3 20-3 28 0"
        fill="none"
        stroke="white"
        strokeWidth="2"
      />
    </svg>
  );
}


function MapsLogo() {
  return (
    <svg viewBox="0 0 120 145" className="mapsLogo">

      <path
        d="M60 4C31 4 8 27 8 56c0 37 52 82 52 82s52-45 52-82C112 27 89 4 60 4z"
        fill="#20a65a"
      />

      <path
        d="M60 10C35 10 16 30 16 55c0 20 17 40 44 64 27-24 44-44 44-64 0-25-19-45-44-45z"
        fill="#34a853"
      />

      <path
        d="M29 79c9-12 22-19 39-20 13 0 25 4 35 11-7 18-23 35-43 53-14-13-25-25-31-37z"
        fill="#fbbc04"
      />

      <path
        d="M67 58c13 1 25 5 36 12-5 12-15 24-29 38-7-14-10-31-7-50z"
        fill="#4285f4"
      />

      <path
        d="M37 31c7-10 16-16 27-18 12 5 21 12 28 23-13-6-28-9-43-5z"
        fill="#ea4335"
      />

      <circle
        cx="60"
        cy="55"
        r="16"
        fill="white"
        opacity="0.9"
      />

      <circle
        cx="60"
        cy="55"
        r="9"
        fill="#34a853"
      />

    </svg>
  );
}


function FacebookIcon() {
  return (
    <div className="facebookLogo">
      <span>f</span>
    </div>
  );
}


function InstagramIcon() {
  return (
    <div className="instagramLogo">
      <div className="instagramInner">
        <span />
      </div>
    </div>
  );
}


function YoutubeIcon() {
  return (
    <div className="youtubeLogo">
      <span>▶</span>
    </div>
  );
}


export function App() {
  return (
    <main className="page">

      <div className="card">

        {/* ================= HEADER ================= */}

        <header className="header">

          <div className="eyeLogoWrap">
            <img
              src="/eye-logo.png.png"
              alt="Dr. Keerthi's Eye Care"
              className="eyeLogo"
            />
          </div>

          <h1>
            Dr. Keerthi's Eye Care
          </h1>

          <div className="titleLine">
            <span />

            <em>
              Expert Care for a Clear Vision
            </em>

            <span />
          </div>

        </header>


        {/* ================= LOCATION + MAP ================= */}

        <section className="infoBox">

          <div className="locationInfo">

            <div className="locationHeading">

              <LocationIcon />

              <div>

                <h2>
                  Locate us at
                </h2>

                <p>
                  4th Floor, JJ Makuta Building,
                  <br />

                  Metro Pillar Number: C963,
                  <br />

                  At Metro Station NGRI,
                  <br />

                  Habsiguda Main Rd,
                  <br />

                  Hyderabad, 500007
                </p>

              </div>

            </div>


            {/* PHONE */}

            <a
              href={links.phone}
              className="contactItem"
            >

              <PhoneIcon />

              <div>

                <strong>
                  767 0811 451
                </strong>

                <small>
                  Tap to Call
                </small>

              </div>

            </a>


            {/* WEBSITE */}

            <a
              href={links.website}
              target="_blank"
              rel="noopener noreferrer"
              className="contactItem website"
            >

              <GlobeIcon />

              <div>

                <strong>
                  www.drkeerthiseyecare.com
                </strong>

                <small>
                  Tap to Visit Website
                </small>

              </div>

            </a>

          </div>


          {/* ================= MAP ================= */}

          <div className="mapBox">

            <div className="mapTitle">
              Google Maps
            </div>

            <div className="mapLogoWrap">
              <MapsLogo />
            </div>

            <a
              href={links.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="mapButton"
            >

              <span className="smallPin">
                ●
              </span>

              Open in Google Maps

            </a>

            <p>
              Tap to open location
              <br />
              in Google Maps
            </p>

          </div>

        </section>


        {/* ================= CONNECT ================= */}

        <div className="connectWrapper">

          <span className="connectDot left" />

          <div className="connectTitle">
            CONNECT WITH US
          </div>

          <span className="connectDot right" />

        </div>


        {/* ================= SOCIALS ================= */}

        <section className="socials">

          {/* FACEBOOK */}

          <a
            href={links.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="socialCard"
          >

            <FacebookIcon />

            <strong>
              Facebook
            </strong>

            <span className="socialButton facebookButton">
              Tap to Open
            </span>

          </a>


          {/* INSTAGRAM */}

          <a
            href={links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="socialCard"
          >

            <InstagramIcon />

            <strong>
              Instagram
            </strong>

            <span className="socialButton instagramButton">
              Tap to Open
            </span>

          </a>


          {/* YOUTUBE */}

          <a
            href={links.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="socialCard"
          >

            <YoutubeIcon />

            <strong>
              YouTube
            </strong>

            <span className="socialButton youtubeButton">
              Tap to Open
            </span>

          </a>

        </section>


        {/* ================= FOOTER BANNER ================= */}

        <footer className="footer">

          <img
            src="/image-removebg-preview.png"
            alt="Better Vision Better Life"
            className="footerBanner"
          />

        </footer>


        {/* ================= TRUSTED ================= */}

        <div className="trusted">
          TRUSTED CARE FOR YOUR VISION
        </div>

      </div>

    </main>
  );
}