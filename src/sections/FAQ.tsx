import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

gsap.registerPlugin(ScrollTrigger);

const FAQ = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);

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

      gsap.fromTo(
        accordionRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: accordionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const faqs = [
    {
      question: 'Quel est le tarif après le lancement ?',
      answer: 'Pendant la phase de lancement, Lokoto est entièrement gratuit. Après le lancement officiel, le modèle sera à la commission : un petit pourcentage uniquement sur les locations enregistrées dans Lokoto. Pas de location = pas de frais. Le taux exact sera communiqué aux premiers inscrits en priorité — d\'où l\'intérêt de rejoindre la liste maintenant.',
    },
    {
      question: 'Comment est installé le boîtier GPS ?',
      answer: 'Notre technicien se déplace pour installer le boîtier sur chacun de vos véhicules. L\'installation prend moins de 30 minutes par véhicule et est entièrement gratuite pour les 50 premiers inscrits.',
    },
    {
      question: 'Lokoto fonctionne-t-il sans connexion internet stable ?',
      answer: 'Oui. Lokoto est conçu pour les réalités du Sénégal : si vous perdez la connexion (délestage, zone peu couverte), l\'application continue de fonctionner en mode hors-ligne. Toutes vos données se synchronisent automatiquement dès que la connexion est rétablie.',
    },
    {
      question: 'Puis-je importer mes données existantes (Excel, WhatsApp) ?',
      answer: 'Oui. Notre équipe vous accompagne pour importer vos fichiers clients et véhicules existants. Que vous ayez des tableurs Excel ou des listes WhatsApp, on s\'occupe de la migration pour vous — sans perte de données.',
    },
    {
      question: 'Lokoto fonctionne-t-il sur téléphone ?',
      answer: 'Oui ! Lokoto est 100% accessible depuis votre smartphone. Pas besoin d\'ordinateur. L\'interface est pensée mobile-first pour vous permettre de gérer votre flotte où que vous soyez.',
    },
    {
      question: 'Mes données sont-elles sécurisées ?',
      answer: 'Oui, vos données sont hébergées sur des serveurs sécurisés en Europe et ne sont jamais partagées avec des tiers. Vous êtes propriétaire de vos données et pouvez les exporter à tout moment.',
    },
    {
      question: 'Lokoto fonctionne-t-il pour les minibus ou moto-taxis ?',
      answer: 'Lokoto est conçu pour toute flotte de véhicules motorisés : voitures, SUV, minibus, pick-up. La version moto-taxi est en cours de développement. Si c\'est votre cas, mentionnez-le dans votre inscription — vous serez prioritaire.',
    },
    {
      question: 'Y a-t-il un engagement de durée ?',
      answer: 'Non. Lokoto n\'a aucun engagement de durée. Vous pouvez arrêter quand vous voulez, sans frais de résiliation. Pendant la phase de lancement, c\'est entièrement gratuit.',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#F6F7F6] dark:bg-[#111413] py-20 lg:py-32 z-[100]"
    >
      <div className="px-6 lg:px-[7vw]">
        <div ref={headingRef} className="text-center mb-12 lg:mb-16">
          <h2 className="text-[32px] sm:text-[44px] lg:text-[56px] font-extrabold leading-[1.0] tracking-[-0.02em] text-lokoto-gray dark:text-[#EDEFED]">
            Vos questions,<br />
            <span className="text-lokoto-green">nos réponses</span>
          </h2>
        </div>

        <div ref={accordionRef} className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white dark:bg-[#1C201C] rounded-2xl px-6 lg:px-8 border border-black/[0.06] dark:border-white/[0.07] shadow-sm data-[state=open]:shadow-card transition-shadow"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-lokoto-gray dark:text-[#EDEFED] py-5 hover:no-underline data-[state=open]:text-lokoto-green transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-lokoto-gray-medium dark:text-[#8A928A] leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
