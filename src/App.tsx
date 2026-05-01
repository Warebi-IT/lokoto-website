// Components
import Navbar from './components/Navbar';
import Spotlight from './components/Spotlight';

// Sections
import Hero from './sections/Hero';
import Problem from './sections/Problem';
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

function App() {

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
