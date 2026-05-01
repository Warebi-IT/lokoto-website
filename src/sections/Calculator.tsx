import { useState, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const TAUX_HORAIRE = 1_000;

const fmt = (n: number) =>
  new Intl.NumberFormat('fr-FR').format(Math.round(n));

interface SliderProps {
  label: string;
  hint?: string;
  value: number;
  min: number;
  max: number;
  step: number;
  display: string;
  onChange: (v: number) => void;
}

const Slider = ({ label, hint, value, min, max, step, display, onChange }: SliderProps) => {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div className="space-y-3">
      <div className="flex justify-between items-baseline">
        <span className="text-xs font-semibold uppercase tracking-wider text-lokoto-gray-medium/50 dark:text-[#8A928A]/50">
          {label}{hint && <span className="normal-case tracking-normal ml-1">{hint}</span>}
        </span>
        <span className="text-[22px] font-extrabold text-lokoto-gray dark:text-[#EDEFED] tabular-nums leading-none">
          {display}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="calc-slider"
        style={{ '--fill': `${pct}%` } as React.CSSProperties}
      />
    </div>
  );
};

const Calculator = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardRef    = useRef<HTMLDivElement>(null);

  const [vehicules,   setVehicules]   = useState(8);
  const [prixJour,    setPrixJour]    = useState(35_000);
  const [taux,        setTaux]        = useState(55);
  const [heuresAdmin, setHeuresAdmin] = useState(10);

  const revenuActuel  = vehicules * prixJour * (taux / 100) * 30;
  const tauxLokoto    = Math.min(taux + 15, 95);
  const revenuNet     = vehicules * prixJour * (tauxLokoto / 100) * 30;
  const gainRevenu    = revenuNet - revenuActuel;
  const tempsRecupere = Math.round(heuresAdmin * 4 * 0.7);
  const economieTemps = tempsRecupere * TAUX_HORAIRE;
  const gainTotal     = gainRevenu + economieTemps;

  const barActuel = Math.round((revenuActuel / revenuNet) * 100);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current, { y: 30, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.6, ease: 'power3.out',
        scrollTrigger: { trigger: headingRef.current, start: 'top 80%', toggleActions: 'play none none reverse' },
      });
      gsap.fromTo(cardRef.current, { y: 60, scale: 0.98, opacity: 0 }, {
        y: 0, scale: 1, opacity: 1, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: cardRef.current, start: 'top 75%', toggleActions: 'play none none reverse' },
      });
    }, section);
    return () => ctx.revert();
  }, []);

  const scrollToContact = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      ref={sectionRef}
      id="calculator"
      className="relative bg-[#F6F7F6] dark:bg-[#111413] py-20 lg:py-32 z-[75]"
    >
      <div className="px-6 lg:px-[7vw]">

        {/* Heading */}
        <div ref={headingRef} className="mb-12 lg:mb-16">
          <h2 className="text-[32px] sm:text-[44px] lg:text-[56px] font-extrabold leading-[1.0] tracking-[-0.02em] text-lokoto-gray dark:text-[#EDEFED] mb-4">
            Combien pourriez-vous<br />
            <span className="text-lokoto-green">gagner avec Lokoto ?</span>
          </h2>
          <p className="text-lg text-lokoto-gray-medium dark:text-[#8A928A] max-w-xl">
            Ajustez les paramètres de votre flotte et voyez l'impact en temps réel.
          </p>
        </div>

        {/* Card */}
        <div
          ref={cardRef}
          className="max-w-5xl mx-auto rounded-[32px] overflow-hidden grid grid-cols-1 lg:grid-cols-2 shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
        >

          {/* ── Gauche : sliders ── */}
          <div className="p-8 lg:p-10 space-y-8 bg-white dark:bg-[#1C201C] border-b lg:border-b-0 lg:border-r border-black/[0.05] dark:border-white/[0.07]">
            <p className="text-xs font-semibold uppercase tracking-widest text-lokoto-gray-medium/50 dark:text-[#8A928A]/50">
              Votre flotte
            </p>

            <Slider
              label="Véhicules"
              value={vehicules}
              min={1} max={50} step={1}
              display={`${vehicules}`}
              onChange={setVehicules}
            />
            <Slider
              label="Prix moyen"
              hint="/ jour"
              value={prixJour}
              min={15_000} max={100_000} step={5_000}
              display={`${fmt(prixJour)} FCFA`}
              onChange={setPrixJour}
            />
            <Slider
              label="Occupation"
              value={taux}
              min={20} max={90} step={5}
              display={`${taux}%`}
              onChange={setTaux}
            />
            <Slider
              label="Temps admin"
              hint="/ semaine"
              value={heuresAdmin}
              min={2} max={40} step={1}
              display={`${heuresAdmin}h`}
              onChange={setHeuresAdmin}
            />
          </div>

          {/* ── Droite : résultats ── */}
          <div className="p-8 lg:p-10 flex flex-col justify-between gap-8 bg-lokoto-gray">

            {/* Hero gain */}
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-white/30 mb-4">
                Gain estimé / mois
              </p>
              <div className="text-[52px] lg:text-[64px] font-extrabold text-lokoto-green leading-none tabular-nums">
                +{fmt(gainTotal)}
              </div>
              <p className="text-sm text-white/30 mt-2 tabular-nums">
                FCFA &nbsp;·&nbsp; soit +{fmt(gainTotal * 12)} / an
              </p>
            </div>

            {/* Barres comparatives */}
            <div className="space-y-4">
              {/* Avant */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-white/40">Revenus actuels</span>
                  <span className="text-white/50 tabular-nums">{fmt(revenuActuel)} FCFA</span>
                </div>
                <div className="h-1.5 bg-white/[0.07] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-white/25 rounded-full transition-all duration-500"
                    style={{ width: `${barActuel}%` }}
                  />
                </div>
              </div>

              {/* Avec Lokoto */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-white/40">
                    Avec Lokoto
                    <span className="ml-1.5 text-lokoto-green font-semibold">+{tauxLokoto - taux}%</span>
                  </span>
                  <span className="text-white tabular-nums font-medium">{fmt(revenuNet)} FCFA</span>
                </div>
                <div className="h-1.5 bg-white/[0.07] rounded-full overflow-hidden">
                  <div className="h-full bg-lokoto-green rounded-full transition-all duration-500 w-full" />
                </div>
              </div>

              {/* Économie temps */}
              <div className="flex justify-between items-center pt-1">
                <div>
                  <p className="text-xs text-white/40">Temps admin récupéré</p>
                  <p className="text-[11px] text-white/20 mt-0.5">{tempsRecupere}h × 1 000 FCFA/h</p>
                </div>
                <span className="text-sm font-semibold tabular-nums" style={{ color: '#F1C40F' }}>
                  +{fmt(economieTemps)} FCFA
                </span>
              </div>
            </div>

            {/* CTA */}
            <div className="space-y-3">
              <button
                onClick={scrollToContact}
                className="w-full bg-lokoto-green text-white font-semibold px-6 py-3.5 rounded-full hover:bg-lokoto-green-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 text-sm"
              >
                Je veux ces gains
                <ArrowRight size={16} />
              </button>
              <p className="text-[11px] text-white/20 text-center leading-relaxed">
                +15% d'occupation · 70% du temps admin automatisé · 1 000 FCFA/h
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
