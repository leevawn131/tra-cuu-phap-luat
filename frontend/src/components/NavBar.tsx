import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navItems, type NavItem } from "../data/navItems";

type DropPos = { label: string; left: number; top: number } | null;

export default function NavBar() {
  const [open, setOpen] = useState(false); // menu 3 gạch (mobile)
  const [expanded, setExpanded] = useState<string | null>(null);
  const [drop, setDrop] = useState<DropPos>(null); // dropdown trên desktop
  const timer = useRef<number>();
  const { pathname } = useLocation();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  const show = (item: NavItem, el: HTMLElement) => {
    window.clearTimeout(timer.current);
    if (!item.children) return setDrop(null);
    const r = el.getBoundingClientRect();
    setDrop({ label: item.label, left: Math.min(r.left, window.innerWidth - 250), top: r.bottom });
  };
  const hideSoon = () => { timer.current = window.setTimeout(() => setDrop(null), 150); };
  const keep = () => window.clearTimeout(timer.current);

  // Đóng dropdown khi cuộn trang, đổi cỡ cửa sổ, hoặc nhấn Esc
  useEffect(() => {
    const close = () => setDrop(null);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("scroll", close, { passive: true });
    window.addEventListener("resize", close);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", close);
      window.removeEventListener("resize", close);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  const current = navItems.find((i) => i.label === drop?.label);

  return (
    <nav className="navbar" aria-label="Menu chính">
      <div className="container">
        {/* Web: thanh ngang, kéo/cuộn sang ngang được */}
        <ul className="nav-desktop" onScroll={() => setDrop(null)}>
          {navItems.map((item) => (
            <li key={item.label}
              onMouseEnter={(e) => show(item, e.currentTarget)}
              onMouseLeave={hideSoon}>
              <Link to={item.href} className={isActive(item.href) ? "active" : ""}
                aria-haspopup={!!item.children}
                aria-expanded={drop?.label === item.label}
                onFocus={(e) => show(item, e.currentTarget.parentElement as HTMLElement)}>
                {item.label}
                {item.children && <span className="caret" aria-hidden="true">▾</span>}
              </Link>
            </li>
          ))}
        </ul>

        {/* App/mobile: nút 3 gạch */}
        <button className="burger" aria-expanded={open} aria-label="Mở menu" onClick={() => setOpen(!open)}>
          <span /><span /><span />
          <b>Menu</b>
        </button>
      </div>

      {/* Dropdown desktop: nằm ngoài thanh cuộn nên không bị cắt */}
      {current && drop && (
        <ul className="dropdown-fixed" style={{ left: drop.left, top: drop.top }}
          onMouseEnter={keep} onMouseLeave={hideSoon}>
          {current.children!.map((c) => (
            <li key={c.label}><Link to={c.href} onClick={() => setDrop(null)}>{c.label}</Link></li>
          ))}
        </ul>
      )}

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
                      {item.children.map((c) => (
                        <li key={c.label}><Link to={c.href} onClick={() => setOpen(false)}>{c.label}</Link></li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link className="m-link" to={item.href} onClick={() => setOpen(false)}>{item.label}</Link>
              )}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}