export const site = {
  firmName: "Colwell Law Office, LLC",
  shortName: "Colwell Law",
  tagline: "Our Plan. Your Legacy.",
  attorneyName: "Alexander S. Colwell, Esq., CPA",
  attorneyFirstLast: "Alexander S. Colwell",
  attorneyFirst: "Alex",
  email: "alex@colwelllawoffice.com",
  phone: "715-390-0346",
  phoneHref: "tel:+17153900346",
  serviceArea: "Serving Marshfield, Stevens Point, and Wisconsin Rapids — plus virtual service throughout Wisconsin",
  meetingOptions:
    "We meet the way that works best for you — by video call, over the phone, at your home, or at a mutually convenient location. There's no office to drive to unless you'd like one.",
  hours: "Monday – Friday, 9:00 AM – 5:00 PM (evenings and weekends by appointment)",
  barAdmittedYear: 2017,
  startingPriceFullPlan: "$3,000",
} as const;

// Computed at build time, so this stays accurate without manual updates each year.
export const yearsPracticing = new Date().getFullYear() - site.barAdmittedYear;

export const testimonials = [
  {
    quote:
      "After 40 years of practice as an attorney, I retired. A major part of my practice was estate planning, wills trusts, etc. I had a rather complicated trust issue and with law and tax changes in the 27 years away from the practice, I needed help. I came to know Alex Colwell, an accountant turned lawyer, whose only legal work was estate planning. I was so amazed at his knowledge of trusts, wills, etc. So, I hired him. What a great experience. He is not only a great lawyer in this field, but a great person to deal with. He would come to our home and go over what we needed, how to solve the issues, suggest alternatives to reach our goal etc. As this progressed, he would happily accept phone calls and emails to answer our many questions. And would then bring the instruments over, go over them in detail, and then have us sign them. And compared to so many attorneys, he charges very reasonable fees. I can't recommend him enough.",
    author: "C.W.",
  },
  {
    quote:
      "My wife and I are setting up our end of life paperwork, and after contacting The Colwell Law Office it is a lot easier than we thought. Mr. Colwell is very well informed on procedures and actions to make you think about a lot of things pertaining to items and actions to make your wishes, and hopes, for your people involved with you and that you love, to be as great and fulfilled as you intend.",
    author: "P.C.",
  },
  {
    quote:
      "Very positive and knowledgeable experience. We were looking to set up a trust and asked a personal friend and attorney who he would recommend. He highly recommended Colwell Law Office who he had used. Our meeting couldn't have been better. He explained the differences using a trust over a last will and testament, which we had done many years ago. Long story short he explained the differences and advantages and we set up our trust. He was very detail oriented and made the transition both knowledgeable and easy to accomplish. We would highly recommend him and certainly feel it was a move that would protect our estate and children.",
    author: "C.W.",
  },
  {
    quote:
      "Alex was wonderful to work with... Knowledgeable, professional and was able to explain things in a way I could understand. I would recommend him to anyone seeking assistance with trusts, power of attorney, and will planning.",
    author: "P.W.",
  },
  {
    quote: "Alex was so helpful! We feel he did an excellent job! We recommend him very strongly! Thank you Alex!",
    author: "L.L.",
  },
  {
    quote:
      "Alex Colwell worked with my husband and I assisting to settle my brother's estate. He was kind and compassionate. He came to the hospice house for our meetings saving us time and effort to travel elsewhere to meet. He was available all hours. He took an important document to the courthouse for us an hour away rather than having us drive there when we wanted that time to spend with my brother. All needed documents were professionally prepared and notarized by Alex. We had lots of questions and Alex was patient in making sure our questions were answered. I highly recommend Alex.",
    author: "C.M.",
  },
] as const;

export const trustBuilders = [
  {
    title: "Personalized planning",
    detail: "Your plan is built around your family, not copied from a template.",
  },
  {
    title: "Flat-fee pricing",
    detail: `Full trust-based estate plans start at ${site.startingPriceFullPlan}, quoted upfront — no surprise hourly billing.`,
  },
  {
    title: "Direct attorney access",
    detail: "You work with Alex directly, not a rotating cast of paralegals.",
  },
  {
    title: "Compassionate guidance",
    detail: "No jargon, no judgment — just clear answers to your questions.",
  },
  {
    title: "Wisconsin-focused",
    detail: "Estate planning built around Wisconsin law, for Wisconsin families.",
  },
  {
    title: "Meet your way",
    detail: "Virtual, in your home, or wherever is easiest — statewide.",
  },
] as const;

