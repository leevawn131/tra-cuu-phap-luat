import { useEffect, useState } from "react";

export function useNow(): string {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  const date = now.toLocaleDateString("vi-VN", { weekday: "long", day: "2-digit", month: "2-digit", year: "numeric" });
  const time = now.toLocaleTimeString("vi-VN", { hour12: false });
  return `${date}, ${time}`;
}
