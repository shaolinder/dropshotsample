import { useState } from "react";
import { PageHero, useTitle } from "../components/Shell";
import { brand, branches, telHref } from "../data";

export default function Contact() {
  useTitle("Contact Us");
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", note: "" });
  const set = (key) => (event) => setForm((current) => ({ ...current, [key]: event.target.value }));

  const submit = (event) => {
    event.preventDefault();
    const body = `Name: ${form.name}\nPhone: ${form.phone}\n\n${form.note}`;
    window.location.href = `mailto:${brand.email}?subject=${encodeURIComponent("Dropshot Laundry")}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <>
      <PageHero
        kicker="Contact"
        title="Call a shop, or write the station"
        text="Branch phones are the fastest way to ask if a load can be ready today."
      />
      <section className="section">
        <div className="wrap split">
          <div>
            <p>
              <a href={`mailto:${brand.email}`}>{brand.email}</a>
            </p>
            <ul className="contact-list">
              {branches.map((branch) => (
                <li key={branch.slug}>
                  <strong>{branch.name}</strong>
                  <span>
                    {branch.phones.map((phone) => (
                      <a key={phone} href={telHref(phone)}>
                        {phone}
                      </a>
                    ))}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <form className="panel" onSubmit={submit}>
            <h2>Send a note</h2>
            <label>
              Name
              <input required value={form.name} onChange={set("name")} />
            </label>
            <label>
              Phone
              <input required value={form.phone} onChange={set("phone")} inputMode="tel" />
            </label>
            <label>
              Message
              <textarea required rows="5" value={form.note} onChange={set("note")} />
            </label>
            <button className="btn btn-solid" type="submit">
              Email {brand.email}
            </button>
            {sent && <p className="success">Your email app should be open. Send the message to reach the shop.</p>}
          </form>
        </div>
      </section>
    </>
  );
}
