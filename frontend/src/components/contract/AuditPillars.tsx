import Icon from "../home/Icon";
import { pillars } from "../../data/contractData";

export default function AuditPillars() {
  return (
    <section className="container c-block">
      <div className="c-center">
        <h2 className="c-title">3 trụ cột rà soát hợp đồng tự động</h2>
        <p className="c-sub">Kiểm soát nguy cơ tranh chấp trước khi ký kết.</p>
      </div>
      <div className="c-pillars">
        {pillars.map((p, i) => (
          <article key={p.title} className="c-pillar">
            <div className="c-pillar-icon"><Icon name={p.icon} /></div>
            <small>Tính năng {String(i + 1).padStart(2, "0")}</small>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
