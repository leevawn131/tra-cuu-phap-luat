import { useState, type FormEvent } from "react";
import Icon from "../home/Icon";

export default function NewsletterBox() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const submit = (e: FormEvent) => { e.preventDefault(); if (email.includes("@")) setDone(true); };
  return (
    <section className="container nr-block">
      <div className="nr-news">
        <div className="nr-news-left">
          <span><Icon name="mail" /></span>
          <div>
            <h3>Đăng Ký Nhận Bản Tin Pháp Lý Hàng Tuần</h3>
            <p>Nhận tóm tắt văn bản pháp quy mới ban hành, án lệ quan trọng và lịch tiếp công dân định kỳ gửi trực tiếp vào hòm thư điện tử của bạn vào mỗi sáng Thứ Hai.</p>
          </div>
        </div>
        <form onSubmit={submit}>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Nhập địa chỉ email của bạn..." aria-label="Email" required />
          <button type="submit">Đăng ký miễn phí</button>
        </form>
        {done && <p className="c-notice" role="status">Đã ghi nhận (bản demo, chưa gửi thật).</p>}
      </div>
    </section>
  );
}
