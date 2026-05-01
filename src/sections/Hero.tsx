import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { WavyBackground } from '@/components/ui/wavy-background';
import { useTheme } from '@/hooks/use-dark-mode';

const Hero = () => {
  const { isDark } = useTheme();
  const sectionRef    = useRef<HTMLElement>(null);
  const headlineRef   = useRef<HTMLDivElement>(null);
  const subRef        = useRef<HTMLParagraphElement>(null);
  const ctaRef        = useRef<HTMLDivElement>(null);
  const statsRef      = useRef<HTMLDivElement>(null);
  const dashboardRef  = useRef<HTMLDivElement>(null);

  /* ── Entrance ── */
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      tl.fromTo(
        headlineRef.current?.querySelectorAll('.headline-line') || [],
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.07 },
        0
      );
      tl.fromTo(subRef.current,   { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4 }, 0.25);
      tl.fromTo(
        ctaRef.current?.querySelectorAll('button') || [],
        { y: 12, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.06 },
        0.35
      );
      tl.fromTo(statsRef.current,     { y: 10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.35 }, 0.45);
      tl.fromTo(dashboardRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, 0.3);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToContact = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  const stats = [
    // { value: '0 FCFA',  label: "d'abonnement" },
    { value: '100%',     label: 'web'   },
    { value: 'J+1',     label: 'GPS installé'  },
    { value: '100%',    label: 'mobile'         },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-screen min-h-screen md:h-screen md:overflow-hidden z-10"
    >
      {/* ── Background ── */}
      <WavyBackground
        containerClassName="absolute inset-0 w-full h-full"
        colors={['#2ECC71', '#58D68D', '#1A8A4A', '#2ECC71', '#58D68D']}
        backgroundFill={isDark ? '#111413' : '#F6F7F6'}
        waveOpacity={0.40}
        blur={8}
        speed="slow"
        waveWidth={60}
        yPosition={0.62}
        amplitude={70}
      />

      {/* ── Contenu (upper 62vh on desktop) ── */}
      <div className="relative z-30 flex flex-col items-center justify-center text-center px-6 pt-24 pb-12 md:h-[62vh] md:pb-0">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">

          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-white/80 dark:bg-[#1C201C]/80 border border-black/5 dark:border-white/[0.08] text-lokoto-gray dark:text-[#EDEFED] shadow-sm backdrop-blur-sm">
            🇸🇳 Conçu au Sénégal, pour le Sénégal
          </span>

          {/* Headline */}
          <div ref={headlineRef}>
            <h1 className="text-[38px] sm:text-[54px] lg:text-[72px] xl:text-[80px] font-extrabold leading-[0.92] tracking-[-0.03em] text-lokoto-gray dark:text-[#EDEFED]">
              <span className="headline-line block">Votre flotte,</span>
              <span className="headline-line block text-lokoto-green">enfin sous contrôle.</span>
            </h1>
          </div>

          {/* Subheadline */}
          <p
            ref={subRef}
            className="text-base sm:text-lg text-lokoto-gray-medium dark:text-[#8A928A] max-w-lg leading-relaxed"
          >
            GPS, clients, comptabilité — tout en un.<br className="hidden sm:block" /> Sans abonnement mensuel.
          </p>

          {/* CTAs */}
          <div ref={ctaRef} className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={scrollToContact}
              className="relative overflow-hidden group bg-lokoto-green text-white font-semibold px-7 py-3.5 rounded-full hover:bg-lokoto-green-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2"
            >
              <span
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100"
                style={{
                  background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.28) 50%, transparent 60%)',
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 1.6s linear infinite',
                }}
              />
              <span className="relative">Je veux être parmi les premiers</span>
              <ArrowRight size={18} className="relative" />
            </button>

            <button
              onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-lokoto-green text-lokoto-green font-medium px-5 py-2.5 rounded-full hover:bg-lokoto-green hover:text-white transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-1.5 bg-white/60 backdrop-blur-sm text-sm"
            >
              <TrendingUp size={15} />
              Calculer mon gain
            </button>
          </div>

          {/* Stats strip */}
          <div ref={statsRef} className="flex items-stretch divide-x divide-black/[0.08] dark:divide-white/[0.08]">
            {stats.map(({ value, label }) => (
              <div key={label} className="px-5 first:pl-0 last:pr-0 text-center">
                <div className="text-sm font-extrabold text-lokoto-gray dark:text-[#EDEFED]">{value}</div>
                <div className="text-[11px] text-lokoto-gray-medium dark:text-[#8A928A] mt-0.5">{label}</div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ── Dashboard preview (desktop only) ── */}
      <div
        ref={dashboardRef}
        className="hidden md:block absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl px-8 z-20"
        style={{
          filter: 'drop-shadow(0 -8px 48px rgba(46,204,113,0.14)) drop-shadow(0 24px 64px rgba(0,0,0,0.13))',
        }}
      >
        {/* Browser chrome */}
        <div className="rounded-t-2xl bg-[#EBEBEB] dark:bg-[#252825] border border-black/[0.07] dark:border-white/[0.07] px-4 py-2.5 flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <span className="w-3 h-3 rounded-full bg-[#28C840]" />
          <div className="ml-3 flex-1 h-5 rounded-md bg-white/70 dark:bg-white/10 flex items-center justify-center">
            <span className="text-[10px] text-lokoto-gray-medium/55 dark:text-[#8A928A]/55 font-mono">
              app.lokoto.sn/dashboard
            </span>
          </div>
        </div>

        {/* Screenshot — top portion clipped by viewport */}
        <div
          className="overflow-hidden border border-t-0 border-black/[0.07] dark:border-white/[0.07]"
          style={{ maxHeight: '36vh' }}
        >
          <img
            src="/dashboard.png"
            alt="Lokoto Dashboard"
            className="w-full block"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
