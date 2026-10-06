import { Link } from "react-router-dom";
import Icon from "../home/Icon";
import { trust } from "../../data/samplesData";

export default function TrustPillars() {
  return (
    <section className="container c-block s-trust-wrap">
      <div className="s-trust">
        {trust.map((t) => (
          <article key={t.title}>
            <div className="s-trust-icon"><Icon name={t.icon} /></div>
            <div><h3>{t.title}</h3><p>{t.desc}</p></div>
          </article>
        ))}
      </div>
      <div className="s-help">
        <span><Icon name="call" /> Gặp tranh chấp về hợp đồng thuê nhà, vay nợ hoặc tiền lương? Hãy gửi yêu cầu để được hỗ trợ.</span>
        <Link to="/ho-tro">Gửi yêu cầu trợ giúp</Link>
      </div>
    </section>
  );
}
