export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 py-6 text-center text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-500">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p>国产动画信息整合 &copy; {new Date().getFullYear()}</p>
        <p className="mt-1">
          数据由国产动画爱好者协作维护
        </p>
      </div>
    </footer>
  );
}
