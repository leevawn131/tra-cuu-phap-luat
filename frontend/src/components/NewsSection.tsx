import { latestNews } from "../data/news";
import NewsCard from "./NewsCard";

export default function NewsSection() {
  return (
    <section className="container news-section">
      <div className="section-head">
        <h2>Tin pháp luật mới</h2>
        <a href="/tin-tuc">Xem tất cả tin</a>
      </div>
      <div className="news-grid">
        {latestNews.map((n) => <NewsCard key={n.id} item={n} />)}
      </div>
    </section>
  );
}
