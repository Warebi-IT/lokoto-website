import { useEffect, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, TrendingUp, Terminal } from 'lucide-react';
import { WavyBackground } from '@/components/ui/wavy-background';

gsap.registerPlugin(ScrollTrigger);

/* ── Voitures flottantes — plus visibles ── */
const FLOATING_CARS = [
  { emoji: '🚗', style: { top: '12%',  left: '5%'   }, size: '3.5rem', opacity: 0.85, anim: 'float1 6s ease-in-out infinite' },
  { emoji: '🚙', style: { top: '22%',  right: '6%'  }, size: '3rem',   opacity: 0.80, anim: 'float2 8s ease-in-out infinite 1.2s' },
  { emoji: '🚐', style: { top: '54%',  left: '6%'   }, size: '2.8rem', opacity: 0.75, anim: 'float3 5.5s ease-in-out infinite 0.5s' },
  { emoji: '🛻', style: { top: '40%',  right: '5%'  }, size: '3.2rem', opacity: 0.78, anim: 'float1 7s ease-in-out infinite 2s' },
  { emoji: '🚕', style: { top: '70%',  left: '3%'   }, size: '3.8rem', opacity: 0.72, anim: 'float2 9s ease-in-out infinite 1.5s' },
  { emoji: '🚗', style: { top: '16%',  left: '26%'  }, size: '2rem',   opacity: 0.65, anim: 'float3 7s ease-in-out infinite 3s' },
  { emoji: '🚙', style: { top: '72%',  right: '10%' }, size: '2.8rem', opacity: 0.70, anim: 'float1 8s ease-in-out infinite 0.8s' },
  { emoji: '🚗', style: { top: '34%',  right: '20%' }, size: '2.2rem', opacity: 0.65, anim: 'float2 6.5s ease-in-out infinite 2.5s' },
  { emoji: '🚐', style: { top: '80%',  right: '4%'  }, size: '3rem',   opacity: 0.68, anim: 'float3 10s ease-in-out infinite 1s' },
  { emoji: '🚕', style: { top: '8%',   right: '18%' }, size: '2.4rem', opacity: 0.62, anim: 'float1 5.5s ease-in-out infinite 2s' },
];

