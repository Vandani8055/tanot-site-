// data/site.js — ALL website content lives here.
// Client wants to change text? Edit this file only. No need to touch components.

export const site = {
  name: "Tanot Solutions",
  url: "https://tanotsolutions.com",
  email: "info@tanotsolutions.com",
  location: "Jodhpur, Rajasthan, India",
  bookingUrl: "#contact", // TODO: replace with Calendly / booking link
  clutchUrl: "https://clutch.co/", // TODO: real Clutch profile
  title: "Best SEO Services for Google, AI Search & Revenue Growth | Tanot Solutions",
  description:
    "Tanot Solutions helps your business rank higher on Google and get recommended by ChatGPT, Perplexity and Google AI Overviews. Technical SEO, content, link building and local SEO.",
};

export const navLinks = [
  { label: "Case Studies", href: "#case-study" },
  { label: "Reviews", href: "#reviews" },
  {
    label: "Services",
    href: "#services",
    children: [
      { label: "Link Building", href: "#services" },
      { label: "Technical SEO", href: "#services" },
      { label: "AI SEO", href: "#services" },
      { label: "Local SEO", href: "#services" },
      { label: "SaaS SEO", href: "#services" },
      { label: "Content Marketing", href: "#services" },
    ],
  },
  {
    label: "Company",
    href: "#about",
    children: [
      { label: "About us", href: "#about" },
      { label: "Our team", href: "#team" },
      { label: "Awards", href: "#awards" },
    ],
  },
  { label: "Blog", href: "#blog" },
];

export const hero = {
  titleStrong: "Best SEO Services",
  titleRest: "for Google, AI Search, and Revenue Growth",
  text: "Tanot Solutions helps your business rank higher on Google and get recommended by AI tools like ChatGPT, Perplexity, and Google AI Overviews. From technical SEO and content marketing to high-authority link building and local SEO, we handle everything needed to bring you more qualified leads and measurable revenue growth.",
};

export const stats = [
  { to: 150, suffix: "+", label: "Clients served" },
  { to: 98, suffix: "%", label: "Client satisfaction" },
  { to: 11, suffix: "+", label: "Years of SEO experience" },
  { to: 2, suffix: "+", label: "Years average client retention" },
];

export const clients = [
  { name: "Enhancv", logo: "" },
  { name: "LearnTastic", logo: "" },
  { name: "Kommo", logo: "" },
  { name: "SendPulse", logo: "" },
  { name: "engagebay", logo: "" },
  { name: "FreshLearn", logo: "" },
  { name: "StationX", logo: "" },
  { name: "LeadSync", logo: "" },
  { name: "smoothstack", logo: "" },
  { name: "gravyty", logo: "" },
  { name: "beamjobs", logo: "" },
  { name: "TraceFuse", logo: "" },
  { name: "Movinnza", logo: "" },
  { name: "American Health Care Academy", logo: "" },
  { name: "Flux Engine", logo: "" },
  { name: "Ultahost", logo: "" },
];
// logo: put files in public/images/clients and use e.g. "/images/clients/kommo.svg"

export const reviews = {
  featured: {
    name: "Lisa Warren",
    role: "Content Manager, HR Company",
    videoId: "dQw4w9WgXcQ", // YouTube video ID (public demo)
    poster: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1280&h=720&fit=crop",
    quote: "",
  },
  list: [
    {
      quote:
        "After we started link building with Tanot Solutions, they helped our CRM's high-converting product page rank higher with an impressive 80% increase in traffic and an equally exceptional 80% increase in the total number of sign-ups every day.",
      name: "Sandeep Das",
      role: "Marketing Manager, CRM SaaS Company",
    },
    {
      quote:
        "We've been impressed by their ability to consistently build high-quality backlinks, which are very challenging to achieve. We work with highly reputed brands, where quality guidelines are stringent and difficult for many agencies to meet. However, Tanot Solutions consistently meets these standards.",
      name: "Michael Dunlop",
      role: "Director of LinkBuilder.io",
    },
    {
      quote:
        "Since we started working with Tanot Solutions on our link-building efforts, we've seen steady increases in our organic traffic MoM over the past 6 months. I can also honestly say that Renu and the team are very responsive and punctual, something I really appreciate from our partners.",
      name: "Marko Spasic",
      role: "Marketing Manager, Hosting company",
    },
  ],
};

