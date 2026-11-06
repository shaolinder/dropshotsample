import { useState } from "react";
import { Link } from "react-router-dom";
import { PageHero, useTitle } from "../components/Shell";
import { brand, storyMedia } from "../data";

const points = [
  {
    title: "Our mission",
    image: "/who/mission.jpg",
    alt: "Washers and baskets inside a Dropshot Laundry shop.",
    text: [
      "We exist to make laundry day effortless, so the day is free for everything else.",
      "The mission is care that leaves clothes looking and feeling their best. Hand the bag over, and keep the rest of the day.",
    ],
  },
  {
    title: "Professional and efficient",
    image: "/who/professional.jpg",
    alt: "Dropshot Laundry attendants at the shop.",
    text: [
      "The people in the shop do this for a living.",
      "They use machines that finish the job, and a method the shops already run, so a garment comes back fresh and looked after.",
    ],
  },
  {
    title: "Dropshot excitement",
    image: "/who/excitement.jpg",
    alt: "Staff at the opening of the SM Seaside Dropshot Laundry.",
    text: [
      "The shops are built on customer care. Customers have rated Dropshot as a top laundry shop, and the staff treat that as the job.",
      "Clean clothes change the rest of the day. That is the part they care about.",
    ],
  },
  {
    title: "Friendly and convenient",
    image: "/who/friendly.jpg",
    alt: "Two Dropshot Laundry attendants at the station.",
    text: [
      "A neighborhood shop: clean, comfortable, and close enough to be convenient.",
      "Bring a bag for wash and fold, or run the machines yourself.",
    ],
  },
  {
    title: "The extra step",
    image: "/who/detail.jpg",
    alt: "The waiting area at a Dropshot Laundry shop.",
    text: [
      "The extra step is the point. Clothes are cleaned with attention, not rushed past.",
      "The same standard is the daily routine.",
    ],
  },
  {
    title: "Loyalty card",
    image: "/who/loyalty.png",
    alt: "Dropshot Laundry Station loyalty card. The 10th wash is printed at 50% off, with terms through July 20, 2022.",
    card: true,
    text: [
      "A stamp card for people who come back. The card says the 10th wash is 50% off.",
      "The terms printed on it run through July 20, 2022, so ask the branch what the card does today. The daily promise is the same: service you can count on.",
    ],
  },
];

const questions = [
  {
    q: "Do you pick up and deliver laundry?",
    a: "Yes. The fee depends on the pick-up location. There is no minimum order.",
  },
  {
    q: "When can I get my laundry?",
    a: "Drop it off or send it today. Regular service is usually ready in two days, about 24–48 hours.",
  },
  {
    q: "Do you have express or rush service?",
    a: "Yes. Express is about 4 hours, depending on the queue that day.",
  },
  {
    q: "How do I book a pick-up?",
    a: `Send your name, contact number, pick-up address with a landmark, date and time, number of bags, and any special instruction to ${brand.booking.map((phone) => phone.display).join(" or ")}.`,
  },
];

export default function Who() {
  useTitle("Who We Are");
  const [open, setOpen] = useState(0);
  const [photo, setPhoto] = useState(null);
  const facebook = brand.socials.find((social) => social.name === "Facebook");

  return (
    <>
      <PageHero
        kicker="Who we are"
        title="Laundry day, off your hands"
        text="A neighborhood shop. Wash and fold, or the machines, so the rest of the day is yours."
        image="/who/professional.jpg"
      />

      <section className="section">
        <div className="wrap who-grid">
          {points.map((point) => (
            <button
              key={point.title}
              className={point.card ? "who-point is-card" : "who-point"}
              type="button"
              onClick={() => setPhoto(point.image)}
              aria-label={`Open the photo for ${point.title}`}
            >
              <img src={point.image} alt={point.alt} />
              <h2>{point.title}</h2>
              {point.text.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </button>
          ))}
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <p className="kicker">Our milestone</p>
          <h2 className="section-title">The same journey, from the first shop</h2>
          <button
            className="poster"
            type="button"
            aria-label="Open the journey chart"
            onClick={() => setPhoto(storyMedia.milestone)}
          >
            <img
              src={storyMedia.milestone}
              alt="Dropshot Laundry journey chart, from the Cabancalan shop in July 2021 to the Cabancalan self-service area in March 2026."
            />
          </button>
          <div className="center-cta">
            <Link className="btn btn-solid" to="/our-story">
              Read the story
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="kicker">Questions</p>
          <h2 className="section-title">The ones this page answers</h2>
          <p className="who-note">
            If yours is not here, email{" "}
            <a href={`mailto:${brand.email}`}>{brand.email}</a>
            {facebook && (
              <>
                {" "}
                or the{" "}
                <a href={facebook.href} target="_blank" rel="noreferrer">
                  Facebook page
                </a>
              </>
            )}
            .
          </p>
          <div className="faq-list who-faq">
            {questions.map((item, index) => {
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
          <div className="center-cta">
            <Link className="text-link" to="/faq">
              All questions
            </Link>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap pullquote">
          <p>“I wish my bank account refilled as fast as my laundry basket.”</p>
          <footer>— DLS</footer>
          <Link className="btn btn-solid" to="/where-we-are">
            Where we are
          </Link>
        </div>
      </section>

      {photo && (
        <div className="modal-back" role="presentation" onClick={() => setPhoto(null)}>
          <figure className="lightbox" onClick={(event) => event.stopPropagation()}>
            <img src={photo} alt="" />
            <button className="modal-x" type="button" aria-label="Close photo" onClick={() => setPhoto(null)}>
              ×
            </button>
          </figure>
        </div>
      )}
    </>
  );
}
