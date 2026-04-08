import { motion } from "motion/react";
import { Heart, Calendar, Quote } from "lucide-react";

export default function FarewellPage() {
  return (
    <div className="min-h-screen bg-warm-bg pb-20 selection:bg-warm-accent selection:text-white">
      {/* Hero Section */}
      <header className="relative h-[80vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="z-10"
        >
          <span className="text-warm-accent/60 uppercase tracking-[0.3em] text-sm font-sans font-semibold mb-4 block">
            A Farewell Tribute
          </span>
          <h1 className="serif-display text-6xl md:text-8xl font-light text-gray-900 mb-6 leading-tight">
            Nivara
          </h1>
          <p className="max-w-2xl mx-auto text-gray-600 font-body text-xl italic leading-relaxed mb-8">
            "Alvida sirf ek mod hai, rishta nahi — <br />
            Aap Nivara ke the, Nivara aapki hamesha rahegi."
          </p>
          <p className="max-w-2xl mx-auto text-gray-500 font-body text-base leading-relaxed mb-12">
            You were all here when Nivara was nothing but an idea, together we built the foundation. 
            Now we pass the torch to the next ambassadors who will live up to our mission, 
            providing a shelter for everyone who deserves to belong.
          </p>
          
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center gap-2 text-warm-accent/40"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll to Explore</span>
            <div className="w-px h-12 bg-warm-accent/20"></div>
          </motion.div>
        </motion.div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-warm-accent rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-warm-accent rounded-full blur-[120px]"></div>
        </div>
      </header>

      {/* Featured Moment Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="serif-display text-4xl font-medium text-gray-900 mb-4">A Foundation Built Together</h2>
          <div className="flex items-center gap-2 text-warm-accent/60 text-sm uppercase tracking-wider font-sans font-bold">
            <Calendar className="w-4 h-4" />
            Nivara Team • 2025 - 2026
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative group"
        >
          <div className="relative aspect-video md:aspect-[21/9] overflow-hidden rounded-3xl shadow-2xl border-8 border-white">
            <img
              src="/team-photo.png"
              alt="The Nivara Team"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
              <p className="text-white font-body italic text-lg">Every wrinkle has a story to tell.</p>
            </div>
          </div>
          
          {/* Decorative caption */}
          <div className="mt-8 text-center max-w-2xl mx-auto">
            <p className="text-gray-600 font-body leading-relaxed italic">
              "We walked into Ashreya Old Age Home not knowing what to expect we walked out knowing exactly why Nivara exists, we walked the first step together, you will be remembered for the rest of our journey."
            </p>
          </div>
        </motion.div>
      </section>

      {/* The Founder's Words Section */}
      <section className="bg-[#8B7D6B] text-white py-24 mt-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Quote className="w-12 h-12 mx-auto mb-8 opacity-40" />
          <h2 className="serif-display text-4xl md:text-5xl font-light mb-16 italic">
            "The best part of our work wasn't just the impact we made, but the people we made it with."
          </h2>
          
          <div className="max-w-3xl mx-auto text-left space-y-6 text-white/90 font-body leading-relaxed text-lg bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/10">
            <h3 className="serif-display text-3xl text-center mb-8 text-white">The Founder's Words</h3>
            <p>
              When we first started Nivara, it was just a dream shared among a few passionate individuals. We didn't have much, but we had a shared vision of creating a space where everyone felt they belonged.
            </p>
            <p>
              Looking at this team today, I am overwhelmed with gratitude. Each of you has poured your heart and soul into this foundation. You've worked late nights, overcome countless obstacles, and most importantly, you've touched the lives of so many people.
            </p>
            <p>
              As some of you move on to new adventures, remember that you are the architects of Nivara. The walls we built together will stand strong because of the love and dedication you laid in the foundation. Thank you for believing in the dream, and thank you for making it a reality.
            </p>
            <p className="text-right font-serif italic mt-8 text-xl text-white">
              — K Sai Sathvik, The Founder
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-sm mb-8">
          <Heart className="text-warm-accent fill-warm-accent w-6 h-6" />
        </div>
        <h3 className="serif-display text-3xl font-light text-gray-900 mb-2">With Love & Gratitude</h3>
        <p className="text-warm-accent/60 font-sans text-sm uppercase tracking-[0.3em]">Team Nivara</p>
      </footer>
    </div>
  );
}
