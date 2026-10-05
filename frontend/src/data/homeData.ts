export type Service = {
  icon: string; title: string; desc: string;
  metaLeft: string; metaRight: string; href: string; badge?: string;
};

export const aiQuestions = [
  "Rà soát hợp đồng thuê nhà",
  "Điểm mới Luật Đất đai về cấp sổ đỏ",
  "Quy định thử việc theo Bộ luật Lao động",
];

export const services: Service[] = [
  { icon: "description", title: "Hợp đồng mẫu", href: "/hop-dong", metaLeft: "Kho biểu mẫu", metaRight: "Word / PDF",
    desc: "Biểu mẫu chuẩn hóa theo pháp luật thương mại, dân sự và lao động." },
  { icon: "menu_book", title: "Văn bản pháp luật", href: "/van-ban", metaLeft: "Đồng bộ tự động", metaRight: "Cập nhật hằng ngày",
    desc: "Hệ thống luật, nghị định, thông tư được cập nhật từ nguồn chính thống." },
  { icon: "auto_fix_high", title: "AI pháp lý", href: "/ai", badge: "Mới", metaLeft: "Rà soát tức thì", metaRight: "Có dẫn điều luật",
    desc: "Phân tích hợp đồng, cảnh báo điều khoản bất lợi và rủi ro pháp lý." },
  { icon: "support_agent", title: "Hỗ trợ pháp lý", href: "/ho-tro", metaLeft: "Hỏi đáp trực tiếp", metaRight: "Trợ giúp pháp lý",
    desc: "Kết nối với luật sư và kênh trợ giúp pháp lý cho người dân." },
  { icon: "gavel", title: "Án lệ & Nghị quyết", href: "/an-le", metaLeft: "Toàn văn án lệ", metaRight: "Nghị quyết HĐTP",
    desc: "Tra cứu án lệ của Tòa án nhân dân tối cao và các nghị quyết liên quan." },
  { icon: "account_balance", title: "Thủ tục hành chính", href: "/thu-tuc", metaLeft: "Nộp hồ sơ trực tuyến", metaRight: "Liên thông",
    desc: "Hướng dẫn thủ tục hành chính công, liên kết Cổng Dịch vụ công quốc gia." },
  { icon: "calculate", title: "Tính thuế & lệ phí", href: "/tien-ich/thue", metaLeft: "Tính nhanh", metaRight: "Kết quả ngay",
    desc: "Công cụ tính thuế thu nhập cá nhân, lệ phí trước bạ, phí công chứng." },
  { icon: "play_lesson", title: "Hướng dẫn tra cứu", href: "/huong-dan", metaLeft: "Video & cẩm nang", metaRight: "Dễ sử dụng",
    desc: "Cẩm nang số và video hướng dẫn sử dụng cổng tra cứu pháp luật." },
];

// Dữ liệu mẫu – thay bằng API sau này
export type HomeDoc = { no: string; title: string; desc: string; issuer: string; effective: string };
export const homeDocs: HomeDoc[] = [
  { no: "Số: 00/0000/NĐ-CP", title: "[Mẫu] Nghị định quy định chi tiết thi hành luật", issuer: "Chính phủ", effective: "Hôm nay",
    desc: "Nội dung mô tả ngắn của văn bản, thay bằng dữ liệu thật từ API." },
  { no: "Số: 00/0000/TT-BTP", title: "[Mẫu] Thông tư hướng dẫn biểu mẫu hồ sơ", issuer: "Bộ Tư pháp", effective: "01/11/2026",
    desc: "Nội dung mô tả ngắn của văn bản, thay bằng dữ liệu thật từ API." },
  { no: "Số: 00/NQ-CP", title: "[Mẫu] Nghị quyết về nhiệm vụ, giải pháp trọng tâm", issuer: "Chính phủ", effective: "Toàn quốc",
    desc: "Nội dung mô tả ngắn của văn bản, thay bằng dữ liệu thật từ API." },
];
