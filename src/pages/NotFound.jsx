import { Link } from "react-router-dom";
import { useTitle } from "../components/Shell";

export default function NotFound() {
  useTitle("Page not found");
  return (
    <section className="section">
      <div className="wrap prose">
        <h1>That page is not on this site.</h1>
        <Link className="btn btn-solid" to="/">
          Back home
        </Link>
      </div>
    </section>
  );
}
