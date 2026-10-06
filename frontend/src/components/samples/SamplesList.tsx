import SampleCard from "./SampleCard";
import type { Sample } from "../../data/samplesData";
import type { View } from "./SamplesFilterBar";

export default function SamplesList({ items, view }: { items: Sample[]; view: View }) {
  if (items.length === 0) {
    return <p className="c-empty">Không tìm thấy hợp đồng phù hợp. Hãy thử từ khóa hoặc bộ lọc khác.</p>;
  }
  return (
    <div className={`s-list ${view}`}>
      {items.map((s) => <SampleCard key={s.id} s={s} />)}
    </div>
  );
}
