import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PawPrint, CheckCircle2, Clock, ShieldCheck, Star, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-pet.png";
import Layout from "@/components/Layout";
import { CTA_HREF } from "@/lib/cta";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-12 pb-24 md:pt-20 md:pb-32 px-4 md:px-6 overflow-hidden">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-2xl">
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-border/50 shadow-sm mb-6">
                <div className="flex gap-1 text-[#00B67A]">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <span className="text-sm font-medium">Trustpilot <strong>Excellent</strong></span>
              </motion.div>

              <motion.h1 variants={fadeIn} className="text-5xl md:text-6xl font-extrabold text-brand-dark leading-tight mb-3">
                Live with your pet.<br />
                <span className="text-brand-green">Rent-free and stress-free.</span>
              </motion.h1>

              <motion.p variants={fadeIn} className="text-xs text-foreground/50 mb-6 italic">
                *Emotional Support Animals are not subject to additional fees from landlords.
              </motion.p>

              <motion.p variants={fadeIn} className="text-lg md:text-xl text-foreground/80 mb-8 leading-relaxed">
                Get a legitimate Emotional Support Animal letter from a licensed mental health professional in your state. Take the quick quiz and get approved in 24 hours.
              </motion.p>

              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <a href={CTA_HREF} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button className="bg-brand-green hover:bg-brand-green/90 text-white text-lg font-semibold h-14 px-8 rounded-full shadow-lg shadow-brand-green/20 hover:shadow-xl hover:-translate-y-1 transition-all w-full sm:w-auto">
                    Get Pre-Qualified
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </a>
                <div className="flex items-center gap-2 text-sm font-medium text-brand-dark bg-brand-cream/50 px-4 py-3 rounded-xl border border-brand-cream">
                  <ShieldCheck className="w-5 h-5 text-brand-green" />
                  <span>Works or your money back</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
              <div className="absolute inset-0 bg-brand-green/10 rounded-[3rem] transform rotate-3 scale-105"></div>
              <img src={heroImg} alt="Cozy scene with owner and pet" className="relative z-10 w-full h-auto rounded-[2.5rem] shadow-2xl object-cover aspect-[4/3]" />
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.6 }} className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 z-20">
                <div className="bg-brand-cream p-3 rounded-full text-brand-dark">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Fast Delivery</p>
                  <p className="font-bold text-brand-dark">24-Hour Approval</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Press Section */}
      <section className="py-10 bg-white border-y border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-6">As Featured In</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="font-heading font-black text-2xl tracking-tighter">SFGATE</span>
            <span className="font-serif font-bold text-xl italic">Washington City Paper</span>
            <span className="font-heading font-bold text-2xl uppercase tracking-widest">Chron</span>
            <span className="font-serif font-bold text-xl">The Mercury News</span>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-4 bg-brand-cream/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Your official ESA letter in 3 easy steps</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">Skip the waiting room. Our streamlined process connects you with a licensed professional from the comfort of your home.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Take a Quick Quiz", desc: "Answer a few simple questions about your emotional state and your pet to see if you pre-qualify.", icon: <CheckCircle2 className="w-8 h-8 text-brand-green" /> },
              { step: "2", title: "Therapist Evaluation", desc: "A licensed mental health professional in your state will review your answers and consult with you.", icon: <ShieldCheck className="w-8 h-8 text-brand-green" /> },
              { step: "3", title: "Receive Your Letter", desc: "Get your signed, legally compliant ESA letter delivered to your inbox within 24 hours of approval.", icon: <PawPrint className="w-8 h-8 text-brand-green" /> }
            ].map((item, i) => (
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} key={i} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-border/50 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                  <span className="text-8xl font-black text-brand-dark">{item.step}</span>
                </div>
                <div className="bg-brand-cream w-16 h-16 rounded-2xl flex items-center justify-center mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4 bg-brand-dark text-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Why trust PawPassport for your letter?</h2>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">We don't just generate generic documents. We connect you with real, licensed professionals who understand the vital role pets play in mental health.</p>
              <ul className="space-y-6">
                {[
                  { title: "Legally Compliant", desc: "Our letters meet all HUD and Fair Housing Act requirements." },
                  { title: "State-Licensed Therapists", desc: "You are paired with an LMHP licensed specifically in your state." },
                  { title: "No Pet Fees", desc: "An ESA letter exempts you from breed restrictions and monthly pet rent." },
                  { title: "100% Money-Back Guarantee", desc: "If your letter isn't accepted by your landlord, we refund you entirely." }
                ].map((benefit, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="mt-1 bg-brand-green/20 p-1 rounded-full text-brand-green shrink-0"><CheckCircle2 className="w-5 h-5" /></div>
                    <div>
                      <h4 className="font-bold text-lg">{benefit.title}</h4>
                      <p className="text-white/70">{benefit.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <a href={CTA_HREF} target="_blank" rel="noopener noreferrer">
                <Button className="mt-10 bg-brand-green hover:bg-brand-green/90 text-white text-lg h-14 px-8 rounded-full border-none">Get Started Now</Button>
              </a>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-3xl border border-white/10">
                  <h3 className="text-4xl font-black text-brand-green mb-2">24h</h3>
                  <p className="text-white/80 font-medium">Average turnaround time after approval</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-3xl border border-white/10">
                  <h3 className="text-4xl font-black text-brand-green mb-2">50k+</h3>
                  <p className="text-white/80 font-medium">Happy pets & owners helped nationwide</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-brand-green p-6 rounded-3xl text-white shadow-xl shadow-brand-green/20">
                  <Star className="w-10 h-10 fill-current mb-4" />
                  <h3 className="text-4xl font-black mb-2">4.9</h3>
                  <p className="font-medium text-white/90">Average rating from verified customers</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-3xl border border-white/10">
                  <ShieldCheck className="w-10 h-10 text-brand-cream mb-4" />
                  <h3 className="text-2xl font-bold text-brand-cream mb-2">Secure</h3>
                  <p className="text-white/80 font-medium">HIPAA compliant and totally confidential</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Loved by pets and their humans</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">Don't just take our word for it. Read from thousands of satisfied customers who secured their housing.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Sarah Jenkins", pet: "Dog Owner", text: "I was so stressed about moving to a new apartment that didn't allow large dogs. PawPassport was incredibly fast, and the therapist was so understanding. My landlord accepted the letter immediately!" },
              { name: "Marcus T.", pet: "Cat Owner", text: "The process is incredibly seamless. Took the quiz on a Tuesday, spoke with a very kind therapist on Wednesday morning, and had my letter by Wednesday afternoon. Saved me hundreds in pet fees." },
              { name: "Elena R.", pet: "Dog Owner", text: "After a terrible experience with a scam site, I was hesitant. PawPassport is the real deal. Legitimate doctors, professional service, and a beautifully formatted letter that my strict HOA accepted without question." }
            ].map((review, i) => (
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-border">
                <div className="flex gap-1 text-[#00B67A] mb-4">{[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 fill-current" />)}</div>
                <p className="text-foreground/80 mb-6 italic leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-cream flex items-center justify-center text-brand-dark font-bold">{review.name.charAt(0)}</div>
                  <div>
                    <p className="font-bold">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.pet}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 bg-brand-cream/20">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>
          <Accordion type="single" collapsible className="w-full bg-white rounded-2xl shadow-sm border border-border p-2">
            {[
              { q: "Is this letter legally recognized?", a: "Yes. Our letters are written and signed by Licensed Mental Health Professionals (LMHPs) in your state and fully comply with the Fair Housing Act (FHA) and HUD guidelines." },
              { q: "Can my landlord reject an ESA letter?", a: "Under the Fair Housing Act, landlords must provide reasonable accommodation for ESAs, even in 'no pets' buildings. They cannot charge pet rent or deposits. Exceptions only exist if the specific animal poses a direct threat to health/safety." },
              { q: "How long does it take to get my letter?", a: "Most clients receive their digital letter within 24 hours of their therapist consultation being completed and approved." },
              { q: "What types of pets qualify?", a: "Unlike service animals, Emotional Support Animals can be dogs, cats, birds, rabbits, hamsters, and other common domestic animals that provide therapeutic support." },
              { q: "Do I have to renew my ESA letter?", a: "Yes, ESA letters are generally valid for one year. We offer an easy renewal process for returning clients." },
              { q: "What if I don't qualify?", a: "If our licensed therapist determines you do not qualify after your consultation, we provide a 100% refund." }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b-0 px-4">
                <AccordionTrigger className="text-left font-bold text-lg hover:no-underline hover:text-brand-green py-6">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-foreground/70 leading-relaxed pb-6 text-base">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-brand-green text-white text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to secure your housing?</h2>
          <p className="text-xl mb-10 text-white/90">Join thousands of pet owners who sleep easier knowing their furry friend is legally protected.</p>
          <a href={CTA_HREF} target="_blank" rel="noopener noreferrer">
            <Button className="bg-white text-brand-green hover:bg-brand-cream text-lg font-bold h-14 px-10 rounded-full shadow-xl hover:-translate-y-1 transition-all">
              Get Your ESA Letter Today
            </Button>
          </a>
          <p className="mt-6 text-sm font-medium opacity-80 flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4" /> 100% Money-Back Guarantee
          </p>
        </div>
      </section>
    </Layout>
  );
}
