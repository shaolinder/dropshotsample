import { Link } from "react-router-dom";
import { PageHero, useTitle } from "../components/Shell";
import { areas, branches, mapsHref, telHref } from "../data";

const order = [
  "banilad",
  "banilad-self-service",
  "cabancalan",
  "cabancalan-self-service",
  "lahug",
  "maguikay",
  "sm-seaside",
];

const places = order.map((slug) => branches.find((branch) => branch.slug === slug)).filter(Boolean);

function mapEmbed(address) {
  return `https://maps.google.com/maps?q=${encodeURIComponent(address)}&z=16&output=embed`;
}

export default function Locations() {
  useTitle("Where We Are");
  return (
    <>
      <PageHero
        kicker="Where we are"
        title="Seven shops in Mandaue and Cebu City"
        text="Each counter has its own hours. Most open at 7:00 AM. Lahug and SM Seaside follow a different clock."
      />
      <figure className="area-map">
        <img
          src="/where/map.png"
          alt="Map of Dropshot Laundry shops in Banilad, Maguikay, Lahug, and SM Seaside, across Mandaue and Cebu City."
        />
      </figure>
      <section className="section">
        <div className="wrap place-list">
          {places.map((branch) => (
            <article key={branch.slug} className="place">
              <iframe title={`Map of ${branch.name}`} src={mapEmbed(branch.address)} loading="lazy" />
              <div className="place-body">
                <p className="kind">{branch.kind}</p>
                <h2>{branch.name}</h2>
                <p>{branch.tagline}</p>
                <p className="hours">{branch.hours.join(" · ")}</p>
                <p className="address">{branch.address}</p>
                <ul>
                  {branch.phones.map((phone) => (
                    <li key={phone}>
                      <a href={telHref(phone)}>{phone}</a>
                    </li>
                  ))}
                </ul>
                <div className="card-actions">
                  <a className="text-link" href={mapsHref(branch.address)} target="_blank" rel="noreferrer">
                    Get directions
                  </a>
                  <Link className="text-link" to={`/branches/${branch.slug}`}>
                    Branch details
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="wrap">
          <h2 className="block-title">Pick-up coverage</h2>
          <ul className="pills">
            {areas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