// NOTE: only "Link Building" copy came from the current site.
// The other tabs are placeholder text — client should review.
export const services = [
  {
    id: "link-building",
    title: "Link Building",
    text: "We earn high-quality, white-hat backlinks from trusted websites in your industry. These links show Google your business is credible, helping you rank higher and stay there.",
    points: [
      "High-authority guest posts",
      "Contextual niche edit links",
      "Industry-relevant websites only",
      "Site approval before placement",
      "White-label agency solutions",
      "Pay for live links",
    ],
    cta: "Get link building plan",
  },
  {
    id: "technical-seo",
    title: "Technical SEO",
    text: "We fix the foundations so search engines can crawl, understand and rank your site.",
    points: ["Site speed and Core Web Vitals", "Crawl and index fixes", "Schema markup", "Site architecture", "Migration support", "Monthly technical audits"],
    cta: "Get technical audit",
  },
  {
    id: "ai-seo",
    title: "AI SEO",
    text: "We make your brand easy for ChatGPT, Perplexity and Google AI Overviews to find, trust and cite.",
    points: ["AI citation tracking", "Entity and brand optimisation", "Answer-ready content", "Structured data", "Competitor AI visibility", "Monthly AI reports"],
    cta: "Get AI visibility plan",
  },
  {
    id: "local-seo",
    title: "Local SEO",
    text: "We help nearby customers find you on Google Maps and in local search results.",
    points: ["Google Business Profile", "Local citations", "Review strategy", "Location pages", "Local link building", "Map pack tracking"],
    cta: "Get local SEO plan",
  },
  {
    id: "saas-seo",
    title: "SaaS SEO",
    text: "We turn organic search into a steady source of trials, demos and sign-ups for software products.",
    points: ["Product-led content", "Comparison and alternative pages", "Feature page optimisation", "Integration pages", "Link building for SaaS", "Sign-up tracking"],
    cta: "Get SaaS SEO plan",
  },
  {
    id: "content",
    title: "Content Marketing Services",
    text: "We create content that earns rankings, links and trust from the people you want to reach.",
    points: ["Keyword and topic research", "Expert-written articles", "Content refreshes", "Editorial calendar", "On-page optimisation", "Content performance reports"],
    cta: "Get content plan",
  },
];

export const caseStudy = {
  title: "How an HR company grew from zero to 6,200 monthly visitors in 8 months",
  text: "Starting from a domain with almost no authority, we built a steady flow of niche-relevant editorial links with required technical SEO and content changes, and the traffic climbed from zero to 6,200 visitors in 8 months.",
  metrics: [
    { label: "Monthly visitors", to: 6200, suffix: "", decimals: 0 },
    { label: "AI visibility (citations)", to: 1.3, suffix: "K", decimals: 1 },
    { label: "Ranking keywords", to: 1.6, suffix: "K", decimals: 1 },
  ],
  // Points for the growth chart (monthly visitors, simplified)
  chart: [0, 120, 260, 520, 900, 1900, 3600, 6200],
};

export const whyUs = {
  title: "A growth partner, not another SEO agency.",
  text: "Clients describe working with us as “less like a vendor, more like a partner.” Here's why they stay for 2+ years on average.",
  items: [
    { title: "Results, not vanity metrics", text: "Every campaign is tied to rankings, AI visibility, leads, sales and revenue." },
    { title: "Performance-based pricing", text: "No upfront payment. Pay only for verified deliverables." },
    { title: "Enterprise-grade quality", text: "Links and strategy that meet global brand standards, at scale." },
    { title: "100% transparent process", text: "You approve everything including content, links, technical changes before we go ahead." },
    { title: "AI-first SEO", text: "Visible in AI Overviews, ChatGPT and Perplexity, not just Google." },
    { title: "An extension of your team", text: "Dedicated specialists, clear communication, genuine relationship." },
  ],
};

