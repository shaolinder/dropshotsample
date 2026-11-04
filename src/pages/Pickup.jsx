import { useState } from "react";
import { PageHero, useTitle } from "../components/Shell";
import { areas, brand, slides } from "../data";

const empty = {
  name: "",
  phone: "",
  address: "",
  when: "",
  bags: "1",
  notes: "",
};

export default function Pickup() {
  useTitle("Pick-Up Delivery");
  const [form, setForm] = useState(empty);
  const [copied, setCopied] = useState(false);
  const [ready, setReady] = useState(false);

  const message = [
    "Dropshot Laundry pick-up request",
    `Name: ${form.name}`,
    `Contact: ${form.phone}`,
    `Address / landmark: ${form.address}`,
    `Date and time: ${form.when}`,
    `Bags: ${form.bags}`,
    `Special instruction: ${form.notes || "None"}`,
  ].join("\n");

  const set = (key) => (event) => {
    setCopied(false);
    setForm((current) => ({ ...current, [key]: event.target.value }));
  };

  const copy = async (event) => {
    event.preventDefault();
    setReady(true);
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <>
      <PageHero
        kicker="Metro Cebu"
        title="Pick-up & delivery"
        text="We collect the bag, wash it, and bring it back to the same address."
        image={slides[3].image}
      />
      <section className="section">
        <div className="wrap split">
          <div>
            <h2>What’s in a load</h2>
            <ul className="ticks">
              <li>Pick-up from your address</li>
              <li>One wash and one dry, up to 8 kilos</li>
              <li>Folded, then delivered</li>
              <li>No minimum order</li>
            </ul>
            <h2>Where we go</h2>
            <ul className="pills">
              {areas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
            <h2>How to pay</h2>
            <ul className="ticks">
              <li>Cash to the pick-up agent when the bag is collected</li>
              <li>GCash before delivery</li>
              <li>Maya before delivery</li>
            </ul>
          </div>
          <form className="panel" onSubmit={copy}>
            <h2>Request a pick-up</h2>
            <p className="note">
              This prepares the message. Send it by text to {brand.booking[0].display} or {brand.booking[1].display} so a rider is actually booked.
            </p>
            <label>
              Complete name
              <input required value={form.name} onChange={set("name")} />
            </label>
            <label>
              Mobile number
              <input required value={form.phone} onChange={set("phone")} inputMode="tel" />
            </label>
            <label>
              Pick-up address and landmark
              <textarea required rows="3" value={form.address} onChange={set("address")} />
            </label>
            <label>
              Date and time
              <input required value={form.when} onChange={set("when")} placeholder="Tomorrow, 10 AM" />
            </label>
            <label>
              Number of bags
              <input required value={form.bags} onChange={set("bags")} inputMode="numeric" />
            </label>
            <label>
              Special instruction
              <textarea
                rows="3"
                value={form.notes}
                onChange={set("notes")}
                placeholder="Separate whites. Extra fabric conditioner. Hand-wash the blouse."
              />
            </label>
            <button className="btn btn-solid" type="submit">
              Copy booking message
            </button>
            {ready && (
              <>
                <pre className="booking-preview">{message}</pre>
                <p className="success">
                  {copied
                    ? "Copied. Paste it into a text to the booking numbers below."
                    : "Copy the message above and text it to the booking numbers below."}
                </p>
              </>
            )}
            <div className="phone-row">
              {brand.booking.map((phone) => (
                <a key={phone.tel} className="btn btn-line" href={`tel:${phone.tel}`}>
                  Call {phone.display}
                </a>
              ))}
            </div>
          </form>
        </div>
      </section>
      <section className="section alt">
        <div className="wrap rules">
          <article>
            <h2>Delivery</h2>
            <ul className="ticks">
              <li>Deliveries run from 8 AM to 6 PM.</li>
              <li>If someone else will receive it, send their full name ahead. The rider photographs the handover.</li>
              <li>A timed delivery is possible if you message ahead and a rider is free.</li>
              <li>We deliver only to the original pick-up address.</li>
            </ul>
          </article>
          <article>
            <h2>If we miss you</h2>
            <ul className="ticks">
              <li>We try again the next day.</li>
              <li>After two failed attempts, re-delivery stops and the delivery fee is forfeited.</li>
              <li>You can collect at the shop. Storage is free for seven days, then a fee applies.</li>
            </ul>
          </article>
          <article>
            <h2>Before you pack</h2>
            <ul className="ticks">
              <li>Leave valuables and irreplaceable branded pieces out. The shop is not responsible for them.</li>
              <li>8 kilos is one load. Heavier bags start a second load.</li>
              <li>Say if whites, delicates, or extra conditioner should be separate.</li>
            </ul>
          </article>
        </div>
      </section>
    </>
  );
}
