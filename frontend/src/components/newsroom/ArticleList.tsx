import { Link } from "react-router-dom";
import Icon from "../home/Icon";
import type { Article } from "../../data/newsroomData";

export default function ArticleList({ items }: { items: Article[] }) {
  return (
    <section className="nr-articles">
      <div className="nr-section-head">
        <h2><i /> Tin Phổ Biến & Hướng Dẫn Thực Thi Pháp Luật</h2>
        <span>Hiển thị 12 trên 580 bài viết</span>
      </div>

      {items.length === 0 && <p className="c-empty">Chưa có bài viết trong chuyên mục này (bản demo chỉ có 3 bài).</p>}

      {items.map((a) => (
        <article key={a.id} className="nr-article nr-group">
          <div className="nr-article-img"><img src={a.img} alt="" /><span className={`nr-tag ${a.tone}`}>{a.tag}</span></div>
          <div className="nr-article-body">
            <div>
              <div className="nr-article-meta"><b className={a.tone}>{a.topic}</b><span>•</span><span>{a.when}</span></div>
              <h3><Link to={`/tin-tuc/${a.id}`}>{a.title}</Link></h3>
              <p>{a.desc}</p>
            </div>
            <div className="nr-article-foot">
              <span><Icon name="visibility" /> {a.views}</span>
              <Link to={`/tin-tuc/${a.id}`}>Xem chi tiết <Icon name="chevron_right" /></Link>
            </div>
          </div>
        </article>
      ))}

      <nav className="nr-pager" aria-label="Phân trang">
        <button type="button" aria-label="Trang trước"><Icon name="chevron_left" /></button>
        <button type="button" className="on">1</button>
        <button type="button">2</button>
        <button type="button">3</button>
        <span>...</span>
        <button type="button">48</button>
        <button type="button" className="wide">Trang sau <Icon name="chevron_right" /></button>
      </nav>
    </section>
  );
}
