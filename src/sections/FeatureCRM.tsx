import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FeatureCRM = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const bulletsRef = useRef<HTMLUListElement>(null);

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
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        }
      });

      scrollTl.fromTo(
        imageRef.current,
        { x: '55vw', scale: 0.98, opacity: 0 },
        { x: 0, scale: 1, opacity: 1, ease: 'none' },
        0
      );

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
        imageRef.current,
        { x: 0, opacity: 1 },
        { x: '22vw', opacity: 0, ease: 'power2.in' },
        0.70
      );

      scrollTl.fromTo(
        [labelRef.current, headlineRef.current, bodyRef.current, bulletsRef.current],
        { x: 0, opacity: 1 },
        { x: '-14vw', opacity: 0, ease: 'power2.in' },
        0.70
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const bullets = [
    'Fiche conducteur complète',
    'Historique des locations',
    'Score de fiabilité client',
  ];

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col md:block w-screen min-h-screen md:h-screen md:overflow-hidden bg-[#F6F7F6] z-30"
    >
      {/* Text block — first on mobile, absolute on desktop */}
      <div className="px-6 pt-20 pb-6 md:p-0 md:absolute md:left-[7vw] md:top-[16vh] md:w-[44vw]">
        <span
          ref={labelRef}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-lokoto-green mb-4"
        >
          <Users size={16} />
          Fichier Client
        </span>

        <h2
          ref={headlineRef}
          className="text-[28px] sm:text-[38px] lg:text-[48px] font-extrabold leading-[1.05] tracking-[-0.02em] text-lokoto-gray mb-6"
        >
          Fichier client<br />
          <span className="text-lokoto-green">intelligent</span>
        </h2>

        <p
          ref={bodyRef}
          className="text-base lg:text-lg text-lokoto-gray-medium leading-relaxed mb-8"
        >
          Centralisez pièces, permis, historique et scoring. Retrouvez n'importe quelle info en 2 secondes.
        </p>

        <ul ref={bulletsRef} className="space-y-3">
          {bullets.map((bullet, index) => (
            <li key={index} className="flex items-center gap-3 text-lokoto-gray">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-lokoto-green/10 flex items-center justify-center">
                <Check size={12} className="text-lokoto-green" />
              </span>
              <span className="text-sm lg:text-base">{bullet}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Image — second on mobile, absolute on desktop */}
      <div
        ref={imageRef}
        className="mx-6 mt-4 mb-6 h-64 sm:h-80 rounded-[28px] overflow-hidden shadow-card
                   md:mx-0 md:mt-0 md:mb-0 md:absolute md:left-[54vw] md:top-[14vh] md:w-[39vw] md:h-[72vh] md:rounded-[34px]"
      >
        <img
          src="/crm.png"
          alt="CRM Lokoto — Fichier client"
          className="w-full h-full object-contain bg-white"
        />
      </div>
    </section>
  );
};

export default FeatureCRM;
