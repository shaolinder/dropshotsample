import { useState } from "react";
import { PageHero, useTitle } from "../components/Shell";
import { brand } from "../data";

export default function Franchise() {
  useTitle("Franchise");
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", city: "", note: "" });

  const set = (key) => (event) => setForm((current) => ({ ...current, [key]: event.target.value }));

  const submit = (event) => {
    event.preventDefault();
    const body = `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nCity: ${form.city}\n\n${form.note}`;
    window.location.href = `mailto:${brand.franchiseEmail}?subject=${encodeURIComponent("Dropshot franchise inquiry")}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <>
      <PageHero
        kicker={brand.parent}
        title="A laundry shop you can open"
        text="Dropshot Ventures Corp. is the holding company. The franchise is the shop, the brand, and the operating manual."
      />
      <section className="section">
        <div className="wrap split">
          <div className="prose">
            <h2>What the package is for</h2>
            <p>
              The offer is a laundry shop in Cebu that can take self-service customers and staffed wash-and-fold, plus pick-up where the area supports it. You operate under the Dropshot name.
            </p>
            <ul className="ticks">
              <li>Brand name and the way the counters already look to customers</li>
              <li>An operations manual for the floor, not just a logo file</li>
              <li>Setup help, then marketing and day-to-day guidance after you open</li>
              <li>Two ways to earn in one shop: machines customers run, and loads the staff finish</li>
            </ul>
            <p>
              The investment moves with the size of the shop, the site, and the machines in the package. {brand.parent} walks through the number with you — it is not a single published price.
            </p>
            <p>
              Write {brand.franchiseEmail} or use the form. That mailbox is the franchise desk.
            </p>
          </div>
          <form className="panel" onSubmit={submit}>
            <h2>Ask about a package</h2>
            <label>
              Name
              <input required value={form.name} onChange={set("name")} />
            </label>
            <label>
              Phone
              <input required value={form.phone} onChange={set("phone")} inputMode="tel" />
            </label>
            <label>
              Email
              <input required type="email" value={form.email} onChange={set("email")} />
            </label>
            <label>
              City you have in mind
              <input required value={form.city} onChange={set("city")} />
            </label>
            <label>
              What do you want to know?
              <textarea required rows="4" value={form.note} onChange={set("note")} />
            </label>
            <button className="btn btn-solid" type="submit">
              Email the franchise desk
            </button>
            {sent && <p className="success">Your email app should be open with the message. Send it to finish the inquiry.</p>}
          </form>
        </div>
      </section>
    </>
  );
}
