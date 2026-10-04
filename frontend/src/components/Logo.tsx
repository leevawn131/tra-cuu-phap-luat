export default function Logo() {
  return (
    <a className="logo" href="/" aria-label="Tra cứu pháp luật – về trang chủ">
      <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true">
        <circle cx="20" cy="20" r="20" fill="#7FFFD4" />
        <g stroke="#0B4F49" strokeWidth="2" strokeLinecap="round" fill="none">
          <path d="M20 9v20M13 29h14M10 14h20" />
          <path d="M10 14l-4 8h8zM30 14l-4 8h8z" fill="#0B4F49" fillOpacity=".15" />
        </g>
      </svg>
      <span className="logo-text">Tra cứu pháp luật</span>
    </a>
  );
}
