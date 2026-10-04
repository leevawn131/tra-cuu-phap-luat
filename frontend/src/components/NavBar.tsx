import { useState } from "react";
import { navItems } from "../data/navItems";

export default function NavBar() {
  const [open, setOpen] = useState(false);          // mở/đóng menu 3 gạch (mobile)
  const [expanded, setExpanded] = useState<string | null>(null); // mục dropdown đang mở (mobile)

  return (
    <nav className="navbar" aria-label="Menu chính">
      <div className="container">
        {/* Web: thanh ngang */}
        <ul className="nav-desktop">
          {navItems.map((item) => (
            <li key={item.label} className={item.children ? "has-drop" : ""}>
              <a href={item.href}>{item.label}{item.children && <span className="caret" aria-hidden="true">▾</span>}</a>
              {item.children && (
                <ul className="dropdown">
                  {item.children.map((c) => (
                    <li key={c.label}><a href={c.href}>{c.label}</a></li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* App/mobile: nút 3 gạch */}
        <button className="burger" aria-expanded={open} aria-label="Mở menu" onClick={() => setOpen(!open)}>
          <span /><span /><span />
          <b>Menu</b>
        </button>
      </div>

      {open && (
        <ul className="nav-mobile">
          {navItems.map((item) => (
            <li key={item.label}>
              {item.children ? (
                <>
                  <button className="m-parent" aria-expanded={expanded === item.label}
                    onClick={() => setExpanded(expanded === item.label ? null : item.label)}>
                    {item.label}<span aria-hidden="true">{expanded === item.label ? "▴" : "▾"}</span>
                  </button>
                  {expanded === item.label && (
                    <ul className="m-children">
                      {item.children.map((c) => <li key={c.label}><a href={c.href}>{c.label}</a></li>)}
                    </ul>
                  )}
                </>
              ) : (
                <a className="m-link" href={item.href}>{item.label}</a>
              )}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
