import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Rocket, MapPin, Globe, BarChart2, FileText, Users, Smartphone } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  { icon: Users,      label: 'CRM & fichier clients' },
  { icon: FileText,   label: 'Gestion des contrats' },
  { icon: BarChart2,  label: 'Analytics & rapports' },
  { icon: MapPin,     label: 'Tracking GPS temps réel' },
  { icon: Globe,      label: 'Site de réservation en ligne' },
  { icon: Smartphone, label: 'Application mobile' },
];

const Pricing = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.6, ease: 'power3.out',
          scrollTrigger: { trigger: headingRef.current, start: 'top 80%', toggleActions: 'play none none reverse' },
        }
      );

      const cards = cardsRef.current?.querySelectorAll('.pricing-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 60, scale: 0.97, opacity: 0 },
          {
            y: 0, scale: 1, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out',
            scrollTrigger: { trigger: cardsRef.current, start: 'top 75%', toggleActions: 'play none none reverse' },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  const scrollToContact = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      ref={sectionRef}
      id="pricing"
      className="relative bg-[#F6F7F6] py-20 lg:py-32 z-[80]"
    >
      <div className="px-6 lg:px-[7vw]">

        {/* Heading */}
        <div ref={headingRef} className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lokoto-green/10 text-lokoto-green text-xs font-semibold mb-5">
            <Rocket size={12} />
            Offre de lancement
          </div>
          <h2 className="text-[32px] sm:text-[44px] lg:text-[56px] font-extrabold leading-[1.05] tracking-[-0.02em] text-lokoto-gray mb-4">
            On se lance —<br />
            <span className="text-lokoto-green">Lokoto est gratuit pour vous</span>
          </h2>
          <p className="text-lg text-lokoto-gray-medium max-w-xl mx-auto">
            Pas de carte bancaire. Pas d'engagement. Prenez Lokoto en main dès aujourd'hui
            et découvrez comment transformer la gestion de votre flotte.
          </p>
        </div>

        {/* Launch card */}
        <div ref={cardsRef} className="max-w-3xl mx-auto">
          <div className="pricing-card relative rounded-[32px] bg-lokoto-gray text-white p-8 lg:p-12 shadow-2xl overflow-hidden">

            {/* Background glow */}
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-lokoto-green/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-lokoto-green/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative">
              {/* Price */}
              <div className="flex items-end gap-3 mb-2">
                <span className="text-[72px] lg:text-[88px] font-extrabold leading-none text-lokoto-green">
                  0
                </span>
                <span className="text-2xl font-bold text-white/60 mb-4">FCFA / mois</span>
              </div>
              <p className="text-white/50 text-sm mb-10">
                Accès complet à toutes les fonctionnalités · Sans durée limitée pendant le lancement
              </p>

              {/* Features grid */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {features.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-xl bg-lokoto-green/20 flex items-center justify-center">
                      <Icon size={15} className="text-lokoto-green" />
                    </span>
                    <span className="text-sm text-white/80">{label}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={scrollToContact}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-lokoto-green text-white font-semibold px-8 py-4 rounded-full text-base transition-all duration-300 hover:bg-lokoto-green-dark shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Prendre Lokoto en main
                <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <p className="text-center text-sm text-lokoto-gray-medium mt-10">
          Sans engagement · Accès complet · Support WhatsApp inclus
        </p>
      </div>
    </section>
  );
};

export default Pricing;
