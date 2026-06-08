import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site-layout";
import player1 from "@/assets/player-1.jpg";
import player2 from "@/assets/player-2.jpg";
import player3 from "@/assets/player-3.jpg";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — Bangkok Kings" },
      {
        name: "description",
        content:
          "Meet the Bangkok Kings ice hockey roster — youth squad (U18) and senior team."
      },
      { property: "og:title", content: "Team — Bangkok Kings" },
      {
        property: "og:description",
        content: "Meet the Bangkok Kings roster."
      }
    ]
  }),
  component: TeamPage
});

const POOL = [
  { id: "1", img: player1, role: "CAPTAIN", name: "JOHN NAME", pos: "C" },
  { id: "2", img: player2, role: "GOALIE", name: "JOHN REETHER", pos: "G" },
  { id: "3", img: player3, role: "FORWARD", name: "JOHN SMITH", pos: "RW" },
  { id: "4", img: player1, role: "DEFENSE", name: "MIKE ROSS", pos: "D" },
  { id: "5", img: player2, role: "FORWARD", name: "TOM HARDY", pos: "LW" }
];

function Squad({ title }: { title: string }) {
  return (
    <div className="bg-card/60 border border-border rounded-sm p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-display text-2xl font-bold tracking-wider text-accent">
          {title}
        </h2>

        <div className="flex gap-2 font-condensed text-xs text-muted-foreground">
          <span className="border border-border px-3 py-1">ALL</span>
          <span className="border border-border px-3 py-1">FORWARDS</span>
          <span className="border border-border px-3 py-1">DEFENSE</span>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {POOL.map((p, i) => (
          <div key={`${title}-${i}`} className="text-center group">
            
            {/* CLICKABLE IMAGE */}
            <Link
              to="/player/$id"
              params={{ id: p.id }}
              className="block"
            >
              <div className="relative overflow-hidden rounded-sm border-2 border-accent/40 aspect-square">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  loading="lazy"
                />

                <div className="absolute top-2 right-2 bg-primary text-primary-foreground font-bold text-xs w-7 h-7 flex items-center justify-center rounded-full">
                  {p.pos}
                </div>

                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent" />
              </div>
            </Link>

            <div className="mt-3 font-condensed text-accent text-xs tracking-widest">
              {p.role}
            </div>

            <div className="font-display font-bold text-sm tracking-wider">
              {p.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TeamPage() {
  return (
    <SiteLayout>
      <PageHero
        kicker="THE ROSTER"
        title="TEAM"
        subtitle="Youth squad and senior roster — the men behind the crown."
      />

      <section className="mx-auto max-w-7xl px-6 py-12 space-y-8">
        <Squad title="YOUTH SQUAD (U18)" />
        <Squad title="SENIOR TEAM" />
      </section>
    </SiteLayout>
  );
}