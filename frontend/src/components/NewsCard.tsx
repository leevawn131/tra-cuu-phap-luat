import type { NewsItem } from "../data/news";

export default function NewsCard({ item }: { item: NewsItem }) {
  return (
    <article className="news-card">
      <div className="news-thumb" aria-hidden="true">{item.category.charAt(0)}</div>
      <div className="news-body">
        <div className="news-meta"><span className="tag">{item.category}</span><time>{item.date}</time></div>
        <h3><a href={`/tin-tuc/${item.id}`}>{item.title}</a></h3>
        <p>{item.summary}</p>
      </div>
    </article>
  );
}
