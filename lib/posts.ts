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
    title: "Building a Calm Dashboard",
    date: "2026-01-18",
    excerpt:
      "Notes from designing a daily dashboard that balances clarity, mood, and momentum.",
    readingTime: "5 min read",
    tags: ["Design", "Rituals"],
    content: [
      "The best dashboards do not shout. They sit quietly, showing the few signals that matter and letting everything else fade into the background.",
      "I start with a single question: what decision do I need to make today? If a metric does not help that decision, it does not earn a spot.",
      "The visual rhythm matters just as much as the data. I use soft dividers, generous spacing, and a warm palette so the page feels like a place to return to, not a report to dread.",
      "Once the core view feels calm, I add a small ritual: one line of intent for the day. It turns the dashboard into a gentle checkpoint instead of a scoreboard.",
    ],
  },
  {
    slug: "notes-on-small-systems",
    title: "Notes on Small Systems",
    date: "2025-12-30",
    excerpt:
      "Why tiny systems beat grand plans, plus the checklist I use to keep them honest.",
    readingTime: "6 min read",
    tags: ["Process", "Systems"],
    content: [
      "Every project gets a system, but the smallest version wins. It has fewer moving parts, fewer failure points, and a clearer path back when things go sideways.",
      "My rule is to start with one trigger, one routine, and one review. The trigger begins the work, the routine keeps it moving, and the review prevents drift.",
      "A small system is allowed to be imperfect. It is there to create momentum, not to be admired. I only add complexity when the routine keeps breaking.",
      "The checklist I use is short: Is it easy to start? Does it tell me what to do next? Does it show me when to stop?",
    ],
  },
  {
    slug: "the-weekly-review-i-can-keep",
    title: "The Weekly Review I Can Keep",
    date: "2025-12-12",
    excerpt:
      "A lightweight review flow that takes 20 minutes and keeps my projects calm.",
    readingTime: "4 min read",
    tags: ["Planning", "Habits"],
    content: [
      "I used to treat weekly reviews like a full audit. The result was a ritual I avoided. Now I keep it to three steps and it finally sticks.",
      "Step one is a sweep: I scan open tasks, open loops, and recent notes. I am only looking for the items that still carry energy.",
      "Step two is the choose: I pick the top three outcomes for the coming week and write them in plain language.",
      "Step three is the close: I archive what is done and write a small thank-you note to myself for the progress made.",
    ],
  },
  {
    slug: "ship-the-first-page",
    title: "Ship the First Page",
    date: "2025-11-20",
    excerpt:
      "The quickest way to a real blog is a single page and a single promise.",
    readingTime: "3 min read",
    tags: ["Writing", "Build"],
    content: [
      "I waited for the perfect system to write. The truth is that the blog only became real once I shipped a single page.",
      "That page held one promise: I will post a note every two weeks, even if it is short. The rhythm mattered more than the polish.",
      "If you are starting, pick a small promise and ship the first page. The rest can grow in public, one note at a time.",
    ],
  },
];

const dateFormatter = new Intl.DateTimeFormat("en-US", {
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
