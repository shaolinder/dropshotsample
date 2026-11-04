import { PageHero, useTitle } from "../components/Shell";
import { brand, branches } from "../data";

export default function Reviews() {
  useTitle("Reviews");
  const facebook = brand.socials[0].href;

  return (
    <>
      <PageHero
        kicker="Reviews"
        title="Read the shops where customers already wrote"
        text="This page does not invent quotes. Reviews live on the Facebook page and on each branch’s own calls and visits."
      />
      <section className="section">
        <div className="wrap prose">
          <p>
            <a className="btn btn-solid" href={facebook} target="_blank" rel="noreferrer">
              Open Facebook
            </a>
          </p>
          <h2>Which shop to name</h2>
          <ul>
            {branches.map((branch) => (
              <li key={branch.slug}>
                {branch.name} — {branch.city}
              </li>
            ))}
          </ul>
          <p>
            Instagram:{" "}
            <a href={brand.socials[1].href} target="_blank" rel="noreferrer">
              @dropshotlaundrystation
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
