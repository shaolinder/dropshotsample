import { Link } from "react-router-dom";
import { PageHero, useTitle } from "../components/Shell";
import { areas, branches, mapsHref, telHref } from "../data";

export default function Locations() {
  useTitle("Where We Are");
  return (
    <>
      <PageHero
        kicker="Where we are"
        title="Mandaue and Cebu City"
        text="Seven listings. Two of them are self-service beside a full-service counter."
      />
      <section className="section">
        <div className="wrap">
          <div className="branch-grid">
            {branches.map((branch) => (
              <article key={branch.slug} className="branch-card">
                <p className="kind">{branch.kind}</p>
                <h3>{branch.name}</h3>
                <p className="address">{branch.address}</p>
                <ul>
                  {branch.phones.map((phone) => (
                    <li key={phone}>
                      <a href={telHref(phone)}>{phone}</a>
                    </li>
                  ))}
                </ul>
                <div className="card-actions">
                  <Link className="text-link" to={`/branches/${branch.slug}`}>
                    Details
                  </Link>
                  <a className="text-link" href={mapsHref(branch.address)} target="_blank" rel="noreferrer">
                    Map
                  </a>
                </div>
              </article>
            ))}
          </div>
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
