"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { formulas } from "@/lib/data";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function FormulaSheet() {
  const [open, setOpen] = useState<string | null>(formulas[0].code);

  return (
    <section className="py-24">
      <Container>
        <Reveal>
          <p className="font-mono text-xs text-blue-600">SECTION 03</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Tax-Deductible Formula Cheat Sheet
          </h2>
        </Reveal>
        <div className="mt-8 space-y-4">
          {formulas.map((f, i) => {
            const isOpen = open === f.code;
            return (
              <Reveal key={f.code} delay={i * 0.06}>
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)]">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : f.code)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-blue-600"
                  >
                    <span>
                      <span className="font-mono text-xs text-slate-500">
                        {f.code}
                      </span>
                      <span className="block text-lg font-bold text-slate-900">
                        {f.title}
                      </span>
                    </span>
                    <motion.span animate={{ rotate: isOpen ? 180 : 0 }}>
                      <ChevronDown className="text-slate-500" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="border-t border-dashed border-slate-200 px-5 pb-5 pt-4">
                          <p className="rounded-lg bg-slate-50 px-4 py-3 font-mono text-sm font-bold text-slate-900 sm:text-base">
                            {f.formula}
                          </p>
                          <dl className="mt-4 divide-y divide-slate-100 font-mono text-sm">
                            {f.rows.map(([k, v]) => (
                              <div
                                key={k}
                                className="flex justify-between gap-4 py-2"
                              >
                                <dt className="text-slate-900">{k}</dt>
                                <dd className="text-right text-slate-500">
                                  {v}
                                </dd>
                              </div>
                            ))}
                          </dl>
                          <p className="mt-4 rounded-lg border-l-4 border-amber-400 bg-amber-50 px-4 py-3 text-sm text-slate-700">
                            <strong>Study tip:</strong> {f.tip}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
