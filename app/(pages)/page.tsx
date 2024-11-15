import { FeaturedCarsSection } from "@/components/home/featured-cars-section";
import { HeroSection } from "@/components/home/hero-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { WhyUsSection } from "@/components/home/why-us-section";

export default function Page() {
  return (
    <main>
      <HeroSection />
      <FeaturedCarsSection />
      <WhyUsSection />
      <TestimonialsSection />
    </main>
  );
}
