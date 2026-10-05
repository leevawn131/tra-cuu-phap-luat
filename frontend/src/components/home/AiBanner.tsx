import { Link } from "react-router-dom";
import Icon from "./Icon";
import { aiQuestions } from "../../data/homeData";

export default function AiBanner() {
  return (
    <section className="container home-block">
      <div className="ai-banner">
        <Icon name="psychology" className="ai-bg-icon" />
        <div className="ai-text">
          <div className="ai-badges">
            <span className="ai-badge"><Icon name="auto_awesome" /> Trợ lý AI pháp lý</span>
            <span className="ai-badge ghost">Trực tuyến 24/7</span>
          </div>
          <h3>Trợ lý AI pháp lý – giải đáp và phân tích văn bản tức thì</h3>
          <p>Rà soát rủi ro hợp đồng, đối chiếu với luật hiện hành và hướng dẫn thủ tục hành chính.</p>
          <div className="ai-questions">
            <span>Câu hỏi tiêu biểu:</span>
            {aiQuestions.map((q) => (
              <Link key={q} to={`/ai?q=${encodeURIComponent(q)}`}><Icon name="quiz" /> {q}</Link>
            ))}
          </div>
        </div>
        <div className="ai-cta">
          <Link to="/ai" className="ai-btn"><Icon name="smart_toy" /> Trò chuyện với AI ngay</Link>
        </div>
      </div>
    </section>
  );
}
