import { useState } from "react";

function isCurrentPage(href) {
  let pathname = window.location.pathname;
  if (pathname[0] !== '/') pathname = '/' + pathname;
  if (pathname[pathname.length - 1] !== '/') pathname += '/';
  return pathname === href || (href !== '/' && pathname.startsWith(href));
}

function Icon({ icon }) {
  if (icon === "list") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
      </svg>
    );
  }
  return null;
}

export default function MenuButtonReact({ textLinks }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="menu-button" aria-expanded={isOpen} onClick={() => setIsOpen(prev => !prev)}>
        <span className="sr-only">Menu</span>
        <Icon icon="list" />
      </button>
      {isOpen && (
        <div id="menu-content" className="menu-content">
          <ul className="nav-items">
            {textLinks.map(({ label, href }) => (
              <li key={href}>
                <a
                  aria-current={isCurrentPage(href) ? "page" : undefined}
                  className="link"
                  href={href}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
