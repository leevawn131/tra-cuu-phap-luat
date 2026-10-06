import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../home/Icon";
import type { Sample } from "../../data/samplesData";

export default function SampleCard({ s }: { s: Sample }) {
  const [notice, setNotice] = useState(false);
  return (
    <article className="s-card">
      <div className="s-card-top">
        <span className="tag">{s.law}</span>
        <code>Mã: {s.code}</code>
        <span className="s-formats">{s.formats.map((f) => f.toUpperCase()).join(" · ")}</span>
      </div>
      <h2>{s.title}</h2>
      <p>{s.desc}</p>
      <ul className="s-highlights">
        {s.highlights.map((h) => <li key={h.text}><Icon name={h.icon} /> {h.text}</li>)}
      </ul>
      <div className="s-actions">
        <Link to="/hop-dong" className="s-soft"><Icon name="visibility" /> Xem phân tích</Link>
        <button type="button" className="s-main" onClick={() => setNotice(true)}>
          <Icon name="download_for_offline" /> Tải Word (.docx)
        </button>
      </div>
      {notice && <p className="c-notice" role="status">Bản demo: chưa có tệp tải về, sẽ có khi kết nối backend.</p>}
    </article>
  );
}
