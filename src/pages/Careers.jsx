import { useState } from "react";
import { PageHero, useTitle } from "../components/Shell";
import { branches, brand } from "../data";

export default function Careers() {
  useTitle("Careers");
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", branch: branches[0].name, role: "Laundry attendant", note: "" });
  const set = (key) => (event) => setForm((current) => ({ ...current, [key]: event.target.value }));

  const submit = (event) => {
    event.preventDefault();
    const body = `Name: ${form.name}\nPhone: ${form.phone}\nBranch: ${form.branch}\nRole: ${form.role}\n\n${form.note}`;
    window.location.href = `mailto:${brand.email}?subject=${encodeURIComponent("Job application")}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <>
      <PageHero
        kicker="Careers"
        title="Work a counter, a machine, or a route"
        text="Attendants, riders, and supervisors. Send your details and the branch you can reach."
      />
      <section className="section">
        <div className="wrap split">
          <div className="prose">
            <p>
              Shops hire for the floor and for pick-up. There is no public job board on this site — email {brand.email} with the branch you want and the work you can do.
            </p>
            <ul className="ticks">
              <li>Laundry attendant</li>
              <li>Pick-up rider</li>
              <li>Shift supervisor</li>
            </ul>
          </div>
          <form className="panel" onSubmit={submit}>
            <h2>Apply</h2>
            <label>
              Name
              <input required value={form.name} onChange={set("name")} />
            </label>
            <label>
              Phone
              <input required value={form.phone} onChange={set("phone")} inputMode="tel" />
            </label>
            <label>
              Branch
              <select value={form.branch} onChange={set("branch")}>
                {branches.map((branch) => (
                  <option key={branch.slug}>{branch.name}</option>
                ))}
              </select>
            </label>
            <label>
              Role
              <select value={form.role} onChange={set("role")}>
                <option>Laundry attendant</option>
                <option>Pick-up rider</option>
                <option>Shift supervisor</option>
                <option>Something else</option>
              </select>
            </label>
            <label>
              Short note
              <textarea required rows="4" value={form.note} onChange={set("note")} />
            </label>
            <button className="btn btn-solid" type="submit">
              Email your application
            </button>
            {sent && <p className="success">Your email app should be open. Send it to finish the application.</p>}
          </form>
        </div>
      </section>
    </>
  );
}
