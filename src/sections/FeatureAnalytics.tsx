import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check } from 'lucide-react';

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

    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out',
          scrollTrigger: { trigger: section, start: 'top 80%' } }
      );
      gsap.fromTo(
        [badgeRef.current, headlineRef.current, bodyRef.current],
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
      className="relative flex flex-col md:block w-screen md:h-screen md:overflow-hidden bg-[#F6F7F6] dark:bg-[#111413] z-50"
    >
      {/* Text block — first on mobile, absolute on desktop */}
      <div className="px-6 pt-20 pb-6 md:p-0 md:absolute md:left-[7vw] md:top-[16vh] md:w-[44vw]">
        <span
          ref={badgeRef}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-lokoto-green mb-4"
        >
          Analytics
        </span>

        <h2
          ref={headlineRef}
          className="text-[28px] sm:text-[38px] lg:text-[48px] font-extrabold leading-[1.05] tracking-[-0.02em] text-lokoto-gray dark:text-[#EDEFED] mb-6"
        >
          Anticipez la demande<br />
          <span className="text-lokoto-green">avant vos concurrents</span>
        </h2>

        <p
          ref={bodyRef}
          className="text-base lg:text-lg text-lokoto-gray-medium dark:text-[#8A928A] leading-relaxed mb-8"
        >
          Lokoto analyse vos données pour vous dire quels véhicules sont les plus demandés et quand.
        </p>

        <ul ref={bulletsRef} className="space-y-3">
          {bullets.map((bullet, index) => (
            <li key={index} className="flex items-center gap-3 text-lokoto-gray dark:text-[#EDEFED]">
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
          alt="Analyse des performances de flotte — tableau de bord analytics Lokoto"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default FeatureAnalytics;
