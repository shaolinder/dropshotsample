import { useState } from "react";
import { PageHero, useTitle } from "../components/Shell";
import { brand, faqs } from "../data";

export default function Faq() {
  useTitle("FAQ's");
  const [open, setOpen] = useState(0);
  const facebook = brand.socials.find((social) => social.name === "Facebook");

  return (
    <>
      <PageHero
        kicker="FAQ"
        title="Questions the counter hears all week"
        text={`If yours is not here, email ${brand.email} or the Facebook page.`}
        image="/who/mission.jpg"
      />
      <section className="section">
        <div className="wrap">
          <p className="who-note">
            Email <a href={`mailto:${brand.email}`}>{brand.email}</a>
            {facebook && (
              <>
                {" "}
                or the{" "}
                <a href={facebook.href} target="_blank" rel="noreferrer">
                  Facebook page
                </a>
              </>
            )}{" "}
            if the answer is not here.
          </p>
          <div className="faq-list who-faq">
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
                  {expanded && (
                    <>
                      <p>{item.a}</p>
                      {item.list && (
                        <ul>
                          {item.list.map((line) => (
                            <li key={line}>{line}</li>
                          ))}
                        </ul>
                      )}
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
