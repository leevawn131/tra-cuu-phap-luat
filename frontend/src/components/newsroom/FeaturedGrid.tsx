import { Link } from "react-router-dom";
import Icon from "../home/Icon";
import { lead, highlights } from "../../data/newsroomData";

export default function FeaturedGrid() {
  return (
    <section className="container nr-block">
      <div className="nr-featured">
        <article className="nr-lead nr-group">
          <div className="nr-lead-img">
            <img src={lead.img} alt="" />
            <div className="nr-shade" />
            <div className="nr-lead-tags"><span className="nr-pill solid">{lead.tag}</span><span className="nr-pill light">{lead.when}</span></div>
            <div className="nr-lead-meta">
              <span><Icon name="account_balance" /> {lead.source}</span><span>•</span>
              <span><Icon name="schedule" /> {lead.ago}</span>
              <span className="nr-views"><Icon name="visibility" /> {lead.views}</span>
            </div>
          </div>
          <div className="nr-lead-body">
            <h2>{lead.title}</h2>
            <p>{lead.desc}</p>
            <div className="nr-lead-actions">
              <div>
                <button type="button"><Icon name="bookmark_border" /> Lưu bài viết</button>
                <button type="button"><Icon name="share" /> Chia sẻ</button>
              </div>
              <Link to="/tin-tuc/1" className="nr-readmore">Đọc toàn văn <Icon name="arrow_forward" /></Link>
            </div>
          </div>
        </article>

        <div className="nr-highlights">
          {highlights.map((h) => (
            <article key={h.title} className="nr-hl nr-group">
              <div className="nr-hl-img"><img src={h.img} alt="" /><span className={`nr-badge ${h.tone}`}>{h.badge}</span></div>
              <div className="nr-hl-body">
                <span className={`nr-hl-meta ${h.tone}`}><Icon name={h.metaIcon} /> {h.meta}</span>
                <h3><Link to="/tin-tuc/1">{h.title}</Link></h3>
                <div className="nr-hl-foot"><span>{h.source}</span><span><Icon name="visibility" /> {h.views}</span></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
