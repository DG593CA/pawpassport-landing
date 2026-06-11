import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { PawPrint, ShieldCheck, Menu, X } from "lucide-react";
import { CTA_HREF } from "@/lib/cta";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Reviews", href: "/reviews" },
  { label: "FAQ", href: "/faq" },
];

function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "bg-white shadow-sm py-3" : "bg-transparent py-5"}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-brand-dark p-2 rounded-lg group-hover:bg-brand-green transition-colors">
            <PawPrint className="w-5 h-5 text-white" />
          </div>
          <span className="font-heading font-bold text-xl tracking-tight text-brand-dark">PawsPassport</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-foreground/80">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-brand-green transition-colors ${location === link.href ? "text-brand-green font-semibold" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center">
          <a href={CTA_HREF} target="_blank" rel="noopener noreferrer">
            <Button className="bg-brand-green hover:bg-brand-green/90 text-white font-semibold rounded-full px-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5">
              Get Your Letter
            </Button>
          </a>
        </div>

        <button className="md:hidden p-2 text-brand-dark" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t py-4 px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="block py-2 text-foreground font-medium hover:text-brand-green transition-colors">
              {link.label}
            </Link>
          ))}
          <div className="h-px bg-border my-2" />
          <a href={CTA_HREF} target="_blank" rel="noopener noreferrer" className="w-full">
            <Button className="w-full justify-center bg-brand-green hover:bg-brand-green/90 text-white">Get Your Letter</Button>
          </a>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-brand-dark text-white/70 py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-brand-green p-1.5 rounded-md">
                <PawPrint className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-white">PawsPassport</span>
            </div>
            <p className="text-sm mb-6 max-w-xs">
              Connecting pet owners with licensed mental health professionals for legitimate ESA letters.
            </p>
          </div>

          <div className="col-span-2 md:col-span-3 flex items-start gap-6 bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="bg-brand-green/20 p-3 rounded-xl shrink-0">
              <ShieldCheck className="w-8 h-8 text-brand-green" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-brand-green mb-1">Official Partner</p>
              <h4 className="text-white font-bold text-lg mb-2">
                Verification & Document Validation powered by{" "}
                <a href="https://esapet.com" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:underline">
                  esapet.com
                </a>
              </h4>
              <p className="text-white/70 text-sm leading-relaxed max-w-xl">
                PawsPassport partners with ESA Pet to verify and validate all pet documents. Every ESA letter issued through our platform is reviewed and authenticated by ESA Pet's network of licensed mental health professionals, ensuring your documentation meets legal standards and is accepted by landlords nationwide.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} PawsPassport. All rights reserved.</p>
          <div className="flex gap-4 opacity-50">
            <span>HIPAA Compliant</span>
            <span>Secure Checkout</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans overflow-x-hidden">
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
