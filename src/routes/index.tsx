import { createFileRoute } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import heroPlayer from "@/assets/hero-player.jpg";
import kingsLogoAsset from "@/assets/kings-logo.png?url";
const kingsLogo = kingsLogoAsset;
import tigersLogo from "@/assets/tigers-logo.png";
import player1 from "@/assets/player-1.jpg";
import player2 from "@/assets/player-2.jpg";
import player3 from "@/assets/player-3.jpg";
import newsRecap from "@/assets/news-recap.jpg";
import wallpphero from "@/assets/wallpphero.jpg";

console.log(wallpphero);
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bangkok Kings — Royalty of the Rink" },
      { name: "description", content: "Official home of the Bangkok Kings ice hockey team. Schedule, roster, news, academy and fan zone." },
      { property: "og:title", content: "Bangkok Kings Ice Hockey" },
      { property: "og:description", content: "Royalty of the rink. Join the Kingdom." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>


      <section className="relative overflow-hidden min-h-screen">
  <img
    src={wallpphero}
    alt=""
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Background Texture */}
  <div
    className="
      absolute
      inset-0
      opacity-[0.05]
      pointer-events-none
      bg-[url('/textures/scratches.png')]
      bg-cover
    "
  />

  {/* ลบ py-12 lg:py-20 ออก */}
  <div className="relative mx-auto max-w-7xl px-6">
    <div className="grid lg:grid-cols-[40%_60%] items-center gap-0 min-h-screen">
      
      {/* ================= LEFT ================= */}
      <div className="relative z-10">
<h1 className="uppercase leading-[0.9] select-none text-white font-extrabold text-shadow-lg">
  {/* บรรทัดแรก: ROYALTY (เล็กลงอีก) */}
  <span className="block text-[2.5rem] md:text-[3.8rem] lg:text-[4.8rem] font-extrabold tracking-[0.25em] font-['Avenir_Next'] text-[#FFD700]">
    ROYALTY
  </span>

  {/* บรรทัดสอง: OF THE RINK (เล็กลงอีก) */}
  <span className="block text-[1.8rem] md:text-[2.6rem] lg:text-[3.5rem] font-bold tracking-[0.3em] font-['Avenir_Next'] text-[#ADD8E6]">
    OF THE RINK
  </span>
</h1>

        <button
          className="
            mt-10
            inline-flex
            items-center
            justify-center
            bg-[#b3162b]
            hover:bg-[#991120]
            text-white
            uppercase
            font-black
            text-lg
            px-10
            py-4
            rounded-md
            shadow-[0_12px_30px_rgba(179,22,43,0.4)]
            transition-all
            duration-300
            hover:-translate-y-1
          "
        >
          JOIN THE KINGDOM
        </button>
      </div>

      {/* ================= RIGHT ================= */}
      <div className="relative h-screen">
        {/* IMAGE */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            clipPath: "polygon(23% 0%,100% 0%,100% 100%,0% 100%)",
          }}
        >
          <img
            src={heroPlayer}
            alt="Bangkok Kings Player"
            className="
              h-full
              w-full
              object-cover
              object-center
            "
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#071521]/20 via-transparent to-transparent" />
        </div>

        {/* RED STRIPE */}
        <div
          className="
            absolute
            left-[70px]
            top-[-10px]
            bottom-0
            w-[20px]
            z-30
            bg-[#8f1827]
          "
          style={{
            clipPath: "polygon(0 0,100% 0,0% 100%,0 100%)",
            transform: "rotate(9.5deg)",
            transformOrigin: "center",
          }}
        />

        {/* GOLD STRIPE */}
        <div
          className="
            absolute
            left-[80px]
            top-[-10px]
            bottom-0
            w-[15px]
            z-40
            bg-[#d0a85c]
          "
          style={{
            clipPath: "polygon(0 0,100% 0,0% 100%,0 100%)",
            transform: "rotate(11deg)",
            transformOrigin: "center",
          }}
        />
      </div>
    </div>
  </div>
</section>

      <section className="mx-auto max-w-7xl px-6 p-20 grid lg:grid-cols-3 gap-6">
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
              <div className="font-display text-2xl text-foreground">17:00 <span className="text-accent">|</span> AUG 27</div>
              <div className="font-condensed text-sm text-muted-foreground tracking-widest mt-1">VENUE: BANGKOK ARENA</div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-display text-accent text-2xl font-bold tracking-wider mb-4">TEAM ROSTER HIGHLIGHTS</h2>
          <div className="grid grid-cols-3 gap-3">
            {[
              { img: player1, role: "CAPTAIN", name: "JOHN NAME", pos: "PS" },
              { img: player2, role: "GOALIE", name: "JOHN REETHER", pos: "PS" },
              { img: player3, role: "FORWARD", name: "JOHN SMITH", pos: "PS" },
            ].map((p) => (
              <div key={p.name} className="text-center">
                <div className="relative overflow-hidden rounded-sm border-2 border-accent/40 aspect-square">
                  <img src={p.img} alt={p.name} width={512} height={512} className="w-full h-full object-cover grayscale-[15%]" loading="lazy" />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent" />
                </div>
                <div className="mt-3 font-condensed text-accent text-xs tracking-widest">{p.role}</div>
                <div className="font-display font-bold text-sm tracking-wider">{p.name}</div>
                <div className="text-xs text-muted-foreground">{p.pos}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-display text-accent text-2xl font-bold tracking-wider mb-4">LATEST NEWS</h2>
          <div className="space-y-3">
            <article className="flex gap-4 bg-card border border-border rounded-sm overflow-hidden hover:border-accent/50 transition-colors">
              <div className="w-32 shrink-0 bg-primary flex items-center justify-center p-3">
                <div className="font-display font-bold text-primary-foreground text-center leading-tight">ACADEMY<br />RECRUITMENT</div>
              </div>
              <div className="py-3 pr-3">
                <h3 className="font-display font-bold tracking-wide">ACADEMY RECRUITMENT</h3>
                <p className="text-xs text-muted-foreground mt-1">Tryouts open for the 2026 development squad. Lace up and skate with the Kings.</p>
              </div>
            </article>
            <article className="flex gap-4 bg-card border border-border rounded-sm overflow-hidden hover:border-accent/50 transition-colors">
              <img src={newsRecap} alt="Game recap" width={128} height={96} className="w-32 h-24 object-cover" loading="lazy" />
              <div className="py-3 pr-3">
                <h3 className="font-display font-bold tracking-wide">LAST GAME RECAP</h3>
                <p className="text-xs text-muted-foreground mt-1">A statement win on home ice — the Kings dismantle their rivals in three periods of pure poise.</p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
