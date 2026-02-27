import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, ArrowRight, Gift, Zap, Star, MapPin, Globe } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const plans = [
  {
    icon: Gift,
    badge: 'Pour démarrer',
    name: 'Gratuit',
    price: '0',
    currency: 'FCFA',
    period: '/ mois',
    limit: 'Jusqu\'à 15 locations / mois',
    highlight: false,
    cta: 'Nous contacter',
    features: [
      'CRM & fichier clients',
      'Gestion des contrats',
      'Suivi de flotte basique',
      'Tableau de bord',
      'Application mobile',
      'Support WhatsApp',
    ],
  },
  {
    icon: Zap,
    badge: 'Le plus populaire',
    name: 'Pro',
    price: '16 500',
    currency: 'FCFA',
    period: '/ mois',
    limit: 'Locations illimitées',
    highlight: true,
    cta: 'Nous contacter',
    features: [
      'Tout le plan Gratuit',
      'Locations illimitées',
      'Analytics & rapports avancés',
      'Comptabilité intégrée',
      'Gestion des impayés',
      'Support prioritaire',
      'Sans engagement',
    ],
  },
  {
    icon: Star,
    badge: 'Tout inclus',
    name: 'Premium',
    price: '23 000',
    currency: 'FCFA',
    period: '/ mois',
    limit: 'Locations illimitées + accès total',
    highlight: false,
    cta: 'Nous contacter',
    premiumExtras: [
      { icon: MapPin, label: 'Balises GPS fournies & installées' },
      { icon: Globe, label: 'Site vitrine généré automatiquement' },
    ],
    features: [
      'Tout le plan Pro',
      'Tracking GPS temps réel',
      'Alertes & notifications GPS',
      'Site de réservation en ligne',
      'Catalogue synchro automatique',
      'Support dédié & onboarding',
    ],
  },
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

        <div ref={headingRef} className="text-center mb-12 lg:mb-16">
          <h2 className="text-[32px] sm:text-[44px] lg:text-[56px] font-extrabold leading-[1.0] tracking-[-0.02em] text-lokoto-gray mb-4">
            Démarrez gratuitement,<br />
            <span className="text-lokoto-green">évoluez sans limite</span>
          </h2>
          <p className="text-lg text-lokoto-gray-medium max-w-xl mx-auto">
            Pas de commission sur vos locations. Choisissez le plan qui correspond à votre activité.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch"
        >
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.name}
                className={`pricing-card relative flex flex-col rounded-[28px] p-7 lg:p-8 transition-all duration-300
                  ${plan.highlight
                    ? 'bg-lokoto-gray text-white shadow-2xl scale-[1.02] ring-2 ring-lokoto-green'
                    : 'bg-white border border-black/[0.06] hover:border-lokoto-green/30 hover:-translate-y-1 shadow-card'
                  }`}
              >
                {/* Badge */}
                <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-5 w-fit
                  ${plan.highlight ? 'bg-lokoto-green text-white' : 'bg-lokoto-green/10 text-lokoto-green'}`}
                >
                  <Icon size={12} />
                  {plan.badge}
                </div>

                {/* Name & Price */}
                <div className="mb-6">
                  <h3 className={`text-xl font-bold mb-3 ${plan.highlight ? 'text-white' : 'text-lokoto-gray'}`}>
                    {plan.name}
                  </h3>
                  <div className="flex items-end gap-1.5 flex-wrap">
                    <span className={`text-4xl font-extrabold leading-none ${plan.highlight ? 'text-lokoto-green' : 'text-lokoto-gray'}`}>
                      {plan.price}
                    </span>
                    <span className={`text-sm font-bold mb-0.5 ${plan.highlight ? 'text-lokoto-green/70' : 'text-lokoto-gray-medium'}`}>
                      {plan.currency}
                    </span>
                    <span className={`text-sm mb-0.5 ${plan.highlight ? 'text-white/50' : 'text-lokoto-gray-medium'}`}>
                      {plan.period}
                    </span>
                  </div>
                  <p className={`text-xs mt-2 ${plan.highlight ? 'text-white/40' : 'text-lokoto-gray-medium/70'}`}>
                    {plan.limit}
                  </p>
                </div>

                {/* Premium extras highlight */}
                {plan.premiumExtras && (
                  <div className="mb-5 space-y-2">
                    {plan.premiumExtras.map(({ icon: ExtraIcon, label }) => (
                      <div key={label} className="flex items-center gap-2 px-3 py-2 rounded-xl bg-lokoto-green/10 border border-lokoto-green/20">
                        <ExtraIcon size={14} className="text-lokoto-green shrink-0" />
                        <span className="text-xs font-semibold text-lokoto-green">{label}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center
                        ${plan.highlight ? 'bg-lokoto-green/20' : 'bg-lokoto-green/10'}`}
                      >
                        <Check size={11} className="text-lokoto-green" />
                      </span>
                      <span className={`text-sm ${plan.highlight ? 'text-white/80' : 'text-lokoto-gray'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  onClick={scrollToContact}
                  className={`w-full font-semibold px-5 py-3.5 rounded-full text-sm flex items-center justify-center gap-2 transition-all duration-300
                    ${plan.highlight
                      ? 'bg-lokoto-green text-white hover:bg-lokoto-green-dark shadow-lg hover:shadow-xl hover:-translate-y-0.5'
                      : 'bg-lokoto-gray/5 text-lokoto-gray hover:bg-lokoto-green hover:text-white border border-black/[0.08]'
                    }`}
                >
                  {plan.cta}
                  <ArrowRight size={15} />
                </button>
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <p className="text-center text-sm text-lokoto-gray-medium mt-10">
          Sans engagement · Résiliable à tout moment · Tarifs en Franc CFA (XOF)
        </p>
      </div>
    </section>
  );
};

export default Pricing;
