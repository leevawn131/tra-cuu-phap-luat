import { Link } from "react-router-dom";
import Icon from "../home/Icon";
import { sampleCategories, samples } from "../../data/samplesData";

type Props = { category: string; onCategory: (v: string) => void };

export default function SamplesSidebar({ category, onCategory }: Props) {
  return (
    <aside className="s-side">
      <div className="s-side-card">
        <strong className="s-side-title"><Icon name="filter_alt" /> Lĩnh vực hợp đồng</strong>
        <ul>
          {sampleCategories.map((c) => {
            const n = samples.filter((s) => s.category === c.id).length;
            return (
              <li key={c.id}>
                <button type="button" className={category === c.id ? "active" : ""}
                  onClick={() => onCategory(category === c.id ? "all" : c.id)}>
                  <span><Icon name={c.icon} /> {c.label}</span><em>{n}</em>
                </button>
              </li>
            );
          })}
        </ul>
        <p className="s-note"><Icon name="policy" /> Số trong ngoặc là số mẫu hiện có trong dữ liệu demo.</p>
      </div>

      <div className="s-promo">
        <strong><Icon name="contact_support" /> Cần luật sư soạn riêng?</strong>
        <p>Nhờ luật sư điều chỉnh điều khoản hoặc rà soát giao dịch có giá trị lớn.</p>
        <Link to="/ho-tro">Đăng ký tư vấn <Icon name="open_in_new" /></Link>
      </div>
    </aside>
  );
}