const Hero = () => {
  const sectionRef  = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const subRef      = useRef<HTMLParagraphElement>(null);
  const ctaRef      = useRef<HTMLDivElement>(null);
  const badgeRef    = useRef<HTMLDivElement>(null);

  /* Entrance */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.fromTo(
        headlineRef.current?.querySelectorAll('.headline-line') || [],
        { y: 55, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.09 },
        0
      );
      tl.fromTo(subRef.current,   { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, 0.35);
      tl.fromTo(
        ctaRef.current?.querySelectorAll('button') || [],
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.07 },
        0.5
      );
      tl.fromTo(badgeRef.current, { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, 0.7);
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  /* Scroll exit — desktop only */
  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (window.matchMedia('(max-width: 767px)').matches) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
          onLeaveBack: () => {
            gsap.set(headlineRef.current?.querySelectorAll('.headline-line') || [], { y: 0, opacity: 1 });
            gsap.set(subRef.current,   { y: 0, opacity: 1 });
            gsap.set(ctaRef.current?.querySelectorAll('button') || [], { y: 0, opacity: 1 });
            gsap.set(badgeRef.current, { opacity: 1 });
          },
        },
      });

      scrollTl.fromTo(
        headlineRef.current?.querySelectorAll('.headline-line') || [],
        { y: 0, opacity: 1 },
        { y: -70, opacity: 0, ease: 'power2.in' },
        0.70
      );
      scrollTl.fromTo(subRef.current,   { y: 0, opacity: 1 }, { y: -50, opacity: 0, ease: 'power2.in' }, 0.73);
      scrollTl.fromTo(
        ctaRef.current?.querySelectorAll('button') || [],
        { y: 0, opacity: 1 },
        { y: -30, opacity: 0, ease: 'power2.in' },
        0.75
      );
      scrollTl.fromTo(badgeRef.current, { opacity: 1 }, { opacity: 0, ease: 'power2.in' }, 0.78);
    }, section);

    return () => ctx.revert();
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-screen min-h-screen md:h-screen md:overflow-hidden z-10"
    >
      {/* ── Aceternity Wavy Background ── */}
      <WavyBackground
        containerClassName="absolute inset-0 w-full h-full"
        colors={['#2ECC71', '#58D68D', '#1A8A4A', '#2ECC71', '#58D68D']}
        backgroundFill="#F6F7F6"
        waveOpacity={0.50}
        blur={8}
        speed="slow"
        waveWidth={60}
        yPosition={0.78}
        amplitude={80}
      />

      {/* ── Voitures flottantes ── */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-20">
        {FLOATING_CARS.map((car, i) => (
          <span
            key={i}
            className="absolute"
            style={{ ...car.style, fontSize: car.size, opacity: car.opacity, animation: car.anim }}
          >
            {car.emoji}
          </span>
        ))}
      </div>

      {/* ── Contenu centré ── */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen md:h-screen text-center px-6 -mt-10 md:-mt-16">
        <div className="max-w-5xl mx-auto">
          {/* Headline */}
          <div ref={headlineRef} className="mb-6">
            <h1 className="text-[38px] sm:text-[54px] lg:text-[72px] xl:text-[84px] font-extrabold leading-[0.88] tracking-[-0.03em] text-lokoto-gray">
              <span className="headline-line block">Gérez votre</span>
              <span className="headline-line block text-lokoto-green">flotte.</span>
            </h1>
          </div>

          {/* Subheadline */}
          <p
            ref={subRef}
            className="text-base sm:text-lg lg:text-xl text-lokoto-gray-medium max-w-xl mx-auto leading-relaxed mb-9"
          >
            Lokoto est la plateforme tout-en-un pour les loueurs de véhicules au Sénégal.
            Suivi GPS, fichier clients, analytics — sans abonnement.
          </p>

          {/* CTAs */}
          <div ref={ctaRef} className="flex flex-wrap gap-4 justify-center">
            {/* Shimmer button */}
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
              className="border-2 border-lokoto-green text-lokoto-green font-semibold px-7 py-3.5 rounded-full hover:bg-lokoto-green hover:text-white transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2 bg-white/60 backdrop-blur-sm"
            >
              <TrendingUp size={18} />
              Calculer mon gain
            </button>
          </div>

          {/* Badge */}
          <div ref={badgeRef} className="mt-7 flex flex-col items-center gap-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-white/80 border border-black/5 text-lokoto-gray shadow-sm backdrop-blur-sm">
              🇸🇳 Conçu au Sénégal, pour le Sénégal
            </span>

            {/* Platforms */}
            <div className="flex flex-col items-center gap-3">
              <span className="text-[11px] uppercase tracking-widest text-lokoto-gray-medium/70">
                Disponible sur toutes les plateformes
              </span>
              <div className="flex items-center gap-6">
                {/* Windows */}
                <div className="flex flex-col items-center gap-1.5 text-lokoto-gray/50 hover:text-lokoto-gray transition-colors">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-label="Windows">
                    <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.551H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
                  </svg>
                  <span className="text-[10px] font-medium">Windows</span>
                </div>
                {/* macOS */}
                <div className="flex flex-col items-center gap-1.5 text-lokoto-gray/50 hover:text-lokoto-gray transition-colors">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-label="macOS">
                    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.453 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/>
                  </svg>
                  <span className="text-[10px] font-medium">macOS</span>
                </div>
                {/* iPhone */}
                <div className="flex flex-col items-center gap-1.5 text-lokoto-gray/50 hover:text-lokoto-gray transition-colors">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-label="iPhone">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.27.07 2.15.61 2.9.64.88-.05 1.67-.63 3.03-.68 1.58.06 2.72.73 3.37 1.87-2.93 1.82-2.35 5.72.2 6.83-.49 1.36-1.13 2.7-1.5 4.22zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  <span className="text-[10px] font-medium">iPhone</span>
                </div>
                {/* Android */}
                <div className="flex flex-col items-center gap-1.5 text-lokoto-gray/50 hover:text-lokoto-gray transition-colors">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-label="Android">
                    <path d="M17.523 15.341a.999.999 0 1 1 0-1.998.999.999 0 0 1 0 1.998m-11.046 0a.999.999 0 1 1 0-1.998.999.999 0 0 1 0 1.998m11.405-6.021l1.997-3.459a.416.416 0 0 0-.718-.414l-2.022 3.503A11.507 11.507 0 0 0 12 7.951a11.51 11.51 0 0 0-5.139 1.099L4.841 5.447a.416.416 0 0 0-.718.414l1.997 3.459C2.689 11.187.343 14.659 0 18.761h24c-.344-4.102-2.69-7.574-6.118-9.441"/>
                  </svg>
                  <span className="text-[10px] font-medium">Android</span>
                </div>
                {/* Linux */}
                <div className="flex flex-col items-center gap-1.5 text-lokoto-gray/50 hover:text-lokoto-gray transition-colors">
                  <Terminal size={20} aria-label="Linux" />
                  <span className="text-[10px] font-medium">Linux</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
