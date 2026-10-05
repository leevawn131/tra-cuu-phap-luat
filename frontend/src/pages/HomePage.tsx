import HomeHero from "../components/home/HomeHero";
import AiBanner from "../components/home/AiBanner";
import ServiceGrid from "../components/home/ServiceGrid";
import HomeNews from "../components/home/HomeNews";
import HomeDocuments from "../components/home/HomeDocuments";
import "./home.css";

export default function HomePage() {
  return (
    <main>
      <HomeHero />
      <AiBanner />
      <ServiceGrid />
      <section className="container home-block home-two-col">
        <HomeNews />
        <HomeDocuments />
      </section>
    </main>
  );
}
