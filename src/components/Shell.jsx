import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import Logo from "./Logo";
import { brand, branches } from "../data";

const about = [
  { to: "/our-story", label: "Our Story" },
  { to: "/who-we-are", label: "Who We Are" },
  { to: "/where-we-are", label: "Where We Are" },
  { to: "/contact", label: "Contact Us" },
  { to: "/careers", label: "Careers" },
  { to: "/faq", label: "FAQ's" },
];

export default function Shell() {
  const location = useLocation();
  const [menu, setMenu] = useState(false);
  const [openDrop, setOpenDrop] = useState(null);
  const [franchiseOpen, setFranchiseOpen] = useState(false);
  const [cookies, setCookies] = useState(true);

  useEffect(() => {
    setMenu(false);
    setOpenDrop(null);
  }, [location.pathname]);

  useEffect(() => {
    const seen = sessionStorage.getItem("dropshot-franchise");
    if (!seen) setFranchiseOpen(true);
    const saved = localStorage.getItem("dropshot-cookies");
    const ignored = sessionStorage.getItem("dropshot-cookies-dismissed");
    setCookies(Boolean(saved || ignored));
  }, []);

  useEffect(() => {
    document.body.style.overflow = menu || franchiseOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menu, franchiseOpen]);

  useEffect(() => {
    if (!menu) return undefined;
    const place = () => {
      const header = document.querySelector(".site-header");
      if (!header) return;
      const bottom = Math.ceil(header.getBoundingClientRect().bottom);
      document.documentElement.style.setProperty("--drawer-top", `${bottom}px`);
    };
    place();
    window.addEventListener("resize", place);
    return () => window.removeEventListener("resize", place);
  }, [menu]);

  const toggleMenu = () => {
    const header = document.querySelector(".site-header");
    if (header) {
      const bottom = Math.ceil(header.getBoundingClientRect().bottom);
      document.documentElement.style.setProperty("--drawer-top", `${bottom}px`);
    }
    setMenu((open) => !open);
  };

  const closeFranchise = () => {
    sessionStorage.setItem("dropshot-franchise", "1");
    setFranchiseOpen(false);
  };

  const chooseCookies = (value) => {
    localStorage.setItem("dropshot-cookies", value);
    setCookies(true);
  };

  const dismissCookies = () => {
    sessionStorage.setItem("dropshot-cookies-dismissed", "1");
    setCookies(true);
  };

  return (
    <>
      <a className="skip" href="#content">
        Skip to content
      </a>
      <div className="announce">
        <Link to="/branches/cabancalan-self-service">{brand.announcement}</Link>
      </div>
      <header className="site-header">
        <div className="nav-wrap">
          <nav className="nav-left" aria-label="Primary">
            <NavLink to="/" end>
              Home
            </NavLink>
            <NavLink to="/pickup">Pick-Up Delivery</NavLink>
            <Drop
              label="Branches"
              open={openDrop === "branches"}
              onToggle={() => setOpenDrop(openDrop === "branches" ? null : "branches")}
            >
              {branches.map((branch) => (
                <Link key={branch.slug} to={`/branches/${branch.slug}`} onClick={() => setOpenDrop(null)}>
                  {branch.short}
                </Link>
              ))}
            </Drop>
          </nav>
          <Logo />
          <nav className="nav-right" aria-label="Company">
            <NavLink to="/franchise">Franchise</NavLink>
            <Drop
              label="About Us"
              open={openDrop === "about"}
              onToggle={() => setOpenDrop(openDrop === "about" ? null : "about")}
            >
              {about.map((item) => (
                <Link key={item.to} to={item.to} onClick={() => setOpenDrop(null)}>
                  {item.label}
                </Link>
              ))}
            </Drop>
            <NavLink to="/reviews">Reviews</NavLink>
          </nav>
          <button
            className="burger"
            type="button"
            aria-expanded={menu}
            aria-label={menu ? "Close menu" : "Open menu"}
            onClick={toggleMenu}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {menu && (
        <div className="drawer">
          <div className="drawer-col">
            <Link to="/">Home</Link>
            <Link to="/pickup">Pick-Up Delivery</Link>
            <Link to="/franchise">Franchise</Link>
            <Link to="/reviews">Reviews</Link>
            <p>About Us</p>
            {about.map((item) => (
              <Link key={item.to} className="sub" to={item.to}>
                {item.label}
              </Link>
            ))}
          </div>
          <div className="drawer-col">
            <p>Branches</p>
            {branches.map((branch) => (
              <Link key={branch.slug} className="sub" to={`/branches/${branch.slug}`}>
                {branch.short}
              </Link>
            ))}
          </div>
        </div>
      )}

      <main id="content">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="footer-grid">
          <div>
            <Logo compact />
            <p className="fine">A subsidiary of {brand.parent}.</p>
            <p className="fine">Fresh, folded, and ready to wear.</p>
          </div>
          <div>
            <h2>Visit</h2>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/pickup">Pick-Up Delivery</Link>
              </li>
              <li>
                <Link to="/franchise">Franchise</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              {about.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
              <li>
                <Link to="/reviews">Reviews</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2>Talk to us</h2>
            <ul>
              {brand.booking.map((phone) => (
                <li key={phone.tel}>
                  <a href={`tel:${phone.tel}`}>{phone.display}</a>
                </li>
              ))}
              <li>
                <a href={`mailto:${brand.email}`}>{brand.email}</a>
              </li>
            </ul>
            <div className="social-row">
              {brand.socials.map((social) => (
                <a key={social.name} href={social.href} target="_blank" rel="noreferrer">
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        <p className="copyright">
          © {new Date().getFullYear()} {brand.legal}. All rights reserved.
        </p>
      </footer>

      <div className="callbar">
        <a href={`tel:${brand.booking[0].tel}`}>Call</a>
        <Link to="/pickup">Book pick-up</Link>
      </div>

      {franchiseOpen && (
        <div className="modal-back" role="presentation" onClick={closeFranchise}>
          <div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="franchise-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button className="modal-x" type="button" aria-label="Close" onClick={closeFranchise}>
              ×
            </button>
            <Logo compact />
            <h2 id="franchise-title">Open for franchise</h2>
            <p>
              Want a laundry shop in Cebu? {brand.parent} packages the Dropshot counter, the machines,
              and the way the shops already run.
            </p>
            <Link className="btn btn-solid" to="/franchise" onClick={closeFranchise}>
              Know more
            </Link>
          </div>
        </div>
      )}

      {!cookies && (
        <aside className="cookie">
          <button className="cookie-x" type="button" aria-label="Close" onClick={dismissCookies}>
            ×
          </button>
          <h2>This website uses cookies.</h2>
          <p>We use them to understand traffic and keep the site usable.</p>
          <div className="cookie-actions">
            <button className="btn btn-line" type="button" onClick={() => chooseCookies("no")}>
              Decline
            </button>
            <button className="btn btn-solid" type="button" onClick={() => chooseCookies("ok")}>
              Accept
            </button>
          </div>
        </aside>
      )}
    </>
  );
}

function Drop({ label, open, onToggle, children }) {
  return (
    <div className={`drop ${open ? "is-open" : ""}`}>
      <button type="button" aria-expanded={open} onClick={onToggle}>
        {label}
        <span aria-hidden="true">▾</span>
      </button>
      {open && <div className="drop-panel">{children}</div>}
    </div>
  );
}

export function PageHero({ kicker, title, text, image, position }) {
  return (
    <section className={position ? "page-hero page-hero-sign" : "page-hero"}>
      {image && (
        <img
          className="page-hero-photo"
          src={image}
          alt=""
          style={position ? { objectPosition: position } : undefined}
        />
      )}
      <div className="page-hero-shade" />
      <div className="wrap">
        {kicker && <p className="kicker light">{kicker}</p>}
        <h1>{title}</h1>
        {text && <p className="lede">{text}</p>}
      </div>
    </section>
  );
}

export function useTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} · Dropshot Laundry` : "Dropshot Laundry";
  }, [title]);
}
