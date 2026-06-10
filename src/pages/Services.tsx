import { Button } from "@/components/ui/button";
import { CheckCircle2, ShieldCheck, Home, RefreshCw, Dog } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { CTA_HREF } from "@/lib/cta";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const services = [
  {
    icon: <Home className="w-8 h-8 text-brand-green" />,
    title: "ESA Housing Letter",
    tag: "Most Popular",
    desc: "Our most requested service. A legally compliant Emotional Support Animal housing letter written and signed by a Licensed Mental Health Professional in your state. Accepted by landlords, property managers, and HOAs nationwide.",
    features: [
      "Written by a state-licensed LMHP",
      "Compliant with the Fair Housing Act & HUD guidelines",
      "Delivered digitally within 24 hours",
      "Includes therapist contact info for landlord verification",
      "Valid for 12 months",
      "100% money-back guarantee if not accepted",
    ],
  },
  {
    icon: <Dog className="w-8 h-8 text-brand-green" />,
    title: "Psychiatric Service Dog Letter",
    tag: "PSD",
    desc: "A Psychiatric Service Dog (PSD) letter certifies that your dog is trained to perform specific tasks related to your mental health disability. PSDs have broader access rights than ESAs, including airline cabins and public spaces.",
    features: [
      "Issued by a licensed mental health professional",
      "Documents your disability and your dog's trained tasks",
      "Broader public access rights than an ESA letter",
      "Accepted by airlines, housing, and public venues",
      "Valid for 12 months",
      "Consultation included",
    ],
  },
  {
    icon: <RefreshCw className="w-8 h-8 text-brand-green" />,
    title: "Letter Renewal",
    tag: "Returning Clients",
    desc: "ESA letters expire after 12 months. Keep your documentation current with our fast, discounted renewal process. Returning clients are prioritized and can typically complete renewal in under an hour.",
    features: [
      "Discounted rate for returning clients",
      "Expedited therapist review",
      "Updated letter issued same day",
      "No new quiz required if conditions unchanged",
      "Seamless records transfer",
      "Priority support queue",
    ],
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-16 pb-12 px-4 text-center bg-brand-cream/30 border-b border-border">
        <div className="container mx-auto max-w-3xl">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm font-bold uppercase tracking-widest text-brand-green mb-3">Our Services</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-4">
            The right letter for your situation
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-foreground/70">
            Whether you need housing protection for your ESA or broader access rights for your Psychiatric Service Dog, PawPassport connects you with the right licensed professional.
          </motion.p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl space-y-10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="bg-white rounded-3xl border border-border shadow-sm overflow-hidden"
            >
              <div className="grid md:grid-cols-5">
                <div className="md:col-span-3 p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-brand-cream w-14 h-14 rounded-2xl flex items-center justify-center shrink-0">
                      {service.icon}
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-brand-green">{service.tag}</span>
                      <h2 className="text-2xl font-bold text-brand-dark">{service.title}</h2>
                    </div>
                  </div>
                  <p className="text-foreground/70 leading-relaxed mb-6">{service.desc}</p>
                  <a href={CTA_HREF} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-brand-green hover:bg-brand-green/90 text-white font-semibold rounded-full px-7 h-12">
                      Get Started
                    </Button>
                  </a>
                </div>
                <div className="md:col-span-2 bg-brand-cream/30 p-8 md:p-10 border-t md:border-t-0 md:border-l border-border">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-brand-dark mb-5">What's included</h3>
                  <ul className="space-y-3">
                    {service.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-foreground/80">
                        <CheckCircle2 className="w-4 h-4 text-brand-green mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-16 px-4 bg-brand-dark text-white text-center">
        <div className="container mx-auto max-w-3xl">
          <ShieldCheck className="w-10 h-10 text-brand-green mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Every letter is verified by esapet.com</h2>
          <p className="text-white/70 text-lg">Our official partner ESA Pet reviews and authenticates all documents issued through PawPassport, ensuring they meet every legal standard.</p>
        </div>
      </section>
    </Layout>
  );
}
