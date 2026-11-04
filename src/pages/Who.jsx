import { Link } from "react-router-dom";
import { PageHero, useTitle } from "../components/Shell";

const ways = [
  {
    title: "Full service",
    text: "You drop the bag, or a rider picks it up. The shop washes, dries, and folds. Dry cleaning, shoes, bags, and hand wash sit beside the regular loads.",
  },
  {
    title: "Self-service",
    text: "At Cabancalan and at Unit 2 in Banilad you can run the machines yourself and leave when the dryer stops.",
  },
  {
    title: "Pick-up",
    text: "Across Metro Cebu, a rider collects and returns the load to the same address. Express is there when the 24–48 hour window is too slow.",
  },
];

export default function Who() {
  useTitle("Who We Are");
  return (
    <>
      <PageHero
        kicker="Who we are"
        title="A shop floor, not a call center"
        text="Staff at the counter, machines that finish a load, and riders who know the barangay."
      />
      <section className="section">
        <div className="wrap cards-3">
          {ways.map((way) => (
            <article key={way.title} className="plain-card">
              <h2>{way.title}</h2>
              <p>{way.text}</p>
            </article>
          ))}
        </div>
        <div className="wrap center-cta">
          <Link className="btn btn-solid" to="/where-we-are">
            Where we are
          </Link>
        </div>
      </section>
    </>
  );
}
