export const categories = [
  {
    id: 'behavioral',
    title: 'Behavioral',
    description: 'Tell me about a time when...',
    icon: 'MessageCircle',
    color: 'primary',
    tip: 'Use the STAR method: Situation, Task, Action, Result.',
  },
  {
    id: 'portfolio',
    title: 'Portfolio Review',
    description: 'Walk me through a project...',
    icon: 'Briefcase',
    color: 'accent',
    tip: 'Structure your answer: Context → Problem → Process → Outcome → Learnings.',
  },
  {
    id: 'design-challenge',
    title: 'Design Challenge',
    description: 'How would you design...',
    icon: 'Lightbulb',
    color: 'warning',
    tip: 'Think aloud. Clarify constraints, explore users, ideate, then prioritize.',
  },
]

export const questions = {
  behavioral: [
    {
      id: 'b1',
      question: "Tell me about a time you had to push back on a stakeholder's request. How did you handle it?",
      followUps: [
        "What was the outcome?",
        "Would you handle it differently today?",
        "How did the stakeholder react initially?",
      ],
      keywords: ['conflict resolution', 'communication', 'stakeholder management'],
    },
    {
      id: 'b2',
      question: "Describe a situation where you had to make a design decision with incomplete data. What did you do?",
      followUps: [
        "How did you validate your decision later?",
        "What risks did you consider?",
        "What would you do differently with more time?",
      ],
      keywords: ['decision making', 'ambiguity', 'risk assessment'],
    },
    {
      id: 'b3',
      question: "Tell me about a time you received critical feedback on your design. How did you respond?",
      followUps: [
        "Did the feedback change your approach?",
        "How do you typically process negative feedback?",
        "Can you give a specific example of how you incorporated it?",
      ],
      keywords: ['feedback', 'growth mindset', 'resilience'],
    },
    {
      id: 'b4',
      question: "Describe a project where you had to collaborate closely with engineers. What challenges did you face?",
      followUps: [
        "How did you bridge the gap between design and engineering?",
        "What tools or processes helped?",
        "What would you improve about that collaboration?",
      ],
      keywords: ['cross-functional', 'collaboration', 'engineering partnership'],
    },
    {
      id: 'b5',
      question: "Tell me about a time you had to balance user needs with business goals. How did you approach it?",
      followUps: [
        "What trade-offs did you make?",
        "How did you measure success?",
        "Were there any surprising outcomes?",
      ],
      keywords: ['business acumen', 'trade-offs', 'user advocacy'],
    },
    {
      id: 'b6',
      question: "Describe a situation where you had to lead a project with tight deadlines. How did you prioritize?",
      followUps: [
        "What did you cut or defer?",
        "How did you communicate priorities to the team?",
        "What was the impact of those trade-offs?",
      ],
      keywords: ['prioritization', 'leadership', 'time management'],
    },
    {
      id: 'b7',
      question: "Tell me about a design that failed or didn't meet expectations. What did you learn?",
      followUps: [
        "How did you identify it wasn't working?",
        "What metrics or signals did you use?",
        "How did you communicate the failure to your team?",
      ],
      keywords: ['failure', 'learning', 'iteration'],
    },
    {
      id: 'b8',
      question: "Describe a time you had to onboard yourself into a completely new domain. How did you ramp up?",
      followUps: [
        "What resources were most helpful?",
        "How long until you felt productive?",
        "What strategies do you use to learn quickly?",
      ],
      keywords: ['adaptability', 'learning', 'domain knowledge'],
    },
  ],

  portfolio: [
    {
      id: 'p1',
      question: "Walk me through a project you're most proud of. What was your role and what impact did it have?",
      followUps: [
        "What was the most challenging part?",
        "How did you measure the impact?",
        "What would you do differently?",
      ],
      keywords: ['impact', 'ownership', 'process'],
    },
    {
      id: 'p2',
      question: "Show me a project where you had to simplify a complex user flow. What was your process?",
      followUps: [
        "How did you identify the complexity?",
        "What research methods did you use?",
        "What was the before and after experience?",
      ],
      keywords: ['simplification', 'user flows', 'complexity'],
    },
    {
      id: 'p3',
      question: "Tell me about a project where user research significantly changed your direction. What happened?",
      followUps: [
        "What research method did you use?",
        "How did you convince the team to pivot?",
        "What was the final outcome?",
      ],
      keywords: ['user research', 'pivot', 'evidence-based design'],
    },
    {
      id: 'p4',
      question: "Walk me through a design system or component library you built or contributed to.",
      followUps: [
        "How did you get adoption from other teams?",
        "What governance model did you use?",
        "How did you handle edge cases?",
      ],
      keywords: ['design systems', 'scalability', 'consistency'],
    },
    {
      id: 'p5',
      question: "Show me a project where you had to design for accessibility. What approach did you take?",
      followUps: [
        "What standards did you follow?",
        "How did you test for accessibility?",
        "What was the biggest challenge?",
      ],
      keywords: ['accessibility', 'inclusive design', 'WCAG'],
    },
    {
      id: 'p6',
      question: "Tell me about a project where you used data to drive design decisions. Walk me through the process.",
      followUps: [
        "What data sources did you use?",
        "How did qualitative and quantitative data complement each other?",
        "Were there any surprising insights?",
      ],
      keywords: ['data-driven', 'analytics', 'insights'],
    },
  ],

  'design-challenge': [
    {
      id: 'd1',
      question: "How would you redesign the onboarding experience for a productivity app that has a 60% drop-off rate in the first week?",
      followUps: [
        "What metrics would you track to measure success?",
        "How would you prioritize which improvements to make first?",
        "What research would you want to do before designing?",
      ],
      keywords: ['onboarding', 'retention', 'user activation'],
    },
    {
      id: 'd2',
      question: "Design a feature that helps remote teams build stronger social connections. Where would you start?",
      followUps: [
        "How would you validate demand for this?",
        "What are the main user segments you'd consider?",
        "How would you measure if connections actually got stronger?",
      ],
      keywords: ['remote work', 'social features', 'engagement'],
    },
    {
      id: 'd3',
      question: "How would you design a dashboard for a SaaS product that serves both power users and beginners?",
      followUps: [
        "How do you handle the tension between simplicity and power?",
        "What progressive disclosure strategies would you use?",
        "How would you test with both user types?",
      ],
      keywords: ['dashboard', 'progressive disclosure', 'user segments'],
    },
    {
      id: 'd4',
      question: "Design a notification system that keeps users informed without being overwhelming. What's your approach?",
      followUps: [
        "How would you categorize and prioritize notifications?",
        "What controls would you give users?",
        "How would you handle notification fatigue?",
      ],
      keywords: ['notifications', 'information architecture', 'user control'],
    },
    {
      id: 'd5',
      question: "How would you design a search experience for an e-commerce platform with millions of products?",
      followUps: [
        "How would you handle zero results?",
        "What role would filters and facets play?",
        "How would you personalize results?",
      ],
      keywords: ['search', 'e-commerce', 'information retrieval'],
    },
    {
      id: 'd6',
      question: "Design an experience that helps elderly users (65+) manage their medications through a mobile app.",
      followUps: [
        "What accessibility considerations are most critical?",
        "How would you handle error prevention?",
        "Who else might be involved in the user journey?",
      ],
      keywords: ['accessibility', 'healthcare', 'elderly users'],
    },
  ],
}

export function getRandomQuestions(categoryId, count = 5) {
  const pool = [...questions[categoryId]]
  const selected = []
  while (selected.length < count && pool.length > 0) {
    const idx = Math.floor(Math.random() * pool.length)
    selected.push(pool.splice(idx, 1)[0])
  }
  return selected
}