export const awards = [
  { title: "Rajasthan Women Leaders Award", image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop" },
  { title: "Most Trusted Global SEO Solutions Provider", image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=400&h=300&fit=crop" },
  { title: "Best ROI Focused SEO Agency 2026", image: "https://images.unsplash.com/photo-1563734875956-3c5cc7212b27?w=400&h=300&fit=crop" },
  { title: "Sardar Patel Unity Awards 2026", image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=400&h=300&fit=crop" },
  { title: "Clutch Awards", image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=400&h=300&fit=crop" },
  { title: "Best ROI Focused SEO Agency 2026 (Trophy)", image: "https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=400&h=300&fit=crop" },
];

export const founder = {
  name: "Renu Sharma",
  role: "Founder & Head of SEO Strategy",
  image: "https://img.magnific.com/free-photo/business-concept-portrait-confident-young-businesswoman-keeping-arms-crossed-looking-camera-w_1258-104422.jpg?semt=ais_hybrid&w=740&q=80",
  title: "Hi, I'm Renu. I built Tanot Solutions to make SEO accountable.",
  paragraphs: [
    "For over 11 years, I've helped brands grow through search, from early-stage startups to global enterprises. Along the way, I saw how easily businesses lose trust in SEO: vague reports, guaranteed #1 rankings that never happen, cheap spammy links that lead to penalties, and agencies that disappear once the contract is signed.",
    "I founded Tanot Solutions in 2020 to change that, with honest strategy, ethical practices, and complete transparency at every step.",
  ],
  linkedin: "https://www.linkedin.com/", // TODO
};

export const team = [
  { name: "Vikas Sharma", role: "Co-Founder and Head of Operations", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" },
  { name: "Pradeep", role: "Content Manager", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face" },
  { name: "Ravina Jangid", role: "Link Building Expert", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face" },
  { name: "Aniket Mukherjee", role: "Link Building Expert", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face" },
];

export const featuredOn = ["Entrepreneur", "HubSpot", "Forbes", "GoDaddy", "The Tribune"];

// Only the first answer came from the current site. Others are placeholders.
export const faqs = [
  {
    q: "How will working with Tanot Solutions help grow my business?",
    a: "We focus on what actually moves your business forward: qualified traffic, leads, and revenue, not just rankings. From technical SEO and content strategy to high-authority link building, every campaign is built around your goals and designed to attract real buyers. You'll always know what we're doing, why we're doing it, and how it's contributing to your growth.",
  },
  {
    q: "Are your link building services safe and Google-friendly?",
    a: "Yes. We only use white-hat methods: real editorial placements on relevant, approved websites. You see and approve every site before a link goes live.",
  },
  {
    q: "How long does SEO take to show results?",
    a: "Most sites see early movement in 3 to 4 months, with stronger gains from months 6 to 8. Timing depends on your starting authority, competition and how fast changes are approved.",
  },
  {
    q: "Do you offer complete SEO services or only link building?",
    a: "Both. You can pick one service or combine technical SEO, AI SEO, content, local SEO and link building.",
  },
  {
    q: "Will I have visibility into the work being done?",
    a: "Yes. You approve content, links and technical changes before we go ahead, and you get clear reports on what was done and what it achieved.",
  },
  {
    q: "Do you work with agencies on a white-label basis?",
    a: "Yes. We deliver under your brand with reports and communication that fit your agency's workflow.",
  },
];

export const posts = [
  { image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop", tag: "SEO", title: "11 Best GEO Agencies Helping B2B Brands Win AI Search", author: "Renu Sharma", date: "2026-10-16", href: "#" },
  { image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop", tag: "Link building", title: "Link Building For Startups: How To Get Quality Backlinks On A Budget", author: "Renu Sharma", date: "2026-10-06", href: "#" },
  { image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=500&fit=crop", tag: "SEO", title: "13 White Hat SEO Techniques: How To Rank Higher On Google & AI Search", author: "Renu Sharma", date: "2026-10-02", href: "#" },
];

export const footer = {
  about: "We are an SEO and link-building agency that helps global brands 5X their ROI through strategic SEO and high-quality backlink strategies.",
  columns: [
    { title: "Company", links: ["Home", "About Us", "Blog", "Case Studies", "Client Reviews", "Contact"] },
    { title: "Services", links: ["Link Building"] },
    { title: "Resources", links: ["Choose an Agency", "Link Building Tools", "Contextual Links", "Free Backlinks Guide", "Buy Quality Backlinks", "SaaS Link Building"] },
  ],
};
