import { Link } from "react-router-dom";
import Icon from "./Icon";
import { homeDocs } from "../../data/homeData";

export default function HomeDocuments() {
  return (
    <div className="home-col">
      <div className="home-col-head">
        <h3><Icon name="verified" /> Văn bản mới có hiệu lực</h3>
      </div>
      {homeDocs.map((d) => (
        <article key={d.no} className="doc-card">
          <div className="doc-top"><span className="doc-status">● Còn hiệu lực</span><code>{d.no}</code></div>
          <h4>{d.title}</h4>
          <p>{d.desc}</p>
          <div className="doc-meta">
            <span>Cơ quan: <strong>{d.issuer}</strong></span>
            <span>Áp dụng: <strong>{d.effective}</strong></span>
          </div>
          <div className="doc-actions">
            <Link to="/van-ban/1"><Icon name="visibility" /> Xem toàn văn</Link>
            <button type="button" aria-label="Tải về"><Icon name="download" /></button>
          </div>
        </article>
      ))}
    </div>
  );
}
