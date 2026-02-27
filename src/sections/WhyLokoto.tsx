import { useRef, useEffect } from 'react';
import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CreditCard, Globe, Cpu, Brain, WifiOff } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const WhyLokoto = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      const cards = cardsRef.current?.querySelectorAll('.advantage-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 60, scale: 0.98, opacity: 0 },
          {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  const advantages: { icon: React.ElementType; title: string; description: string; wide?: boolean }[] = [
    {
      icon: CreditCard,
      title: '0 FCFA d\'abonnement',
      description: 'Pas de frais fixes. Vous ne payez qu\'une petite commission quand vous gagnez de l\'argent.',
    },
    {
      icon: Globe,
      title: 'Conçu pour le Sénégal',
      description: 'Interface en français, pensée mobile-first, adaptée aux réalités du marché local.',
    },
    {
      icon: Cpu,
      title: 'GPS intégré, clé en main',
      description: 'On vous fournit et installe le boîtier. Rien à configurer, tout marche dès le premier jour.',
    },
    {
      icon: Brain,
      title: 'Intelligence prédictive',
      description: 'Anticipez les périodes de forte demande grâce à un algorithme qui apprend de vos données.',
    },
    {
      icon: WifiOff,
      title: 'Fonctionne sans connexion',
      description: 'Le délestage ne stoppe pas votre activité. Lokoto continue de fonctionner hors ligne — vos données se synchronisent automatiquement dès que la connexion revient.',
      wide: true,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="why-lokoto"
      className="relative bg-[#F6F7F6] py-20 lg:py-32 z-[70]"
    >
      <div className="px-6 lg:px-[7vw]">
        <div ref={headingRef} className="mb-12 lg:mb-16">
          <h2 className="text-[32px] sm:text-[44px] lg:text-[56px] font-extrabold leading-[1.0] tracking-[-0.02em] text-lokoto-gray">
            Pourquoi les loueurs<br />
            <span className="text-lokoto-green">choisissent Lokoto</span>
          </h2>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className={`advantage-card p-6 lg:p-8 bg-white rounded-[28px] border border-black/[0.06] hover:border-lokoto-green/30 hover:-translate-y-1 transition-all duration-300 ${advantage.wide ? 'md:col-span-2 flex flex-col md:flex-row md:items-center md:gap-10' : ''}`}
            >
              <div className={`flex-shrink-0 w-12 h-12 rounded-2xl bg-lokoto-green/10 flex items-center justify-center mb-5 ${advantage.wide ? 'md:mb-0 md:w-16 md:h-16' : ''}`}>
                <advantage.icon size={advantage.wide ? 28 : 24} className="text-lokoto-green" />
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-bold text-lokoto-gray mb-3">
                  {advantage.title}
                </h3>
                <p className="text-lokoto-gray-medium leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyLokoto;
