import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Components
import Navbar from './components/Navbar';
import Spotlight from './components/Spotlight';

// Sections
import Hero from './sections/Hero';
import Problem from './sections/Problem';
import ProductShowcase from './sections/ProductShowcase';
import FeatureCRM from './sections/FeatureCRM';
import FeatureGPS from './sections/FeatureGPS';
import FeatureAnalytics from './sections/FeatureAnalytics';
import FeatureAccounting from './sections/FeatureAccounting';
import FeatureWebsite from './sections/FeatureWebsite';
import WhyLokoto from './sections/WhyLokoto';
import Calculator from './sections/Calculator';
import Pricing from './sections/Pricing';
import FAQ from './sections/FAQ';
import Team from './sections/Team';
import Contact from './sections/Contact';

gsap.registerPlugin(ScrollTrigger);

function App() {
  // Global scroll snap for pinned sections
  useEffect(() => {
    // Wait for all ScrollTriggers to be created
    const timeout = setTimeout(() => {
      const pinned = ScrollTrigger.getAll()
        .filter((st) => st.vars.pin)
        .sort((a, b) => a.start - b.start);

      const maxScroll = ScrollTrigger.maxScroll(window);

      if (!maxScroll || pinned.length === 0) return;

      // Build ranges and snap targets from pinned sections
      const pinnedRanges = pinned.map((st) => ({
        start: st.start / maxScroll,
        end: (st.end ?? st.start) / maxScroll,
        center: (st.start + ((st.end ?? st.start) - st.start) * 0.5) / maxScroll,
      }));

      // Create global snap
      ScrollTrigger.create({
        snap: {
          snapTo: (value: number) => {
            // Check if within any pinned range (with small buffer)
            const inPinned = pinnedRanges.some(
              (r) => value >= r.start - 0.02 && value <= r.end + 0.02
            );

            if (!inPinned) return value; // Flowing section: free scroll

            // Find nearest pinned center
            const target = pinnedRanges.reduce(
              (closest, r) =>
                Math.abs(r.center - value) < Math.abs(closest - value)
                  ? r.center
                  : closest,
              pinnedRanges[0]?.center ?? 0
            );

            return target;
          },
          duration: { min: 0.15, max: 0.35 },
          delay: 0,
          ease: 'power2.out',
        },
      });
    }, 100);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="relative">
      {/* Aceternity Spotlight — cursor glow */}
      <Spotlight />

      {/* Noise overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-50 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main className="relative">
        {/* Pinned Sections (z-index increases) */}
        <Hero />
        <Problem />
        <ProductShowcase />
        <FeatureCRM />
        <FeatureGPS />
        <FeatureAnalytics />
        <FeatureAccounting />
        <FeatureWebsite />

        {/* Flowing Sections */}
        <WhyLokoto />
        <Calculator />
        <Pricing />
        <FAQ />
        <Team />
        <Contact />
      </main>
    </div>
  );
}

export default App;
