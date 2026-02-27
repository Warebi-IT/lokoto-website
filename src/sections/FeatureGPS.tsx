import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FeatureGPS = () => {
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
          end: '+=80%',
          pin: true,
          scrub: 0.6,
        }
      });

      scrollTl.fromTo(
        imageRef.current,
        { x: '-25vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0
      );

      scrollTl.fromTo(
        [labelRef.current, headlineRef.current, bodyRef.current],
        { x: '18vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none', stagger: 0.03 },
        0.05
      );

      scrollTl.fromTo(
        bulletsRef.current?.querySelectorAll('li') || [],
        { x: '12vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none', stagger: 0.02 },
        0.15
      );

      scrollTl.fromTo(
        imageRef.current,
        { x: 0, opacity: 1 },
        { x: '-12vw', opacity: 0, ease: 'power2.in' },
        0.82
      );

      scrollTl.fromTo(
        [labelRef.current, headlineRef.current, bodyRef.current, bulletsRef.current],
        { x: 0, opacity: 1 },
        { x: '12vw', opacity: 0, ease: 'power2.in' },
        0.82
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const bullets = [
    'Boîtier GPS fourni et installé',
    'Géofencing & alertes',
    'Suivi kilométrage en direct',
  ];

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col md:block w-screen min-h-screen md:h-screen md:overflow-hidden bg-[#F6F7F6] z-40"
    >
      {/* Text block — order-1 on mobile (shown first), absolute on desktop */}
      <div className="order-1 px-6 pt-20 pb-6 md:p-0 md:absolute md:left-[54vw] md:top-[16vh] md:w-[40vw]">
        <span
          ref={labelRef}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-lokoto-green mb-4"
        >
          <MapPin size={16} />
          Suivi GPS
        </span>

        <h2
          ref={headlineRef}
          className="text-[28px] sm:text-[38px] lg:text-[48px] font-extrabold leading-[1.05] tracking-[-0.02em] text-lokoto-gray mb-6"
        >
          Sachez où sont vos<br />
          <span className="text-lokoto-green">véhicules</span>, à tout moment
        </h2>

        <p
          ref={bodyRef}
          className="text-base lg:text-lg text-lokoto-gray-medium leading-relaxed mb-8"
        >
          Lokoto s'occupe de tout : boîtier livré, installé et connecté à votre tableau de bord. Vos véhicules ne disparaissent plus jamais dans la nature.
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

      {/* Image — order-2 on mobile (shown second), absolute on desktop */}
      <div
        ref={imageRef}
        className="order-2 mx-6 mt-4 mb-6 h-64 sm:h-80 rounded-[28px] overflow-hidden shadow-card
                   md:mx-0 md:mt-0 md:mb-0 md:absolute md:left-[7vw] md:top-[14vh] md:w-[44vw] md:h-[72vh] md:rounded-[34px]"
      >
        <img
          src="/gestion_flotte_gps.png"
          alt="Gestion de flotte et suivi GPS Lokoto"
          className="w-full h-full object-cover object-left-top"
        />
      </div>
    </section>
  );
};

export default FeatureGPS;
