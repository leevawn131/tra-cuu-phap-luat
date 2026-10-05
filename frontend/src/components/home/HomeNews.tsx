import { Link } from "react-router-dom";
import Icon from "./Icon";
import { latestNews } from "../../data/news";

export default function HomeNews() {
  const [main, ...rest] = latestNews;
  return (
    <div className="home-col">
      <div className="home-col-head">
        <h3><Icon name="newspaper" /> Tin tức pháp lý & tiêu điểm</h3>
        <Link to="/tin-tuc">Xem tất cả <Icon name="arrow_forward" /></Link>
      </div>

      <article className="home-feature">
        <div className="h-thumb big" aria-hidden="true">{main.category.charAt(0)}</div>
        <div className="home-feature-body">
          <div className="meta"><span className="tag">{main.category}</span>
            <span><Icon name="schedule" /> {main.date}</span></div>
          <h4><Link to={`/tin-tuc/${main.id}`}>{main.title}</Link></h4>
          <p>{main.summary}</p>
        </div>
      </article>

      {rest.slice(0, 3).map((n) => (
        <article key={n.id} className="home-row">
          <div className="h-thumb" aria-hidden="true">{n.category.charAt(0)}</div>
          <div>
            <div className="meta"><span className="cat">{n.category}</span><span>· {n.date}</span></div>
            <h5><Link to={`/tin-tuc/${n.id}`}>{n.title}</Link></h5>
          </div>
        </article>
      ))}
    </div>
  );
}
