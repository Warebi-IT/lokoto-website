import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FeatureAnalytics = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLSpanElement>(null);
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
        { x: '25vw', scale: 0.98, opacity: 0 },
        { x: 0, scale: 1, opacity: 1, ease: 'none' },
        0
      );

      scrollTl.fromTo(
        [badgeRef.current, headlineRef.current, bodyRef.current],
        { x: '-18vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none', stagger: 0.03 },
        0.05
      );

      scrollTl.fromTo(
        bulletsRef.current?.querySelectorAll('li') || [],
        { x: '-12vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none', stagger: 0.02 },
        0.15
      );

      scrollTl.fromTo(
        imageRef.current,
        { x: 0, opacity: 1 },
        { x: '14vw', opacity: 0, ease: 'power2.in' },
        0.82
      );

      scrollTl.fromTo(
        [badgeRef.current, headlineRef.current, bodyRef.current, bulletsRef.current],
        { x: 0, opacity: 1 },
        { x: '-10vw', opacity: 0, ease: 'power2.in' },
        0.82
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const bullets = [
    'Dashboard de rentabilité',
    'Prévisions saisonnières',
    'Véhicules les plus performants',
  ];

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col md:block w-screen min-h-screen md:h-screen md:overflow-hidden bg-[#F6F7F6] z-50"
    >
      {/* Text block — first on mobile, absolute on desktop */}
      <div className="px-6 pt-20 pb-6 md:p-0 md:absolute md:left-[7vw] md:top-[16vh] md:w-[44vw]">
        <span
          ref={badgeRef}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-lokoto-gold/20 text-lokoto-gray mb-4"
        >
          <Clock size={14} />
          Bientôt disponible
        </span>

        <h2
          ref={headlineRef}
          className="text-[28px] sm:text-[38px] lg:text-[48px] font-extrabold leading-[1.05] tracking-[-0.02em] text-lokoto-gray mb-6"
        >
          Anticipez la demande<br />
          <span className="text-lokoto-green">avant vos concurrents</span>
        </h2>

        <p
          ref={bodyRef}
          className="text-base lg:text-lg text-lokoto-gray-medium leading-relaxed mb-8"
        >
          Lokoto analyse vos données pour vous dire quels véhicules sont les plus demandés et quand.
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
          src="/feature_office.jpg"
          alt="Professional in office"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default FeatureAnalytics;
