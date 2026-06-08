import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site-layout";
import { Crown, Users, Trophy, Sparkles } from "lucide-react";
import heroPlayer from "@/assets/hero-player.jpg";

export const Route = createFileRoute("/fan-zone")({
  head: () => ({
    meta: [
      { title: "Fan Zone — Bangkok Kings" },
      { name: "description", content: "Join the Kingdom. Membership, fan events, contests and chants for Bangkok Kings supporters." },
      { property: "og:title", content: "Fan Zone — Bangkok Kings" },
      { property: "og:description", content: "Join the Kingdom." },
    ],
  }),
  component: FanZonePage,
});

function FanZonePage() {
  return (
    <SiteLayout>
      <PageHero kicker="JOIN THE KINGDOM" title="FAN ZONE" subtitle="Membership, events and exclusive moments — for the loyal." />
      <section className="mx-auto max-w-7xl px-6 py-12 grid lg:grid-cols-2 gap-8 items-center">
        <div className="relative overflow-hidden rounded-sm border border-accent/30">
          <img src={heroPlayer} alt="Bangkok Kings fans" width={800} height={600} className="w-full h-[420px] object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
        <div>
          <h2 className="font-display text-4xl font-bold tracking-wider text-gradient-gold">BLEED RED AND GOLD</h2>
          <p className="mt-4 text-muted-foreground">The Kingdom is more than a team — it's a brotherhood of supporters who turn every arena into a fortress. Join the official fan club to unlock perks, events, and a direct line to the action.</p>
          <div className="mt-6 flex gap-3">
            <button className="bg-primary text-primary-foreground font-condensed font-bold tracking-widest px-6 py-3">JOIN NOW</button>
            <button className="border border-accent text-accent font-condensed font-bold tracking-widest px-6 py-3 hover:bg-accent hover:text-accent-foreground transition-colors">LEARN MORE</button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <h3 className="font-display text-accent text-2xl font-bold tracking-wider mb-6">MEMBERSHIP TIERS</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Users, name: "SQUIRE", price: "Free", perks: ["Newsletter", "Community access", "Member badge"] },
            { icon: Crown, name: "KNIGHT", price: "499 THB / yr", perks: ["All Squire perks", "10% shop discount", "Priority tickets", "Exclusive content"] },
            { icon: Trophy, name: "ROYAL", price: "1,999 THB / yr", perks: ["All Knight perks", "Reserved seating", "Locker-room tour", "Signed jersey"] },
          ].map((t, i) => (
            <div key={t.name} className={`rounded-sm p-6 border ${i === 1 ? "bg-primary text-primary-foreground border-accent" : "bg-card border-border"}`}>
              <t.icon className={`h-8 w-8 ${i === 1 ? "text-accent" : "text-accent"}`} />
              <div className="font-display text-2xl font-bold tracking-wider mt-3">{t.name}</div>
              <div className={`font-condensed text-sm tracking-widest mt-1 ${i === 1 ? "opacity-90" : "text-muted-foreground"}`}>{t.price}</div>
              <ul className="mt-5 space-y-2 text-sm">
                {t.perks.map((p) => (
                  <li key={p} className="flex items-center gap-2"><Sparkles className="h-3.5 w-3.5 text-accent" /><span>{p}</span></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}