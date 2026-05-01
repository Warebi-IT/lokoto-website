import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Problem = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const captionRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

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
        [headlineRef.current, captionRef.current, ctaRef.current],
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.45, stagger: 0.08, ease: 'power2.out',
          scrollTrigger: { trigger: section, start: 'top 75%' } }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const scrollToFeatures = () => {
    const element = document.getElementById('features');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="problem"
      className="relative flex flex-col md:block w-screen min-h-screen md:h-screen md:overflow-hidden bg-[#F6F7F6] z-20"
    >
      {/* Text block — order-1 on mobile (shown first), absolute on desktop */}
      <div className="order-1 px-6 pt-20 pb-6 md:p-0 md:absolute md:left-[46vw] md:top-[22vh] md:w-[48vw]">
        <h2
          ref={headlineRef}
          className="text-[32px] sm:text-[44px] lg:text-[56px] font-extrabold leading-[1.0] tracking-[-0.02em] text-lokoto-gray mb-6"
        >
          Vous gérez votre flotte<br />
          <span className="text-lokoto-gray-medium">comme en 2005 ?</span>
        </h2>

        <p
          ref={captionRef}
          className="text-base lg:text-lg text-lokoto-gray-medium max-w-full md:max-w-[38vw] leading-relaxed mb-8"
        >
          Si vous vous reconnaissez dans ces situations, Lokoto est fait pour vous.
        </p>

        <button
          ref={ctaRef}
          onClick={scrollToFeatures}
          className="bg-lokoto-green text-white font-semibold px-6 py-3 rounded-full hover:bg-lokoto-green-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2"
        >
          Découvrir les fonctionnalités
          <ArrowRight size={18} />
        </button>
      </div>

      {/* Image — order-2 on mobile (shown second), absolute on desktop */}
      <div
        ref={imageRef}
        className="order-2 mx-6 mt-4 mb-6 h-64 sm:h-80 rounded-[28px] overflow-hidden shadow-card
                   md:mx-0 md:mt-0 md:mb-0 md:absolute md:left-[7vw] md:top-[14vh] md:w-[34vw] md:h-[72vh] md:rounded-[34px]"
      >
        <img
          src="/problem_car.jpg"
          alt="Modern car detail"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Problem;
