import { useRef, useLayoutEffect, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, Globe, RefreshCw, ShoppingCart, Zap, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FeatureWebsite = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const imgScrollContainerRef = useRef<HTMLDivElement>(null);
  const imgInnerRef = useRef<HTMLImageElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const bulletsRef = useRef<HTMLUListElement>(null);
  const tagsRef = useRef<HTMLDivElement>(null);

  // Main pinned animation (text + image wrapper enter/exit)
  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    if (isMobile) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=160%',
          pin: true,
          scrub: 0.6,
        },
      });

      // Image wrapper slides in from right
      scrollTl.fromTo(
        imageRef.current,
        { x: '55vw', scale: 0.96, opacity: 0 },
        { x: 0, scale: 1, opacity: 1, ease: 'none' },
        0
      );

      // Text slides in from left
      scrollTl.fromTo(
        [labelRef.current, headlineRef.current, bodyRef.current],
        { x: '-35vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none', stagger: 0.03 },
        0.05
      );

      scrollTl.fromTo(
        bulletsRef.current?.querySelectorAll('li') || [],
        { x: '-20vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none', stagger: 0.02 },
        0.15
      );

      scrollTl.fromTo(
        tagsRef.current,
        { x: '-20vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0.28
      );

      // Exit
      scrollTl.fromTo(
        imageRef.current,
        { x: 0, opacity: 1 },
        { x: '22vw', opacity: 0, ease: 'power2.in' },
        0.75
      );

      scrollTl.fromTo(
        [labelRef.current, headlineRef.current, bodyRef.current, bulletsRef.current, tagsRef.current],
        { x: 0, opacity: 1 },
        { x: '-14vw', opacity: 0, ease: 'power2.in' },
        0.75
      );
    }, section);

    return () => ctx.revert();
  }, []);

  // Separate effect: scroll inside the tall screenshot via translateY
  useEffect(() => {
    const section = sectionRef.current;
    const img = imgInnerRef.current;
    const container = imgScrollContainerRef.current;

    if (!section || !img || !container) return;

    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    if (isMobile) return;

    // Force top position immediately before any async load
    gsap.set(img, { y: 0 });

    let st: ReturnType<typeof ScrollTrigger.create> | undefined;

    const setupScroll = () => {
      const overflow = img.offsetHeight - container.offsetHeight;
      if (overflow <= 0) return;

      // Reset to top
      gsap.set(img, { y: 0 });

      st = ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: '+=160%',
        scrub: 0.6,
        onUpdate: (self) => {
          // Scroll the image only while it's visible (progress 0.05 → 0.74)
          const p = gsap.utils.clamp(0, 1, (self.progress - 0.05) / 0.69);
          gsap.set(img, { y: -overflow * p });
        },
      });
    };

    if (img.complete) {
      setupScroll();
    } else {
      img.addEventListener('load', setupScroll, { once: true });
    }

    return () => st?.kill();
  }, []);

  const bullets = [
    'Catalogue mis à jour en temps réel',
    'Réservation & paiement en ligne intégrés',
    'Zéro maintenance technique requise',
  ];

  const tags = [
    { icon: Globe, label: 'Site web clé en main' },
    { icon: RefreshCw, label: 'Synchro automatique' },
    { icon: ShoppingCart, label: 'Vente en ligne' },
    { icon: Zap, label: 'Mise en ligne instantanée' },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col md:block w-screen min-h-screen md:h-screen md:overflow-hidden bg-[#F6F7F6] z-[65]"
    >
      {/* Text block */}
      <div className="px-6 pt-20 pb-6 md:p-0 md:absolute md:left-[7vw] md:top-[14vh] md:w-[44vw]">
        <span
          ref={labelRef}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-lokoto-green mb-4"
        >
          <Globe size={16} />
          Vitrine digitale
        </span>

        <h2
          ref={headlineRef}
          className="text-[28px] sm:text-[38px] lg:text-[48px] font-extrabold leading-[1.05] tracking-[-0.02em] text-lokoto-gray mb-6"
        >
          Votre site de location<br />
          <span className="text-lokoto-green">généré automatiquement</span>
        </h2>

        <p
          ref={bodyRef}
          className="text-base lg:text-lg text-lokoto-gray-medium leading-relaxed mb-8"
        >
          Lokoto crée et publie votre site vitrine en quelques secondes. Vos clients réservent et paient en ligne 24h/24 — le catalogue se synchronise en temps réel avec votre flotte disponible.
        </p>

        <ul ref={bulletsRef} className="space-y-3 mb-8">
          {bullets.map((bullet, index) => (
            <li key={index} className="flex items-center gap-3 text-lokoto-gray">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-lokoto-green/10 flex items-center justify-center">
                <Check size={12} className="text-lokoto-green" />
              </span>
              <span className="text-sm lg:text-base">{bullet}</span>
            </li>
          ))}
        </ul>

        <div ref={tagsRef} className="flex flex-wrap gap-2">
          {tags.map(({ icon: Icon, label }, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-lokoto-green/10 text-lokoto-green border border-lokoto-green/20"
            >
              <Icon size={12} />
              {label}
            </span>
          ))}
        </div>

        <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-lokoto-gold/20 text-lokoto-gray">
          <Clock size={14} />
          Bientôt disponible
        </div>
      </div>

      {/* Screenshot wrapper */}
      <div
        ref={imageRef}
        className="mx-6 mt-4 mb-6 rounded-[28px] overflow-hidden shadow-card
                   md:mx-0 md:mt-0 md:mb-0 md:absolute md:left-[54vw] md:top-0 md:w-[39vw] md:h-screen md:rounded-b-[34px] md:rounded-t-none"
        style={{ boxShadow: '0 24px 60px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.04)' }}
      >
        {/* Browser chrome */}
        <div className="hidden md:flex items-center gap-1.5 px-4 h-9 bg-[#EBEBEB] border-b border-black/[0.08] shrink-0">
          <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <span className="w-3 h-3 rounded-full bg-[#28C840]" />
          <div className="ml-3 flex-1 h-5 rounded-md bg-white/70 flex items-center justify-center">
            <span className="text-[10px] text-lokoto-gray-medium/60 font-mono">lokoto.sn/votre-agence</span>
          </div>
        </div>

        {/* Scroll container — clips the tall image */}
        <div
          ref={imgScrollContainerRef}
          className="h-72 sm:h-96 md:h-[calc(100vh-36px)] overflow-hidden"
        >
          <img
            ref={imgInnerRef}
            src="/screen.png"
            alt="Site de location généré par Lokoto"
            className="w-full block"
            style={{ height: 'auto', transform: 'translateY(0)', willChange: 'transform' }}
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureWebsite;
