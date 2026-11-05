import { useState } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import { useTitle } from "../components/Shell";
import { brand, branches, clients, gallery, servicePhotos, services, telHref } from "../data";

export default function Home() {
  useTitle("");
  const [photo, setPhoto] = useState(null);

  return (
    <>
      <Hero />
      <nav className="ticker" aria-label="Social media">
        {brand.socials.map((social) => (
          <a key={social.name} href={social.href} target="_blank" rel="noreferrer">
            {social.name}
          </a>
        ))}
      </nav>

      <section className="section">
        <div className="wrap">
          <p className="kicker">Our services</p>
          <h2 className="section-title">Professional laundry you can hand off</h2>
          <div className="service-grid">
            {services.map((service) => (
              <figure key={service.slug} className="service-figure">
                <Link
                  className="service-card"
                  to={service.href || `/services/${service.slug}`}
                  style={{ backgroundImage: `url(${servicePhotos[service.slug]})` }}
                >
                  <span>{service.name}</span>
                </Link>
                <figcaption>{service.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <p className="kicker">Our clients</p>
          <h2 className="section-title">Whoever is tired of the hamper</h2>
          <ul className="client-grid">
            {clients.map((client) => (
              <li key={client}>{client}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="kicker">Our shops</p>
          <h2 className="section-title">Seven counters across Mandaue and Cebu</h2>
          <div className="branch-grid">
            {branches.map((branch) => (
              <article key={branch.slug} className="branch-card">
                <img className="branch-shot" src={branch.image} alt="" />
                <p className="kind">{branch.kind}</p>
                <h3>✦ {branch.name} ✦</h3>
                <p>{branch.tagline}</p>
                <p className="address">{branch.address}</p>
                <ul>
                  {branch.phones.map((phone) => (
                    <li key={phone}>
                      <a href={telHref(phone)}>{phone}</a>
                    </li>
                  ))}
                </ul>
                <Link className="text-link" to={`/branches/${branch.slug}`}>
                  Branch details
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <p className="kicker light">A subsidiary of {brand.parent}</p>
          <h2>Fresh and clean, every load.</h2>
          <p>
            Dropshot started in {brand.founded}, when staying home made a reliable laundry shop matter.
            The shops still run that way: machines that finish the job, and people who fold it properly.
          </p>
          <Link className="btn btn-light" to="/our-story">
            Our story
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="kicker">Service gallery</p>
          <h2 className="section-title">Wash, press, fold</h2>
          <p className="note">Photos show the kind of work. They are not pictures of a specific branch.</p>
          <div className="gallery">
            {gallery.map((src, index) => (
              <button key={src} type="button" onClick={() => setPhoto(index)} aria-label={`Open photo ${index + 1}`}>
                <img src={src} alt="" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {photo !== null && (
        <div className="modal-back" role="presentation" onClick={() => setPhoto(null)}>
          <figure className="lightbox" onClick={(event) => event.stopPropagation()}>
            <img src={gallery[photo]} alt="" />
            <button className="modal-x" type="button" aria-label="Close photo" onClick={() => setPhoto(null)}>
              ×
            </button>
          </figure>
        </div>
      )}
    </>
  );
}
