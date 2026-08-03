export const site = {
  firmName: "Colwell Law Office, LLC",
  tagline: "Our Plan. Your Legacy.",
  attorneyName: "Alexander S. Colwell, Esq., CPA",
  attorneyFirstLast: "Alexander S. Colwell",
  email: "alex@colwelllawoffice.com",
  phone: "715-390-0346",
  phoneHref: "tel:+17153900346",
  // TODO: replace with the firm's real street address once provided.
  address: "Wisconsin — address coming soon",
  hours: "Monday – Friday, 9:00 AM – 5:00 PM (evenings by appointment)",
} as const;

export const practiceAreas = [
  {
    slug: "wills",
    name: "Wills",
    short: "Clear, legally sound wills that put your wishes in writing.",
    description:
      "A well-drafted will is the foundation of any estate plan. Attorney Colwell works with you to make sure your assets go where you intend, your family is protected, and your final wishes are carried out without unnecessary court involvement or family disputes.",
  },
  {
    slug: "trusts",
    name: "Trusts",
    short: "Revocable and irrevocable trusts built around your goals.",
    description:
      "Trusts can help your family avoid probate, protect assets, and plan for long-term care or tax efficiency. As both an attorney and a CPA, Alexander brings a rare combination of legal and financial expertise to structuring a trust that actually fits your situation.",
  },
  {
    slug: "power-of-attorney",
    name: "Power of Attorney",
    short: "Financial and healthcare powers of attorney for peace of mind.",
    description:
      "A power of attorney lets you name someone you trust to make financial or medical decisions on your behalf if you're ever unable to make them yourself — avoiding costly and stressful guardianship proceedings for your loved ones.",
  },
] as const;
