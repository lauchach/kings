import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site-layout";
import player1 from "@/assets/player-1.jpg";
import player2 from "@/assets/player-2.jpg";
import player3 from "@/assets/player-3.jpg";
import { Activity, Snowflake, Dumbbell, TrendingUp, Calendar, ClipboardList, Trophy, MessageSquare } from "lucide-react";

export const Route = createFileRoute("/player/1")({
  head: () => ({
    meta: [
      { title: "Player Dashboard — Bangkok Kings" },
      { name: "description", content: "Bangkok Kings player development dashboard — ratings, assessments, training attendance and coach notes." },
      { property: "og:title", content: "Player Dashboard — Bangkok Kings" },
      { property: "og:description", content: "Track player performance and development with the Kings." },
    ],
  }),
  component: PlayerDashboard,
});

const ROSTER = [
  { id: "BK25024", img: player1, no: 24, name: "NATTAWAT K.", pos: "Forward", hand: "Right", age: 13, group: "U14 AAA", overall: 82, ice: 84, off: 78, dev: "+12%", active: true },
  { id: "BK25011", img: player2, no: 11, name: "SOMCHAI P.", pos: "Goalie",  hand: "Left",  age: 14, group: "U14 AAA", overall: 79, ice: 81, off: 75, dev: "+8%",  active: true },
  { id: "BK25007", img: player3, no: 7,  name: "ARTHIT S.",  pos: "Defense", hand: "Right", age: 13, group: "U14 AAA", overall: 76, ice: 74, off: 80, dev: "+5%",  active: true },
];

const SKILLS = [
  { label: "SKATING",  v: 0.85 },
  { label: "SHOOTING", v: 0.78 },
  { label: "PASSING",  v: 0.72 },
  { label: "HOCKEY IQ",v: 0.80 },
  { label: "COMPETE",  v: 0.88 },
  { label: "PHYSICAL", v: 0.65 },
];

const ASSESSMENTS = [
  { icon: Snowflake, name: "On-Ice Assessment",  date: "10 May 2025", value: "84", unit: "/100" },
  { icon: Dumbbell,  name: "Off-Ice Assessment", date: "10 May 2025", value: "78", unit: "/100" },
  { icon: Activity,  name: "Skating Test",       date: "2 May 2025",  value: "7.8", unit: "sec" },
  { icon: TrendingUp,name: "Yo-Yo Test",         date: "2 May 2025",  value: "L14", unit: "" },
];

const GAMES = [
  { date: "10 May 2025", opp: "IHAT Academy U14",  score: "6 - 2", res: "W" },
  { date: "4 May 2025",  opp: "Jr. Thunder U14",   score: "3 - 4", res: "L" },
  { date: "27 Apr 2025", opp: "Chiangmai Ice U14", score: "7 - 1", res: "W" },
];

// Training attendance: 0 absent, 1 partial, 2 present, -1 no-session
const ATTENDANCE: number[] = [2,2,1,2,2,0,-1, 2,2,2,2,1,2,-1, 2,1,2,2,2,0,-1, 2,2,2,2,2,1,-1, 2,2,2,0,2,2,-1];
const DAYS = ["MON","TUE","WED","THU","FRI","SAT","SUN"];

const DEV_SCORES = [32, 45, 52, 58, 62, 75, 88];
const DEV_MONTHS = ["Dec","Jan","Feb","Mar","Apr","May","Jun"];

