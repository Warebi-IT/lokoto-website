import { useRef, useEffect, useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  Mail,
  Phone,
  MessageCircle,
  Instagram,
  Linkedin,
  Facebook,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const ctaPanelRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [phoneError, setPhoneError] = useState("");

  const validatePhone = (value: string) => {
    // Accepte formats internationaux et locaux : +221 77 123 45 67, 0033612345678, etc.
    const clean = value.replace(/[\s\-().]/g, "");
    return /^\+?\d{8,15}$/.test(clean);
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ctaPanelRef.current,
        { y: 80, scale: 0.98, opacity: 0 },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaPanelRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        formRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        footerRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const encode = (data: Record<string, string>) =>
    Object.keys(data)
      .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
      .join('&');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validatePhone(formData.phone)) {
      setPhoneError("Numéro invalide (ex : +221 77 123 45 67)");
      return;
    }
    setPhoneError("");
    setStatus('loading');
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...formData }),
      });
      if (!res.ok) throw new Error('Erreur serveur');
      setStatus('success');
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch {
      setStatus('error');
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative bg-[#E9EBE9] py-20 lg:py-32 z-[110]"
    >
      <div className="px-6 lg:px-[7vw]">
        {/* CTA Panel */}
        <div
          ref={ctaPanelRef}
          className="bg-lokoto-green rounded-[40px] p-8 lg:p-16 mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-white text-xs font-semibold mb-6">
            🚀 Lancement prévu en 2026
          </div>
          <h2 className="text-[32px] sm:text-[44px] lg:text-[56px] font-extrabold leading-[1.0] tracking-[-0.02em] text-[#111311] mb-4">
            Soyez parmi
            <br className="hidden sm:block" />
            les premiers à l'essayer
          </h2>
          <p className="text-lg text-[#111311]/80 mb-8 max-w-xl mx-auto">
            Lokoto est en cours de développement. Laissez vos coordonnées et on
            vous contacte en priorité au lancement.
          </p>
          <button
            onClick={() => {
              const form = document.getElementById("contact-form");
              form?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-white text-lokoto-green font-semibold px-8 py-4 rounded-full hover:bg-lokoto-gray-light transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2 mx-auto"
          >
            Je veux être contacté
            <ArrowRight size={20} />
          </button>
          <p className="text-sm text-[#111311]/70 mt-4">
            Aucun engagement · Réponse sous 24h
          </p>
        </div>

        {/* Contact Form & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Form */}
          <div
            ref={formRef}
            id="contact-form"
            className="bg-white rounded-[28px] p-6 lg:p-8 shadow-card"
          >
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
                <div className="w-16 h-16 rounded-full bg-lokoto-green/10 flex items-center justify-center">
                  <CheckCircle2 size={32} className="text-lokoto-green" />
                </div>
                <h3 className="text-xl font-bold text-lokoto-gray">Message envoyé !</h3>
                <p className="text-sm text-lokoto-gray-medium max-w-xs">
                  On vous recontacte sous 24h sur WhatsApp ou par email.
                </p>
                <button
                  onClick={() => { setStatus('idle'); setPhoneError(""); }}
                  className="mt-2 text-sm text-lokoto-green underline underline-offset-4 hover:text-lokoto-green-dark transition-colors"
                >
                  Envoyer une autre demande
                </button>
              </div>
            ) : (
              <>
            <h3 className="text-2xl font-bold text-lokoto-gray mb-2">
              Rejoindre la liste d'attente
            </h3>
            <p className="text-sm text-lokoto-gray-medium mb-6">
              On vous recontacte en priorité dès le lancement.
            </p>
            <form onSubmit={handleSubmit} name="contact" data-netlify="true" className="space-y-5">
              <input type="hidden" name="form-name" value="contact" />
              <div>
                <Label htmlFor="name" className="text-lokoto-gray mb-2 block">
                  Nom complet
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Votre nom"
                  className="rounded-xl border-black/10 focus:border-lokoto-green focus:ring-lokoto-green"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-lokoto-gray mb-2 block">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="votre@email.com"
                  className="rounded-xl border-black/10 focus:border-lokoto-green focus:ring-lokoto-green"
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone" className="text-lokoto-gray mb-2 block">
                  WhatsApp / Téléphone
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => {
                    setFormData({ ...formData, phone: e.target.value });
                    if (phoneError) setPhoneError("");
                  }}
                  placeholder="+221 XX XXX XX XX"
                  className={`rounded-xl border-black/10 focus:border-lokoto-green focus:ring-lokoto-green ${phoneError ? "border-red-400 focus:border-red-400 focus:ring-red-400" : ""}`}
                  required
                />
                {phoneError && (
                  <p className="text-xs text-red-500 mt-1">{phoneError}</p>
                )}
              </div>
              <div>
                <Label
                  htmlFor="message"
                  className="text-lokoto-gray mb-2 block"
                >
                  Combien de véhicules avez-vous ?
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Ex : 5 voitures, 2 minibus… Dites-nous aussi ce que vous attendez de Lokoto."
                  className="rounded-xl border-black/10 focus:border-lokoto-green focus:ring-lokoto-green min-h-[100px]"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-lokoto-green text-white font-semibold px-6 py-3.5 rounded-full hover:bg-lokoto-green-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Envoi en cours…
                  </>
                ) : (
                  <>
                    Je veux être parmi les premiers
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
              {status === 'error' && (
                <p className="text-xs text-center text-red-500">
                  Une erreur est survenue. Réessayez ou contactez-nous directement.
                </p>
              )}
              <p className="text-xs text-center text-lokoto-gray-medium">
                Vos données restent confidentielles. Aucun spam.
              </p>
            </form>
              </>
            )}
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-lokoto-gray mb-6">
              Une question ? Écrivez-nous
            </h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-lokoto-green/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={24} className="text-lokoto-green" />
                </div>
                <div>
                  <div className="text-sm text-lokoto-gray-medium">Email</div>
                  <a
                    href="mailto:moussamarega8@gmail.com"
                    className="text-lg font-semibold text-lokoto-gray hover:text-lokoto-green transition-colors"
                  >
                    moussamarega8@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-lokoto-green/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={24} className="text-lokoto-green" />
                </div>
                <div>
                  <div className="text-sm text-lokoto-gray-medium">
                    Téléphone
                  </div>
                  <a
                    href="tel:+221771234567"
                    className="text-lg font-semibold text-lokoto-gray hover:text-lokoto-green transition-colors"
                  >
                    +33 7 54 05 04 29
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-lokoto-green/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={24} className="text-lokoto-green" />
                </div>
                <div>
                  <div className="text-sm text-lokoto-gray-medium">
                    WhatsApp
                  </div>
                  <a
                    href="https://wa.me/221771234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-lokoto-gray hover:text-lokoto-green transition-colors"
                  >
                    +33 7 54 05 04 29
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-10">
              <div className="text-sm text-lokoto-gray-medium mb-4">
                Suivez-nous
              </div>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-lokoto-gray hover:bg-lokoto-green hover:text-white transition-all duration-300 shadow-sm"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-lokoto-gray hover:bg-lokoto-green hover:text-white transition-all duration-300 shadow-sm"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-lokoto-gray hover:bg-lokoto-green hover:text-white transition-all duration-300 shadow-sm"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div ref={footerRef} className="border-t border-black/10 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-2xl font-bold text-lokoto-gray">Lokoto</div>

            <div className="flex flex-wrap justify-center gap-6">
              <button
                onClick={() => scrollToSection("features")}
                className="text-sm text-lokoto-gray-medium hover:text-lokoto-green transition-colors"
              >
                Fonctionnalités
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-sm text-lokoto-gray-medium hover:text-lokoto-green transition-colors"
              >
                Tarifs
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm text-lokoto-gray-medium hover:text-lokoto-green transition-colors"
              >
                Contact
              </button>
              <a
                href="#"
                className="text-sm text-lokoto-gray-medium hover:text-lokoto-green transition-colors"
              >
                Mentions légales
              </a>
            </div>

            <div className="text-sm text-lokoto-gray-medium">
              © 2026 Lokoto — Fait avec ❤️ à Dakar
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
