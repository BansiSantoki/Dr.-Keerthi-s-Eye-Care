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
    <img
      src="/call.png"
      alt="Phone"
      className="blueIcon"
    />
  );
}


function GlobeIcon() {
  return (
    <img
      src="/web.png"
      alt="Website"
      className="blueIcon"
    />
  );
}


function MapsLogo() {
  return (
    <img
      src="/map.png"
      alt="Google Maps"
      className="mapsLogo"
    />
  );
}


function FacebookIcon() {
  return (
    <img
      src="/facebook.png"
      alt="Facebook"
      className="facebookLogo"
    />
  );
}


function InstagramIcon() {
  return (
    <img
      src="/insagram.png"
      alt="Instagram"
      className="instagramLogo"
    />
  );
}


function YoutubeIcon() {
  return (
    <img
      src="/youtube.png"
      alt="YouTube"
      className="youtubeLogo"
    />
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

                <div className="locationLabel">
                  LOCATION
                </div>

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

            <a
              href={links.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="mapLink"
            >
              <img
                src="/location.png"
                alt="Open Google Maps"
                className="mapImage"
              />
            </a>

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
