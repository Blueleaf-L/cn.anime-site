import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* 网站名 */}
        <Link href="/" className="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          国产动画信息整合
        </Link>

        {/* 导航链接 */}
        <nav className="flex items-center gap-4 text-sm text-zinc-600 dark:text-zinc-400">
          <Link href="/anime" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
            作品列表
          </Link>
          <Link href="/about" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
            关于
          </Link>
        </nav>
      </div>
    </header>
  );
}
