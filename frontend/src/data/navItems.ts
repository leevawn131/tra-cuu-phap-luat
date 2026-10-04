export type NavChild = { label: string; href: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

export const navItems: NavItem[] = [
  { label: "Trang chủ", href: "/" },
  { label: "Tra cứu hợp đồng", href: "/hop-dong" },
  {
    label: "Văn bản pháp luật", href: "/van-ban",
    children: [
      { label: "Luật – Bộ luật", href: "/van-ban/luat" },
      { label: "Nghị định", href: "/van-ban/nghi-dinh" },
      { label: "Thông tư", href: "/van-ban/thong-tu" },
      { label: "Văn bản mới ban hành", href: "/van-ban/moi" },
    ],
  },
  { label: "AI pháp luật", href: "/ai" },
  {
    label: "Hỗ trợ pháp lý", href: "/ho-tro",
    children: [
      { label: "Hỏi đáp pháp luật", href: "/ho-tro/hoi-dap" },
      { label: "Tìm luật sư", href: "/ho-tro/luat-su" },
      { label: "Biểu mẫu – Đơn từ", href: "/ho-tro/bieu-mau" },
    ],
  },
  { label: "Tin tức", href: "/tin-tuc" },
  {
    label: "Tiện ích", href: "/tien-ich",
    children: [
      { label: "Tính mức phạt giao thông", href: "/tien-ich/muc-phat" },
      { label: "Tính thời hiệu", href: "/tien-ich/thoi-hieu" },
      { label: "Từ điển pháp lý", href: "/tien-ich/tu-dien" },
    ],
  },
  { label: "Giới thiệu", href: "/gioi-thieu" },
];
