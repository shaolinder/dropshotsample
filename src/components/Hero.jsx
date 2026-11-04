import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { slides } from "../data";

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return undefined;
    const id = setInterval(() => setIndex((n) => (n + 1) % slides.length), 5500);
    return () => clearInterval(id);
  }, [paused]);

  const go = (dir) => setIndex((n) => (n + dir + slides.length) % slides.length);
  const slide = slides[index];

  return (
    <section
      className="hero"
      aria-roledescription="carousel"
      aria-label="Highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((item, i) => (
        <div
          key={item.title}
          className={`hero-slide ${i === index ? "is-active" : ""}`}
          style={{ backgroundImage: `url(${item.image})` }}
          aria-hidden={i !== index}
        />
      ))}
      <div className="hero-shade" />
      <div className="hero-copy">
        <p className="kicker light">{slide.kicker}</p>
        <h1>{slide.title}</h1>
        <p className="lede">{slide.text}</p>
        <div className="hero-actions">
          <Link className="btn btn-light" to="/pickup">
            Book a pick-up
          </Link>
          <Link className="btn btn-ghost" to="/where-we-are">
            Find a branch
          </Link>
        </div>
      </div>
      <button className="hero-arrow prev" type="button" aria-label="Previous slide" onClick={() => go(-1)}>
        ‹
      </button>
      <button className="hero-arrow next" type="button" aria-label="Next slide" onClick={() => go(1)}>
        ›
      </button>
      <div className="hero-dots">
        {slides.map((item, i) => (
          <button
            key={item.title}
            type="button"
            className={i === index ? "is-active" : ""}
            aria-label={`Show slide ${i + 1}: ${item.title}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}
