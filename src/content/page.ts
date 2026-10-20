/** Page copy, kept separate from layout so it can be edited without touching components. */

export const hero = {
  eyebrow: "Partner program",
  headline: ["Your client needs commercial real estate capital.", "Send it to Forge."],
  lead: "Forge Capital Advisory places commercial real estate deals through direct lender relationships. You bring the client. We screen it in minutes, run the deal, and keep you updated until it funds.",
  primaryCta: { href: "#refer", label: "Get the referral link" },
  secondaryCta: { href: "#how", label: "See how a referral works" },
};

export const whatWePlace = {
  kicker: "What we place",
  title: "Commercial property deals that need the right lender, not just any lender.",
  intro:
    "Forge sits inside Big Think Capital, a national small-business lender with more than a decade of working capital behind it. Real estate is the next thing we’re built for.",
  groups: [
    {
      title: "Transaction types",
      items: [
        "Acquisition",
        "Refinance, including cash-out",
        "Bridge and short-term capital",
        "Properties with existing debt in place",
      ],
    },
    {
      title: "Property use",
      items: [
        "Investment property leased to tenants",
        "Owner-occupied, borrower-operated business",
        "Mixed: borrower occupies a portion, leases the rest",
      ],
    },
    {
      title: "Who refers to Forge",
      items: [
        "ISOs and brokers with business-owner clients",
        "Commercial real estate agents",
        "CPAs, attorneys and advisors",
        "Mortgage and residential loan officers",
      ],
    },
  ],
};

export type Step = { title: string; body: string };

export const howItWorks = {
  kicker: "How a referral works",
  title: "Four steps. You own two of them.",
  intro:
    "We kept the partner side short on purpose. You screen and send. The Forge team does the rest and keeps you in the loop.",
  partnerSteps: [
    {
      title: "Screen it in Forge IQ",
      body: "A few fields on the property and the ask. You get a green, yellow or red in under a minute. No income or rent figures needed up front.",
    },
    {
      title: "Send your client the application",
      body: "One link. Your client completes the Forge real estate application and uploads documents directly.",
    },
  ] satisfies Step[],
  forgeSteps: [
    {
      title: "Forge runs the deal",
      body: "Our real estate team takes it from submission through lender placement and closing. Nothing bounces back to you to chase.",
    },
    {
      title: "You get the updates",
      body: "Your coordinator reaches out on every lender action, and at least weekly even when nothing has moved.",
    },
  ] satisfies Step[],
};

export const forgeIq = {
  kicker: "Forge IQ",
  title: "Know whether a deal has a home before you send it.",
  intro:
    "Forge IQ scores a deal against the lender programs we actually place with. You answer a handful of questions about the property and the request, and you get a straight answer: green, yellow or red. No rent rolls, no financials, no waiting on a lender to call back. You walk into the client conversation knowing where the deal stands.",
  legendTitle: "What the three answers mean",
};

export const referral = {
  kicker: "Refer a deal",
  title: "The Big Think Capital referral link.",
  intro:
    "Every Forge real estate deal starts through the Big Think Capital application. Send this link to your client, or walk through it with them on a call.",
  instruction:
    "Make sure your name goes in the referral source on the application so the deal is tagged to you from day one.",
  assurances: [
    {
      title: "Your client stays your client.",
      body: "Forge works the deal directly with the lender. We never hand your client off to a third-party broker, and we never market to them behind your back.",
    },
    {
      title: "One point of contact.",
      body: "A Forge coordinator is assigned to every referred deal. You always know who to call and where the deal stands.",
    },
    {
      title: "Direct lender relationships only.",
      body: "We place with lenders we work with directly. No super-broker chains, no mystery about where the file went.",
    },
  ],
};

/** Supplied lender-eligibility disclaimer. Keep verbatim. */
export const disclaimer =
  "Forge Capital Advisory is a real estate capital advisory division of Big Think Capital. Program availability, loan terms and eligibility are determined by the placing lender and vary by property, market and borrower. Nothing on this page is a commitment to lend.";
