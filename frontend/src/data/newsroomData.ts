// Dữ liệu demo giữ nguyên theo thiết kế. Thay bằng API sau này.
export const pills = [
  { id: "all", label: "Tất cả tin tức" },
  { id: "chinhsach", label: "Chính sách mới (Đất đai, Thuế, BĐS)" },
  { id: "doisong", label: "Pháp lý đời sống & Dân sự" },
  { id: "canhbao", label: "Cảnh báo bẫy pháp lý & Lừa đảo số" },
  { id: "tungtu", label: "Tố tụng, Án lệ & Tòa án" },
  { id: "doanhnghiep", label: "Doanh nghiệp & Lao động" },
  { id: "luatsu", label: "Hỏi đáp trực tiếp cùng Luật sư" },
];

export const lead = {
  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA33Qck_C9x4d4W9EnvFber7PFEeSkvjGgJE0uhU1Fk0NOafrULjVtRDa7DM-xrcCP6k5_AevxHFs7bWpQlZiQdJRDjLfJdK8EFbacXNxTxcJ1RSjDEpUdVKgDJMV3Ney3lflHNZtxPPmQOzwqnusihwHp6-4mjB8K1ElddwpCO1p_6lptiYsDBxTE14GOCIoYY65VEFUWeas8RNNZZw-e9RnnNh-4dFleZvTAXFvWcl6BxYwy_C5of7Q",
  tag: "Tiêu điểm lập pháp", when: "Hôm nay", source: "Ban Thư ký Pháp chế", ago: "25 phút trước", views: "14.8k lượt đọc",
  title: "Toàn văn Nghị định mới về miễn giảm thuế và những điểm người dân, hộ kinh doanh cần nắm vững trước ngày 01/11/2026",
  desc: "Phân tích chuyên sâu 5 nhóm đối tượng được giảm trừ trực tiếp nghĩa vụ tài chính và thuế thu nhập cá nhân. Quy trình đơn giản hóa hồ sơ điện tử tự động trích xuất căn cước công dân gắn chip qua cơ sở dữ liệu VNeID cấp độ 2, loại bỏ 7 giấy tờ truyền thống.",
};

export type Highlight = { img: string; badge: string; tone: "error" | "secondary" | "primary"; metaIcon: string; meta: string; title: string; source: string; views: string };
export const highlights: Highlight[] = [
  { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD51xQpsaV3uF_ceYIjhT-jDnA-ZS6wwNiWBKPElh5ZztZ7g3Qyg3UTJEQtsNJEx7lvQbzdazzSLnmeuw9Yi1X2dB6Fv4n6HDkA_z90FCES5A0DrZ7CGBgXvPjzOFoAuzp4xk8OXodQNijRc--5Jd8FqNb2tBeA0BY0PzCVag7MDxOHHIzd-bQNCRFiWiDKW7nXHpxa-FDQ85PoB5ErQ3IpiTs2yH-HSvzhg_F8h35yCdGqNVg5Upxv6Q",
    badge: "Cảnh báo", tone: "error", metaIcon: "warning", meta: "Cảnh báo rủi ro • 1 giờ trước",
    title: "Cảnh báo thủ đoạn làm giả hợp đồng ủy quyền công chứng mua bán đất nền hình thành trong tương lai",
    source: "Văn phòng Công chứng Quốc gia", views: "8.2k" },
  { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDHD7oPnR5R_6VV5eg1I6lpIJdw3pBW-rrJOYi-CAbOKZkR20ZqPyl0pOG9Dii1L9gYNkOK_5IKJ3g5e26eEJ6AwF6uX1HDoy60JgV-VzQ13j0A8pYZSCloK5ThRD6UWTyc5Px2_sCRuov3b8I-EPze7rWc1gCTaau2SsfqfrkJpd2BGPv8IUxtk9w5-UVuRm0wYpvVnpaRancLFe1sJtlPUo9WVX7CJvF9FoY--ETQN02ofTpMeMHj2g",
    badge: "Dịch vụ công", tone: "secondary", metaIcon: "task_alt", meta: "Cải cách DVC • 3 giờ trước",
    title: "Bộ Tư pháp hướng dẫn thủ tục đăng ký kết hôn có yếu tố nước ngoài hoàn toàn trực tuyến trên Cổng DVC",
    source: "Cục Hộ tịch & Quốc tịch", views: "5.4k" },
  { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBNcF1Iueh0rbJBHVLZD8DMnzqgqr2QbrKQCIGXEwySE-BiweWlKRWqntxi3SQKUwwg9LlVTln4KErnF1WaFc5AA0anO9hIXWtkpCNP3Co2FCDfyoZTKv3VrKiO0P5YE1nSHKPXCsJbgEoIYn4-ihmC6KDmZEXl0c8fPtm5MMn5kdGUW_xjB9trjTbS6_9kBR59r9s1Bxjh8VW1J3H-UkQu7kD-9xfI2eXRSHTit-DbwvdD53iSitPftQ",
    badge: "Bảo hiểm", tone: "primary", metaIcon: "family_restroom", meta: "Luật Lao động • 4 giờ trước",
    title: "Người lao động nghỉ việc không nhận bảo hiểm xã hội 1 lần: Những lợi ích dài hạn theo quy định mới",
    source: "Ban Pháp chế BHXH Việt Nam", views: "11.6k" },
];