function RadarChart() {
  const size = 260;
  const cx = size / 2;
  const cy = size / 2;
  const radius = 95;
  const angles = SKILLS.map((_, i) => (Math.PI * 2 * i) / SKILLS.length - Math.PI / 2);
  const point = (i: number, v: number) => [cx + Math.cos(angles[i]) * radius * v, cy + Math.sin(angles[i]) * radius * v] as const;
  const polygon = SKILLS.map((s, i) => point(i, s.v).join(",")).join(" ");
  return (
    <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-auto">
      {[0.25, 0.5, 0.75, 1].map((r) => (
        <polygon
          key={r}
          points={SKILLS.map((_, i) => point(i, r).join(",")).join(" ")}
          fill="none"
          stroke="oklch(0.55 0.20 27 / 0.18)"
          strokeWidth="1"
        />
      ))}
      {SKILLS.map((_, i) => (
        <line key={i} x1={cx} y1={cy} x2={point(i, 1)[0]} y2={point(i, 1)[1]} stroke="oklch(0.55 0.20 27 / 0.18)" strokeWidth="1" />
      ))}
      <polygon points={polygon} fill="oklch(0.55 0.20 27 / 0.25)" stroke="oklch(0.55 0.20 27)" strokeWidth="2" />
      {SKILLS.map((s, i) => (
        <circle key={s.label} cx={point(i, s.v)[0]} cy={point(i, s.v)[1]} r="3.5" fill="oklch(0.78 0.14 82)" />
      ))}
      {SKILLS.map((s, i) => {
        const [x, y] = point(i, 1.22);
        return (
          <text key={s.label} x={x} y={y} textAnchor="middle" dominantBaseline="middle" className="fill-muted-foreground" style={{ fontSize: 10, letterSpacing: "0.12em" }}>
            {s.label}
          </text>
        );
      })}
    </svg>
  );
}

function DevChart() {
  const w = 520;
  const h = 160;
  const pad = 28;
  const max = 100;
  const stepX = (w - pad * 2) / (DEV_SCORES.length - 1);
  const points = DEV_SCORES.map((s, i) => [pad + i * stepX, h - pad - (s / max) * (h - pad * 2)] as const);
  const path = points.map((p, i) => `${i ? "L" : "M"}${p[0]},${p[1]}`).join(" ");
  const area = `${path} L${points[points.length - 1][0]},${h - pad} L${pad},${h - pad} Z`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto">
      <defs>
        <linearGradient id="devFill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.55 0.20 27)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="oklch(0.55 0.20 27)" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0, 25, 50, 75, 100].map((g) => {
        const y = h - pad - (g / max) * (h - pad * 2);
        return (
          <g key={g}>
            <line x1={pad} x2={w - pad} y1={y} y2={y} stroke="oklch(0.30 0.02 40 / 0.4)" strokeDasharray="3 4" />
            <text x={pad - 6} y={y + 3} textAnchor="end" className="fill-muted-foreground" style={{ fontSize: 9 }}>{g}</text>
          </g>
        );
      })}
      <path d={area} fill="url(#devFill)" />
      <path d={path} fill="none" stroke="oklch(0.55 0.20 27)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {points.map((p, i) => (
        <circle key={i} cx={p[0]} cy={p[1]} r="4" fill="oklch(0.55 0.20 27)" stroke="oklch(0.13 0.008 30)" strokeWidth="2" />
      ))}
      {DEV_MONTHS.map((m, i) => (
        <text key={m} x={pad + i * stepX} y={h - 8} textAnchor="middle" className="fill-muted-foreground" style={{ fontSize: 10 }}>{m}</text>
      ))}
    </svg>
  );
}

function StatPill({ icon: Icon, label, value, unit, tag }: { icon: typeof Activity; label: string; value: string; unit: string; tag: string }) {
  return (
    <div className="bg-card border border-border rounded-sm p-4 flex items-center gap-4">
      <div className="h-12 w-12 rounded-full bg-primary/15 border border-primary/40 grid place-items-center text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <div className="font-condensed text-[10px] tracking-[0.18em] text-muted-foreground">{label}</div>
        <div className="font-display font-bold text-2xl text-foreground leading-none">
          <span className="text-primary">{value}</span>
          <span className="text-muted-foreground text-sm font-normal ml-1">{unit}</span>
        </div>
        <div className="text-[10px] text-accent font-condensed tracking-widest mt-1">{tag}</div>
      </div>
    </div>
  );
}

