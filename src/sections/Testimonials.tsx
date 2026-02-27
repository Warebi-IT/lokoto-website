import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    image: '/testimonial_1.jpg',
    name: 'Moussa D.',
    role: 'Gérant de flotte à Dakar',
    quote:
      'Depuis Lokoto, je sais exactement où sont mes 12 véhicules et quels clients me rapportent le plus. J\'aurais aimé avoir ça il y a 5 ans.',
  },
  {
    image: '/testimonial_2.jpg',
    name: 'Aïcha N.',
    role: 'Loueuse à Thiès',
    quote:
      'Le scoring client nous aide à éviter les impayés. On peut enfin faire confiance aux nouveaux clients avec des données concrètes.',
  },
  {
    image: '/testimonial_3.jpg',
    name: 'Omar F.',
    role: 'Entrepreneur à Mbour',
    quote:
      'L\'installation a pris 20 minutes. Le suivi est instantané. Mes véhicules sont enfin sous contrôle, même quand je suis en déplacement.',
  },
  {
    image: '/testimonial_1.jpg',
    name: 'Fatou B.',
    role: 'Propriétaire de flotte à Saint-Louis',
    quote:
      'Le tableau de bord me donne une vision claire de mes revenus par véhicule. Je sais maintenant quels cars me coûtent et quels cars me rapportent.',
  },
  {
    image: '/testimonial_2.jpg',
    name: 'Ibrahima S.',
    role: 'Loueur à Ziguinchor',
    quote:
      'Le support WhatsApp est réactif et l\'application marche même avec une connexion lente. Parfait pour les réalités locales.',
  },
];

const stats = [
  { value: '500+', label: 'véhicules suivis' },
  { value: '50+', label: 'loueurs inscrits' },
  { value: '98%', label: 'taux de satisfaction' },
];

const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

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

      const stats = statsRef.current?.querySelectorAll('.stat-item');
      if (stats) {
        gsap.fromTo(
          stats,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  // Doubled for seamless loop — keyframe moves -50% = exactly one copy scrolled out
  const doubled = [...testimonials, ...testimonials];

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#F6F7F6] py-20 lg:py-32 z-[90] overflow-hidden"
    >
      {/* Heading */}
      <div ref={headingRef} className="text-center mb-12 lg:mb-16 px-6 lg:px-[7vw]">
        <h2 className="text-[32px] sm:text-[44px] lg:text-[56px] font-extrabold leading-[1.0] tracking-[-0.02em] text-lokoto-gray">
          Ils nous font <span className="text-lokoto-green">confiance</span>
        </h2>
      </div>

      {/* ─── Aceternity — Infinite Moving Cards ─── */}
      {/*
        Le conteneur parent a un gradient mask sur les bords (fade transparent ↔ opaque)
        pour donner l'effet "infini" caractéristique d'Aceternity UI.
        L'animation CSS `marquee` scrolle les cartes en boucle seamless.
      */}
      <div
        className="relative mb-16"
        style={{
          maskImage:
            'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
        }}
      >
        <div
          className="flex gap-5 w-max animate-marquee hover:[animation-play-state:paused]"
          style={{ willChange: 'transform' }}
        >
          {doubled.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card w-[320px] sm:w-[360px] flex-shrink-0 bg-white rounded-[28px] p-6 border border-black/[0.06] shadow-card"
            >
              <Quote size={28} className="text-lokoto-green/25 mb-4" />
              <p className="text-lokoto-gray leading-relaxed mb-6 text-sm sm:text-base">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <div className="font-semibold text-sm text-lokoto-gray">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-lokoto-gray-medium">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div
        ref={statsRef}
        className="flex flex-wrap justify-center gap-8 lg:gap-16 px-6 lg:px-[7vw]"
      >
        {stats.map((stat, index) => (
          <div key={index} className="stat-item text-center">
            <div className="text-4xl lg:text-5xl font-extrabold text-lokoto-green mb-2">
              {stat.value}
            </div>
            <div className="text-lokoto-gray-medium">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
