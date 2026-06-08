import { Link } from "@tanstack/react-router";
import { Facebook, Twitter, Instagram, Youtube, Phone, Mail, Globe } from "lucide-react";
import type { ReactNode } from "react";
import kingsLogoAsset from "@/assets/kings-logo.png?url";

console.log(kingsLogoAsset);
const kingsLogo = kingsLogoAsset;

const NAV = [
  { label: "HOME", to: "/" },
  { label: "TEAM", to: "/team" },
  { label: "SCHEDULE", to: "/schedule" },
  { label: "NEWS", to: "/news" },
  { label: "ACADEMY", to: "/academy" },
  { label: "SHOP", to: "/shop" },
  { label: "FAN ZONE", to: "/fan-zone" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen text-foreground flex flex-col">
      <div className="bg-primary text-primary-foreground text-xs">
        <div className="mx-auto max-w-7xl flex items-center justify-end gap-4 px-6 py-2 font-condensed">
          <span className="opacity-90">KINGS VS TIGERS · AUG 27</span>
          <a href="#" aria-label="Facebook"><Facebook className="h-3.5 w-3.5" /></a>
          <a href="#" aria-label="Twitter"><Twitter className="h-3.5 w-3.5" /></a>
          <a href="#" aria-label="YouTube"><Youtube className="h-3.5 w-3.5" /></a>
        </div>
      </div>

<header className="sticky top-0 z-50 border-b border-[#9e7b3d]/20 bg-[#081523]/95 backdrop-blur">
  {/* Top Accent Line */}
  <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#8b0000] via-[#c89b3c] to-[#8b0000]" />

  <div className="mx-auto max-w-7xl px-6">
    <div className="relative flex h-16 items-center justify-between overflow-visible">

      {/* Logo + Brand */}
      <Link
        to="/"
        className="relative flex items-center overflow-visible"
      >
        {/* Floating Logo */}
        <img
          src={kingsLogo}
          alt="Bangkok Kings"
          className="
            absolute
            left-0
            top-1/2
            h-28
            w-auto
            -translate-y-[55%]
            z-10
            drop-shadow-[0_8px_24px_rgba(0,0,0,0.75)]
            transition-transform
            duration-300
            hover:scale-105
          "
        />

        {/* Text Offset */}
        <div className="ml-[120px] leading-tight">
          <h1
            className="
              font-display
              text-xl
              font-bold
              tracking-[0.15em]
              text-white
              whitespace-nowrap
            "
          >
            BANGKOK KINGS
          </h1>

          <p
            className="
              text-xs
              italic
              text-[#d4b06a]
              whitespace-nowrap
            "
          >
            Ice Hockey Team
          </p>
        </div>
      </Link>

      {/* Navigation */}
      <nav className="hidden md:flex items-center gap-8">
        {NAV.map((item) => (
          <Link
            key={item.label}
            to={item.to}
            activeOptions={{ exact: true }}
            className="
              relative
              text-sm
              font-semibold
              uppercase
              tracking-[0.15em]
              text-white/90
              transition-colors
              duration-200
              hover:text-[#d4b06a]
              [&.active]:text-[#d4b06a]
            "
            activeProps={{
              className:
                "after:absolute after:left-0 after:right-0 after:-bottom-2 after:h-[2px] after:bg-[#d4b06a]",
            }}
          >
            {item.label}
          </Link>
        ))}
      </nav>

    </div>
  </div>
</header>

      <main className="flex-1">{children}</main>

      <div className="relative mt-12">
        <div className="mx-auto max-w-7xl px-6 flex items-center gap-6">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-accent to-accent" />
          <img src={kingsLogo} alt="" width={64} height={64} className="h-16 w-16" loading="lazy" aria-hidden />
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-accent to-accent" />
        </div>
      </div>

      <footer className="mx-auto w-full max-w-7xl px-6 py-12 grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-display text-accent text-xl font-bold tracking-widest mb-4">CONTACT</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-accent" /><span>080-455 7279</span></li>
            <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-accent" /><span>contact@bangkokkings.com</span></li>
            <li className="flex items-center gap-3"><Globe className="h-4 w-4 text-accent" /><span>www.bangkokkings.com</span></li>
          </ul>
        </div>
        <div>
          <h3 className="font-display text-accent text-xl font-bold tracking-widest mb-4">SPONSORS</h3>
          <div className="flex flex-wrap gap-3">
            {["Thai Air", "Thai Bev", "Pondsiam", "Bitoma"].map((s) => (
              <div key={s} className="border border-accent/50 px-4 py-2 font-display text-accent text-sm tracking-wider rounded-full">
                {s}
              </div>
            ))}
          </div>
        </div>
        <div className="md:text-right">
          <h3 className="font-display text-accent text-xl font-bold tracking-widest mb-4">FOLLOW</h3>
          <div className="flex md:justify-end gap-4">
            {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="h-10 w-10 rounded-full border border-accent/40 flex items-center justify-center text-accent hover:bg-accent hover:text-accent-foreground transition-colors">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </footer>
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-5 text-center text-xs text-muted-foreground font-condensed tracking-widest">
          BANGKOK KINGS © 2026 · ROYALTY OF THE RINK
        </div>
      </div>
    </div>
  );
}

export function PageHero({ kicker, title, subtitle }: { kicker: string; title: string; subtitle?: string }) {
  return (
    <section className="relative border-b border-border/60 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="font-condensed text-accent tracking-[0.3em] text-sm mb-3">{kicker}</div>
        <h1 className="font-display text-5xl md:text-6xl font-black">
          <span className="text-gradient-gold">{title}</span>
        </h1>
        {subtitle && <p className="mt-4 max-w-xl text-muted-foreground">{subtitle}</p>}
      </div>
    </section>
  );
}