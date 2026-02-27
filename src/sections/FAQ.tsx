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
      question: 'Comment fonctionne la commission ?',
      answer: 'Nous prélevons un petit pourcentage sur chaque location enregistrée dans Lokoto. Pas de location = pas de frais. C\'est simple, transparent et aligné avec votre succès.',
    },
    {
      question: 'Comment est installé le boîtier GPS ?',
      answer: 'Notre technicien se déplace pour installer le boîtier sur chacun de vos véhicules. L\'installation prend moins de 30 minutes par véhicule et est entièrement gratuite pour les 50 premiers inscrits.',
    },
    {
      question: 'Lokoto fonctionne-t-il sur téléphone ?',
      answer: 'Oui ! Lokoto est 100% accessible depuis votre smartphone. Pas besoin d\'ordinateur. L\'interface est pensée mobile-first pour vous permettre de gérer votre flotte où que vous soyez.',
    },
    {
      question: 'Mes données sont-elles sécurisées ?',
      answer: 'Oui, vos données sont hébergées sur des serveurs sécurisés et ne sont jamais partagées avec des tiers. Nous utilisons un chiffrement de niveau bancaire pour protéger toutes vos informations.',
    },
    {
      question: 'Puis-je essayer avant de m\'engager ?',
      answer: 'Bien sûr. Les 30 premiers jours sont gratuits, sans engagement. Vous pouvez tester toutes les fonctionnalités et décider ensuite si Lokoto correspond à vos besoins.',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#F6F7F6] py-20 lg:py-32 z-[100]"
    >
      <div className="px-6 lg:px-[7vw]">
        <div ref={headingRef} className="text-center mb-12 lg:mb-16">
          <h2 className="text-[32px] sm:text-[44px] lg:text-[56px] font-extrabold leading-[1.0] tracking-[-0.02em] text-lokoto-gray">
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
                className="bg-white rounded-2xl px-6 lg:px-8 border border-black/[0.06] shadow-sm data-[state=open]:shadow-card transition-shadow"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-lokoto-gray py-5 hover:no-underline data-[state=open]:text-lokoto-green transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-lokoto-gray-medium leading-relaxed pb-5">
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
