import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/featuredCourses";
import Footer from "@/components/footer";
import Instructors from "@/components/instructors";
import MovingCardComponent from "@/components/moving-cards.";
import WhyChooseUs from "@/components/ui/WhyChooseUs";
import UpcomingWebinars from "@/components/upcoming-webinars";
export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">

      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <MovingCardComponent />
      <UpcomingWebinars />
      <Instructors />
      <Footer />
    </main>
  );
}

