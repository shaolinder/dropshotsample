import { Link } from "react-router-dom";

export default function Logo({ compact = false }) {
  return (
    <Link to="/" className={`logo ${compact ? "is-compact" : ""}`} aria-label="Dropshot Laundry, home">
      <span className="logo-word">
        DR
        <svg className="logo-drop" viewBox="0 0 24 28" aria-hidden="true">
          <path d="M12 1.2C12 1.2 3 13 3 18.4a9 9 0 0 0 18 0C21 13 12 1.2 12 1.2z" />
        </svg>
        PSHOT
      </span>
      <span className="logo-sub">Laundry</span>
      {!compact && (
        <span className="logo-icons" aria-hidden="true">
          <IconTruck />
          <IconWasher />
          <IconBag />
          <IconShirt />
        </span>
      )}
    </Link>
  );
}

function IconTruck() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M1 7h11v8H1zM12 10h6l4 4v1h-10z" />
      <circle cx="6" cy="18" r="2" />
      <circle cx="17" cy="18" r="2" />
    </svg>
  );
}
function IconWasher() {
  return (
    <svg viewBox="0 0 24 24">
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <circle cx="12" cy="14" r="4" />
    </svg>
  );
}
function IconBag() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M6 8h12l-1 13H7z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </svg>
  );
}
function IconShirt() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M8 4 4 7l2 3 2-1v11h8V9l2 1 2-3-4-3-2 2h-4z" />
    </svg>
  );
}
