import { Hero } from "@/components/hero/hero";
import { LedgerGrid } from "@/components/ledger-grid/ledger-grid";
import { FormulaSheet } from "@/components/formula-sheet/formula-sheet";
import { SignOff } from "@/components/sign-off/sign-off";
import { MusicPlayer } from "@/components/music-player/music-player";

export default function Home() {
  return (
    <main>
      <Hero />
      <LedgerGrid />
      <FormulaSheet />
      <SignOff />
      <MusicPlayer />
    </main>
  );
}
