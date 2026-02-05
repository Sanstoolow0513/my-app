import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="pt-10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <Link href="/" className="text-lg font-semibold text-ink">
          港湾手记
        </Link>
        <nav className="flex items-center gap-5 text-sm text-muted">
          <Link href="/blog" className="transition hover:text-ink">
            博客
          </Link>
          <Link href="/#about" className="transition hover:text-ink">
            关于
          </Link>
        </nav>
      </div>
    </header>
  );
}
