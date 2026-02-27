import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TrendingUp, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const TAUX_HORAIRE = 1_000; // FCFA/h — coût du temps admin au Sénégal

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

const Slider = ({ label, hint, value, min, max, step, display, onChange }: SliderProps) => (
  <div className="space-y-2">
    <div className="flex justify-between items-baseline">
      <div>
        <span className="text-sm font-semibold text-lokoto-gray">{label}</span>
        {hint && <span className="text-xs text-lokoto-gray-medium ml-1.5">{hint}</span>}
      </div>
      <span className="text-sm font-bold text-lokoto-green tabular-nums">{display}</span>
    </div>
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="w-full h-2 rounded-full cursor-pointer"
      style={{ accentColor: '#2ECC71' }}
    />
    <div className="flex justify-between text-xs text-black/25">
      <span>{min.toLocaleString('fr-FR')}</span>
      <span>{max.toLocaleString('fr-FR')}</span>
    </div>
  </div>
);

const Calculator = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardRef    = useRef<HTMLDivElement>(null);

  const [vehicules,   setVehicules]   = useState(8);
  const [prixJour,    setPrixJour]    = useState(35_000);
  const [taux,        setTaux]        = useState(55);
  const [heuresAdmin, setHeuresAdmin] = useState(10);

  // ── Calculs ──────────────────────────────────────────────────────
  const revenuActuel  = vehicules * prixJour * (taux / 100) * 30;
  const tauxLokoto    = Math.min(taux + 15, 95);
  const revenuNet     = vehicules * prixJour * (tauxLokoto / 100) * 30;
  const gainRevenu    = revenuNet - revenuActuel;
  const tempsRecupere = Math.round(heuresAdmin * 4 * 0.7);
  const economieTemps = tempsRecupere * TAUX_HORAIRE;
  const gainTotal     = gainRevenu + economieTemps;

  useEffect(() => {
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
      className="relative bg-[#F6F7F6] py-20 lg:py-32 z-[75]"
    >
      <div className="px-6 lg:px-[7vw]">

        {/* Heading */}
        <div ref={headingRef} className="text-center mb-12 lg:mb-16">
          <h2 className="text-[32px] sm:text-[44px] lg:text-[56px] font-extrabold leading-[1.0] tracking-[-0.02em] text-lokoto-gray mb-4">
            Combien pourriez-vous<br />
            <span className="text-lokoto-green">gagner avec Lokoto ?</span>
          </h2>
          <p className="text-lg text-lokoto-gray-medium max-w-xl mx-auto">
            Renseignez les données de votre flotte et voyez l'impact en temps réel.
          </p>
        </div>

        {/* Card */}
        <div
          ref={cardRef}
          className="max-w-5xl mx-auto rounded-[34px] shadow-card overflow-hidden grid grid-cols-1 lg:grid-cols-2 bg-white"
        >

          {/* ── Gauche : sliders ── */}
          <div className="p-8 lg:p-10 space-y-7 border-b lg:border-b-0 lg:border-r border-black/[0.06]">
            <div className="flex items-center gap-2 text-xs font-semibold text-lokoto-green uppercase tracking-wider">
              <TrendingUp size={14} />
              Votre flotte aujourd'hui
            </div>

            <Slider
              label="Nombre de véhicules"
              value={vehicules}
              min={1} max={50} step={1}
              display={`${vehicules} véhicule${vehicules > 1 ? 's' : ''}`}
              onChange={setVehicules}
            />
            <Slider
              label="Prix de location moyen"
              hint="/ jour"
              value={prixJour}
              min={15_000} max={100_000} step={5_000}
              display={`${fmt(prixJour)} FCFA`}
              onChange={setPrixJour}
            />
            <Slider
              label="Taux d'occupation actuel"
              value={taux}
              min={20} max={90} step={5}
              display={`${taux} %`}
              onChange={setTaux}
            />
            <Slider
              label="Temps admin"
              hint="/ semaine"
              value={heuresAdmin}
              min={2} max={40} step={1}
              display={`${heuresAdmin} h`}
              onChange={setHeuresAdmin}
            />
          </div>

          {/* ── Droite : résultats ── */}
          <div className="p-8 lg:p-10 flex flex-col justify-between gap-8 bg-lokoto-gray">

            <div className="space-y-6">

              {/* Comparaison revenus */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-white/40 mb-1">Revenus actuels / mois</div>
                  <div className="text-xl font-bold text-white/60 tabular-nums">
                    {fmt(revenuActuel)} <span className="text-sm font-normal">FCFA</span>
                  </div>
                </div>
                <div>
                  <div className="text-xs text-white/40 mb-1">
                    Avec Lokoto / mois
                    <span className="ml-1 text-lokoto-green">+{tauxLokoto - taux}%</span>
                  </div>
                  <div className="text-xl font-bold text-white tabular-nums">
                    {fmt(revenuNet)} <span className="text-sm font-normal">FCFA</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10" />

              {/* Décomposition */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-white/50">Gain sur les revenus</span>
                  <span className="font-semibold text-white tabular-nums">+{fmt(gainRevenu)} FCFA</span>
                </div>
                <div className="flex justify-between items-start text-sm">
                  <div>
                    <div className="text-white/50">Économie temps admin</div>
                    <div className="text-xs text-white/25 mt-0.5">
                      {tempsRecupere} h récupérées × 1 000 FCFA/h
                    </div>
                  </div>
                  <span className="font-semibold text-lokoto-gold tabular-nums">+{fmt(economieTemps)} FCFA</span>
                </div>
              </div>

              <div className="border-t border-white/10" />

              {/* Total */}
              <div>
                <div className="text-xs text-white/40 uppercase tracking-wider mb-2">Gain total estimé / mois</div>
                <div className="text-5xl font-extrabold text-lokoto-green tabular-nums leading-none">
                  +{fmt(gainTotal)}
                </div>
                <div className="text-sm text-lokoto-green/60 mt-2 tabular-nums">
                  FCFA — soit +{fmt(gainTotal * 12)} FCFA / an
                </div>
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
              <p className="text-xs text-white/25 text-center">
                Hypothèses : +15% d'occupation · 70% du temps admin automatisé · 1 000 FCFA/h
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
