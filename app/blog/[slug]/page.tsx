import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { formatDate, getAllPosts, getPostBySlug } from "@/lib/posts";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return { title: "Post not found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function PostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen text-ink">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 pb-16">
        <div className="mt-12 animate-rise delay-1">
          <Link href="/blog" className="text-sm text-muted transition hover:text-ink">
            Back to blog
          </Link>
        </div>
        <article className="surface shadow-soft mt-6 animate-rise delay-2 p-6 md:p-10">
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>•</span>
            <span>{post.readingTime}</span>
          </div>
          <h1 className="mt-4 text-3xl font-semibold text-ink sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-muted">{post.excerpt}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="chip">
                {tag}
              </span>
            ))}
          </div>
          <div className="post-content mt-8">
            {post.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
