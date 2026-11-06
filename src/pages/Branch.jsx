import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PageHero, useTitle } from "../components/Shell";
import { brand, findBranch, mapsHref, telHref } from "../data";

function mapEmbed(address) {
  return `https://maps.google.com/maps?q=${encodeURIComponent(address)}&z=16&output=embed`;
}

export default function Branch() {
  const { slug } = useParams();
  const branch = findBranch(slug);
  useTitle(branch ? branch.name : "Branch");
  const [photo, setPhoto] = useState(null);

  if (!branch) {
    return (
      <section className="section">
        <div className="wrap prose">
          <h1>That branch is not listed.</h1>
          <Link to="/where-we-are">See all shops</Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <PageHero kicker={branch.city} title={branch.name} text={branch.tagline} image={branch.image} />
      <section className="section">
        <div className="wrap service-list">
          <article className="service-row">
            <img src={branch.servicesImage} alt="" />
            <div>
              <h2>Services</h2>
              <p>{branch.services}</p>
            </div>
          </article>
          <article className="service-row">
            <img src={branch.techImage} alt="" />
            <div>
              <h2>Machines</h2>
              <p>{branch.tech}</p>
            </div>
          </article>
        </div>
      </section>
      <section className="section alt">
        <div className="wrap">
          <p className="kicker">Shop location</p>
          <h2 className="section-title">Visit during these hours</h2>
          <article className="place">
            <iframe title={`Map of ${branch.name}`} src={mapEmbed(branch.address)} loading="lazy" />
            <div className="place-body">
              <p className="kind">{branch.kind}</p>
              <p className="address">{branch.address}</p>
              <ul>
                {branch.hours.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <ul>
                {branch.phones.map((phone) => (
                  <li key={phone}>
                    <a href={telHref(phone)}>{phone}</a>
                    {phone === brand.serviceDesk ? " (service desk)" : ""}
                  </li>
                ))}
              </ul>
              <p>
                <a href={`mailto:${branch.email}`}>{branch.email}</a>
              </p>
              <div className="card-actions">
                <a className="text-link" href={mapsHref(branch.address)} target="_blank" rel="noreferrer">
                  Get directions
                </a>
                <a className="text-link" href={brand.serviceWhatsapp} target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <p className="kicker">Gallery</p>
          <h2 className="section-title">Pick-up and delivery</h2>
          <div className="gallery">
            {branch.gallery.map((src, index) => (
              <button
                key={src}
                type="button"
                onClick={() => setPhoto(index)}
                aria-label={`Open photo ${index + 1}`}
              >
                <img src={src} alt="" />
              </button>
            ))}
          </div>
        </div>
      </section>
      {branch.video && (
        <section className="section alt">
          <div className="wrap">
            <p className="kicker">Video</p>
            <h2 className="section-title">{branch.videoTitle}</h2>
            <div className="video-frame">
              <iframe
                src={branch.video}
                title={branch.videoTitle}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      )}
      <section className="section">
        <div className="wrap center-cta">
          <Link className="btn btn-solid" to="/franchise">
            See the franchise
          </Link>
        </div>
      </section>
      {photo !== null && (
        <div className="modal-back" role="presentation" onClick={() => setPhoto(null)}>
          <figure className="lightbox" onClick={(event) => event.stopPropagation()}>
            <img src={branch.gallery[photo]} alt="" />
            <button className="modal-x" type="button" aria-label="Close photo" onClick={() => setPhoto(null)}>
              ×
            </button>
          </figure>
        </div>
      )}
    </>
  );
}