function PlayerDashboard() {
  const p = ROSTER[0];
  return (
    <SiteLayout>
      <PageHero kicker="2025 — 2026 SEASON" title="PLAYER DASHBOARD" subtitle="Development tracking for every athlete in the Kings program." />
      <section className="mx-auto max-w-7xl px-6 pb-16 grid lg:grid-cols-[260px_1fr] gap-6">
        {/* Roster sidebar */}
        <aside className="bg-card border border-border rounded-sm p-4 self-start">
          <div className="font-condensed text-xs tracking-[0.2em] text-accent mb-3">ROSTER</div>
          <ul className="space-y-2">
            {ROSTER.map((r, i) => (
              <li key={r.id} className={`flex items-center gap-3 p-2 rounded-sm border ${i === 0 ? "border-primary/50 bg-primary/10" : "border-transparent hover:border-border"}`}>
                <img src={r.img} alt={r.name} className="h-10 w-10 rounded-sm object-cover" />
                <div className="min-w-0">
                  <div className="font-display font-bold text-sm tracking-wide truncate">#{r.no} {r.name}</div>
                  <div className="text-[10px] text-muted-foreground font-condensed tracking-widest">{r.pos.toUpperCase()} · {r.group}</div>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-4 border-t border-border space-y-2 font-condensed text-xs tracking-widest text-muted-foreground">
            <div className="flex items-center gap-2 text-accent"><Trophy className="h-3.5 w-3.5" /> GAMES</div>
            <div className="flex items-center gap-2"><ClipboardList className="h-3.5 w-3.5" /> ASSESSMENTS</div>
            <div className="flex items-center gap-2"><Calendar className="h-3.5 w-3.5" /> ATTENDANCE</div>
            <div className="flex items-center gap-2"><MessageSquare className="h-3.5 w-3.5" /> COACH NOTES</div>
          </div>
        </aside>

        {/* Main */}
        <div className="space-y-6">
          {/* Profile + ratings */}
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-6">
            <div className="bg-card border border-border rounded-sm overflow-hidden flex">
              <div className="w-1/2 relative bg-gradient-to-b from-primary/40 to-background">
                <img src={p.img} alt={p.name} className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div className="w-1/2 p-5 flex flex-col">
                <div className="font-display text-primary text-2xl font-bold">#{p.no}</div>
                <div className="font-display text-xl font-bold tracking-wider">{p.name}</div>
                <div className="mt-3 text-xs text-muted-foreground font-condensed tracking-widest space-y-1">
                  <div>{p.pos.toUpperCase()}  ·  {p.hand.toUpperCase()}</div>
                  <div>U14  ·  {p.age} YEARS OLD</div>
                  <div>BANGKOK KINGS {p.group}</div>
                </div>
                <span className="mt-4 inline-flex w-fit bg-primary text-primary-foreground font-condensed text-[10px] tracking-[0.2em] px-3 py-1">ACTIVE</span>
                <div className="mt-auto pt-4 grid grid-cols-2 gap-3 text-[10px] font-condensed tracking-widest text-muted-foreground">
                  <div><div className="text-accent">PLAYER ID</div><div className="text-foreground">{p.id}</div></div>
                  <div><div className="text-accent">HEIGHT / WEIGHT</div><div className="text-foreground">165 / 52</div></div>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-3">
              <StatPill icon={TrendingUp} label="OVERALL RATING" value={String(p.overall)} unit="/100" tag="ADVANCED" />
              <StatPill icon={Snowflake} label="ON-ICE RATING" value={String(p.ice)} unit="/100" tag="ADVANCED" />
              <StatPill icon={Dumbbell} label="OFF-ICE RATING" value={String(p.off)} unit="/100" tag="DEVELOPING" />
              <div className="sm:col-span-3 bg-card border border-border rounded-sm p-5">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-condensed text-xs tracking-[0.2em] text-accent">DEVELOPMENT SCORE</div>
                  <div className="text-primary font-display font-bold">{p.dev}<span className="text-muted-foreground text-[10px] font-condensed tracking-widest ml-1">VS LAST 3 MONTHS</span></div>
                </div>
                <DevChart />
              </div>
            </div>
          </div>

          {/* Skills + assessments + attendance */}
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-sm p-5">
              <div className="font-condensed text-xs tracking-[0.2em] text-accent mb-2">SKILLS OVERVIEW</div>
              <RadarChart />
            </div>

            <div className="bg-card border border-border rounded-sm p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="font-condensed text-xs tracking-[0.2em] text-accent">RECENT ASSESSMENTS</div>
                <button className="text-[10px] text-primary font-condensed tracking-widest hover:underline">VIEW ALL</button>
              </div>
              <ul className="space-y-3">
                {ASSESSMENTS.map((a) => (
                  <li key={a.name} className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-primary/15 border border-primary/40 grid place-items-center text-primary">
                      <a.icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-display text-sm font-bold tracking-wide truncate">{a.name}</div>
                      <div className="text-[10px] text-muted-foreground font-condensed tracking-widest">{a.date}</div>
                    </div>
                    <div className="font-display font-bold text-lg">
                      <span className="text-primary">{a.value}</span>
                      <span className="text-muted-foreground text-[10px] ml-1">{a.unit}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card border border-border rounded-sm p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="font-condensed text-xs tracking-[0.2em] text-accent">TRAINING ATTENDANCE</div>
                <div className="text-[10px] text-muted-foreground font-condensed tracking-widest">MAY 2025</div>
              </div>
              <div className="grid grid-cols-7 gap-1.5 mb-2">
                {DAYS.map((d) => (
                  <div key={d} className="text-[9px] text-center font-condensed tracking-widest text-muted-foreground">{d}</div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1.5">
                {ATTENDANCE.map((v, i) => {
                  const cls =
                    v === 2 ? "bg-emerald-500/80" :
                    v === 1 ? "bg-amber-400/80" :
                    v === 0 ? "bg-primary/80" :
                    "bg-muted/40";
                  return <div key={i} className={`aspect-square rounded-full ${cls}`} />;
                })}
              </div>
              <div className="mt-4 flex flex-wrap gap-3 text-[9px] font-condensed tracking-widest text-muted-foreground">
                <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-emerald-500" /> PRESENT</span>
                <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-amber-400" /> PARTIAL</span>
                <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-primary" /> ABSENT</span>
                <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-muted" /> NO SESSION</span>
              </div>
            </div>
          </div>

          {/* Games + Notes */}
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-sm p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="font-condensed text-xs tracking-[0.2em] text-accent">LATEST GAMES</div>
                <button className="text-[10px] text-primary font-condensed tracking-widest hover:underline">VIEW ALL</button>
              </div>
              <ul className="divide-y divide-border">
                {GAMES.map((g) => (
                  <li key={g.date} className="py-2.5 flex items-center gap-4 text-sm">
                    <span className="text-muted-foreground font-condensed text-xs tracking-widest w-24 shrink-0">{g.date.toUpperCase()}</span>
                    <span className="font-display font-bold truncate flex-1">Bangkok Kings U14 <span className="text-muted-foreground"> vs </span>{g.opp}</span>
                    <span className="font-display font-bold w-14 text-right">{g.score}</span>
                    <span className={`grid place-items-center h-6 w-6 rounded-full font-display text-xs font-bold ${g.res === "W" ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40" : "bg-primary/15 text-primary border border-primary/40"}`}>{g.res}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card border border-border rounded-sm p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="font-condensed text-xs tracking-[0.2em] text-accent">COACH NOTES</div>
                <button className="text-[10px] text-primary font-condensed tracking-widest hover:underline">VIEW ALL</button>
              </div>
              <div className="flex gap-3">
                <img src={player2} alt="Coach" className="h-10 w-10 rounded-full object-cover" />
                <div className="min-w-0">
                  <div className="flex items-center justify-between">
                    <div className="font-display font-bold tracking-wide">Coach Kenny</div>
                    <div className="text-[10px] text-muted-foreground font-condensed tracking-widest">11 MAY 2025</div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                    Great improvement in skating and compete level. Keep working on shooting accuracy and decision-making in the offensive zone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}