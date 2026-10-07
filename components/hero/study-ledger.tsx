"use client";

import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

function Counter({ to, className }: { to: number; className: string }) {
  const v = useMotionValue(to === 0 ? 100 : 0);
  const text = useTransform(v, (n) => `${Math.round(n)}%`);
  useEffect(() => {
    const c = animate(v, to, { duration: 1.8, delay: 0.5, ease: "easeOut" });
    return () => c.stop();
  }, [to, v]);
  return <motion.span className={className}>{text}</motion.span>;
}

const rows = [
  {
    label: "Knowledge Assets",
    to: 100,
    color: "text-emerald-600",
    bar: "bg-emerald-500",
  },
  {
    label: "Exam Liabilities",
    to: 0,
    color: "text-orange-500",
    bar: "bg-orange-400",
  },
  {
    label: "Confidence Equity",
    to: 100,
    color: "text-blue-600",
    bar: "bg-blue-600",
  },
];

export function StudyLedger() {
  return (
    <div className="w-full max-w-sm rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)]">
      <div className="mb-5 flex items-center justify-between font-mono text-xs text-slate-500">
        <span>STUDY LEDGER</span>
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />{" "}
          LIVE
        </span>
      </div>
      <div className="space-y-5">
        {rows.map((r) => (
          <div key={r.label}>
            <div className="mb-1.5 flex items-baseline justify-between">
              <span className="text-sm font-medium text-slate-700">
                {r.label}
              </span>
              <Counter
                to={r.to}
                className={`font-mono text-lg font-bold ${r.color}`}
              />
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-slate-100">
              <motion.div
                className={`h-full origin-left rounded-full ${r.bar}`}
                initial={{ scaleX: r.to === 0 ? 1 : 0 }}
                animate={{ scaleX: r.to === 0 ? 0.02 : 1 }}
                transition={{ duration: 1.8, delay: 0.5, ease: "easeOut" }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 border-t border-dashed border-slate-200 pt-4 font-mono text-xs text-slate-500">
        Assets − Liabilities ={" "}
        <span className="font-bold text-slate-900">Ready ✓</span>
      </div>
    </div>
  );
}
