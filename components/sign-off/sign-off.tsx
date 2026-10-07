"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import confetti from "canvas-confetti";
import { PenLine, PartyPopper } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function SignOff() {
  const [signed, setSigned] = useState(false);

  const sign = () => {
    if (signed) return;
    setSigned(true);
    setTimeout(
      () =>
        confetti({
          particleCount: 160,
          spread: 100,
          origin: { y: 0.7 },
          colors: ["#10B981", "#2563EB", "#FBBF24", "#FF8A65"],
        }),
      900,
    );
  };

  return (
    <section className="pb-40 pt-24">
      <Container>
        <Reveal>
          <p className="font-mono text-xs text-blue-600">SECTION 04</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Final Audit Clearance &amp; Sign-Off
          </h2>
          <p className="mt-3 text-slate-600">
            One signature. Books closed, exam ready.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="mt-8">
          <motion.button
            type="button"
            onClick={sign}
            disabled={signed}
            whileHover={signed ? undefined : { scale: 1.02 }}
            whileTap={signed ? undefined : { scale: 0.97 }}
            className={`relative flex h-56 w-full flex-col items-center justify-center rounded-3xl border-2 border-dashed bg-white shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] transition-colors ${signed ? "border-emerald-400" : "cursor-pointer border-slate-300 hover:border-blue-600"}`}
          >
            {signed ? (
              <svg
                viewBox="0 0 300 90"
                className="w-64 text-slate-900"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                aria-label="Alex's signature"
              >
                <motion.path
                  d="M10 60 C 30 10, 50 10, 45 55 S 70 70, 85 30 C 90 15, 100 15, 100 40 S 120 70, 140 35 C 150 20, 160 20, 160 45 S 190 65, 210 30 L 215 25 C 230 50, 260 70, 290 40"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.9, ease: "easeInOut" }}
                />
              </svg>
            ) : (
              <span className="flex items-center gap-2 font-semibold text-slate-600">
                <PenLine size={20} /> Click to sign off, Alex
              </span>
            )}
            <span className="absolute bottom-4 left-6 right-6 border-t border-slate-200 pt-2 text-left font-mono text-xs text-slate-500">
              AUDITEE · ALEX
            </span>
          </motion.button>
        </Reveal>
        <AnimatePresence>
          {signed && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 1, type: "spring" }}
              className="mt-6 flex items-start gap-3 rounded-2xl bg-emerald-50 p-5 text-emerald-900"
              role="status"
            >
              <PartyPopper className="mt-0.5 shrink-0" />
              <p>
                <strong>Books closed. Opinion: unqualified.</strong> You
                studied, you balanced, you&apos;re ready. Go clear that exam,
                Alex.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </section>
  );
}
