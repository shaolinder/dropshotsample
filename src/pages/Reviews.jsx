import { PageHero, useTitle } from "../components/Shell";
import { reviews } from "../data";

export default function Reviews() {
  useTitle("Reviews");

  return (
    <>
      <PageHero
        kicker="Reviews"
        title="Google reviews"
        text={`${reviews.place}. ${reviews.rating} from ${reviews.count} reviews.`}
        image="/reviews/hero.jpg"
      />
      <section className="section">
        <div className="wrap">
          <p className="score">
            <strong>{reviews.rating}</strong>
            <span>
              {reviews.count} Google reviews
              <br />
              {reviews.place}
            </span>
          </p>
          <div className="review-grid">
            {reviews.items.map((item) => (
              <article key={`${item.name}-${item.date}`} className="review-card">
                <p>“{item.text}”</p>
                <footer>
                  {item.name} · {item.date}
                  {item.more && (
                    <>
                      {" "}
                      ·{" "}
                      <a href={reviews.href} target="_blank" rel="noreferrer">
                        Read the full review
                      </a>
                    </>
                  )}
                </footer>
              </article>
            ))}
          </div>
          <p className="review-more">
            <a className="btn btn-solid" href={reviews.href} target="_blank" rel="noreferrer">
              View all {reviews.count} reviews
            </a>
          </p>
        </div>
      </section>
      <section className="section alt">
        <div className="wrap">
          <div className="review-marquee" role="region" aria-label={reviews.note}>
            <div className="review-marquee-track" aria-hidden="true">
              {Array.from({ length: 8 }, (_, index) => (
                <span key={index}>{reviews.note}</span>
              ))}
            </div>
          </div>
          <p className="kicker">Video</p>
          <h2 className="section-title">Check out this great video</h2>
          <div className="video-frame">
            <iframe
              src={reviews.video}
              title="Dropshot Laundry video"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}
