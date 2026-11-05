import { Link, useParams } from "react-router-dom";
import { PageHero, useTitle } from "../components/Shell";
import { findBranch, mapsHref, pagePhotos, telHref } from "../data";

export default function Branch() {
  const { slug } = useParams();
  const branch = findBranch(slug);
  useTitle(branch ? branch.name : "Branch");

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

  const self = branch.kind === "Self-service";

  return (
    <>
      <PageHero
        kicker={branch.city}
        title={branch.name}
        text={branch.tagline}
        image={self ? pagePhotos.selfService : branch.image}
      />
      <section className="section">
        <div className="wrap split">
          <div className="prose">
            <figure className="side-photo">
              <img src={branch.image} alt="" />
            </figure>
            <p className="note">Photo shows the kind of work, not this shopfront.</p>
            <p className="kind">{branch.kind}</p>
            <h2>Address</h2>
            <p>{branch.address}</p>
            <p>
              <a href={mapsHref(branch.address)} target="_blank" rel="noreferrer">
                Open in Google Maps
              </a>
            </p>
            <h2>Call this shop</h2>
            <ul>
              {branch.phones.map((phone) => (
                <li key={phone}>
                  <a href={telHref(phone)}>{phone}</a>
                </li>
              ))}
            </ul>
            <p>Open daily. Call before you come if you need today’s closing time.</p>
          </div>
          <div className="panel">
            <h2>{self ? "At the machines" : "At the counter"}</h2>
            <ul className="ticks">
              {self ? (
                <>
                  <li>Run your own wash and dry.</li>
                  <li>The full-service counter is at the same address if you would rather leave the bag.</li>
                </>
              ) : (
                <>
                  <li>Wash, dry, and fold</li>
                  <li>Dry cleaning, shoes, bags, and hand wash</li>
                  <li>Express when the queue allows, about 4 hours</li>
                </>
              )}
              <li>
                <Link to="/pickup">Book a pick-up instead</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
