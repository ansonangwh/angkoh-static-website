export const url = (path = '') =>
  import.meta.env.BASE_URL.replace(/\/$/, '') + '/' + path.replace(/^\/+/, '');

export const navigation = [
  { label: 'About', path: 'about-us/' },
  { label: 'Practice Areas', path: 'practice-areas/' },
  { label: 'People', path: 'our-partners/' },
  { label: 'News & Events', path: 'news-events/' },
];

export const practices = [
  {
    slug: 'business-disputes',
    name: 'Business disputes',
    summary: 'Organise the facts, identify what is at stake, and prepare for a conversation about your options.',
    examples: ['Unpaid invoices and disputed obligations', 'Disagreements over commercial agreements', 'Disputes between business owners'],
    prepare: 'Gather the relevant agreements, correspondence, and a short timeline. Flag any deadlines in letters or court documents.',
  },
  {
    slug: 'property-transactions',
    name: 'Property transactions',
    summary: 'Get your documents and questions in order before buying, selling, or leasing property.',
    examples: ['Buying or selling a property', 'Reviewing lease terms', 'Planning a property transaction around financing and completion dates'],
    prepare: 'Bring any offer, draft contract, financing documents, and a list of the dates you are working towards.',
  },
  {
    slug: 'commercial-agreements',
    name: 'Commercial agreements',
    summary: 'Identify the obligations, decisions, and open questions behind a proposed agreement.',
    examples: ['Supply and services agreements', 'New business arrangements', 'Changes to existing contracts'],
    prepare: 'Write down each party’s responsibilities and the commercial terms already agreed. Bring any draft and mark clauses that need discussion.',
  },
];

export const updates = [
  {
    kind: 'news',
    slug: 'prepare-for-a-first-meeting',
    title: 'What to bring to a first meeting',
    summary: 'A short checklist for organising documents, dates, and questions before you meet a lawyer.',
    paragraphs: [
      'Write a timeline in date order. Add an entry for each important conversation, letter, or document, and mark any dates you are unsure about.',
      'Collect the original documents and put related emails or messages together. Keep the full conversation so the reader can see the context.',
      'List what you want to find out at the meeting. Mention any upcoming deadline at the start so it can be discussed early.',
    ],
  },
  {
    kind: 'news',
    slug: 'planning-a-contract-review',
    title: 'Planning a contract review',
    summary: 'Three things to prepare before asking for feedback on a draft agreement.',
    paragraphs: [
      'Gather the latest draft and any schedules it mentions. If there are several versions, mark the one everyone should review.',
      'Write down the commercial points already agreed and the remaining decisions. Flag clauses that affect delivery, payment, or cancellation.',
      'Share any date the parties are working towards so the review can be planned around it.',
    ],
  },
  {
    kind: 'event',
    slug: 'small-business-contract-workshop',
    image: { file: 'workshop-table.webp', alt: 'Hands taking notes on worksheets around a meeting table' },
    title: 'Small business contract workshop',
    summary: 'A sample session on turning a business agreement into a clear list of obligations and deadlines.',
    paragraphs: [
      'This is an example event listing. Registration and attendance are unavailable for this sample.',
      'The proposed session uses a fictional supplier agreement to practise identifying deliverables, payment dates, and decisions that need clarification.',
    ],
  },
  {
    kind: 'event',
    slug: 'property-purchase-briefing',
    title: 'Preparing for a property purchase',
    summary: 'A sample briefing on organising purchase documents, financing questions, and key dates.',
    paragraphs: [
      'This is an example event listing. Registration and attendance are unavailable for this sample.',
      'Designed for first-time buyers, this proposed briefing follows a fictional purchase from the initial offer to completion.',
      'Participants would work through a document checklist and prepare questions to discuss with their lawyer and financing provider.',
    ],
  },
  {
    kind: 'event',
    slug: 'business-dispute-roundtable',
    title: 'Business dispute roundtable',
    summary: 'A sample discussion on putting together the facts when a commercial relationship breaks down.',
    paragraphs: [
      'This is an example event listing. Registration and attendance are unavailable for this sample.',
      'The proposed roundtable uses fictional scenarios involving unpaid invoices and disagreements over delivery.',
      'The discussion would focus on organising correspondence, building a timeline, and identifying questions for a first legal consultation.',
    ],
  },
  {
    kind: 'event',
    slug: 'commercial-lease-clinic',
    title: 'Commercial lease preparation clinic',
    summary: 'A sample session for business owners preparing to discuss a new lease or renewal.',
    paragraphs: [
      'This is an example event listing. Registration and attendance are unavailable for this sample.',
      'This proposed clinic uses a fictional shop tenancy to explore the information a business owner can gather before a lease review.',
      'Participants would prepare a checklist covering proposed use, fit-out plans, key dates, and terms that need further discussion.',
    ],
  },
];
