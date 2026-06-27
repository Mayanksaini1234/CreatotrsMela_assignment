// Mock data for the Creator Profile page.
// Shape this however your API responds — components only care about the keys used below.

export const creator = {
    name: "Riya Malhotra",
    handle: "@riya.wanders",
    avatarUrl:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
    coverUrl:
        "https://images.unsplash.com/photo-1771387925506-1eacc7523f89?q=80&w=1600&auto=format&fit=crop", location: "Goa, India",
    travelsTo: "APAC · Europe · Middle East",
    niches: ["Travel", "Food", "Slow Living"],
    bio:
        "Slow-travel stories, street-food deep dives, and the kind of golden-hour light that makes people book flights. Four years, 28 countries, one carry-on.",
    yearsActive: 4,
    countriesCovered: 28,
    fitScore: 92,
    fitScoreNote: "Engagement, audience match & reliability",
    verified: true,
};

export const socialPlatforms = [
    {
        id: "instagram",
        label: "Instagram",
        handle: "@riya.wanders",
        followers: 1230000,
        engagementRate: 5.8,
        growth90d: 9.2,
        color: "#C2407A",
    },
    {
        id: "youtube",
        label: "YouTube",
        handle: "Riya Malhotra",
        followers: 340000,
        engagementRate: 7.4,
        growth90d: 14.1,
        color: "#D6483A",
    },
    {
        id: "tiktok",
        label: "TikTok",
        handle: "@riyawanders",
        followers: 680000,
        engagementRate: 9.1,
        growth90d: 21.6,
        color: "#16505A",
    },
];

export const audience = {
    gender: [
        { label: "Female", value: 64 },
        { label: "Male", value: 34 },
        { label: "Other", value: 2 },
    ],
    age: [
        { label: "18–24", value: 28 },
        { label: "25–34", value: 46 },
        { label: "35–44", value: 18 },
        { label: "45+", value: 8 },
    ],
    topLocations: [
        { label: "India", value: 38 },
        { label: "United States", value: 17 },
        { label: "United Kingdom", value: 11 },
        { label: "UAE", value: 9 },
        { label: "Other", value: 25 },
    ],
    interests: [
        "Travel",
        "Food & Dining",
        "Photography",
        "Sustainable Living",
        "Budget Travel",
    ],
};

export const collaborations = [
    {
        id: "sundial",
        brand: "Sundial Coffee Co.",
        mark: "SC",
        type: "Reels series",
        result: "2.1M views · 8.4% engagement",
        year: "2026",
    },
    {
        id: "wanderlust",
        brand: "Wanderlust Luggage",
        mark: "WL",
        type: "Brand ambassador · 6 mo",
        result: "340K avg. reach per post",
        year: "2025",
    },
    {
        id: "terra",
        brand: "Terra Skincare",
        mark: "TS",
        type: "UGC content set",
        result: "6.2% avg. engagement",
        year: "2025",
    },
    {
        id: "brewhouse",
        brand: "Brewhouse Eats",
        mark: "BE",
        type: "Sponsored post",
        result: "412K impressions",
        year: "2025",
    },
    {
        id: "skyline",
        brand: "Skyline Airways",
        mark: "SA",
        type: "Destination campaign",
        result: "1.4M views · 3 deliverables",
        year: "2024",
    },
    {
        id: "northfield",
        brand: "Northfield Gear",
        mark: "NG",
        type: "Product seeding + post",
        result: "9.0% engagement",
        year: "2024",
    },
];

export const performance = [
    { label: "Avg. engagement rate", value: "6.8%", trend: 1.2, id: "eng" },
    { label: "Avg. views per reel", value: "480K", trend: 4.6, id: "views" },
    { label: "Avg. story reach", value: "92K", trend: 2.1, id: "story" },
    { label: "Audience growth (90d)", value: "+12.4%", trend: 12.4, id: "growth" },
    { label: "Posting frequency", value: "5 / week", trend: 0, id: "freq" },
    { label: "Avg. response time", value: "48 hrs", trend: 0, id: "resp" },
];

export const availability = {
    status: "Accepting Q3 campaigns",
    responseTime: "Replies within 24h",
    dealsSince: "24+ brands since 2022",
};