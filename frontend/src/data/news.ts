export type NewsItem = { id: number; title: string; summary: string; category: string; date: string };

// Dữ liệu mẫu – sau này thay bằng API Node.js
export const latestNews: NewsItem[] = [
  { id: 1, category: "Dân sự", date: "03/10/2026", title: "Những điểm người dân cần lưu ý khi ký hợp đồng thuê nhà", summary: "Tổng hợp các điều khoản về đặt cọc, thời hạn thuê và trách nhiệm sửa chữa." },
  { id: 2, category: "Giao thông", date: "02/10/2026", title: "Cách tra cứu mức xử phạt vi phạm giao thông theo từng loại phương tiện", summary: "Hướng dẫn tìm nhanh mức phạt và hình thức xử phạt bổ sung." },
  { id: 3, category: "Lao động", date: "01/10/2026", title: "Quyền lợi của người lao động khi chấm dứt hợp đồng đúng quy định", summary: "Trợ cấp thôi việc, thời hạn báo trước và chốt sổ bảo hiểm." },
  { id: 4, category: "Đất đai", date: "30/09/2026", title: "Hồ sơ cần chuẩn bị khi làm thủ tục chuyển nhượng quyền sử dụng đất", summary: "Danh sách giấy tờ và các bước thực hiện tại cơ quan có thẩm quyền." },
  { id: 5, category: "Hôn nhân – Gia đình", date: "29/09/2026", title: "Thủ tục đăng ký khai sinh cho trẻ: những câu hỏi thường gặp", summary: "Nơi đăng ký, giấy tờ cần có và thời hạn thực hiện." },
  { id: 6, category: "Tiêu dùng", date: "28/09/2026", title: "Khi mua hàng trực tuyến bị lỗi, người tiêu dùng có thể làm gì?", summary: "Quyền đổi trả, khiếu nại và nơi tiếp nhận phản ánh." },
];
