import { Link } from "react-router-dom";
import { PageHero, useTitle } from "../components/Shell";
import { pagePhotos, servicePhotoPosition, servicePhotos, services } from "../data";

export default function Services() {
  useTitle("Services");

  return (
    <>
      <PageHero
        kicker="Our services"
        title="From a single shirt to a shop’s linen"
        text="Regular wash-and-fold, plus the jobs that should not share a drum."
        image={pagePhotos.services}
      />
      <section className="section">
        <div className="wrap service-list">
          <p className="note page-photo-note">Photos show the kind of work.</p>
          {services.map((service) => (
            <article key={service.slug} id={service.slug} className="service-row">
              <img
                src={servicePhotos[service.slug]}
                alt=""
                style={{ objectPosition: servicePhotoPosition[service.slug] || "center" }}
              />
              <div>
                <h2>{service.name}</h2>
                <p>{service.body}</p>
                {service.href && (
                  <Link className="text-link" to={service.href}>
                    Go to the page
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
