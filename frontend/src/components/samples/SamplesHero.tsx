import { Link } from "react-router-dom";
import Icon from "../home/Icon";

export default function SamplesHero() {
  return (
    <section className="s-hero">
      <div className="container">
        <nav className="breadcrumb" aria-label="Đường dẫn">
          <Link to="/"><Icon name="home" /> Trang chủ</Link>
          <span aria-hidden="true">/</span>
          <strong>Hợp đồng mẫu</strong>
        </nav>
        <h1>Kho hợp đồng mẫu và biểu mẫu pháp lý</h1>
        <p>Tra cứu mẫu hợp đồng dân sự, kinh tế, lao động và nhà đất, tải về và chỉnh sửa theo nhu cầu của bạn.</p>
        <span className="c-demo-note">Bản demo giao diện, dữ liệu mẫu</span>
      </div>
    </section>
  );
}
