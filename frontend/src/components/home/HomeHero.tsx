import SearchBar from "../SearchBar";

const popular = ["Luật Đất đai", "Hợp đồng thuê nhà", "Mức phạt nồng độ cồn", "Bộ luật Lao động"];

export default function HomeHero() {
  return (
    <section className="home-hero">
      {/* Đặt ảnh vào public/images/ */}
      <img className="hero-drum" src="/images/trong-dong.png" alt="" aria-hidden="true" />
      <img className="hero-map" src="/images/ban-do-vn.png" alt="" aria-hidden="true" />
      <div className="home-hero-inner">
        <h1>Đồng hành cùng người dân vào kỷ nguyên mới</h1>
        <p>Tra cứu văn bản, kiểm tra hợp đồng và hỏi đáp pháp luật bằng ngôn ngữ dễ hiểu.</p>
        <SearchBar />
        <div className="chips">
          <span>Tìm nhiều:</span>
          {popular.map((p) => <a key={p} href={`/tim-kiem?q=${encodeURIComponent(p)}`}>{p}</a>)}
        </div>
      </div>
    </section>
  );
}
