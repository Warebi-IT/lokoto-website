import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useDarkMode } from '@/hooks/use-dark-mode';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDark, toggle } = useDarkMode();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'Fonctionnalités', id: 'features' },
    { label: 'Pourquoi Lokoto', id: 'why-lokoto' },
    { label: 'Tarifs', id: 'pricing' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <>
      {/* ── Floating pill nav ── */}
      <div className="fixed top-5 left-0 right-0 z-[200] flex justify-center px-4 pointer-events-none">
        <nav
          className={cn(
            'flex items-center gap-1 px-2 py-2 rounded-full border pointer-events-auto transition-all duration-500',
            isScrolled
              ? 'bg-white/85 dark:bg-[#111413]/90 backdrop-blur-xl border-black/[0.07] dark:border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.10)]'
              : 'bg-white/25 dark:bg-[#111413]/20 backdrop-blur-md border-white/40 dark:border-white/[0.10] shadow-[0_4px_20px_rgba(0,0,0,0.04)]'
          )}
        >
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="relative px-3 py-1.5 hover:opacity-80 transition-opacity duration-200"
          >
            <span className="text-base font-bold text-lokoto-gray dark:text-[#EDEFED]">Lokoto</span>
            <img src="/logo.png" alt="" className="absolute -bottom-1 -right-1 h-4 w-auto" />
          </button>

          {/* Separator */}
          <div className="hidden lg:block w-px h-4 bg-black/10 dark:bg-white/10 mx-1" />

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="px-4 py-1.5 text-sm font-medium text-lokoto-gray-medium dark:text-[#8A928A] hover:text-lokoto-gray dark:hover:text-[#EDEFED] rounded-full hover:bg-black/[0.05] dark:hover:bg-white/[0.07] transition-all duration-200"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Separator */}
          <div className="hidden lg:block w-px h-4 bg-black/10 dark:bg-white/10 mx-1" />

          {/* Dark mode toggle */}
          <button
            onClick={toggle}
            className="p-2 rounded-full text-lokoto-gray-medium dark:text-[#8A928A] hover:bg-black/[0.05] dark:hover:bg-white/[0.07] transition-all duration-200"
            aria-label="Basculer le thème"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Desktop CTA */}
          <button
            onClick={() => scrollToSection('contact')}
            className="hidden lg:flex items-center bg-lokoto-green text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-lokoto-green-dark transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            Rejoindre la liste
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-full text-lokoto-gray dark:text-[#EDEFED] hover:bg-black/[0.05] dark:hover:bg-white/[0.07] transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </div>

      {/* ── Mobile dropdown panel ── */}
      <div
        className={cn(
          'fixed inset-0 z-[190] lg:hidden transition-all duration-300',
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Panel */}
        <div
          className={cn(
            'absolute top-20 left-4 right-4 bg-white/95 dark:bg-[#1C201C]/98 backdrop-blur-xl rounded-3xl border border-black/[0.06] dark:border-white/[0.08] shadow-[0_24px_48px_rgba(0,0,0,0.14)] p-4 transition-all duration-300',
            isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-3 opacity-0'
          )}
        >
          <div className="flex flex-col gap-0.5">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-left text-base font-semibold text-lokoto-gray dark:text-[#EDEFED] hover:text-lokoto-green hover:bg-lokoto-green/5 px-4 py-3 rounded-2xl transition-all duration-200"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="mt-3 pt-3 border-t border-black/[0.06] dark:border-white/[0.08]">
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full bg-lokoto-green text-white font-semibold px-6 py-3.5 rounded-full hover:bg-lokoto-green-dark transition-all duration-300 shadow-lg"
            >
              Rejoindre la liste
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
