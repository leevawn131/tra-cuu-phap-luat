import { useMemo, useState } from "react";
import NewsroomHero from "../components/newsroom/NewsroomHero";
import FeaturedGrid from "../components/newsroom/FeaturedGrid";
import LegislativeStrip from "../components/newsroom/LegislativeStrip";
import ArticleList from "../components/newsroom/ArticleList";
import NewsSidebar from "../components/newsroom/NewsSidebar";
import MultimediaSection from "../components/newsroom/MultimediaSection";
import NewsletterBox from "../components/newsroom/NewsletterBox";
import { articles } from "../data/newsroomData";
import "./contract.css"; // dùng lại .c-chips, .c-empty, .c-notice
import "./newsroom.css";

export default function NewsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  const items = useMemo(() => {
    const q = query.trim().toLowerCase();
    return articles.filter(
      (a) => (category === "all" || a.cat === category) && (!q || `${a.title} ${a.desc}`.toLowerCase().includes(q)),
    );
  }, [query, category]);

  return (
    <main>
      <NewsroomHero query={query} onQuery={setQuery} category={category} onCategory={setCategory} />
      <FeaturedGrid />
      <LegislativeStrip />
      <section className="container nr-block nr-main">
        <ArticleList items={items} />
        <NewsSidebar />
      </section>
      <MultimediaSection />
      <NewsletterBox />
    </main>
  );
}
