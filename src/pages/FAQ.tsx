import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const categories = [
  {
    title: "About ESA Letters",
    faqs: [
      { q: "What is an Emotional Support Animal (ESA) letter?", a: "An ESA letter is a document written and signed by a Licensed Mental Health Professional (LMHP) that confirms you have a mental health condition and that your pet provides therapeutic benefit. It is not a certificate or registration — it is a clinical document." },
      { q: "Is an ESA letter legally recognized?", a: "Yes. ESA letters issued by licensed therapists are legally recognized under the Fair Housing Act (FHA) and HUD guidelines. They entitle you to request reasonable accommodation to live with your pet, even in no-pets housing." },
      { q: "What is the difference between an ESA and a service animal?", a: "Service animals (usually dogs) are trained to perform specific tasks for people with disabilities and have full public access rights. ESAs provide emotional or therapeutic support through companionship and are primarily protected under housing law, not general public access law." },
      { q: "Do ESA letters expire?", a: "Yes. Most ESA letters are valid for one year from the date of issue. Landlords may request a current letter, so we recommend renewing annually. PawPassport offers a discounted, fast renewal for returning clients." },
    ],
  },
  {
    title: "The Process",
    faqs: [
      { q: "How does the PawPassport process work?", a: "It's three steps: (1) Take our free pre-qualification quiz to see if you may qualify. (2) A licensed therapist in your state reviews your answers and consults with you. (3) If approved, your signed ESA letter is delivered digitally within 24 hours." },
      { q: "How long does it take to receive my letter?", a: "Most clients receive their letter within 24 hours of their therapist consultation being completed. In many cases it arrives the same day. We prioritize speed without compromising the quality and legal validity of your document." },
      { q: "Do I need to speak with a therapist?", a: "Yes. A genuine ESA letter requires an evaluation by a real, licensed mental health professional. We connect you with an LMHP licensed in your state who will review your quiz responses and conduct a brief consultation." },
      { q: "Is my personal and health information kept private?", a: "Absolutely. PawPassport and our partner therapists operate in full compliance with HIPAA. Your health information is encrypted and never shared with third parties, including your landlord." },
    ],
  },
  {
    title: "Housing & Legal Rights",
    faqs: [
      { q: "Can my landlord refuse an ESA letter?", a: "Under the Fair Housing Act, landlords are required to provide reasonable accommodation for tenants with ESAs, even in buildings with no-pet policies. They cannot charge pet deposits or pet rent. Exceptions are limited to properties with 4 or fewer units where the landlord lives on-site, or if the specific animal poses a demonstrable threat." },
      { q: "Can my landlord charge a pet deposit for my ESA?", a: "No. Under the Fair Housing Act, landlords cannot charge a pet deposit, pet rent, or any pet fee for an Emotional Support Animal. If damage occurs, you may be responsible under standard damage deposit rules — but no pet-specific fees are allowed." },
      { q: "What if my landlord has a 'no pets' policy?", a: "A no-pets policy does not override your rights under the Fair Housing Act. You are entitled to request a reasonable accommodation, and your landlord must engage in an interactive process and provide accommodation unless a valid exception applies." },
      { q: "Does an ESA letter give my pet access to restaurants, stores, or planes?", a: "ESA letters primarily protect housing rights. They do not grant access to restaurants, retail stores, or other public spaces. Airlines are no longer required to accommodate ESAs in the cabin — for air travel, a Psychiatric Service Dog (PSD) letter offers stronger protections." },
    ],
  },
  {
    title: "Pets & Eligibility",
    faqs: [
      { q: "What types of pets can be Emotional Support Animals?", a: "Unlike service animals, ESAs are not limited to dogs. Common ESAs include dogs, cats, rabbits, birds, guinea pigs, hamsters, and other domestic animals. The key factor is the therapeutic relationship between you and the animal — not the species." },
      { q: "Are there breed or size restrictions for ESAs?", a: "No. Under the Fair Housing Act, landlords cannot apply breed or size restrictions to Emotional Support Animals. Even if your building prohibits large dogs or certain breeds, your ESA is protected." },
      { q: "What if I don't qualify?", a: "If the licensed therapist determines after your consultation that an ESA letter is not clinically appropriate for you, we provide a 100% refund. No questions asked." },
    ],
  },
];

export default function FAQ() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-16 pb-12 px-4 text-center bg-brand-cream/30 border-b border-border">
        <div className="container mx-auto max-w-3xl">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm font-bold uppercase tracking-widest text-brand-green mb-3">FAQ</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-4">
            Everything you need to know
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-foreground/70">
            Got questions? We have answers. If you don't find what you're looking for, our support team is here to help.
          </motion.p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl space-y-12">
          {categories.map((cat, ci) => (
            <motion.div key={ci} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <h2 className="text-xl font-bold text-brand-dark mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-green inline-block" />
                {cat.title}
              </h2>
              <Accordion type="single" collapsible className="w-full bg-white rounded-2xl shadow-sm border border-border p-2">
                {cat.faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`${ci}-${i}`} className="border-b-0 px-4">
                    <AccordionTrigger className="text-left font-semibold text-base hover:no-underline hover:text-brand-green py-5">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/70 leading-relaxed pb-5 text-sm">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Still have questions */}
      <section className="py-16 px-4 bg-brand-dark text-white text-center">
        <div className="container mx-auto max-w-2xl">
          <ShieldCheck className="w-10 h-10 text-brand-green mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Still have questions?</h2>
          <p className="text-white/70 text-lg mb-7">Our support team is available 7 days a week to walk you through the process and answer any questions about your specific situation.</p>
          <Button className="bg-brand-green hover:bg-brand-green/90 text-white font-semibold rounded-full h-12 px-8">
            Contact Support
          </Button>
        </div>
      </section>
    </Layout>
  );
}
