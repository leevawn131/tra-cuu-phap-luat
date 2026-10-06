import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Icon from "../home/Icon";
import { upcoming, infographics } from "../../data/newsroomData";

function AiWidget() {
  const [q, setQ] = useState("");
  const go = useNavigate();
  return (
    <div className="nr-widget nr-ai">
      <div className="nr-widget-row">
        <strong><span className="nr-ai-icon"><Icon name="smart_toy" /></span> Trợ Lý AI Pháp Luật 60s</strong>
        <span className="nr-beta">BETA V3</span>
      </div>
      <p>Bạn cần tóm tắt nhanh điều luật nào hôm nay? Đặt câu hỏi thực tế, AI trích xuất căn cứ từ cơ sở dữ liệu luật quốc gia đã kiểm duyệt.</p>
      <div className="nr-ai-box">
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="VD: Không mang bằng lái xe phạt bao nhiêu?" aria-label="Câu hỏi cho AI" />
        <button type="button" onClick={() => go(`/ai?q=${encodeURIComponent(q)}`)}><Icon name="send" /> Hỏi AI tư vấn ngay</button>
      </div>
      <div className="nr-hashtags">
        <span>#mức_đóng_bhxh</span> • <span>#làm_sổ_đỏ_lần_đầu</span> • <span>#thừa_kế_đất_đai</span>
      </div>
    </div>
  );
}

function Upcoming() {
  return (
    <div className="nr-widget">
      <div className="nr-widget-row">
        <h3><Icon name="event_upcoming" /> Sắp có hiệu lực trong tháng</h3>
        <Link to="/van-ban/moi">Tất cả</Link>
      </div>
      {upcoming.map((d) => (
        <div key={d.no} className="nr-doc">
          <div className="nr-doc-top"><b>{d.no}</b><span className={d.tone}><Icon name="timer" /> {d.left}</span></div>
          <p>{d.desc}</p>
          <div className="nr-doc-foot"><span>{d.date}</span><a href="#"><Icon name="download" /> Tải PDF</a></div>
        </div>
      ))}
    </div>
  );
}

function Infographics() {
  return (
    <div className="nr-widget">
      <div className="nr-widget-row">
        <h3><Icon name="auto_stories" /> Infographic & E-Magazine</h3>
        <Icon name="photo_library" />
      </div>
      {infographics.map((i) => (
        <Link key={i.title} to="/infographic" className={`nr-info nr-group${i.tall ? " tall" : ""}`}>
          <img src={i.img} alt="" />
          <div><small>{i.label}</small><strong>{i.title}</strong></div>
        </Link>
      ))}
    </div>
  );
}

function Hotline() {
  return (
    <div className="nr-hotline">
      <div className="nr-hotline-head">
        <span><Icon name="support_agent" /></span>
        <div><small>TRỢ GIÚP PHÁP LÝ NHÀ NƯỚC</small><strong>Tư Vấn Miễn Phí 100%</strong></div>
      </div>
      <p>Trung tâm Trợ giúp pháp lý Nhà nước thuộc Bộ Tư pháp phục vụ người nghèo, đối tượng chính sách, người có công và trẻ em.</p>
      <div className="nr-hotline-box">
        <div><small>Tổng đài giải đáp 24/7:</small><b>1900 6868</b></div>
        <a href="tel:19006868">Gọi ngay</a>
      </div>
    </div>
  );
}

export default function NewsSidebar() {
  return (
    <aside className="nr-sidebar">
      <AiWidget /><Upcoming /><Infographics /><Hotline />
    </aside>
  );
}
