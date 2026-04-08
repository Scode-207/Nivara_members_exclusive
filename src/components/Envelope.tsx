import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import confetti from "canvas-confetti";
import { Mail } from "lucide-react";

interface EnvelopeProps {
  onOpen: () => void;
}

export default function Envelope({ onOpen }: EnvelopeProps) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    setIsOpening(true);
    
    // Trigger confetti
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);

    // After animation, call onOpen
    setTimeout(() => {
      onOpen();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-warm-bg z-50 overflow-hidden">
      <AnimatePresence>
        {!isOpening && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 2, opacity: 0, filter: "blur(20px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative cursor-pointer group"
            onClick={handleOpen}
          >
            {/* Envelope Body */}
            <div className="relative w-80 h-56 bg-white shadow-2xl rounded-sm border border-gray-200 flex flex-col items-center justify-center overflow-hidden">
              {/* Envelope Flap (Top) */}
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gray-50 border-b border-gray-200 origin-top transform transition-transform duration-700 group-hover:rotate-x-10"></div>
              
              {/* Seal */}
              <div className="z-10 w-16 h-16 bg-warm-accent rounded-full flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110">
                <Mail className="text-white w-8 h-8" />
              </div>
              
              <div className="mt-4 text-warm-accent font-serif italic text-lg tracking-wide opacity-80 group-hover:opacity-100 transition-opacity">
                A Special Message for You
              </div>
              
              {/* Decorative lines */}
              <div className="absolute bottom-4 right-4 w-24 h-px bg-gray-200"></div>
              <div className="absolute bottom-6 right-4 w-16 h-px bg-gray-200"></div>
            </div>
            
            {/* Shadow */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-64 h-4 bg-black/10 blur-xl rounded-full"></div>
            
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-warm-accent/60 text-sm uppercase tracking-[0.2em] font-sans font-medium"
            >
              Click to Open
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Burst Effect Background */}
      <AnimatePresence>
        {isOpening && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 4, opacity: 1 }}
            transition={{ duration: 1.2, ease: "circIn" }}
            className="absolute w-full h-full bg-white rounded-full z-[-1]"
          />
        )}
      </AnimatePresence>
    </div>
  );
}