export const timeline = [
  { label: "Bảng giá đất mới Luật Đất Đai 2024", tone: "primary" },
  { label: "Đề án 06: Tư pháp số & Công chứng điện tử", tone: "secondary" },
  { label: "Khung xử phạt mới vi phạm giao thông", tone: "error" },
];

export type Article = { id: number; cat: string; img: string; tag: string; tone: "primary" | "secondary" | "error"; topic: string; when: string; title: string; desc: string; views: string };
export const articles: Article[] = [
  { id: 1, cat: "tungtu", tone: "primary", tag: "Án lệ TANDTC", topic: "Tố tụng & Xét xử", when: "Hôm qua, 15:42", views: "6.9k lượt xem",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuABCMQ6WiOukZnptbh31wqUpk5TlUYzD-162AbTEZTHyJ0LSnlndt6Hzn7G6Hup5mke3yP5ZhHxvfJKp7W38LeFr8OXRCgy4TW8jFFq0FYx-BI8WONBSCMwGyOHAuSRaxcVcU6eGPJTk_aFGvN2vZTBv1BS38RErxzyTnVPGMti6nuiltzsHHBJy3ogjmVgwkJ_k_c9tCKpOHogmc0nqEKX7x0NkwGbt6pOQ46DfqBh1IvDeLc5lpSnGQ",
    title: "Công bố Án lệ số 72/2026: Giải quyết tranh chấp hợp đồng thế chấp tài sản gắn liền với đất khi dự án chậm tiến độ",
    desc: "Hội đồng Thẩm phán TANDTC đưa ra căn cứ bảo vệ bên thứ ba ngay tình khi nhận chuyển nhượng căn hộ thuộc dự án đã giải chấp từng phần, ngăn ngừa tình trạng chủ đầu tư thế chấp chồng chéo." },
  { id: 2, cat: "doisong", tone: "secondary", tag: "Cẩm nang dân sự", topic: "Pháp lý sinh viên & Lao động", when: "2 ngày trước", views: "19.3k lượt xem",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMo3fQbzsJPEozah8lo4U56uUAjHA7oxujvyqd3lPBWpTBU0ox8A_ydBo2tnLcllicROYqVA61CQB41e1lTvM35BbL1E8LsZa4QuHHOg-h7pvck0aZMvssteFCKV4lsJ1mz8bIZvTmkhiC_mfWvvfFs33JDZKObz9dCcY-0gTJ91LK744bWM0k3jHzhs2zbzBiuVcV0cLXIJLjX9oTo0LhxWJfNVVf8Y6K92DoNooGSNKH6l5ZNQSe1w",
    title: "Hướng dẫn soạn thảo hợp đồng thuê trọ chuẩn pháp lý: 6 điều khoản bắt buộc phải có để không mất cọc vô lý",
    desc: "Tránh bẫy tăng giá điện nước tự phát, khấu trừ tiền đặt cọc sửa chữa nhà vô căn cứ. Tải ngay biểu mẫu hợp đồng thuê nhà trọ tiêu chuẩn do Bộ Xây dựng khuyến nghị có giá trị pháp lý cao." },
  { id: 3, cat: "canhbao", tone: "error", tag: "Bảo vệ người tiêu dùng", topic: "Tín dụng & Ngân hàng", when: "3 ngày trước", views: "12.1k lượt xem",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBlfqGBvC0BDRDqop85YTUqZX5pylhU95cpgKDl3Kcwy3ysM2ICWVuV3ABv-ouu8t3bRtpvCcO9po9arg8aB9aex7fzwC4W126xjU6Hjab1F_9CaiPEWf8lofRzEgxIx7mr_8a5dJ8KK9IBLBz7a2rcFUf7GU1fCyFh3kPHyX28MULZDy6mhZZYg-mJ8jOhIakGvLHIWRhw7JNwXfwryghtz3dwE-rzZzmyXmvsyCiUN53Fq-7N0WhDog",
    title: "Xử lý nợ xấu ngân hàng và cách ứng phó hợp pháp khi bị công ty tài chính gọi điện đe dọa đòi nợ người thân",
    desc: "Quy định cụ thể của Ngân hàng Nhà nước về khung giờ và tần suất nhắc nợ. Các bước lập vi bằng gửi cơ quan thanh tra giám sát khi phát hiện hành vi khủng bố tinh thần đòi nợ trái pháp luật." },
];

