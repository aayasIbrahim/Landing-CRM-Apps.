import FeatureSection from "./components/FeatureSection";
import HeroBanner from "./components/HeroBanner";
import HeroSection from "./components/HeroSection";
import PhraseDisplayCard from "./components/PhraseDisplayCard";
import TestimonialFeatureSection from "./components/TestimonialFeatureSection";
import TimelineSection from "./components/TimelineSection";
import TrustedBySection from "./components/TrustedBySection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustedBySection />
      <TimelineSection />
      <HeroBanner />
      <FeatureSection />
      <PhraseDisplayCard />
      <TestimonialFeatureSection />
    </>
  );
}
