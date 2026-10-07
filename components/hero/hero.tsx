"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { StampButton } from "@/components/stamp-button/stamp-button";
import { StudyLedger } from "./study-ledger";

const floaters = [
  {
    t: "+ 100",
    c: "text-emerald-600 border-emerald-200",
    pos: "left-[4%] top-[18%]",
    d: 0,
  },
  {
    t: "− 0",
    c: "text-orange-500 border-orange-200",
    pos: "right-[6%] top-[14%]",
    d: 1.2,
  },
  {
    t: "Dr / Cr",
    c: "text-blue-600 border-blue-200",
    pos: "left-[10%] bottom-[14%]",
    d: 0.6,
  },
  {
    t: "= ✓",
    c: "text-amber-500 border-amber-200",
    pos: "right-[10%] bottom-[18%]",
    d: 1.8,
  },
];

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden py-24">
      {floaters.map((f) => (
        <motion.div
          key={f.t}
          aria-hidden
          className={`absolute hidden rounded-xl border bg-white px-3 py-2 font-mono text-sm font-bold shadow-sm md:block ${f.c} ${f.pos}`}
          animate={{ y: [0, -14, 0], rotate: [-4, 4, -4] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: f.d,
          }}
        >
          {f.t}
        </motion.div>
      ))}

      <Container className="relative grid items-center gap-12 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 inline-block rounded-full border border-slate-200 bg-white px-4 py-1.5 font-mono text-xs text-slate-600"
          >
            FOR ZAQY · {"MID-SEM · WEEK 8"}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-900 sm:text-6xl"
          >
            Mid-Semester Audit:{" "}
            <span className="relative whitespace-nowrap">
              <motion.span
                aria-hidden
                className="absolute inset-x-[-6px] bottom-1 top-[55%] -z-10 origin-left rounded bg-amber-300/70"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.7, ease: "easeOut" }}
              />
              Zaqy&apos;s
            </span>{" "}
            Knowledge Assets are{" "}
            <span className="text-emerald-600">Balanced</span> &amp; Ready to
            Excel.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 max-w-xl text-lg text-slate-600"
          >
            Every hour studied is a deposit. Clear the liabilities, book the
            assets, and walk into the exam with a clean ledger.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-9"
          >
            <StampButton />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="flex justify-center lg:justify-end"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-full max-w-sm"
          >
            <StudyLedger />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
