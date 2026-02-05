import Link from "next/link";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { formatDate, getAllPosts } from "@/lib/posts";

const topics = [
  "Product design",
  "Frontend craft",
  "Systems thinking",
  "Weekly reviews",
  "Writing rituals",
];

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <div className="min-h-screen text-ink">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-6 pb-16">
        <section className="mt-16 grid items-start gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div className="animate-rise delay-1 space-y-6">
            <p className="eyebrow">Personal blog</p>
            <h1 className="text-4xl font-semibold leading-tight text-ink sm:text-5xl">
              Harbor Notes is a quiet blog about design, code, and the systems
              that keep me steady.
            </h1>
            <p className="text-lg leading-relaxed text-muted">
              I write from the edge of product design and development, sharing
              checklists, field notes, and gentle experiments to help teams move
              with less noise.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/blog" className="btn-primary">
                Read the blog
              </Link>
              <Link href="#about" className="btn-secondary">
                About me
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted">
              <span className="inline-flex items-center gap-2">
                <span className="status-dot" />
                Based in a small studio.
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="status-dot accent" />
                New note every two weeks.
              </span>
            </div>
          </div>
          <div className="surface shadow-soft animate-rise delay-2 p-6 md:p-8">
            <p className="eyebrow">Now</p>
            <h2 className="mt-2 text-2xl font-semibold text-ink">
              Currently exploring
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li>Designing a calm dashboard for daily priorities.</li>
              <li>Rebuilding this blog in public with small steps.</li>
              <li>Collecting tiny rituals that protect focus.</li>
            </ul>
            <div className="mt-6 flex items-center justify-between rounded-2xl border border-outline bg-paper px-4 py-3 text-sm text-ink-soft">
              <span>Last updated</span>
              <span>Feb 2026</span>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="mt-20 grid items-start gap-8 md:grid-cols-[1.2fr_0.8fr]"
        >
          <div className="animate-rise delay-2 space-y-4">
            <p className="eyebrow">About</p>
            <h2 className="text-3xl font-semibold text-ink">
              Writing to make the work feel lighter.
            </h2>
            <p className="leading-relaxed text-muted">
              I am a product designer who ships code, and I keep a habit of
              turning each project into a small system. This blog is where I keep
              the notes I wish I had in the moment: templates, checklists, and
              reflections on pacing.
            </p>
            <p className="leading-relaxed text-muted">
              If you are building software with a small team, you will probably
              find something useful here.
            </p>
          </div>
          <div className="surface shadow-soft animate-rise delay-3 p-6">
            <h3 className="text-lg font-semibold text-ink">Topics I return to</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {topics.map((topic) => (
                <span key={topic} className="chip">
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-20 animate-rise delay-2">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Featured</p>
              <h2 className="text-3xl font-semibold text-ink">Latest writing</h2>
            </div>
            <Link href="/blog" className="text-sm text-accent transition hover:text-ink">
              View all posts
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="surface shadow-soft transition duration-200 hover:-translate-y-1"
              >
                <Link href={`/blog/${post.slug}`} className="block h-full p-6">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-muted">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span>•</span>
                    <span>{post.readingTime}</span>
                  </div>
                  <h3 className="mt-3 text-xl font-semibold text-ink">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
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
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
