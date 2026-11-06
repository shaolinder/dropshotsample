import { useState } from "react";
import { Link } from "react-router-dom";
import { PageHero, useTitle } from "../components/Shell";
import { brand, milestones, storyMedia } from "../data";

function PhotoGrid({ photos, label, onOpen }) {
  return (
    <div className="gallery">
      {photos.map((src, index) => (
        <button
          key={src}
          type="button"
          onClick={() => onOpen({ photos, index, label })}
          aria-label={`Open ${label} photo ${index + 1}`}
        >
          <img src={src} alt="" />
        </button>
      ))}
    </div>
  );
}

export default function Story() {
  useTitle("Our Story");
  const [photo, setPhoto] = useState(null);

  return (
    <>
      <PageHero
        kicker={`Since ${brand.founded}`}
        title="Opened in a hard year, and still washing"
        text="The pandemic, Typhoon Odette, then shop after shop across Mandaue and Cebu."
        image={storyMedia.hero}
      />

      <section className="section">
        <div className="wrap story-copy">
          <p className="kicker">Our story</p>
          <h2>A story of staying open</h2>
          <p>
            Dropshot Laundry opened in {brand.founded}, while the COVID-19 pandemic was still shutting daily
            life down. Families and essential workers needed clothes that were clean. The founders ran the
            shop the way they had learned in corporate work: a set method, and a result the customer could
            count on.
          </p>
          <p>
            In December 2021, Super Typhoon Odette hit the region. Power, communication, and clean water went
            out, and a lot of services stopped. Dropshot had already planned for a stoppage like that. The shop
            found another source of water and kept the machines running. It was the laundry still open in the
            area, for regular customers and for people in nearby communities.
          </p>
          <p>
            {brand.parent} is the company behind the shops. The aim from here is a laundry service that wastes
            less: energy-efficient machines, and products chosen to leave a smaller footprint.
          </p>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <p className="kicker">Our milestone</p>
          <h2 className="section-title">The journey chart, 2021 to 2026</h2>
          <button
            className="poster"
            type="button"
            aria-label="Open the journey chart"
            onClick={() => setPhoto({ photos: [storyMedia.milestone], index: 0, label: "Journey chart" })}
          >
            <img
              src={storyMedia.milestone}
              alt="Dropshot Laundry journey chart, from the Cabancalan shop in July 2021 to the Cabancalan self-service area in March 2026."
            />
          </button>
          <div className="timeline milestone-list">
            {milestones.map((step) => (
              <article key={step.title}>
                <p className="kicker">{step.when}</p>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="kicker">Our summer outing 2025</p>
          <h2 className="section-title">A day out with the team</h2>
          <PhotoGrid photos={storyMedia.summer} label="Summer outing 2025" onOpen={setPhoto} />
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <p className="kicker">Our Christmas party 2024</p>
          <h2 className="section-title">Moments from the party</h2>
          <button
            className="letter"
            type="button"
            aria-label="Open the 2025 New Year greeting"
            onClick={() => setPhoto({ photos: [storyMedia.letter], index: 0, label: "New Year greeting" })}
          >
            <img
              src={storyMedia.letter}
              alt="New Year 2025 greeting from the president of Dropshot Ventures Corp. to family, staff, and customers."
            />
          </button>
          <PhotoGrid photos={storyMedia.christmas} label="Christmas party 2024" onOpen={setPhoto} />
          <div className="center-cta">
            <Link className="btn btn-solid" to="/franchise">
              See the franchise
            </Link>
          </div>
        </div>
      </section>

      {photo && (
        <div className="modal-back" role="presentation" onClick={() => setPhoto(null)}>
          <figure className="lightbox" onClick={(event) => event.stopPropagation()}>
            <img src={photo.photos[photo.index]} alt="" />
            <button className="modal-x" type="button" aria-label="Close photo" onClick={() => setPhoto(null)}>
              ×
            </button>
          </figure>
        </div>
      )}
    </>
  );
}
