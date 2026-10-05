// Cần thêm font Material Symbols vào index.html (xem hướng dẫn)
export default function Icon({ name, className = "" }: { name: string; className?: string }) {
  return <span className={`material-symbols-outlined ${className}`} aria-hidden="true">{name}</span>;
}
