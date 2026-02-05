export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  readingTime: string;
  tags: string[];
  content: string[];
};

const posts: Post[] = [
  {
    slug: "building-a-calm-dashboard",
    title: "打造安静的仪表板",
    date: "2026-01-18",
    excerpt:
      "关于设计每日仪表板的笔记：在清晰度、情绪与节奏之间取得平衡。",
    readingTime: "5 分钟阅读",
    tags: ["设计", "仪式"],
    content: [
      "最好的仪表板不会大声喧哗。它安静地呈现真正重要的信号，让其他信息自然退到背景。",
      "我从一个问题开始：今天我需要做什么决策？如果某个指标不能支撑这个决策，就不值得占位置。",
      "视觉节奏和数据同样重要。我用柔和的分隔、宽松的留白和温暖的色调，让页面像一个愿意回来的地方，而不是令人紧张的报表。",
      "当核心视图足够安静，我会加一个小仪式：写下一句今日意图。这样仪表板更像温柔的检查点，而不是比分牌。",
    ],
  },
  {
    slug: "notes-on-small-systems",
    title: "小系统笔记",
    date: "2025-12-30",
    excerpt:
      "为什么小系统胜过宏大计划，以及我用来保持诚实的检查清单。",
    readingTime: "6 分钟阅读",
    tags: ["流程", "系统"],
    content: [
      "每个项目都需要系统，但越小越好。它部件更少、失败点更少，偏航时也更容易拉回。",
      "我的规则是从一个触发、一个例行和一次复盘开始。触发启动工作，例行保证推进，复盘防止漂移。",
      "小系统允许不完美。它的目的在于产生动能，而不是被欣赏。只有当例行不断破裂时，我才会加复杂度。",
      "我的清单很短：是否容易开始？是否告诉我下一步做什么？是否提示我什么时候可以停？",
    ],
  },
  {
    slug: "the-weekly-review-i-can-keep",
    title: "我能坚持的每周复盘",
    date: "2025-12-12",
    excerpt:
      "一个只需 20 分钟的轻量复盘流程，让项目保持平静。",
    readingTime: "4 分钟阅读",
    tags: ["规划", "习惯"],
    content: [
      "我曾把每周复盘当成全面审计，结果变成一个我总想躲开的仪式。现在我只保留三步，终于坚持下来了。",
      "第一步是清扫：浏览未完成事项、未闭环的线索和最近的笔记。我只找仍然有能量的条目。",
      "第二步是选择：挑出下周最重要的三个结果，用直白的句子写下来。",
      "第三步是收口：归档已完成的事项，并给自己写一句感谢进展的小纸条。",
    ],
  },
  {
    slug: "ship-the-first-page",
    title: "先发布第一页",
    date: "2025-11-20",
    excerpt:
      "让博客真正开始的最快方式，是一页内容和一个承诺。",
    readingTime: "3 分钟阅读",
    tags: ["写作", "搭建"],
    content: [
      "我一直等一个完美系统再开始写作。事实是，只有当我发布了第一页，博客才真的存在。",
      "那一页包含一个承诺：我每两周写一条，即使很短。节奏比打磨更重要。",
      "如果你刚开始，就挑一个小承诺，发布第一页。其余的可以在公开的过程中慢慢长出来，一篇一篇地积累。",
    ],
  },
];

const dateFormatter = new Intl.DateTimeFormat("zh-CN", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

const toTimestamp = (date: string) =>
  new Date(`${date}T00:00:00Z`).getTime();

export const getAllPosts = () =>
  [...posts].sort((a, b) => toTimestamp(b.date) - toTimestamp(a.date));

export const getPostBySlug = (slug: string) =>
  posts.find((post) => post.slug === slug);

export const formatDate = (date: string) =>
  dateFormatter.format(new Date(`${date}T00:00:00Z`));
