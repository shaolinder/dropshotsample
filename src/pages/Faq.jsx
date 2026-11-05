import { useState } from "react";
import { PageHero, useTitle } from "../components/Shell";
import { brand, faqs, pagePhotos } from "../data";

export default function Faq() {
  useTitle("FAQ's");
  const [open, setOpen] = useState(0);

  return (
    <>
      <PageHero
        kicker="FAQ"
        title="Questions the counter hears all week"
        text={`If yours is not here, email ${brand.email} or message the Facebook page.`}
        image={pagePhotos.faq}
      />
      <section className="section">
        <div className="wrap split">
          <figure className="side-photo">
            <img src={pagePhotos.services} alt="" />
          </figure>
          <div className="faq-list">
          {faqs.map((item, index) => {
            const expanded = open === index;
            return (
              <div key={item.q} className={expanded ? "faq is-open" : "faq"}>
                <button
                  type="button"
                  aria-expanded={expanded}
                  onClick={() => setOpen(expanded ? -1 : index)}
                >
                  {item.q}
                  <span aria-hidden="true">{expanded ? "–" : "+"}</span>
                </button>
                {expanded && <p>{item.a}</p>}
              </div>
            );
          })}
          </div>
        </div>
      </section>
    </>
  );
}
