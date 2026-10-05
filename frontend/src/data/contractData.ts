// Dữ liệu mẫu – thay bằng API Python (FastAPI) sau này
export type Category = { id: string; label: string };
export const categories: Category[] = [
  { id: "all", label: "Tất cả" },
  { id: "bds", label: "Nhà đất & Bất động sản" },
  { id: "ld", label: "Lao động" },
  { id: "tm", label: "Thương mại & Dịch vụ" },
  { id: "dt", label: "Doanh nghiệp & Đầu tư" },
];

export type Template = { id: number; category: string; law: string; code: string; title: string; desc: string };
export const templates: Template[] = [
  { id: 1, category: "bds", law: "Nhà ở & Đất đai", code: "HD-BDS-001",
    title: "Hợp đồng mua bán căn hộ / nhà đất",
    desc: "Gồm đối tượng giao dịch, giá và tiến độ thanh toán, bàn giao, bảo hành và trách nhiệm khi vi phạm." },
  { id: 2, category: "ld", law: "Bộ luật Lao động", code: "HD-LD-001",
    title: "Hợp đồng thử việc và lao động xác định thời hạn",
    desc: "Gồm công việc, tiền lương, thời giờ làm việc, bảo hiểm, bảo mật thông tin và chấm dứt hợp đồng." },
  { id: 3, category: "tm", law: "Dân sự & Thương mại", code: "HD-TM-001",
    title: "Hợp đồng thuê mặt bằng kinh doanh",
    desc: "Gồm thời hạn thuê, giá thuê và điều chỉnh, tiền cọc, hoàn trả mặt bằng và chấm dứt hợp đồng." },
  { id: 4, category: "dt", law: "Luật Đầu tư", code: "HD-DT-001",
    title: "Hợp đồng dịch vụ tư vấn và thỏa thuận hợp tác đầu tư",
    desc: "Gồm phạm vi hợp tác, góp vốn, phân chia lợi nhuận, bảo mật và giải quyết tranh chấp." },
];

export const pillars = [
  { icon: "manage_search", title: "Rà soát điều khoản trọng yếu",
    desc: "Tách cấu trúc hợp đồng, nhận diện mức phạt, bồi thường, bảo mật, quyền chấm dứt và cách giải quyết tranh chấp." },
  { icon: "balance", title: "Đối chiếu pháp luật hiện hành",
    desc: "Liên kết điều khoản với văn bản pháp luật liên quan và cảnh báo nội dung có thể trái quy định." },
  { icon: "rate_review", title: "Cảnh báo rủi ro và gợi ý chỉnh sửa",
    desc: "Đề xuất cách diễn đạt thay thế để cân bằng quyền lợi các bên trước khi ký kết." },
];
