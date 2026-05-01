import { Users, Check } from 'lucide-react';

const FeatureCRM = () => {
  const bullets = [
    'Fiche conducteur complète',
    'Historique des locations',
    'Score de fiabilité client',
  ];

  return (
    <section
      className="relative flex flex-col md:block w-screen min-h-screen md:h-screen md:overflow-hidden bg-[#F6F7F6] dark:bg-[#111413] z-30"
    >
      {/* Text block — first on mobile, absolute on desktop */}
      <div className="px-6 pt-20 pb-6 md:p-0 md:absolute md:left-[7vw] md:top-[16vh] md:w-[44vw]">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-lokoto-green mb-4">
          <Users size={16} />
          CRM
        </span>

        <h2 className="text-[28px] sm:text-[38px] lg:text-[48px] font-extrabold leading-[1.05] tracking-[-0.02em] text-lokoto-gray dark:text-[#EDEFED] mb-6">
          Fichier client<br />
          <span className="text-lokoto-green">intelligent</span>
        </h2>

        <p className="text-base lg:text-lg text-lokoto-gray-medium dark:text-[#8A928A] leading-relaxed mb-8">
          Centralisez pièces, permis, historique et scoring. Retrouvez n'importe quelle info en 2 secondes.
        </p>

        <ul className="space-y-3">
          {bullets.map((bullet, index) => (
            <li key={index} className="flex items-center gap-3 text-lokoto-gray dark:text-[#EDEFED]">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-lokoto-green/10 flex items-center justify-center">
                <Check size={12} className="text-lokoto-green" />
              </span>
              <span className="text-sm lg:text-base">{bullet}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Image — second on mobile, absolute on desktop */}
      <div className="mx-6 mt-4 mb-6 h-64 sm:h-80 rounded-[28px] overflow-hidden shadow-card
                   md:mx-0 md:mt-0 md:mb-0 md:absolute md:left-[54vw] md:top-[14vh] md:w-[39vw] md:h-[72vh] md:rounded-[34px]">
        <img
          src="/crm.png"
          alt="CRM Lokoto — Fichier client"
          className="w-full h-full object-contain bg-[#F6F7F6] dark:bg-[#111413]"
        />
      </div>
    </section>
  );
};

export default FeatureCRM;
