import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Brain, WifiOff } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const WhyLokoto = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
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
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.07,
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {/* ── Card 1 : 0 FCFA — stat géante, 2 colonnes ── */}
          <div className="advantage-card md:col-span-1 lg:col-span-2 bg-white rounded-[24px] border border-black/[0.05] p-8 flex flex-col justify-between min-h-[210px]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-lokoto-gray-medium/60 mb-3">
                Modèle économique
              </p>
              <div className="text-[52px] lg:text-[68px] font-extrabold leading-none tracking-[-0.04em] text-lokoto-green">
                0 FCFA
              </div>
              <div className="text-sm font-medium text-lokoto-gray-medium mt-1">
                d'abonnement mensuel
              </div>
            </div>
            <p className="text-lokoto-gray-medium text-sm leading-relaxed mt-6 max-w-md">
              Pas de frais fixes. Vous payez uniquement une petite commission sur vos revenus — quand vous gagnez, on gagne.
            </p>
          </div>

          {/* ── Card 2 : Sénégal — dark ── */}
          <div className="advantage-card bg-lokoto-gray rounded-[24px] p-8 flex flex-col justify-between min-h-[210px]">
            <span className="text-5xl leading-none">🇸🇳</span>
            <div>
              <h3 className="text-lg font-bold text-white mb-2">
                Conçu pour le Sénégal
              </h3>
              <p className="text-white/55 text-sm leading-relaxed">
                Interface en français, mobile-first, adaptée aux réalités du marché local.
              </p>
            </div>
          </div>

          {/* ── Card 3 : GPS J+1 ── */}
          <div className="advantage-card bg-white rounded-[24px] border border-black/[0.05] p-8 flex flex-col justify-between min-h-[210px]">
            <MapPin size={24} className="text-lokoto-green" />
            <div>
              <div className="text-[44px] font-extrabold leading-none tracking-[-0.03em] text-lokoto-gray mb-3">
                J+1
              </div>
              <h3 className="text-base font-bold text-lokoto-gray mb-1.5">GPS clé en main</h3>
              <p className="text-lokoto-gray-medium text-sm leading-relaxed">
                Boîtier fourni et installé par nos équipes. Opérationnel dès le lendemain.
              </p>
            </div>
          </div>

          {/* ── Card 4 : IA ── */}
          <div className="advantage-card bg-white rounded-[24px] border border-black/[0.05] p-8 flex flex-col justify-between min-h-[210px]">
            <Brain size={24} className="text-lokoto-green" />
            <div>
              <h3 className="text-lg font-bold text-lokoto-gray mb-2">
                Intelligence prédictive
              </h3>
              <p className="text-lokoto-gray-medium text-sm leading-relaxed">
                Anticipez les périodes de forte demande. L'algorithme apprend de vos données au fil du temps.
              </p>
            </div>
          </div>

          {/* ── Card 5 : Hors ligne — accent vert ── */}
          <div className="advantage-card md:col-span-2 lg:col-span-1 bg-lokoto-green/10 border border-lokoto-green/15 rounded-[24px] p-8 flex flex-col justify-between min-h-[210px]">
            <WifiOff size={24} className="text-lokoto-green" />
            <div>
              <h3 className="text-lg font-bold text-lokoto-gray mb-2">
                Fonctionne sans connexion
              </h3>
              <p className="text-lokoto-gray-medium text-sm leading-relaxed">
                Le délestage ne stoppe pas votre activité. Vos données se synchronisent automatiquement à la reconnexion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyLokoto;
