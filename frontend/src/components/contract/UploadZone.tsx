import { useState, type DragEvent, type ChangeEvent } from "react";
import Icon from "../home/Icon";

const MAX_MB = 25;
const ALLOWED = [".pdf", ".doc", ".docx", ".png", ".jpg", ".jpeg"];

export default function UploadZone() {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState("");
  const [over, setOver] = useState(false);
  const [notice, setNotice] = useState("");

  function pick(f: File | undefined) {
    setNotice("");
    if (!f) return;
    const ext = "." + (f.name.split(".").pop() || "").toLowerCase();
    if (!ALLOWED.includes(ext)) return setError("Định dạng không được hỗ trợ.");
    if (f.size > MAX_MB * 1024 * 1024) return setError(`Tệp vượt quá ${MAX_MB}MB.`);
    setError("");
    setFile(f);
  }
  const onDrop = (e: DragEvent) => { e.preventDefault(); setOver(false); pick(e.dataTransfer.files[0]); };
  const onChange = (e: ChangeEvent<HTMLInputElement>) => pick(e.target.files?.[0]);

  return (
    <section className="container c-block">
      <div className="c-upload-card">
        <h2><Icon name="cloud_upload" /> Tải hợp đồng của bạn lên để phân tích</h2>
        <p className="c-sub">Chọn tệp có sẵn hoặc dùng các cách nhập khác (sắp có).</p>

        <div className="c-upload-grid">
          <label
            className={`c-drop${over ? " over" : ""}`}
            onDragOver={(e) => { e.preventDefault(); setOver(true); }}
            onDragLeave={() => setOver(false)}
            onDrop={onDrop}
          >
            <input type="file" accept={ALLOWED.join(",")} onChange={onChange} />
            <Icon name="upload_file" className="c-drop-icon" />
            <strong>Kéo và thả tệp hợp đồng vào đây</strong>
            <span>Hỗ trợ PDF, DOCX, DOC, JPEG, PNG (tối đa {MAX_MB}MB)</span>
            <span className="btn btn-primary"><Icon name="add" /> Chọn tệp</span>
          </label>

          <div className="c-ocr">
            <div className="c-ocr-head">
              <Icon name="document_scanner" />
              <div><strong>Quét OCR và nhập từ VNeID</strong><span>Chụp ảnh hợp đồng giấy hoặc liên kết định danh</span></div>
              <span className="c-soon">Sắp có</span>
            </div>
            <div className="c-ocr-actions">
              <button type="button" disabled><Icon name="photo_camera" /> Bật camera quét</button>
              <button type="button" disabled><Icon name="fingerprint" /> Nhập từ VNeID</button>
            </div>
          </div>
        </div>

        {error && <p className="c-error" role="alert">{error}</p>}
        {file && (
          <div className="c-file">
            <Icon name="description" />
            <span>{file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
            <button type="button" className="btn btn-primary"
              onClick={() => setNotice("Chức năng phân tích sẽ được kết nối khi backend AI hoàn thành.")}>
              Phân tích bằng AI
            </button>
            <button type="button" className="c-link" onClick={() => setFile(null)}>Bỏ chọn</button>
          </div>
        )}
        {notice && <p className="c-notice" role="status">{notice}</p>}
      </div>
    </section>
  );
}
