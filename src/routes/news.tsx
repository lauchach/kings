import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site-layout";
import newsRecap from "@/assets/news-recap.jpg";
import heroPlayer from "@/assets/hero-player.jpg";
import academy from "@/assets/academy-1.jpg";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News — Bangkok Kings" },
      { name: "description", content: "Latest news, game recaps and announcements from the Bangkok Kings ice hockey team." },
      { property: "og:title", content: "News — Bangkok Kings" },
      { property: "og:description", content: "Latest updates from the Kingdom." },
    ],
  }),
  component: NewsPage,
});

const ARTICLES = [
  { img: heroPlayer, tag: "FEATURE", title: "ROYALTY ON ICE", excerpt: "Inside the season opener: how the Kings staked their claim from the very first shift.", date: "AUG 27, 2026" },
  { img: newsRecap, tag: "RECAP", title: "LAST GAME RECAP", excerpt: "A statement win on home ice — three periods of pure poise.", date: "AUG 20, 2026" },
  { img: academy, tag: "ACADEMY", title: "ACADEMY RECRUITMENT", excerpt: "Tryouts open for the 2026 development squad.", date: "AUG 15, 2026" },
  { img: heroPlayer, tag: "INTERVIEW", title: "VOICE OF THE CAPTAIN", excerpt: "John Name on leadership, brotherhood and chasing the cup.", date: "AUG 10, 2026" },
];

function NewsPage() {
  return (
    <SiteLayout>
      <PageHero kicker="LATEST UPDATES" title="NEWS" subtitle="Headlines, recaps and stories from the heart of the franchise." />
      <section className="mx-auto max-w-7xl px-6 py-12">
        <article className="grid md:grid-cols-2 gap-8 mb-12 bg-card/60 border border-border rounded-sm overflow-hidden">
          <img src={ARTICLES[0].img} alt={ARTICLES[0].title} width={800} height={600} className="w-full h-full object-cover min-h-[300px]" loading="lazy" />
          <div className="p-8 flex flex-col justify-center">
            <div className="font-condensed text-accent text-xs tracking-[0.3em]">{ARTICLES[0].tag} · {ARTICLES[0].date}</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-wider mt-3 text-gradient-gold">{ARTICLES[0].title}</h2>
            <p className="mt-4 text-muted-foreground">{ARTICLES[0].excerpt}</p>
            <button className="mt-6 self-start bg-primary text-primary-foreground font-condensed font-bold tracking-widest px-6 py-3">READ MORE</button>
          </div>
        </article>

        <div className="grid md:grid-cols-3 gap-6">
          {ARTICLES.slice(1).map((a) => (
            <article key={a.title} className="bg-card border border-border rounded-sm overflow-hidden group hover:border-accent/50 transition-colors">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={a.img} alt={a.title} width={400} height={300} className="w-full h-full object-cover transition-transform group-hover:scale-105" loading="lazy" />
              </div>
              <div className="p-5">
                <div className="font-condensed text-accent text-xs tracking-[0.3em]">{a.tag} · {a.date}</div>
                <h3 className="font-display text-xl font-bold tracking-wider mt-2">{a.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{a.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}