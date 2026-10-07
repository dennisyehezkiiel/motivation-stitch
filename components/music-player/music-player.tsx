"use client";

import { useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

const SRC = "/audio/purple.mp3";

export function MusicPlayer() {
  const audio = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [missing, setMissing] = useState(false);

  const toggle = () => {
    const a = audio.current;
    if (!a) return;
    if (a.paused) a.play().catch(() => setMissing(true));
    else a.pause();
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 w-[min(20rem,calc(100vw-2rem))] rounded-2xl border border-white/60 bg-white/60 p-3 shadow-[0_8px_32px_-8px_rgba(15,23,42,0.25)] backdrop-blur-xl">
      <audio
        ref={audio}
        src={SRC}
        loop
        preload="none"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onError={() => setMissing(true)}
        onTimeUpdate={(e) =>
          setProgress(
            e.currentTarget.currentTime / (e.currentTarget.duration || 1),
          )
        }
      />
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? "Pause" : "Play"}
          className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full bg-slate-900 text-white transition-transform active:scale-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          {playing ? (
            <Pause size={18} />
          ) : (
            <Play size={18} className="translate-x-px" />
          )}
        </button>
        <div className="min-w-0 flex-1">
          <p className="truncate text-xs font-semibold text-slate-900">
            {missing
              ? "Add public/audio/purple.mp3"
              : "Now Playing: Hollow Coves - Purple"}
          </p>
          <div
            className="mt-2 h-1.5 cursor-pointer overflow-hidden rounded-full bg-slate-200"
            onClick={(e) => {
              const a = audio.current;
              if (!a || !a.duration) return;
              const r = e.currentTarget.getBoundingClientRect();
              a.currentTime = ((e.clientX - r.left) / r.width) * a.duration;
            }}
          >
            <div
              className="h-full origin-left rounded-full bg-emerald-500"
              style={{ transform: `scaleX(${progress})` }}
            />
          </div>
        </div>
        <div aria-hidden className="flex h-6 items-end gap-0.5">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className="wave-bar w-1 rounded-full bg-blue-600"
              style={{
                animationDelay: `${i * 0.15}s`,
                animationPlayState: playing ? "running" : "paused",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
