import Link from "next/link";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { formatDate, getAllPosts } from "@/lib/posts";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen text-ink">
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-6 pb-16">
        <section className="mt-14 animate-rise delay-1">
          <p className="eyebrow">博客</p>
          <h1 className="mt-3 text-4xl font-semibold leading-tight text-ink">
            来自工作室的写作。
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            简短随笔，关于设计手艺、构建安静的系统，以及交付的节奏。
          </p>
        </section>

        <section className="mt-12 grid gap-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="surface shadow-soft transition duration-200 hover:-translate-y-1"
            >
              <Link href={`/blog/${post.slug}`} className="block p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span>•</span>
                  <span>{post.readingTime}</span>
                </div>
                <h2 className="mt-3 text-2xl font-semibold text-ink">
                  {post.title}
                </h2>
                <p className="mt-3 leading-relaxed text-muted">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </article>
          ))}
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
