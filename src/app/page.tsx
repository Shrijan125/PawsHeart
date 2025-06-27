import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowToHelp from "@/components/HowToHelp";
import PetGallery from "@/components/PetGallery";
import SuccessStories from "@/components/SuccessStories";
import Header from "@/components/ui/Header";

export default function Home() {
  return (
   <div className="min-h-screen">
      <Header />
      <Hero />
      <PetGallery />
      <SuccessStories />
      <HowToHelp />
      <Contact />
      <Footer />
    </div>
  );
}
