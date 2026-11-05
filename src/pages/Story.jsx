import { Link } from "react-router-dom";
import { PageHero, useTitle } from "../components/Shell";
import { brand, gallery, pagePhotos } from "../data";

const steps = [
  {
    year: "April 2021",
    title: "Opened in the middle of the lockdowns",
    text: "Dropshot Laundry started in the Philippines when people needed clothes cleaned without a long errand. Dropshot Ventures Corp. is the company behind the shops.",
  },
  {
    year: "Mandaue & Cebu",
    title: "Counters where people already are",
    text: "Shops followed the demand: Quezon Avenue, A.S. Fortuna, Salinas Drive, Maguikay, and a counter inside SM Seaside.",
  },
  {
    year: "Self-service",
    title: "Machines for people who would rather do it themselves",
    text: "Banilad added a self-service unit next door. Cabancalan now has a self-service area inside the branch.",
  },
  {
    year: "Franchise",
    title: "The same shop, offered as a package",
    text: "Dropshot Ventures Corp. now talks to people who want to open a Dropshot counter, with the manual and the support that come with the name.",
  },
];

export default function Story() {
  useTitle("Our Story");
  return (
    <>
      <PageHero
        kicker={`Since ${brand.founded}`}
        title="Built because laundry had to get easier"
        text="A subsidiary of Dropshot Ventures Corp., still running the shops it opened in Cebu."
        image={pagePhotos.story}
      />
      <section className="section">
        <div className="wrap story-layout">
          <div className="story-photos">
            {gallery.slice(0, 3).map((src) => (
              <img key={src} src={src} alt="" />
            ))}
          </div>
          <div className="timeline">
            {steps.map((step) => (
              <article key={step.title}>
                <p className="kicker">{step.year}</p>
                <h2>{step.title}</h2>
                <p>{step.text}</p>
              </article>
            ))}
            <Link className="btn btn-solid" to="/franchise">
              See the franchise
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
