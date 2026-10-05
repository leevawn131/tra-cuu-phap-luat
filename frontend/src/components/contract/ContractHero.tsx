import { Link } from "react-router-dom";
import Icon from "../home/Icon";

const features = [
  { icon: "manage_search", text: "Rà soát điều khoản trọng yếu" },
  { icon: "balance", text: "Đối chiếu pháp luật hiện hành" },
  { icon: "lightbulb", text: "Gợi ý chỉnh sửa điều khoản" },
];

export default function ContractHero() {
  return (
    <section className="c-hero">
      <div className="container">
        <nav className="breadcrumb" aria-label="Đường dẫn">
          <Link to="/"><Icon name="home" /> Trang chủ</Link>
          <span aria-hidden="true">/</span>
          <strong>Tra cứu hợp đồng</strong>
        </nav>
        <h1>Tra cứu, tải lên và rà soát hợp đồng bằng <em>trí tuệ nhân tạo</em></h1>
        <p>Tải hợp đồng của bạn lên để AI chỉ ra điều khoản rủi ro, hoặc tra cứu kho hợp đồng mẫu theo từng lĩnh vực.</p>
        <ul className="c-features">
          {features.map((f) => (
            <li key={f.text}><Icon name={f.icon} /> {f.text}</li>
          ))}
        </ul>
        <span className="c-demo-note">Bản demo giao diện, chưa kết nối AI</span>
      </div>
    </section>
  );
}
