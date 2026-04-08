import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Envelope from "./components/Envelope";
import FarewellPage from "./components/FarewellPage";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="relative min-h-screen">
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="envelope"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Envelope onOpen={() => setIsOpen(true)} />
          </motion.div>
        ) : (
          <motion.div
            key="page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <FarewellPage />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
