import TemplateCard from "./TemplateCard";
import type { Template } from "../../data/contractData";

export default function TemplateList({ items }: { items: Template[] }) {
  return (
    <div className="c-list">
      <div className="c-list-head"><strong>Danh mục mẫu chuẩn</strong><span>Hiển thị {items.length} kết quả</span></div>
      {items.length === 0 ? (
        <p className="c-empty">Không tìm thấy hợp đồng phù hợp. Hãy thử từ khóa khác.</p>
      ) : (
        items.map((t) => <TemplateCard key={t.id} t={t} />)
      )}
    </div>
  );
}
