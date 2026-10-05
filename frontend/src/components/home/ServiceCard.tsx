import { Link } from "react-router-dom";
import Icon from "./Icon";
import type { Service } from "../../data/homeData";

export default function ServiceCard({ s }: { s: Service }) {
  return (
    <Link to={s.href} className="service-card">
      {s.badge && <span className="service-badge">{s.badge}</span>}
      <div className="service-top">
        <div className="service-icon"><Icon name={s.icon} /></div>
        <Icon name="arrow_outward" className="service-arrow" />
      </div>
      <h4>{s.title}</h4>
      <p>{s.desc}</p>
      <div className="service-meta"><span>{s.metaLeft}</span><span>{s.metaRight}</span></div>
    </Link>
  );
}
