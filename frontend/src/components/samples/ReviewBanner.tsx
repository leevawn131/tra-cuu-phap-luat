import { Link } from "react-router-dom";
import Icon from "../home/Icon";

export default function ReviewBanner() {
  return (
    <section className="container c-block">
      <div className="s-banner">
        <div>
          <span className="s-banner-tag"><Icon name="bolt" /> Rà soát hợp đồng bằng AI</span>
          <h2>Rà soát hợp đồng trước khi ký</h2>
          <p>Đang chuẩn bị ký hợp đồng thuê nhà, mua bán đất hay hợp đồng lao động? Tải tệp lên để AI chỉ ra điều khoản bất lợi hoặc mơ hồ.</p>
        </div>
        <Link to="/hop-dong" className="s-banner-btn"><Icon name="upload_file" /> Tải hợp đồng lên</Link>
      </div>
    </section>
  );
}
