import { useState } from "react";
import { Link } from "react-router-dom";
import { PageHero, useTitle } from "../components/Shell";
import { brand, branches, telHref } from "../data";

const shopOrder = [
  "banilad",
  "banilad-self-service",
  "cabancalan",
  "cabancalan-self-service",
  "lahug",
  "maguikay",
  "sm-seaside",
];

const directory = [
  { ...brand.office, to: "/franchise", link: "See the franchise" },
  ...shopOrder.map((slug) => {
    const branch = branches.find((item) => item.slug === slug);
    return {
      name: branch.name,
      city: branch.city,
      address: branch.address,
      phones: branch.phones,
      to: `/branches/${branch.slug}`,
      link: "Branch details",
    };
  }),
];

function phoneLabel(phone) {
  return phone === brand.serviceDesk ? `${phone} (service desk)` : phone;
}

export default function Contact() {
  useTitle("Contact Us");
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", interest: "", note: "" });
  const set = (key) => (event) => setForm((current) => ({ ...current, [key]: event.target.value }));

  const submit = (event) => {
    event.preventDefault();
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      "",
      `I'm interested in: ${form.interest}`,
      "",
      form.note,
    ].join("\n");
    window.location.href = `mailto:${brand.email}?subject=${encodeURIComponent("Dropshot Laundry")}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <>
      <PageHero
        kicker="Contact us"
        title="Drop us a line"
        text="The directory has every shop. Send the form, and a representative will follow up."
        image="/who/detail.jpg"
      />

      <section className="section">
        <div className="wrap">
          <p className="kicker">Directory</p>
          <h2 className="section-title">The office and the shops</h2>
          <div className="directory">
            {directory.map((place) => (
              <article key={place.name} className="directory-card">
                <p className="kind">{place.city}</p>
                <h2>{place.name}</h2>
                <p className="address">{place.address}</p>
                <ul>
                  {place.phones.map((phone) => (
                    <li key={phone}>
                      <a href={telHref(phone)}>{phoneLabel(phone)}</a>
                    </li>
                  ))}
                </ul>
                <Link className="text-link" to={place.to}>
                  {place.link}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap split">
          <div className="prose">
            <h2>Write, or come in</h2>
            <p>
              Fill in the form and expect someone from the shop to answer. You can also write{" "}
              <a href={`mailto:${brand.email}`}>{brand.email}</a>.
            </p>
            <p>
              <a className="btn btn-line" href={brand.whatsapp} target="_blank" rel="noreferrer">
                Message us on WhatsApp
              </a>
            </p>
            <p>Visit during the hours posted for that shop. Better yet, see us in person.</p>
            <p>
              <Link className="text-link" to="/where-we-are">
                Shop hours and maps
              </Link>
            </p>
            <h2>{brand.parent}</h2>
            <p>The company behind the shops, and the office that holds them together.</p>
            <p>
              <Link className="text-link" to="/franchise">
                Franchise
              </Link>
            </p>
          </div>
          <form className="panel" onSubmit={submit}>
            <h2>Drop us a line</h2>
            <label>
              Name
              <input required value={form.name} onChange={set("name")} autoComplete="name" />
            </label>
            <label>
              Email
              <input required type="email" value={form.email} onChange={set("email")} autoComplete="email" />
            </label>
            <label>
              Phone
              <input value={form.phone} onChange={set("phone")} inputMode="tel" autoComplete="tel" />
            </label>
            <label>
              I’m interested in
              <textarea rows="3" value={form.interest} onChange={set("interest")} />
            </label>
            <label>
              Other notes
              <textarea rows="4" value={form.note} onChange={set("note")} />
            </label>
            <button className="btn btn-solid" type="submit">
              Send
            </button>
            {sent && <p className="success">Your email app should be open. Send the message to reach the shop.</p>}
          </form>
        </div>
      </section>
    </>
  );
}