export type Faq = { q: string; a: string };

// Builds valid FAQPage JSON-LD directly from a page's existing {q, a} array —
// keeps the structured data and the visible accordion text guaranteed in sync.
export function faqPageJsonLd(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export type PracticeArea = {
  slug: string;
  name: string;
  seoTitle: string;
  metaDescription: string;
  heroHeading: string;
  short: string;
  intro: string[];
  benefits: string[];
  faqs: Faq[];
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "estate-plans",
    name: "Estate Plans",
    seoTitle: "Wisconsin Estate Planning Attorney | Comprehensive Estate Plans",
    metaDescription:
      "Work with a Wisconsin estate planning attorney to build a complete plan — trust, will, powers of attorney, and healthcare directives — designed around your family.",
    heroHeading: "A Complete Plan to Protect Everyone You Love",
    short: "A complete plan — trust, will, and powers of attorney — built around your family.",
    intro: [
      "A full estate plan isn't about paperwork. It's about making sure the people who depend on you are protected, no matter what happens.",
      "As your Wisconsin estate planning attorney, Alex builds a complete plan around your specific family, assets, and wishes — typically a revocable living trust, pour-over will, financial power of attorney, and healthcare directive working together — so nothing is left to chance and no one is left guessing.",
    ],
    benefits: [
      "One coordinated plan instead of disconnected documents",
      "Your family avoids probate court whenever possible",
      "Clear instructions for your care if you're ever unable to speak for yourself",
      "Someone you trust is legally empowered to step in immediately if needed",
      "Built to reflect Wisconsin law, not a generic national template",
      `Flat-fee pricing — full trust-based plans start at ${site.startingPriceFullPlan}, quoted upfront`,
    ],
    faqs: [
      {
        q: "What's actually included in a complete estate plan?",
        a: "Most complete plans include a revocable living trust, a pour-over will, a financial power of attorney, and a healthcare power of attorney (with a living will). Depending on your situation, we may also add a special needs trust or additional planning for specific assets.",
      },
      {
        q: "How much does a full estate plan cost?",
        a: `Full, complete trust-based estate plans start at ${site.startingPriceFullPlan}, quoted as a flat fee before any work begins — so there are no surprises. Your exact quote depends on your specific assets and goals, and you'll get a clear number during your free consultation.`,
      },
      {
        q: "How is this different from just getting a will?",
        a: "A will alone still has to go through probate court in Wisconsin. A full estate plan built around a trust is designed to let your family skip that process entirely for trust assets — saving them time, money, and stress during an already difficult period.",
      },
      {
        q: "How long does the process take?",
        a: "Most clients complete their full plan within a few weeks, depending on how quickly we gather information about your assets and finish reviewing drafts together. We'll never rush you, but we also won't let it drag on.",
      },
      {
        q: "Do I need a lot of assets to make this worth it?",
        a: "No. Estate planning isn't just for the wealthy — it's for anyone who wants to make things easier on their family and keep control over their own care and property. Most of our clients are middle-class Wisconsin families, not the ultra-wealthy.",
      },
    ],
  },
  {
    slug: "living-trusts",
    name: "Revocable Living Trusts",
    seoTitle: "Living Trust Attorney Wisconsin | Revocable Trust Planning",
    metaDescription:
      "A Wisconsin revocable living trust attorney helping families avoid probate, keep matters private, and simplify things for loved ones. Flat-fee, personalized planning.",
    heroHeading: "Keep Your Family Out of Probate Court",
    short: "Avoid probate, keep things private, and make things simple for your family.",
    intro: [
      "A revocable living trust is one of the most effective tools a Wisconsin family can use to avoid probate court, keep their affairs private, and make things dramatically easier on loved ones later.",
      "You stay in full control of everything in the trust during your lifetime — you can change it, add to it, or undo it whenever you want. The real benefit shows up later, when your family can settle your estate quickly and privately instead of spending months (or longer) in court.",
    ],
    benefits: [
      "Avoids Wisconsin probate court for assets held in the trust",
      "Keeps your financial affairs private — probate is public record, a trust is not",
      "Makes things faster and simpler for your family when it matters most",
      "Stays fully in your control — revocable means you can change it anytime",
      "Helps protect you and your family if you become incapacitated, not just when you pass away",
      `Flat-fee pricing — full trust-based plans start at ${site.startingPriceFullPlan}, quoted upfront`,
    ],
    faqs: [
      {
        q: "How much does a revocable living trust cost?",
        a: `Full, complete trust-based estate plans start at ${site.startingPriceFullPlan}, as a flat fee quoted upfront — never surprise hourly billing. Your exact quote depends on your assets and goals, and you'll get a clear number during your free consultation.`,
      },
      {
        q: "What's the difference between a revocable and irrevocable trust?",
        a: "A revocable living trust can be changed or canceled by you at any time while you're alive and competent — most estate plans use this type. An irrevocable trust generally can't be changed once created, and is used for more specific goals like asset protection or certain tax or benefits planning.",
      },
      {
        q: "Do I still need a will if I have a trust?",
        a: "Yes — we pair every trust with a simple 'pour-over' will that catches anything accidentally left out of the trust and directs it in. It's a safety net, not your primary plan.",
      },
      {
        q: "Will I have to retitle all my assets into the trust?",
        a: "Yes, and this step — called 'funding' the trust — is essential. A trust that isn't funded properly won't avoid probate. We walk you through exactly what needs to be retitled and help make sure it actually gets done.",
      },
      {
        q: "Is a living trust only for wealthy families?",
        a: "Not at all. Most of our trust clients are everyday Wisconsin families who simply want to avoid putting their loved ones through probate court and keep their affairs private and simple.",
      },
    ],
  },
  {
    slug: "wills",
    name: "Wills",
    seoTitle: "Will Attorney Wisconsin | Last Will and Testament Planning",
    metaDescription:
      "A Wisconsin will attorney helping families put clear, legally sound wishes in writing — for guardianship, assets, and peace of mind.",
    heroHeading: "Put Your Wishes in Writing, Clearly and Simply",
    short: "Clear, legally sound wills that protect your family and your wishes.",
    intro: [
      "A will is where most estate plans start — and for some families, it's exactly what's needed. It lets you name who receives your property, and just as importantly, who will care for your minor children if the unthinkable happens.",
      "Alex will walk you through your options in plain English, help you think through decisions you may not have considered, and make sure your will actually reflects what you want — not just legal boilerplate.",
    ],
    benefits: [
      "You decide exactly who receives your property — not the state of Wisconsin",
      "You name a guardian for your minor children, in writing",
      "Reduces confusion, arguments, and guesswork for your family",
      "Can be paired with a trust for even stronger protection",
      "Written in plain language you actually understand before you sign",
    ],
    faqs: [
      {
        q: "What happens if I die without a will in Wisconsin?",
        a: "Your estate is distributed according to Wisconsin's intestacy laws — a fixed formula that may not match what you actually want, and offers no say in who cares for minor children. A court decides instead of you.",
      },
      {
        q: "Is a will enough, or do I need a trust too?",
        a: "For smaller or simpler estates, a will alone may be enough. For most families who want to avoid probate court entirely, we recommend pairing a will with a revocable living trust. We'll help you figure out which fits your situation during your consultation.",
      },
      {
        q: "Can I update my will later?",
        a: "Yes. Life changes — new children, a move, a divorce, a new asset — and your will should keep up. We recommend reviewing your plan every few years or after any major life event.",
      },
      {
        q: "Does a will avoid probate?",
        a: "No. A will directs how your assets are distributed, but assets left through a will still generally go through Wisconsin probate court. If avoiding probate is a priority, a revocable living trust is the better tool.",
      },
    ],
  },
  {
    slug: "power-of-attorney",
    name: "Powers of Attorney",
    seoTitle: "Power of Attorney Attorney Wisconsin | Financial & Healthcare POA",
    metaDescription:
      "Wisconsin financial and healthcare power of attorney planning — name someone you trust to step in if you're ever unable to make decisions yourself.",
    heroHeading: "Make Sure Someone You Trust Can Step In",
    short: "Name someone you trust to make financial or medical decisions if you can't.",
    intro: [
      "Powers of attorney are the plan for something people rarely like to think about: what happens if you're suddenly unable to manage your own finances or make your own medical decisions.",
      "Without these documents in place, your family may have to petition a Wisconsin court for guardianship just to pay your bills or make a medical decision on your behalf — a process that is slow, public, and expensive. With them, someone you trust can step in immediately.",
    ],
    benefits: [
      "Avoids costly, stressful court guardianship proceedings for your family",
      "Lets you choose exactly who is authorized to act for you",
      "Covers both financial decisions and healthcare decisions",
      "Takes effect exactly when you need it, not before",
      "One of the simplest, most affordable ways to protect your family",
    ],
    faqs: [
      {
        q: "What's the difference between financial and healthcare power of attorney?",
        a: "A financial power of attorney lets your chosen agent manage money, property, and financial decisions. A healthcare power of attorney lets your chosen agent make medical decisions on your behalf if you're unable to. Most clients put both in place together.",
      },
      {
        q: "Who should I name as my agent?",
        a: "Someone you trust completely — a spouse, adult child, sibling, or close friend. We'll talk through the decision with you, including backup choices in case your first choice isn't available.",
      },
      {
        q: "Does this go into effect immediately?",
        a: "You control that. Documents can be written to take effect right away, or only once a doctor confirms you're unable to make decisions yourself (called a 'springing' power of attorney). We'll help you choose what fits your comfort level.",
      },
      {
        q: "What happens if I don't have these documents and become incapacitated?",
        a: "Your family may need to go to court to be appointed as your guardian — a process that takes time, costs money, and is a matter of public record, at a moment when your family can least afford the added stress.",
      },
    ],
  },
  {
    slug: "probate",
    name: "Probate",
    seoTitle: "Probate Attorney Wisconsin | Wisconsin Probate Court Guidance",
    metaDescription:
      "A Wisconsin probate attorney guiding families through settling a loved one's estate — clearly, compassionately, and without unnecessary delay.",
    heroHeading: "Guidance Through Probate, Without the Overwhelm",
    short: "Compassionate, clear guidance through Wisconsin's probate process.",
    intro: [
      "Losing someone you love is hard enough without also trying to figure out Wisconsin's probate court process on your own.",
      "Alex guides families step by step through probate — handling the legal filings and deadlines so you can focus on your family, not on paperwork. If you're not sure whether probate is even necessary in your situation, that's one of the first things we'll help you figure out.",
    ],
    benefits: [
      "Clear explanations of exactly what needs to happen and when",
      "Someone handling the legal filings so you don't have to learn probate court on your own",
      "Straightforward communication during a genuinely difficult time",
      "Help identifying whether formal probate is even required in your case",
      "A path toward closing the estate as efficiently as Wisconsin law allows",
    ],
    faqs: [
      {
        q: "Do I have to go through probate?",
        a: "It depends on how the person's assets were titled and how much the estate is worth. Wisconsin offers simplified procedures for smaller estates. We can review your situation and tell you honestly whether formal probate is required.",
      },
      {
        q: "How long does probate take in Wisconsin?",
        a: "It varies by county and the complexity of the estate, but Wisconsin probate commonly takes several months to over a year to fully close. We'll give you a realistic timeline once we understand the specifics of the estate.",
      },
      {
        q: "What does probate cost?",
        a: "Costs generally include court filing fees and attorney fees, and can add up — which is exactly why many families choose to set up a trust in advance to avoid probate for the next generation. We offer transparent, flat-fee pricing for probate whenever possible.",
      },
      {
        q: "I'm named as personal representative (executor) — what do I actually have to do?",
        a: "Generally: locate and protect assets, notify creditors and heirs, pay valid debts and taxes, and eventually distribute what's left according to the will or Wisconsin law. We walk you through each step so you're never guessing.",
      },
    ],
  },
  {
    slug: "trust-administration",
    name: "Trust Administration",
    seoTitle: "Trust Administration Attorney Wisconsin | Successor Trustee Guidance",
    metaDescription:
      "Guidance for Wisconsin successor trustees administering a family trust after a loved one's death or incapacity — clear steps, no guesswork.",
    heroHeading: "Trustee Guidance, Every Step of the Way",
    short: "Clear guidance for trustees settling a loved one's trust.",
    intro: [
      "Being named a successor trustee is an honor — and often a responsibility no one fully prepares you for. There are legal duties, notices, tax considerations, and distributions to manage, usually while you're also grieving.",
      "Alex works directly with successor trustees to walk through each step correctly, so you can fulfill your duties confidently without feeling like you're on your own.",
    ],
    benefits: [
      "Clear, step-by-step guidance instead of confusing legal instructions",
      "Help meeting Wisconsin's notice and reporting requirements to beneficiaries",
      "Support making and documenting distributions correctly",
      "A knowledgeable second opinion when questions come up",
      "One direct point of contact instead of a revolving cast of staff",
    ],
    faqs: [
      {
        q: "What does a successor trustee actually have to do?",
        a: "Generally: notify beneficiaries as required by law, gather and manage trust assets, pay valid debts and expenses, and eventually distribute assets according to the trust's terms. We help you handle each step properly.",
      },
      {
        q: "Is trust administration the same as probate?",
        a: "No — that's the point of a properly funded trust. Trust administration happens privately, outside of probate court, which is usually faster and far less stressful for everyone involved.",
      },
      {
        q: "Am I personally liable as a trustee?",
        a: "Trustees have real legal duties and can be held responsible for mistakes, which is exactly why getting guidance early matters. Proper documentation and following the trust's terms carefully helps protect you.",
      },
      {
        q: "How long does trust administration usually take?",
        a: "It depends on the complexity of the trust and its assets, but it's typically far faster than a Wisconsin probate proceeding — often a matter of months rather than a year or more.",
      },
    ],
  },
  {
    slug: "special-needs-planning",
    name: "Special Needs Planning",
    seoTitle: "Special Needs Trust Attorney Wisconsin | Special Needs Planning",
    metaDescription:
      "A Wisconsin special needs trust attorney helping families protect a loved one with a disability without jeopardizing their government benefits.",
    heroHeading: "Protect Your Loved One Without Losing Their Benefits",
    short: "Provide for a loved one with a disability without risking their benefits.",
    intro: [
      "If you have a child or family member with a disability, ordinary estate planning can actually work against them — an inheritance received directly can disqualify them from vital government benefits like Medicaid or SSI.",
      "A special needs trust lets you leave money or property for their benefit — for comfort, care, and quality of life — without putting their eligibility for public benefits at risk.",
    ],
    benefits: [
      "Preserves eligibility for Medicaid, SSI, and other government benefits",
      "Provides funds for care, comfort, and quality of life beyond what benefits cover",
      "Names a trustee you trust to manage funds responsibly on their behalf",
      "Plans for what happens after you're no longer able to be the caregiver",
      "Coordinates with other family members who may also want to contribute",
    ],
    faqs: [
      {
        q: "What is a special needs trust?",
        a: "It's a trust specifically designed to hold assets for the benefit of a person with a disability without counting those assets against the income and resource limits for government benefits like Medicaid or Supplemental Security Income (SSI).",
      },
      {
        q: "Can I just leave money to my child in my will instead?",
        a: "This is one of the most common and costly mistakes in special needs planning. A direct inheritance can disqualify your loved one from benefits they depend on. A properly drafted special needs trust avoids this problem entirely.",
      },
      {
        q: "Who should I choose as trustee?",
        a: "Someone responsible and willing to manage funds according to the trust's terms and your loved one's needs — a family member, trusted friend, or professional trustee. We'll help you think through the right fit.",
      },
      {
        q: "What if grandparents or other family members want to leave money too?",
        a: "We can help coordinate so that other family members direct their gifts into the special needs trust as well, instead of accidentally leaving assets directly to your loved one.",
      },
    ],
  },
];

export function getPracticeArea(slug: string) {
  return practiceAreas.find((a) => a.slug === slug);
}
