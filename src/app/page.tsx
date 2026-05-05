import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BrandSection from "../components/BrandSection";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Download from "../components/Download";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen text-slate-900 antialiased bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(59,92,255,0.12),transparent_55%),linear-gradient(to_bottom,white,white)]">
      <Navbar />
      <Hero />
      <BrandSection />
      <About />
      <Testimonials />
      <Download />
      <FAQ />
      <Footer />
    </div>
  );
}

