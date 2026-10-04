import Header from "./components/Header";
import Hero from "./components/Hero";
import NewsSection from "./components/NewsSection";
import Footer from "./components/Footer";
import "./styles.css";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <NewsSection />
      </main>
      <Footer />
    </>
  );
}
