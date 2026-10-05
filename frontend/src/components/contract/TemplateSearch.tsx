import Icon from "../home/Icon";
import { categories } from "../../data/contractData";

type Props = { query: string; onQuery: (q: string) => void; category: string; onCategory: (c: string) => void };

export default function TemplateSearch({ query, onQuery, category, onCategory }: Props) {
  return (
    <section className="container c-block">
      <h2 className="c-title">Kho hợp đồng mẫu</h2>
      <p className="c-sub">Tìm theo tên hợp đồng, mã mẫu hoặc nội dung điều khoản.</p>
      <div className="c-search">
        <Icon name="search" />
        <input value={query} onChange={(e) => onQuery(e.target.value)}
          placeholder="Ví dụ: thuê mặt bằng, thử việc, đặt cọc…" aria-label="Tìm hợp đồng mẫu" />
      </div>
      <div className="c-chips" role="tablist" aria-label="Lọc theo lĩnh vực">
        {categories.map((c) => (
          <button key={c.id} type="button" role="tab" aria-selected={category === c.id}
            className={category === c.id ? "active" : ""} onClick={() => onCategory(c.id)}>
            {c.label}
          </button>
        ))}
      </div>
    </section>
  );
}
