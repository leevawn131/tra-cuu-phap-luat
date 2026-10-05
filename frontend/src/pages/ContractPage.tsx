import { useMemo, useState } from "react";
import ContractHero from "../components/contract/ContractHero";
import UploadZone from "../components/contract/UploadZone";
import TemplateSearch from "../components/contract/TemplateSearch";
import TemplateList from "../components/contract/TemplateList";
import AuditPreview from "../components/contract/AuditPreview";
import AuditPillars from "../components/contract/AuditPillars";
import { templates } from "../data/contractData";
import "./contract.css";

export default function ContractPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return templates.filter(
      (t) =>
        (category === "all" || t.category === category) &&
        (!q || `${t.title} ${t.desc} ${t.code} ${t.law}`.toLowerCase().includes(q)),
    );
  }, [query, category]);

  return (
    <main>
      <ContractHero />
      <UploadZone />
      <TemplateSearch query={query} onQuery={setQuery} category={category} onCategory={setCategory} />
      <section className="container c-split">
        <TemplateList items={filtered} />
        <AuditPreview />
      </section>
      <AuditPillars />
    </main>
  );
}
