# Next.js 动态路由 params Promise 报错处理

## 现象
访问 `/blog/[slug]` 时出现错误：

- `Error: Route "/blog/[slug]" used params.slug. params is a Promise and must be unwrapped with await or React.use()`

## 原因
Next.js 16（App Router）中动态路由的 `params` 在运行时被视为 Promise。直接同步访问 `params.slug` 会触发 `sync-dynamic-apis` 报错。

## 处理方法
将使用 `params` 的函数改为 `async`，并 `await` 解包后再读取属性。

示例（`app/blog/[slug]/page.tsx`）：

```tsx
type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  // ...
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  // ...
}
```

## 复查清单
- 任何动态路由页面（`app/**/[param]/page.tsx`）访问 `params` 时必须 `await`。
- 如果 `generateMetadata` 使用 `params`，也需要改为 `async`。

## 关联文件
- `app/blog/[slug]/page.tsx`
