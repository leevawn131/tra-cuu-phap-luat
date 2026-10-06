import { Link } from "react-router-dom";
import Icon from "../home/Icon";
import { pills } from "../../data/newsroomData";

type Props = { query: string; onQuery: (v: string) => void; category: string; onCategory: (v: string) => void };
const selectOptions = ["all", "chinhsach", "doisong", "canhbao", "tungtu"];
const selectLabel: Record<string, string> = {
  all: "Tất cả chuyên mục", chinhsach: "Chính sách mới", doisong: "Pháp lý đời sống", canhbao: "Cảnh báo lừa đảo", tungtu: "Án lệ & Tòa án",
};

export default function NewsroomHero({ query, onQuery, category, onCategory }: Props) {
  return (
    <section className="nr-hero">
      <div className="container">
        <div className="nr-hero-top">
          <nav className="breadcrumb" aria-label="Đường dẫn">
            <Link to="/"><Icon name="home" /> Trang chủ</Link><span aria-hidden="true">/</span>
            <strong>Tin tức & Phổ biến pháp luật</strong>
          </nav>
          <span className="nr-live"><i /> CẬP NHẬT 24/7 • TRUYỀN THÔNG CHÍNH SÁCH SỐ</span>
        </div>

        <div className="nr-hero-main">
          <div className="nr-hero-text">
            <h1>Tin Tức & Phổ Biến <span>Pháp Luật Toàn Dân</span></h1>
            <p>Cập nhật kịp thời nghị định, thông tư mới ban hành, bình luận chuyên gia, giải đáp pháp lý thực tiễn và hướng dẫn thực thi quyền công dân trong kỷ nguyên số hóa quốc gia.</p>
          </div>
          <div className="nr-search">
            <Icon name="search" />
            <input value={query} onChange={(e) => onQuery(e.target.value)} placeholder="Tìm kiếm chính sách, luật, thông tư mới..." aria-label="Tìm tin tức" />
            <select value={selectOptions.includes(category) ? category : "all"} onChange={(e) => onCategory(e.target.value)} aria-label="Chuyên mục">
              {selectOptions.map((o) => <option key={o} value={o}>{selectLabel[o]}</option>)}
            </select>
            <button type="button">Tìm kiếm</button>
          </div>
        </div>

        <div className="c-chips" role="tablist" aria-label="Chuyên mục">
          {pills.map((p) => (
            <button key={p.id} type="button" role="tab" aria-selected={category === p.id}
              className={category === p.id ? "active" : ""} onClick={() => onCategory(p.id)}>{p.label}</button>
          ))}
        </div>
      </div>
    </section>
  );
}
