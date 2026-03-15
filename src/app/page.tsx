import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedNotes from "@/components/FeaturedNotes";
import LearningSection from "@/components/LearningSection";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-dark">
      <Navbar />
      <Hero />
      <FeaturedNotes />
      <LearningSection />
      <Testimonials />
      <Footer />
    </main>
  );
}
