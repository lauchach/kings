import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site-layout";
import { ChevronRight } from "lucide-react";
import academy from "@/assets/academy-1.jpg";
import heroPlayer from "@/assets/hero-player.jpg";
import kingsLogoAsset from "@/assets/kings-logo.png?url";
const kingsLogo = kingsLogoAsset;

export const Route = createFileRoute("/academy")({
  head: () => ({
    meta: [
      { title: "Academy — Bangkok Kings" },
      { name: "description", content: "Cultivating the next generation of ice hockey talent at the Bangkok Kings Academy." },
      { property: "og:title", content: "Academy — Bangkok Kings" },
      { property: "og:description", content: "Cultivating bloodlines on ice." },
    ],
  }),
  component: AcademyPage,
});

function AcademyPage() {
  return (
    <SiteLayout>
      <PageHero
        kicker="CULTIVATING BLOODLINE"
        title="ACADEMY"
        subtitle="Where future Kings are forged. World-class coaching for ages 8 through 18."
      />
      <section className="mx-auto max-w-7xl px-6 py-12 grid lg:grid-cols-[1.4fr_1fr] gap-8">
        <div className="grid grid-cols-2 gap-4">
          {[academy, heroPlayer, academy, heroPlayer].map((src, i) => (
            <div key={i} className="overflow-hidden rounded-sm border border-accent/30 aspect-[4/3]">
              <img src={src} alt="Academy training" width={500} height={375} className="w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
        <div className="bg-primary text-primary-foreground p-8 rounded-sm flex flex-col">
          <img src={kingsLogo} alt="" width={80} height={80} className="h-20 w-20 mb-4" aria-hidden />
          <h2 className="font-display text-3xl font-bold tracking-wider">REGISTER NOW</h2>
          <p className="mt-3 text-sm opacity-90">Join the academy program. Limited spots for the 2026 development squad.</p>
          <form className="mt-6 space-y-3">
            <input className="w-full bg-background/30 border border-accent/40 px-4 py-3 font-condensed text-sm placeholder:text-primary-foreground/60 focus:outline-none focus:border-accent" placeholder="FULL NAME" />
            <input className="w-full bg-background/30 border border-accent/40 px-4 py-3 font-condensed text-sm placeholder:text-primary-foreground/60 focus:outline-none focus:border-accent" placeholder="EMAIL" />
            <input className="w-full bg-background/30 border border-accent/40 px-4 py-3 font-condensed text-sm placeholder:text-primary-foreground/60 focus:outline-none focus:border-accent" placeholder="AGE GROUP (U10 / U14 / U18)" />
            <button type="button" className="w-full bg-accent text-accent-foreground font-condensed font-bold tracking-widest py-3 inline-flex items-center justify-center gap-2 hover:opacity-90">
              APPLY <ChevronRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 grid md:grid-cols-3 gap-6">
        {[
          { t: "ELITE COACHING", d: "Former pros lead every session — skills, systems, conditioning." },
          { t: "PRO FACILITIES", d: "Twin NHL-spec rinks, gym, video room and recovery suite." },
          { t: "PATHWAY TO PRO", d: "Top Academy graduates earn a tryout with the senior Kings." },
        ].map((b) => (
          <div key={b.t} className="bg-card border border-border p-6 rounded-sm">
            <div className="font-display text-accent text-xl font-bold tracking-wider">{b.t}</div>
            <p className="mt-3 text-sm text-muted-foreground">{b.d}</p>
          </div>
        ))}
      </section>
    </SiteLayout>
  );
}