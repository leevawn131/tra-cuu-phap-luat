import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ContractPage from "./pages/ContractPage";
import SamplesPage from "./pages/SamplesPage";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hop-dong" element={<ContractPage />} />
        <Route path="/hop-dong-mau" element={<SamplesPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}