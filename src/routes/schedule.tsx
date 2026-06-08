import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site-layout";
import { Ticket } from "lucide-react";
import kingsLogoAsset from "@/assets/kings-logo.png?url";
const kingsLogo = kingsLogoAsset;
import tigersLogo from "@/assets/tigers-logo.png";

export const Route = createFileRoute("/schedule")({
  head: () => ({
    meta: [
      { title: "Schedule — Bangkok Kings" },
      { name: "description", content: "Bangkok Kings ice hockey full season schedule and upcoming matches." },
      { property: "og:title", content: "Schedule — Bangkok Kings" },
      { property: "og:description", content: "Full season calendar." },
    ],
  }),
  component: SchedulePage,
});

const DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
// 5x7 calendar. Some days have home (H) or away (A) games.
const GAMES: Record<number, { type: "H" | "A"; opp: string }> = {
  1: { type: "H", opp: "TIGERS" },
  5: { type: "A", opp: "DRAGONS" },
  9: { type: "H", opp: "WOLVES" },
  14: { type: "A", opp: "BEARS" },
  19: { type: "H", opp: "HAWKS" },
  22: { type: "H", opp: "TIGERS" },
  27: { type: "A", opp: "EAGLES" },
  30: { type: "H", opp: "SHARKS" },
};

function SchedulePage() {
  return (
    <SiteLayout>
      <PageHero kicker="THE CALENDAR" title="SCHEDULE" subtitle="Follow every face-off this season — home and away." />
      <section className="mx-auto max-w-7xl px-6 py-12 grid lg:grid-cols-[1fr_2fr] gap-8">
        <div className="space-y-6">
          <div>
            <h2 className="font-display text-accent text-2xl font-bold tracking-wider mb-4">NEXT GAME</h2>
            <div className="bg-card border border-border rounded-sm p-6 shadow-[var(--shadow-deep)]">
              <div className="flex items-center justify-between">
                <div className="flex flex-col items-center gap-2">
                  <img src={kingsLogo} alt="Kings" width={64} height={64} className="h-16 w-16" loading="lazy" />
                  <div className="font-condensed font-bold tracking-widest">KINGS</div>
                </div>
                <div className="font-display text-3xl text-accent">VS.</div>
                <div className="flex flex-col items-center gap-2">
                  <img src={tigersLogo} alt="Tigers" width={64} height={64} className="h-16 w-16" loading="lazy" />
                  <div className="font-condensed font-bold tracking-widest">TIGERS</div>
                </div>
              </div>
              <div className="mt-6 pt-5 border-t border-border text-center">
                <div className="font-display text-2xl">17:00 <span className="text-accent">|</span> AUG 27</div>
                <div className="font-condensed text-sm text-muted-foreground tracking-widest mt-1">VENUE: BANGKOK ARENA</div>
              </div>
            </div>
          </div>
          <div className="bg-primary text-primary-foreground p-6 rounded-sm">
            <h3 className="font-display text-xl font-bold tracking-wider mb-4">TICKETS & INFO</h3>
            <ul className="space-y-2 font-condensed tracking-wide text-sm">
              <li className="flex items-center gap-2"><Ticket className="h-4 w-4" /><span>TICKETS</span></li>
              <li className="flex items-center gap-2"><Ticket className="h-4 w-4" /><span>SEASON PASSES</span></li>
              <li className="flex items-center gap-2"><Ticket className="h-4 w-4" /><span>GROUP BOOKINGS</span></li>
              <li className="flex items-center gap-2"><Ticket className="h-4 w-4" /><span>VIP PACKAGES</span></li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="font-display text-accent text-2xl font-bold tracking-wider mb-4">CALENDAR</h2>
          <div className="bg-card/60 border border-border rounded-sm p-4">
            <div className="grid grid-cols-7 gap-2 mb-2 font-condensed text-xs tracking-widest text-muted-foreground text-center">
              {DAYS.map((d) => <div key={d}>{d}</div>)}
            </div>
            <div className="grid grid-cols-7 gap-2">
              {Array.from({ length: 35 }).map((_, i) => {
                const day = i + 1;
                const game = GAMES[day];
                if (day > 31) return <div key={i} />;
                return (
                  <div
                    key={i}
                    className={`relative aspect-square border rounded-sm p-2 flex flex-col justify-between text-xs ${
                      game
                        ? game.type === "H"
                          ? "border-accent bg-primary/20"
                          : "border-border bg-secondary"
                        : "border-border/40 bg-background/30"
                    }`}
                  >
                    <span className="font-condensed text-muted-foreground">{day}</span>
                    {game && (
                      <div className="font-display text-[10px] leading-tight">
                        <div className="text-accent font-bold">{game.type === "H" ? "VS." : "@"}</div>
                        <div className="text-foreground truncate">{game.opp}</div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="mt-4 flex gap-6 font-condensed text-xs text-muted-foreground tracking-widest">
              <span className="flex items-center gap-2"><span className="w-3 h-3 bg-primary/40 border border-accent" /> HOME</span>
              <span className="flex items-center gap-2"><span className="w-3 h-3 bg-secondary border border-border" /> AWAY</span>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}