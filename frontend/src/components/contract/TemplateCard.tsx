import Icon from "../home/Icon";
import type { Template } from "../../data/contractData";

export default function TemplateCard({ t }: { t: Template }) {
  return (
    <article className="c-card">
      <div className="c-card-top"><span className="tag">{t.law}</span><code>{t.code}</code></div>
      <h3>{t.title}</h3>
      <p>{t.desc}</p>
      <div className="c-card-actions">
        <button type="button" className="c-btn-soft"><Icon name="analytics" /> Xem phân tích rủi ro</button>
        <button type="button" className="c-btn-main"><Icon name="download" /> Tải mẫu (.DOCX)</button>
      </div>
    </article>
  );
}
