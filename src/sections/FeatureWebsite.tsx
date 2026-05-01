import { useRef, useLayoutEffect } from 'react';
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

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const img = imgInnerRef.current;
    const container = imgScrollContainerRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out',
          scrollTrigger: { trigger: section, start: 'top 80%' } }
      );
      gsap.fromTo(
        [labelRef.current, headlineRef.current, bodyRef.current],
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.45, stagger: 0.07, ease: 'power2.out',
          scrollTrigger: { trigger: section, start: 'top 75%' } }
      );
      gsap.fromTo(
        bulletsRef.current?.querySelectorAll('li') || [],
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.05, ease: 'power2.out',
          scrollTrigger: { trigger: section, start: 'top 70%' } }
      );
      gsap.fromTo(
        tagsRef.current,
        { y: 12, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out',
          scrollTrigger: { trigger: section, start: 'top 65%' } }
      );

      // Scroll inside the tall screenshot
      if (img && container && !window.matchMedia('(max-width: 767px)').matches) {
        gsap.set(img, { y: 0 });
        const setupScroll = () => {
          const overflow = img.offsetHeight - container.offsetHeight;
          if (overflow <= 0) return;
          gsap.set(img, { y: 0 });
          ScrollTrigger.create({
            trigger: section,
            start: 'top center',
            end: 'bottom center',
            scrub: 1,
            onUpdate: (self) => {
              gsap.set(img, { y: -overflow * self.progress });
            },
          });
        };
        if (img.complete) setupScroll();
        else img.addEventListener('load', setupScroll, { once: true });
      }
    }, section);

    return () => ctx.revert();
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
      className="relative flex flex-col md:block w-screen min-h-screen md:h-screen md:overflow-hidden bg-[#F6F7F6] dark:bg-[#111413] z-[65]"
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
          className="text-[28px] sm:text-[38px] lg:text-[48px] font-extrabold leading-[1.05] tracking-[-0.02em] text-lokoto-gray dark:text-[#EDEFED] mb-6"
        >
          Votre site de location<br />
          <span className="text-lokoto-green">généré automatiquement</span>
        </h2>

        <p
          ref={bodyRef}
          className="text-base lg:text-lg text-lokoto-gray-medium dark:text-[#8A928A] leading-relaxed mb-8"
        >
          Lokoto crée et publie votre site vitrine en quelques secondes. Vos clients réservent et paient en ligne 24h/24 — le catalogue se synchronise en temps réel avec votre flotte disponible.
        </p>

        <ul ref={bulletsRef} className="space-y-3 mb-8">
          {bullets.map((bullet, index) => (
            <li key={index} className="flex items-center gap-3 text-lokoto-gray dark:text-[#EDEFED]">
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
        <div className="hidden md:flex items-center gap-1.5 px-4 h-9 bg-[#EBEBEB] dark:bg-[#252825] border-b border-black/[0.08] dark:border-white/[0.08] shrink-0">
          <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <span className="w-3 h-3 rounded-full bg-[#28C840]" />
          <div className="ml-3 flex-1 h-5 rounded-md bg-white/70 flex items-center justify-center">
            <span className="text-[10px] text-lokoto-gray-medium/60 dark:text-[#8A928A]/60 font-mono">lokoto.sn/votre-agence</span>
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
