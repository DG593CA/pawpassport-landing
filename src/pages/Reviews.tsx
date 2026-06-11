import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { CTA_HREF } from "@/lib/cta";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const reviews = [
  { name: "Sarah Jenkins", pet: "Dog Owner", state: "California", stars: 5, text: "I was so stressed about moving to a new apartment that didn't allow large dogs. PawsPassport was incredibly fast, and the therapist was so understanding. My landlord accepted the letter immediately!" },
  { name: "Marcus T.", pet: "Cat Owner", state: "Texas", stars: 5, text: "The process is incredibly seamless. Took the quiz on a Tuesday, spoke with a very kind therapist on Wednesday morning, and had my letter by Wednesday afternoon. Saved me hundreds in pet fees." },
  { name: "Elena R.", pet: "Dog Owner", state: "New York", stars: 5, text: "After a terrible experience with a scam site, I was hesitant. PawsPassport is the real deal. Legitimate doctors, professional service, and a beautifully formatted letter that my strict HOA accepted without question." },
  { name: "Darnell W.", pet: "Rabbit Owner", state: "Florida", stars: 5, text: "I didn't know rabbits qualified as ESAs. The therapist was incredibly knowledgeable and explained everything. Got my letter the next morning. My apartment management accepted it the same day I presented it." },
  { name: "Priya M.", pet: "Dog Owner", state: "Illinois", stars: 5, text: "Smooth, professional, and fast. The therapist called me within two hours of completing the quiz, and my letter arrived in my inbox before dinner. Worth every penny to save thousands in pet deposits." },
  { name: "Tom & Laura K.", pet: "Cat Owners", state: "Washington", stars: 5, text: "We have two cats and were moving to a strict no-pets building. PawsPassport helped us get letters for both pets. The landlord asked zero follow-up questions. Absolute lifesavers." },
  { name: "Jasmine F.", pet: "Dog Owner", state: "Georgia", stars: 4, text: "Great service overall. The therapist was warm and professional. My letter arrived in about 30 hours, slightly longer than the 24-hour promise, but the quality was excellent and my landlord accepted it." },
  { name: "Kevin O.", pet: "Bird Owner", state: "Arizona", stars: 5, text: "I have an African Grey parrot and was terrified my landlord would refuse. The letter was thorough, professional, and explicitly covered exotic companion animals. Landlord approved immediately." },
  { name: "Melissa C.", pet: "Dog Owner", state: "Colorado", stars: 5, text: "Renewed my letter this year and the process was even easier than the first time. No new quiz, just a quick therapist check-in, and my updated letter arrived within hours. Loyalty discount was a nice touch." },
];

const stats = [
  { value: "4.9", label: "Average Trustpilot rating" },
  { value: "12k+", label: "Verified reviews" },
  { value: "50k+", label: "Pet owners helped" },
  { value: "98%", label: "Letter acceptance rate" },
];

export default function Reviews() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-16 pb-12 px-4 text-center bg-brand-cream/30 border-b border-border">
        <div className="container mx-auto max-w-3xl">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm font-bold uppercase tracking-widest text-brand-green mb-3">Reviews</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-4">
            Real stories from real pet owners
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-foreground/70">
            Thousands of families have used PawsPassport to keep their pets home. Here's what they have to say.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex justify-center gap-1 text-[#00B67A] mt-6">
            {[1,2,3,4,5].map(i => <Star key={i} className="w-7 h-7 fill-current" />)}
          </motion.div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-brand-dark font-bold text-lg mt-2">Excellent — 4.9 on Trustpilot</motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 bg-brand-dark text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
                <p className="text-4xl font-black text-brand-green mb-1">{s.value}</p>
                <p className="text-white/70 text-sm">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
                className="bg-white p-7 rounded-3xl shadow-sm border border-border flex flex-col"
              >
                <Quote className="w-6 h-6 text-brand-green/30 mb-3" />
                <div className="flex gap-1 text-[#00B67A] mb-3">
                  {Array.from({ length: review.stars }).map((_, s) => <Star key={s} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-foreground/80 italic leading-relaxed flex-1 mb-5">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-cream flex items-center justify-center text-brand-dark font-bold shrink-0">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-sm">{review.name}</p>
                    <p className="text-xs text-muted-foreground">{review.pet} · {review.state}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-brand-green text-white text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to write your own success story?</h2>
          <p className="text-white/90 text-lg mb-8">Join over 50,000 pet owners who sleep easier with PawsPassport.</p>
          <a href={CTA_HREF} target="_blank" rel="noopener noreferrer">
            <Button className="bg-white text-brand-green hover:bg-brand-cream text-lg font-bold h-14 px-10 rounded-full shadow-xl hover:-translate-y-1 transition-all">
              Get Pre-Qualified Today
            </Button>
          </a>
        </div>
      </section>
    </Layout>
  );
}
