import Link from "next/link";

// 首页的三个内容模块
const modules = [
  {
    title: "网络动画",
    description: "国产网络连载动画，涵盖修仙、科幻、都市、奇幻等全题材。",
    href: "/anime",
    color: "bg-indigo-50 border-indigo-200 hover:bg-indigo-100 dark:bg-indigo-950/30 dark:border-indigo-800 dark:hover:bg-indigo-950/50",
    icon: "🎬",
  },
  {
    title: "动画公司",
    description: "了解每家制作公司的作品、风格与品控能力。",
    href: "/anime",
    color: "bg-amber-50 border-amber-200 hover:bg-amber-100 dark:bg-amber-950/30 dark:border-amber-800 dark:hover:bg-amber-950/50",
    icon: "🏢",
  },
  {
    title: "评分聚合",
    description: "Bangumi + MyAnimeList 多平台评分一站式查看。",
    href: "/anime",
    color: "bg-emerald-50 border-emerald-200 hover:bg-emerald-100 dark:bg-emerald-950/30 dark:border-emerald-800 dark:hover:bg-emerald-950/50",
    icon: "⭐",
  },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20">
      {/* Hero 区域 */}
      <section className="mb-16 text-center sm:mb-24">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50">
          国产动画信息整合
        </h1>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-zinc-500 dark:text-zinc-400">
          一个由国产动画爱好者协作维护的信息整合网站，
          专注于作品数据、评分聚合与行业洞察。
        </p>

        {/* 状态标签 */}
        <div className="mt-6 flex items-center justify-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700 dark:bg-amber-950/50 dark:text-amber-400">
            🚧 网站建设中
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400">
            数据持续录入中
          </span>
        </div>
      </section>

      {/* 模块卡片 */}
      <section className="grid gap-6 sm:grid-cols-3">
        {modules.map((mod) => (
          <Link
            key={mod.title}
            href={mod.href}
            className={`rounded-xl border p-6 transition-colors ${mod.color}`}
          >
            <div className="mb-3 text-3xl">{mod.icon}</div>
            <h2 className="mb-1.5 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              {mod.title}
            </h2>
            <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
              {mod.description}
            </p>
          </Link>
        ))}
      </section>
    </div>
  );
}
