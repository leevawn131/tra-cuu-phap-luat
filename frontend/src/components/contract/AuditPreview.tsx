import { Link } from "react-router-dom";
import Icon from "../home/Icon";

// Dữ liệu minh họa, không phải kết quả AI thật
export default function AuditPreview() {
  return (
    <aside className="c-audit" aria-label="Kết quả thẩm định minh họa">
      <div className="c-audit-head">
        <strong><Icon name="smart_toy" /> Kết quả thẩm định (minh họa)</strong>
        <span className="c-warn-count">2 cảnh báo</span>
      </div>

      <div className="c-audit-card">
        <small>Hồ sơ mẫu</small>
        <h4>Hợp đồng thuê nhà (mẫu minh họa)</h4>
        <span className="c-muted">File: hop-dong-thue-nha-mau.pdf</span>

        <div className="c-score">
          <div>
            <small>Điểm an toàn pháp lý (minh họa)</small>
            <div><b>88</b><span> / 100</span></div>
          </div>
          <svg viewBox="0 0 36 36" className="c-gauge" aria-hidden="true">
            <path d="M18 2.08a15.9 15.9 0 0 1 0 31.83a15.9 15.9 0 0 1 0-31.83" fill="none" stroke="#d8e3fb" strokeWidth="3.5" />
            <path d="M18 2.08a15.9 15.9 0 0 1 0 31.83a15.9 15.9 0 0 1 0-31.83" fill="none" stroke="#00a896"
              strokeWidth="3.5" strokeDasharray="88, 100" strokeLinecap="round" />
          </svg>
        </div>

        <dl className="c-parties">
          <div><dt>Bên cho thuê (Bên A)</dt><dd>[Họ tên]</dd></div>
          <div><dt>Bên thuê (Bên B)</dt><dd>[Họ tên]</dd></div>
          <div><dt>Giá thuê hằng tháng</dt><dd>[Số tiền]</dd></div>
          <div><dt>Tiền đặt cọc</dt><dd>[Số tiền]</dd></div>
        </dl>

        <div className="c-risk">
          <strong><Icon name="warning" /> Cảnh báo rủi ro cao</strong>
          <blockquote>
            Điều 6.2 (mẫu): Nếu Bên B chậm thanh toán quá số ngày quy định thì Bên A được chấm dứt hợp đồng
            và không hoàn lại tiền đặt cọc.
          </blockquote>
          <p><Icon name="gavel" /> <b>Đối chiếu pháp lý:</b> cần kiểm tra với quy định về chấm dứt hợp đồng và phạt vi phạm
            (AI sẽ trích dẫn điều luật cụ thể khi được kết nối).</p>
          <p><Icon name="lightbulb" /> <b>Gợi ý:</b> bổ sung thời hạn thông báo và thời gian khắc phục trước khi chấm dứt.</p>
        </div>

        <div className="c-risk-mid">
          <span><Icon name="info" /> Điều 9: bảo trì thiết bị hao mòn tự nhiên</span>
          <em>Rủi ro trung bình</em>
        </div>

        <Link to="/ai" className="btn btn-primary c-full"><Icon name="chat" /> Hỏi trợ lý AI về hợp đồng này</Link>
      </div>

      <div className="c-lawyer">
        <div><strong>Cần luật sư hỗ trợ?</strong><span>Kết nối với luật sư để được tư vấn trực tiếp.</span></div>
        <Link to="/ho-tro">Đặt lịch tư vấn</Link>
      </div>
    </aside>
  );
}
