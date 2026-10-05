import ServiceCard from "./ServiceCard";
import { services } from "../../data/homeData";

export default function ServiceGrid() {
  return (
    <section className="container home-block">
      <div className="home-head">
        <h3>Dịch vụ pháp lý trực tuyến</h3>
        <p>Bộ công cụ tra cứu phục vụ người dân, doanh nghiệp và cán bộ.</p>
      </div>
      <div className="service-grid">
        {services.map((s) => <ServiceCard key={s.title} s={s} />)}
      </div>
    </section>
  );
}
