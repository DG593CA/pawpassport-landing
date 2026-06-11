import { Button } from "@/components/ui/button";
import { CheckCircle2, ShieldCheck, Star } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { CTA_HREF } from "@/lib/cta";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const plans = [
  {
    name: "ESA Housing Letter",
    price: "99",
    period: "one-time",
    desc: "Everything you need to live with your pet, free from pet fees and breed restrictions.",
    highlight: false,
    features: [
      "Licensed therapist consultation",
      "Signed ESA housing letter",
      "Delivered within 24 hours",
      "Landlord verification contact",
      "Valid for 12 months",
      "Money-back guarantee",
    ],
  },
  {
    name: "PSD Letter",
    price: "149",
    period: "one-time",
    desc: "For pet owners who need broader access rights beyond housing for their trained service dog.",
    highlight: true,
    features: [
      "Licensed therapist evaluation",
      "Psychiatric Service Dog letter",
      "Task documentation included",
      "Airline & public access coverage",
      "Delivered within 24 hours",
      "Valid for 12 months",
      "Money-back guarantee",
      "Priority support",
    ],
  },
  {
    name: "Annual Renewal",
    price: "69",
    period: "per year",
    desc: "Keep your existing letter current. Discounted renewal for returning PawsPassport clients.",
    highlight: false,
    features: [
      "Expedited therapist review",
      "Same-day letter reissuance",
      "No new quiz required",
      "Updated signature & date",
      "Priority renewal queue",
      "Money-back guarantee",
    ],
  },
];

export default function Pricing() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-16 pb-12 px-4 text-center bg-brand-cream/30 border-b border-border">
        <div className="container mx-auto max-w-3xl">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm font-bold uppercase tracking-widest text-brand-green mb-3">Pricing</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-4">
            Simple, transparent pricing
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-foreground/70">
            No subscriptions. No hidden fees. Pay once and keep your pet by your side.
          </motion.p>
        </div>
      </section>

      {/* Plans */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-6 items-start">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
                className={`rounded-3xl border p-8 flex flex-col ${plan.highlight ? "bg-brand-dark text-white border-brand-dark shadow-2xl shadow-brand-dark/20 scale-105" : "bg-white border-border shadow-sm"}`}
              >
                {plan.highlight && (
                  <span className="inline-block bg-brand-green text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 w-fit">Most Popular</span>
                )}
                <h2 className={`text-xl font-bold mb-1 ${plan.highlight ? "text-white" : "text-brand-dark"}`}>{plan.name}</h2>
                <div className="flex items-end gap-1 mb-2">
                  <span className={`text-5xl font-black ${plan.highlight ? "text-brand-green" : "text-brand-dark"}`}>${plan.price}</span>
                  <span className={`text-sm mb-2 ${plan.highlight ? "text-white/60" : "text-foreground/50"}`}>/ {plan.period}</span>
                </div>
                <p className={`text-sm mb-7 leading-relaxed ${plan.highlight ? "text-white/70" : "text-foreground/60"}`}>{plan.desc}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f, j) => (
                    <li key={j} className={`flex items-start gap-2 text-sm ${plan.highlight ? "text-white/80" : "text-foreground/80"}`}>
                      <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${plan.highlight ? "text-brand-green" : "text-brand-green"}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href={CTA_HREF} target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button className={`w-full h-12 rounded-full font-semibold ${plan.highlight ? "bg-brand-green hover:bg-brand-green/90 text-white" : "bg-brand-dark hover:bg-brand-dark/90 text-white"}`}>
                    Get Started
                  </Button>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-16 px-4 bg-brand-cream/30 border-y border-border">
        <div className="container mx-auto max-w-3xl text-center">
          <ShieldCheck className="w-10 h-10 text-brand-green mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-3">100% Money-Back Guarantee</h2>
          <p className="text-foreground/70 text-lg">If your ESA or PSD letter is not accepted by your landlord, airline, or property manager, we will refund you in full — no questions asked.</p>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <div className="flex justify-center gap-1 text-[#00B67A] mb-3">
            {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 fill-current" />)}
          </div>
          <p className="text-2xl font-bold text-brand-dark mb-2">Rated 4.9 / 5 on Trustpilot</p>
          <p className="text-foreground/60">Based on 12,000+ verified reviews from pet owners across the US.</p>
        </div>
      </section>
    </Layout>
  );
}
