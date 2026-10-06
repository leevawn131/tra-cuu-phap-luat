import Icon from "../home/Icon";
import { sampleCategories } from "../../data/samplesData";

export type Format = "all" | "docx" | "pdf";
export type View = "grid" | "list";
type Props = {
  query: string; onQuery: (v: string) => void;
  category: string; onCategory: (v: string) => void;
  format: Format; onFormat: (v: Format) => void;
  view: View; onView: (v: View) => void;
  total: number;
};

export default function SamplesFilterBar(p: Props) {
  return (
    <div className="container s-panel-wrap">
      <div className="s-panel">
        <div className="s-fields">
          <label className="s-field grow">
            <Icon name="search" />
            <input value={p.query} onChange={(e) => p.onQuery(e.target.value)}
              placeholder="Nhập tên hợp đồng, mã mẫu hoặc điều khoản cần tìm (VD: thuê trọ, đặt cọc…)" aria-label="Tìm hợp đồng mẫu" />
          </label>
          <label className="s-field">
            <Icon name="category" />
            <select value={p.category} onChange={(e) => p.onCategory(e.target.value)} aria-label="Lĩnh vực">
              <option value="all">Tất cả lĩnh vực</option>
              {sampleCategories.map((c) => <option key={c.id} value={c.id}>{c.label}</option>)}
            </select>
          </label>
          <label className="s-field">
            <Icon name="description" />
            <select value={p.format} onChange={(e) => p.onFormat(e.target.value as Format)} aria-label="Định dạng">
              <option value="all">Mọi định dạng</option>
              <option value="docx">Word (.docx)</option>
              <option value="pdf">PDF</option>
            </select>
          </label>
        </div>

        <div className="s-row">
          <div className="c-chips">
            <button type="button" className={p.category === "all" ? "active" : ""} onClick={() => p.onCategory("all")}>Tất cả</button>
            {sampleCategories.map((c) => (
              <button key={c.id} type="button" className={p.category === c.id ? "active" : ""} onClick={() => p.onCategory(c.id)}>
                {c.label}
              </button>
            ))}
          </div>
          <div className="s-view">
            <span>Hiển thị <b>{p.total}</b> mẫu</span>
            <div role="group" aria-label="Chế độ xem">
              <button type="button" aria-pressed={p.view === "grid"} className={p.view === "grid" ? "on" : ""}
                onClick={() => p.onView("grid")} title="Dạng lưới"><Icon name="grid_view" /></button>
              <button type="button" aria-pressed={p.view === "list"} className={p.view === "list" ? "on" : ""}
                onClick={() => p.onView("list")} title="Dạng danh sách"><Icon name="view_list" /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
