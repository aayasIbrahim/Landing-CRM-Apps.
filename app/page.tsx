

import FeatureSection from "./components/FeatureSection";
import HeroBanner from "./components/HeroBanner";
import HeroSection from "./components/HeroSection";
import TimelineSection from "./components/TimelineSection";
import TrustedBySection from "./components/TrustedBySection";


export default function Home() {
  return (
   <>
   <HeroSection/>
   <TrustedBySection/>
   <HeroBanner/>
   <FeatureSection/>
   <TimelineSection/>
   </>
  );
}
