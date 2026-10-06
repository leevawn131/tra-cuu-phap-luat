import { useState } from "react";
import Icon from "../home/Icon";
import { media } from "../../data/newsroomData";

export default function MultimediaSection() {
  const [tab, setTab] = useState<"video" | "podcast">("video");
  return (
    <section className="nr-media">
      <div className="container">
        <div className="nr-media-head">
          <div>
            <h2><i /> Phổ Biến Pháp Luật Đa Phương Tiện</h2>
            <p>Hình thức tiếp cận kiến thức pháp luật trực quan, dễ hiểu qua video chuyên đề và podcast âm thanh số.</p>
          </div>
          <div className="nr-tabs" role="tablist">
            <button type="button" role="tab" aria-selected={tab === "video"} className={tab === "video" ? "on" : ""} onClick={() => setTab("video")}>Video bài giảng</button>
            <button type="button" role="tab" aria-selected={tab === "podcast"} className={tab === "podcast" ? "on" : ""} onClick={() => setTab("podcast")}>Podcast âm thanh</button>
          </div>
        </div>
        <div className="nr-media-grid">
          {media.map((m) => (
            <article key={m.title} className="nr-media-card nr-group">
              <div className="nr-media-img">
                <img src={m.img} alt="" />
                <div className="nr-play"><span><Icon name="play_arrow" /></span></div>
                <em>{m.duration}</em>
              </div>
              <div className="nr-media-body">
                <small className={m.tone}>{m.label}</small>
                <h3>{m.title}</h3>
                <div className="nr-media-foot"><span>{m.author}</span><span>{m.stat}</span></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
