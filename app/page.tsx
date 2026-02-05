import Link from "next/link";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { formatDate, getAllPosts } from "@/lib/posts";

const topics = [
  "产品设计",
  "前端手艺",
  "系统思维",
  "每周复盘",
  "写作仪式",
];

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <div className="min-h-screen text-ink">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-6 pb-16">
        <section className="mt-16 grid items-start gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div className="animate-rise delay-1 space-y-6">
            <p className="eyebrow">个人博客</p>
            <h1 className="text-4xl font-semibold leading-tight text-ink sm:text-5xl">
              港湾手记是一份安静的博客，记录设计、代码，以及让我保持稳健的那些系统。
            </h1>
            <p className="text-lg leading-relaxed text-muted">
              我站在产品设计与开发的交界处写作，分享清单、现场笔记和温和的小实验，
              帮助团队以更少噪音推进。
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/blog" className="btn-primary">
                阅读博客
              </Link>
              <Link href="#about" className="btn-secondary">
                关于我
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted">
              <span className="inline-flex items-center gap-2">
                <span className="status-dot" />
                在一间小工作室工作。
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="status-dot accent" />
                每两周更新一篇。
              </span>
            </div>
          </div>
          <div className="surface shadow-soft animate-rise delay-2 p-6 md:p-8">
            <p className="eyebrow">近况</p>
            <h2 className="mt-2 text-2xl font-semibold text-ink">
              正在探索
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li>为每日优先级设计一块安静的仪表板。</li>
              <li>以小步快跑的方式公开重建这份博客。</li>
              <li>收集能守住专注力的小仪式。</li>
            </ul>
            <div className="mt-6 flex items-center justify-between rounded-2xl border border-outline bg-paper px-4 py-3 text-sm text-ink-soft">
              <span>最近更新</span>
              <span>2026年2月</span>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="mt-20 grid items-start gap-8 md:grid-cols-[1.2fr_0.8fr]"
        >
          <div className="animate-rise delay-2 space-y-4">
            <p className="eyebrow">关于</p>
            <h2 className="text-3xl font-semibold text-ink">
              写作，让工作变得更轻一些。
            </h2>
            <p className="leading-relaxed text-muted">
              我是会写代码的产品设计师，习惯把每个项目做成一个小系统。
              这份博客记录的是我当时最想拥有的笔记：模板、清单，以及对节奏的反思。
            </p>
            <p className="leading-relaxed text-muted">
              如果你在小团队里做软件，或许能在这里找到一些有用的东西。
            </p>
          </div>
          <div className="surface shadow-soft animate-rise delay-3 p-6">
            <h3 className="text-lg font-semibold text-ink">我常写的主题</h3>
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
              <p className="eyebrow">精选</p>
              <h2 className="text-3xl font-semibold text-ink">最新文章</h2>
            </div>
            <Link href="/blog" className="text-sm text-accent transition hover:text-ink">
              查看全部文章
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
