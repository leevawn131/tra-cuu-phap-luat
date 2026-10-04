import { useState } from "react";

export default function SearchBar() {
  const [q, setQ] = useState("");
  return (
    <form className="searchbar" role="search" onSubmit={(e) => { e.preventDefault(); /* TODO: gọi API */ }}>
      <select aria-label="Phạm vi tìm kiếm" defaultValue="all">
        <option value="all">Tất cả</option>
        <option value="vanban">Văn bản</option>
        <option value="hopdong">Hợp đồng</option>
        <option value="ai">Hỏi AI</option>
      </select>
      <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Nhập từ khóa, số hiệu văn bản hoặc câu hỏi pháp luật…" />
      <button className="btn btn-primary" type="submit">Tìm kiếm</button>
    </form>
  );
}
