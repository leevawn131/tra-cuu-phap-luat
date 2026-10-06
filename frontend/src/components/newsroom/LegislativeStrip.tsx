import Icon from "../home/Icon";
import { timeline } from "../../data/newsroomData";

export default function LegislativeStrip() {
  return (
    <section className="nr-strip">
      <div className="container nr-strip-inner">
        <span className="nr-strip-title"><Icon name="campaign" /> Dòng sự kiện lập pháp 2026:</span>
        <div className="nr-strip-items">
          {timeline.map((t) => (
            <a key={t.label} href="#"><i className={t.tone} /> {t.label}</a>
          ))}
        </div>
      </div>
    </section>
  );
}
