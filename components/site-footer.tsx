import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-outline py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 text-sm text-muted md:flex-row md:items-center">
        <p>版权所有 2026 港湾手记。由 Next.js 构建。</p>
        <div className="flex items-center gap-4">
          <Link href="/blog" className="transition hover:text-ink">
            博客
          </Link>
          <a
            href="mailto:hello@harbornotes.studio"
            className="transition hover:text-ink"
          >
            邮箱
          </a>
        </div>
      </div>
    </footer>
  );
}
