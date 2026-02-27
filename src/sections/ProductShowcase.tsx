import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProductShowcase = () => {
  const sectionRef  = useRef<HTMLElement>(null);
  const labelRef    = useRef<HTMLDivElement>(null);
  const headingRef  = useRef<HTMLHeadingElement>(null);
  const frameRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        [labelRef.current, headingRef.current],
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: labelRef.current, start: 'top 85%' },
        }
      );

      gsap.fromTo(
        frameRef.current,
        { y: 60, opacity: 0, scale: 0.96 },
        {
          y: 0, opacity: 1, scale: 1, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: frameRef.current, start: 'top 80%' },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#F6F7F6] py-24 lg:py-36 px-6 overflow-hidden z-[85]"
    >
      {/* Subtle radial glow background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 60%, rgba(46,204,113,0.07) 0%, transparent 70%)',
        }}
      />

      {/* Heading */}
      <div className="text-center mb-12 lg:mb-16 relative z-10">
        <div ref={labelRef} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lokoto-green/10 border border-lokoto-green/20 text-lokoto-green text-xs font-semibold uppercase tracking-wider mb-5">
          Interface
        </div>
        <h2
          ref={headingRef}
          className="text-[28px] sm:text-[40px] lg:text-[52px] font-extrabold leading-[1.05] tracking-[-0.02em] text-lokoto-gray"
        >
          Tout votre business,{' '}
          <span className="text-lokoto-green">en un coup d'œil</span>
        </h2>
      </div>

      {/* Browser frame */}
      <div
        ref={frameRef}
        className="relative max-w-5xl mx-auto z-10"
        style={{
          filter: 'drop-shadow(0 30px 80px rgba(46,204,113,0.18)) drop-shadow(0 8px 32px rgba(0,0,0,0.12))',
        }}
      >
        {/* Browser chrome */}
        <div className="rounded-t-2xl bg-white border border-black/[0.08] px-4 py-3 flex items-center gap-2">
          {/* Traffic lights */}
          <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
          <span className="w-3 h-3 rounded-full bg-[#28C840]" />
          {/* URL bar */}
          <div className="flex-1 mx-4 bg-black/[0.04] rounded-md px-3 py-1 text-xs text-lokoto-gray-medium font-mono">
            app.lokoto.sn/dashboard
          </div>
        </div>

        {/* Screenshot */}
        <div className="rounded-b-2xl overflow-hidden border border-t-0 border-black/[0.08]">
          <img
            src="/dashboard.png"
            alt="Lokoto Dashboard — interface principale"
            className="w-full h-auto block"
            loading="lazy"
          />
        </div>

        {/* Green glow ring */}
        <div
          className="absolute -inset-px rounded-2xl pointer-events-none"
          style={{
            boxShadow: '0 0 0 1px rgba(46,204,113,0.25)',
          }}
        />
      </div>
    </section>
  );
};

export default ProductShowcase;
