import Logo from "./Logo";
import { useNow } from "../hooks/useNow";

export default function TopBar() {
  const now = useNow();
  return (
    <div className="topbar">
      <div className="container topbar-inner">
        <Logo />
        <div className="topbar-right">
          <span className="clock">{now}</span>
          <a className="btn btn-outline" href="/dang-nhap">Đăng nhập</a>
        </div>
      </div>
    </div>
  );
}
