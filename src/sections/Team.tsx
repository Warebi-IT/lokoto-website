import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const team = [
  {
    name: "Moussa Marega",
    role: "CEO & Co-fondateur",
    flag: "🇸🇳",
    initials: "ID",
    bg: "#2ECC71",
  },
  {
    name: "Fatou Ndiaye",
    role: "Directrice Produit",
    flag: "🇸🇳",
    initials: "FN",
    bg: "#1A8A4A",
  },
  {
    name: "Yousoupha Marega",
    role: "Développeur Full-Stack",
    flag: "🇸🇳",
    initials: "MS",
    bg: "#58D68D",
  },
  {
    name: "Aïssatou Fall",
    role: "Designer UX/UI",
    flag: "🇸🇳",
    initials: "AF",
    bg: "#2ECC71",
  },
  {
    name: "Mamadou Ba",
    role: "Business Development",
    flag: "🇸🇳",
    initials: "MB",
    bg: "#1A8A4A",
  },
  {
    name: "Yann Furrer",
    role: "Développeur Backend",
    flag: "🇫🇷",
    initials: "TD",
    bg: "#374151",
  },
];

const Team = () => {
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
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );

      const cards = cardsRef.current?.querySelectorAll(".team-card");
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 50, scale: 0.97, opacity: 0 },
          {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 0.55,
            stagger: 0.07,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#F6F7F6] py-20 lg:py-32 z-[100]"
    >
      <div className="px-6 lg:px-[7vw]">
        <div ref={headingRef} className="text-center mb-12 lg:mb-16">
          <h2 className="text-[32px] sm:text-[44px] lg:text-[56px] font-extrabold leading-[1.0] tracking-[-0.02em] text-lokoto-gray mb-4">
            L'équipe derrière
            <br />
            <span className="text-lokoto-green">Lokoto</span>
          </h2>
          <p className="text-lg text-lokoto-gray-medium max-w-xl mx-auto">
            Une équipe sénégalaise qui connaît le terrain, avec l'expertise
            technique pour bâtir la solution.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-2 md:grid-cols-3 gap-5 lg:gap-7 max-w-4xl mx-auto"
        >
          {team.map((member) => (
            <div
              key={member.name}
              className="team-card bg-white rounded-[24px] p-6 border border-black/[0.06] hover:border-lokoto-green/30 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center"
            >
              {/* Avatar */}
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4 flex-shrink-0"
                style={{ backgroundColor: member.bg }}
              >
                {member.initials}
              </div>

              {/* Infos */}
              <div className="text-base font-bold text-lokoto-gray leading-tight mb-1">
                {member.name}
              </div>
              <div className="text-xs text-lokoto-gray-medium leading-snug mb-3">
                {member.role}
              </div>

              {/* Flag */}
              <span className="text-lg" aria-label="nationalité">
                {member.flag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
