import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { PageHero, useTitle } from "../components/Shell";
import { services } from "../data";

export default function Services() {
  const { slug } = useParams();
  useTitle("Services");

  useEffect(() => {
    if (!slug) return;
    const node = document.getElementById(slug);
    if (node) node.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [slug]);

  return (
    <>
      <PageHero
        kicker="Our services"
        title="From a single shirt to a shop’s linen"
        text="Regular wash-and-fold, plus the jobs that should not share a drum."
      />
      <section className="section">
        <div className="wrap service-list">
          {services.map((service) => (
            <article key={service.slug} id={service.slug}>
              <h2>{service.name}</h2>
              <p>{service.body}</p>
              {service.href && (
                <Link className="text-link" to={service.href}>
                  Go to the page
                </Link>
              )}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
