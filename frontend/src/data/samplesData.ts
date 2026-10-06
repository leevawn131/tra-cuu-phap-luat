// Dữ liệu mẫu – thay bằng API Python (FastAPI) sau này
export type SampleCategory = { id: string; label: string; icon: string };
export const sampleCategories: SampleCategory[] = [
  { id: "thue", label: "Thuê trọ & Nhà riêng", icon: "home_work" },
  { id: "vay", label: "Vay nợ & Tín dụng", icon: "credit_card" },
  { id: "ld", label: "Lao động & Tuyển dụng", icon: "badge" },
  { id: "bds", label: "Mua bán bất động sản", icon: "domain" },
  { id: "hoptac", label: "Hợp tác kinh doanh", icon: "handshake" },
  { id: "honnhan", label: "Hôn nhân & Thừa kế", icon: "family_restroom" },
];

export type Sample = {
  id: number; category: string; law: string; code: string; title: string; desc: string;
  highlights: { icon: string; text: string }[]; formats: ("docx" | "pdf")[];
};

export const samples: Sample[] = [
  { id: 1, category: "thue", law: "Dân sự & Nhà ở", code: "HD-THUE-001",
    title: "Hợp đồng thuê phòng trọ / căn hộ mini",
    desc: "Mẫu gồm thông tin các bên, thời hạn và giá thuê, tiền đặt cọc, điện nước, trách nhiệm phòng cháy chữa cháy, trả phòng và chấm dứt hợp đồng.",
    highlights: [
      { icon: "savings", text: "Tiền đặt cọc và hoàn trả" },
      { icon: "electric_bolt", text: "Điện, nước, phí dịch vụ" },
      { icon: "shield", text: "Thông báo khi chấm dứt" },
    ], formats: ["docx", "pdf"] },
  { id: 2, category: "vay", law: "Bộ luật Dân sự", code: "HD-VAY-001",
    title: "Hợp đồng vay tiền giữa cá nhân",
    desc: "Mẫu gồm số tiền vay, thời hạn, lãi suất, phương thức trả nợ, biện pháp bảo đảm (nếu có) và cách xử lý khi quá hạn.",
    highlights: [
      { icon: "percent", text: "Lãi suất và thời hạn vay" },
      { icon: "lock", text: "Biện pháp bảo đảm" },
      { icon: "account_balance", text: "Xử lý nợ quá hạn" },
    ], formats: ["docx", "pdf"] },
  { id: 3, category: "bds", law: "Kinh doanh bất động sản", code: "HD-BDS-001",
    title: "Hợp đồng đặt cọc mua bán nhà đất",
    desc: "Mẫu gồm thông tin tài sản, giá bán, số tiền đặt cọc, thời hạn ký hợp đồng chính thức và trách nhiệm khi một bên không thực hiện.",
    highlights: [
      { icon: "real_estate_agent", text: "Thông tin tài sản giao dịch" },
      { icon: "fact_check", text: "Kiểm tra pháp lý trước khi cọc" },
      { icon: "currency_exchange", text: "Trách nhiệm khi hủy giao dịch" },
    ], formats: ["docx"] },
  { id: 4, category: "ld", law: "Bộ luật Lao động", code: "HD-LD-001",
    title: "Hợp đồng thử việc và hợp đồng lao động",
    desc: "Mẫu gồm công việc, tiền lương, thời giờ làm việc, bảo hiểm, bảo mật thông tin và điều kiện chấm dứt hợp đồng.",
    highlights: [
      { icon: "health_and_safety", text: "Tiền lương và bảo hiểm" },
      { icon: "security", text: "Bảo mật thông tin" },
      { icon: "school", text: "Đào tạo và thời gian làm việc" },
    ], formats: ["docx", "pdf"] },
  { id: 5, category: "hoptac", law: "Luật Thương mại", code: "HD-TM-001",
    title: "Hợp đồng dịch vụ và hợp tác thương mại giữa doanh nghiệp",
    desc: "Mẫu gồm phạm vi công việc, nghiệm thu theo giai đoạn, bảo hành, trách nhiệm bồi thường và cơ quan giải quyết tranh chấp.",
    highlights: [
      { icon: "inventory_2", text: "Nghiệm thu theo giai đoạn" },
      { icon: "balance", text: "Phạt vi phạm, bồi thường" },
      { icon: "gavel", text: "Giải quyết tranh chấp" },
    ], formats: ["docx", "pdf"] },
];

export const trust = [
  { icon: "verified", title: "Nội dung có thể kiểm chứng", desc: "Mỗi mẫu nêu rõ căn cứ pháp luật liên quan để người dùng đối chiếu." },
  { icon: "balance", title: "Cân bằng quyền lợi", desc: "Mẫu được soạn theo hướng minh bạch, không thiên vị một bên trong quan hệ dân sự." },
  { icon: "support_agent", title: "Có thể hỏi thêm", desc: "Hỏi trợ lý AI hoặc kết nối luật sư khi cần điều chỉnh điều khoản." },
];
