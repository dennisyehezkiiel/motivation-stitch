"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import confetti from "canvas-confetti";
import { ScanSearch } from "lucide-react";

export function StampButton() {
  const [stamped, setStamped] = useState(false);

  const run = () => {
    setStamped(true);
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.65 },
      colors: ["#10B981", "#2563EB", "#FBBF24", "#FF8A65"],
    });
    setTimeout(() => setStamped(false), 3500);
  };

  return (
    <div className="relative inline-block">
      <motion.button
        onClick={run}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.92 }}
        transition={{ type: "spring", stiffness: 500, damping: 14 }}
        className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-7 py-4 text-base font-semibold text-white shadow-[0_8px_24px_-6px_rgba(15,23,42,0.4)] cursor-pointer"
      >
        <ScanSearch size={18} /> Run Exam Audit
      </motion.button>
      <AnimatePresence>
        {stamped && (
          <motion.div
            initial={{ opacity: 0, scale: 3, rotate: -25 }}
            animate={{ opacity: 1, scale: 1, rotate: -10 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 260, damping: 14 }}
            className="pointer-events-none absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg border-4 border-emerald-500 bg-white/90 px-4 py-2 font-mono text-lg sm:px-5 sm:text-2xl font-extrabold tracking-widest text-emerald-600 shadow-lg"
            role="status"
          >
            100% APPROVED
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