export const upcoming = [
  { no: "Nghị định 45/2026/NĐ-CP", left: "Còn 6 ngày", tone: "error", desc: "Quy định chi tiết thi hành Luật Nhà ở về quản lý căn hộ chung cư", date: "Hiệu lực: 15/10/2026" },
  { no: "Thông tư 18/2026/TT-BTC", left: "Còn 12 ngày", tone: "secondary", desc: "Biểu mức thu phí cấp mã số định danh thương mại điện tử", date: "Hiệu lực: 21/10/2026" },
  { no: "Nghị quyết 04/2026/NQ-HĐTP", left: "Còn 18 ngày", tone: "primary", desc: "Áp dụng quy định về thời hiệu khởi kiện trong tranh chấp dân sự", date: "Hiệu lực: 27/10/2026" },
];

export const infographics = [
  { tall: true, label: "ĐỒ HỌA THÔNG TIN", title: "Sơ đồ 4 bước làm Sổ đỏ lần đầu năm 2026 tránh bị kéo dài thời gian",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwRiFveFhcifDwdP0-xwrtOPv4iDkNzXJ6rJoM6Vg7JQHJBHTy39U3KYNP7kbhcPYaTaDSigdFYohIU0FEWJgm1vqKyIQPoPgWIHLOao8dkNJ_XuZiPglntQUDECTtooSKXtIR0A8MFdygXZ6XcwgXUuC_7f3QTopjTWQ4TkGot4GvqbVGU-6a3tvM2tWxD-5adgmFQdU81zCk2Qa-hq_1eu-Mu7z3RDz807wzd5mNmyl95uaZ_cuhZg" },
  { tall: false, label: "BẢNG TRA CỨU NHANH", title: "Mức xử phạt nồng độ cồn xe máy & ô tô chi tiết",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhmzD9SBVADbvsGPpP4WGRkAAVw0pySljvfqlm54Dsaq3usI-8l1mubUzMJzdecVtxQ-WA44f7bo9NHMuAtPW-znl0eBzAxeOduXIDyMjo6iVaokKZcdjhONw9saHSct02oxcgVBcN_vcJzDenOSBf5_HPnnZR3wgcDarZQvlgXcNSZoNjASZMwFlaf5odAXUusEd4qESO1A8hX4J5VmOwNq8LuAaJs4ngeYM6LEIFTx-VnyGokWnn5A" },
];

export const media = [
  { label: "Tập 42 • Podcast Pháp luật đời sống", tone: "primary", duration: "18:24", author: "LS. Trần Minh Quân", stat: "24.5k lượt nghe",
    title: "Kỹ năng giải quyết tranh chấp ranh giới đất liền kề không cần khởi kiện ra tòa",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2FvzJlwhKQmP8mWDyOvmwpzzyj4KN5LGvCvx8y5P2tv5swG5v2LQC9rpZtOu_QprhCafnTDpwUlbmg2nTtnRGhGxLpoY632vuV4M4RiNA4RwnJ6W6rUfmOfuJ-gk-sgOqqvTFiDltoi2-sUfgC0pwv7pcBApTJudLuP4fdPSIcek6sXNv6jFWcibe252_lxGH2xdbew9W0NvQmJcMMLbVEkAOGtAL-k25znvkAj3aJDoRyl00G7rxJQ" },
  { label: "Video Bài giảng số", tone: "secondary", duration: "12:10", author: "Cục An toàn Thông tin", stat: "18.1k lượt xem",
    title: "Nghị định bảo vệ dữ liệu cá nhân: Doanh nghiệp và công dân phải làm gì để tuân thủ?",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMvzb6tfS1lu4gMSl4Qt6yCGg1ooaUl-1QSl_zRIQKYg2njppvSs4dTZYZj-VIQS-PG94GoCUwnCDLP-kEm56DiHmPujOH0Bzj6d3d6LHtrwO7zrMDKZJCh6P_MTqpYIbJMLqDaZekNryl1mS_hGI7yfIQmqn8e10Hhz7VOZmPWNSS0lJqaXFwQ9Mnr49jFhB5K4aRk7ekyqP-I7zG0lB1F_XoUSxrRf9Hvc3dZURrj87iJ-VoxGz7gQ" },
  { label: "Tọa đàm chuyên đề", tone: "primary", duration: "26:45", author: "Tổng Liên đoàn Lao động", stat: "31.2k lượt xem",
    title: "Bảo vệ lương và chế độ thai sản khi doanh nghiệp nợ đọng kéo dài: Căn cứ đòi quyền lợi",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1Cl3AZdHDRzOQUHzBwsqId5mU4qKz9uH_pBS7iXP8FjmikPdw0BSbnP7AS1iUKqq6KQuK_YDSKpxcxGvJpv6PZUiKutz3IbnRxBylNBXO8aYnjRRxKgfITUDdldzOxOk4pGCPMe-9M_E7n44XWza1ud7vlxPjXmsUUPJS5BA8HKIlItiBmk5VGv4722O8Uo1Gn9bwZfTC5EgoWetpgsevCanzsdFKQhp2XWorjZ6vPfu4-XEVcYlZEQ" },
];
