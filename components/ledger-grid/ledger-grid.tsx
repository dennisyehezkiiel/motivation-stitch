"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { subjects } from "@/lib/data";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { TiltCard } from "@/components/ui/tilt-card";

export function LedgerGrid() {
  const [done, setDone] = useState<Set<string>>(new Set());
  const pct = Math.round((done.size / subjects.length) * 100);

  const toggle = (code: string) =>
    setDone((s) => {
      const n = new Set(s);
      if (!n.delete(code)) n.add(code);
      return n;
    });

  return (
    <section className="py-24">
      <Container>
        <Reveal>
          <p className="font-mono text-xs text-blue-600">SECTION 02</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            The Syllabus Ledger
          </h2>
          <p className="mt-3 max-w-xl text-slate-600">
            Tap a subject to post it as audited. Watch the gauge fill.
          </p>
        </Reveal>

        <Reveal
          delay={0.1}
          className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)]"
        >
          <div className="mb-2 flex items-baseline justify-between font-mono text-sm">
            <span className="text-slate-500">
              AUDIT PROGRESS · {done.size}/{subjects.length}
            </span>
            <span className="text-xl font-bold text-emerald-600">{pct}%</span>
          </div>
          <div className="h-3 overflow-hidden rounded-full bg-slate-100">
            <motion.div
              className="h-full origin-left rounded-full bg-gradient-to-r from-emerald-500 to-blue-600"
              animate={{ scaleX: pct / 100 }}
              initial={{ scaleX: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
            />
          </div>
        </Reveal>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {subjects.map((s, i) => {
            const on = done.has(s.code);
            return (
              <Reveal key={s.code} delay={i * 0.06}>
                <TiltCard
                  onClick={() => toggle(s.code)}
                  className={`cursor-pointer rounded-2xl border bg-white p-5 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] transition-colors ${on ? "border-emerald-400" : "border-slate-200"}`}
                >
                  <button
                    type="button"
                    aria-pressed={on}
                    aria-label={`${on ? "Unmark" : "Mark"} ${s.title}`}
                    className="flex w-full items-start justify-between gap-4 text-left focus-visible:outline-2 focus-visible:outline-blue-600 rounded-lg"
                  >
                    <span>
                      <span className="font-mono text-xs text-slate-500">
                        {s.code}
                      </span>
                      <span className="mt-1 block text-lg font-bold text-slate-900">
                        {s.title}
                      </span>
                      <span className="mt-1 block text-sm text-slate-600">
                        {s.note}
                      </span>
                    </span>
                    <motion.span
                      animate={{
                        scale: on ? [1, 1.35, 1] : 1,
                        backgroundColor: on ? "#10B981" : "#F1F5F9",
                      }}
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
                    >
                      <Check
                        size={18}
                        className={on ? "text-white" : "text-slate-300"}
                        strokeWidth={3}
                      />
                    </motion.span>
                  </button>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
