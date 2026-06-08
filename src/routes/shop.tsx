import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site-layout";
import jersey from "@/assets/shop-jersey.jpg";
import cap from "@/assets/shop-cap.jpg";
import scarf from "@/assets/shop-scarf.jpg";
import beanie from "@/assets/shop-beanie.jpg";
import tshirt from "@/assets/shop-tshirt.jpg";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop — Bangkok Kings" },
      { name: "description", content: "Official Bangkok Kings merchandise: jerseys, caps, scarves and more." },
      { property: "og:title", content: "Shop — Bangkok Kings" },
      { property: "og:description", content: "Official team merchandise." },
    ],
  }),
  component: ShopPage,
});

const PRODUCTS = [
  { img: jersey, name: "Bangkok Kings Jersey", price: "1,500 THB", cat: "Jerseys" },
  { img: cap, name: "Royal Lion Cap", price: "529 THB", cat: "Headwear" },
  { img: scarf, name: "Kingdom Scarf", price: "529 THB", cat: "Accessories" },
  { img: tshirt, name: "Crest Tee", price: "649 THB", cat: "Apparel" },
  { img: beanie, name: "Pom Beanie", price: "479 THB", cat: "Headwear" },
  { img: jersey, name: "Away Jersey", price: "1,500 THB", cat: "Jerseys" },
];

const CATS = ["All", "Jerseys", "Headwear", "Apparel", "Accessories", "Academy", "Fan Zone"];

function ShopPage() {
  return (
    <SiteLayout>
      <PageHero kicker="OFFICIAL STORE" title="SHOP" subtitle="Wear the crown. Souvenirs from the Kingdom." />
      <section className="mx-auto max-w-7xl px-6 py-12 grid md:grid-cols-[200px_1fr] gap-10">
        <aside>
          <h3 className="font-display text-accent text-lg font-bold tracking-widest mb-4">CATEGORIES</h3>
          <ul className="space-y-2 font-condensed text-sm tracking-widest">
            {CATS.map((c, i) => (
              <li key={c}>
                <button className={`block w-full text-left py-2 border-b border-border/40 transition-colors hover:text-accent ${i === 0 ? "text-accent" : "text-muted-foreground"}`}>
                  {c.toUpperCase()}
                </button>
              </li>
            ))}
          </ul>
        </aside>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((p) => (
            <article key={p.name} className="bg-card border border-border rounded-sm overflow-hidden group hover:border-accent/60 transition-colors">
              <div className="aspect-square overflow-hidden bg-black">
                <img src={p.img} alt={p.name} width={400} height={400} className="w-full h-full object-cover transition-transform group-hover:scale-105" loading="lazy" />
              </div>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <div className="font-display font-bold tracking-wide text-sm">{p.name}</div>
                  <div className="font-condensed text-xs text-muted-foreground tracking-widest">{p.cat.toUpperCase()}</div>
                </div>
                <div className="font-display text-accent font-bold">{p.price}</div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}