import { useState } from "react";
import { PageHero, useTitle } from "../components/Shell";
import { brand, roles } from "../data";

export default function Careers() {
  useTitle("Careers");
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    role: roles[0].title,
    note: "",
  });
  const set = (key) => (event) => setForm((current) => ({ ...current, [key]: event.target.value }));

  const submit = (event) => {
    event.preventDefault();
    const body = `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nPosition: ${form.role}\n\n${form.note}\n\nPlease attach your resume before sending.`;
    window.location.href = `mailto:${brand.email}?subject=${encodeURIComponent(`Application: ${form.role}`)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <>
      <PageHero
        kicker="Careers"
        title="We are hiring"
        text="Two open roles. Apply here, then attach your resume in the email."
        image="/who/professional.jpg"
      />
      <section className="section">
        <div className="wrap">
          <p className="kicker">Open positions</p>
          <h2 className="section-title">Join the team</h2>
          <div className="directory">
            {roles.map((role) => (
              <article key={role.title} className="directory-card">
                <h2>{role.title}</h2>
                <ul className="ticks">
                  {role.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section alt">
        <div className="wrap split">
          <div className="prose">
            <h2>Apply now</h2>
            <p>
              If one of the roles fits, send your name, phone, and email. Attach your resume in the email before
              you send it. Applications go to {brand.email}.
            </p>
          </div>
          <form className="panel" onSubmit={submit}>
            <h2>Apply now</h2>
            <label>
              Name
              <input required value={form.name} onChange={set("name")} autoComplete="name" />
            </label>
            <label>
              Phone
              <input required value={form.phone} onChange={set("phone")} inputMode="tel" autoComplete="tel" />
            </label>
            <label>
              Email
              <input required type="email" value={form.email} onChange={set("email")} autoComplete="email" />
            </label>
            <label>
              Position
              <select value={form.role} onChange={set("role")}>
                {roles.map((role) => (
                  <option key={role.title}>{role.title}</option>
                ))}
              </select>
            </label>
            <label>
              Message
              <textarea rows="4" value={form.note} onChange={set("note")} />
            </label>
            <button className="btn btn-solid" type="submit">
              Submit application
            </button>
            {sent && (
              <p className="success">
                Your email app should be open. Attach your resume, then send it to finish the application.
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
