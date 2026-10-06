import { useMemo, useState } from "react";
import SamplesHero from "../components/samples/SamplesHero";
import SamplesFilterBar, { type Format, type View } from "../components/samples/SamplesFilterBar";
import SamplesSidebar from "../components/samples/SamplesSidebar";
import SamplesList from "../components/samples/SamplesList";
import ReviewBanner from "../components/samples/ReviewBanner";
import TrustPillars from "../components/samples/TrustPillars";
import { samples } from "../data/samplesData";
import "./contract.css"; // dùng lại .c-chips, .c-empty, .c-notice, .c-block, .c-demo-note
import "./samples.css";

export default function SamplesPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [format, setFormat] = useState<Format>("all");
  const [view, setView] = useState<View>("grid");

  const items = useMemo(() => {
    const q = query.trim().toLowerCase();
    return samples.filter(
      (s) =>
        (category === "all" || s.category === category) &&
        (format === "all" || s.formats.includes(format)) &&
        (!q || `${s.title} ${s.desc} ${s.code} ${s.law}`.toLowerCase().includes(q)),
    );
  }, [query, category, format]);

  return (
    <main>
      <SamplesHero />
      <SamplesFilterBar query={query} onQuery={setQuery} category={category} onCategory={setCategory}
        format={format} onFormat={setFormat} view={view} onView={setView} total={items.length} />
      <div className="container s-layout">
        <SamplesSidebar category={category} onCategory={setCategory} />
        <SamplesList items={items} view={view} />
      </div>
      <ReviewBanner />
      <TrustPillars />
    </main>
  );
}
