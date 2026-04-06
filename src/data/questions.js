export const categories = {
  behavioral: {
    id: 'behavioral',
    title: 'Behavioral',
    description: 'Tell me about a time when...',
    icon: 'MessageCircle',
    color: 'primary',
    tip: 'Use the STAR method: Situation, Task, Action, Result.',
  },
  portfolio: {
    id: 'portfolio',
    title: 'Portfolio Review',
    description: 'Walk me through a project...',
    icon: 'Briefcase',
    color: 'accent',
    tip: 'Structure your answer: Context → Problem → Process → Outcome → Learnings.',
  },
  'design-challenge': {
    id: 'design-challenge',
    title: 'Design Challenge',
    description: 'How would you design...',
    icon: 'Lightbulb',
    color: 'warning',
    tip: 'Think aloud. Clarify constraints, explore users, ideate, then prioritize.',
  },
  technical: {
    id: 'technical',
    title: 'Technical',
    description: 'Explain how you would implement...',
    icon: 'Code',
    color: 'primary',
    tip: 'Think out loud. Clarify requirements, discuss trade-offs, consider edge cases.',
  },
  'system-design': {
    id: 'system-design',
    title: 'System Design',
    description: 'Design the architecture for...',
    icon: 'Network',
    color: 'accent',
    tip: 'Start with requirements, estimate scale, design components, then discuss trade-offs.',
  },
  'case-study': {
    id: 'case-study',
    title: 'Case Study',
    description: 'How would you approach this product problem...',
    icon: 'FileText',
    color: 'accent',
    tip: 'Structure: understand the problem → define metrics → brainstorm solutions → prioritize → execute plan.',
  },
  strategy: {
    id: 'strategy',
    title: 'Strategy',
    description: 'What would your strategy be for...',
    icon: 'Compass',
    color: 'warning',
    tip: 'Think about market, users, business model, and competitive landscape.',
  },
}

export function getCategoriesForRole(roleCategories) {
  return roleCategories.map((id) => categories[id]).filter(Boolean)
}

// ─── QUESTIONS BY ROLE AND CATEGORY ───

const questions = {
  // ─── PRODUCT DESIGNER ───
  'product-designer': {
    behavioral: [
      { id: 'pd-b1', question: "Tell me about a time you had to push back on a stakeholder's request. How did you handle it?", followUps: ["What was the outcome?", "Would you handle it differently today?", "How did the stakeholder react initially?"], keywords: ['conflict resolution', 'communication', 'stakeholder management'] },
      { id: 'pd-b2', question: "Describe a situation where you had to make a design decision with incomplete data. What did you do?", followUps: ["How did you validate your decision later?", "What risks did you consider?", "What would you do differently with more time?"], keywords: ['decision making', 'ambiguity', 'risk assessment'] },
      { id: 'pd-b3', question: "Tell me about a time you received critical feedback on your design. How did you respond?", followUps: ["Did the feedback change your approach?", "How do you typically process negative feedback?", "Can you give a specific example of how you incorporated it?"], keywords: ['feedback', 'growth mindset', 'resilience'] },
      { id: 'pd-b4', question: "Describe a project where you had to collaborate closely with engineers. What challenges did you face?", followUps: ["How did you bridge the gap between design and engineering?", "What tools or processes helped?", "What would you improve about that collaboration?"], keywords: ['cross-functional', 'collaboration', 'engineering partnership'] },
      { id: 'pd-b5', question: "Tell me about a time you had to balance user needs with business goals. How did you approach it?", followUps: ["What trade-offs did you make?", "How did you measure success?", "Were there any surprising outcomes?"], keywords: ['business acumen', 'trade-offs', 'user advocacy'] },
      { id: 'pd-b6', question: "Describe a situation where you had to lead a project with tight deadlines. How did you prioritize?", followUps: ["What did you cut or defer?", "How did you communicate priorities to the team?", "What was the impact of those trade-offs?"], keywords: ['prioritization', 'leadership', 'time management'] },
      { id: 'pd-b7', question: "Tell me about a design that failed or didn't meet expectations. What did you learn?", followUps: ["How did you identify it wasn't working?", "What metrics or signals did you use?", "How did you communicate the failure to your team?"], keywords: ['failure', 'learning', 'iteration'] },
      { id: 'pd-b8', question: "Describe a time you had to onboard yourself into a completely new domain. How did you ramp up?", followUps: ["What resources were most helpful?", "How long until you felt productive?", "What strategies do you use to learn quickly?"], keywords: ['adaptability', 'learning', 'domain knowledge'] },
    ],
    portfolio: [
      { id: 'pd-p1', question: "Walk me through a project you're most proud of. What was your role and what impact did it have?", followUps: ["What was the most challenging part?", "How did you measure the impact?", "What would you do differently?"], keywords: ['impact', 'ownership', 'process'] },
      { id: 'pd-p2', question: "Show me a project where you had to simplify a complex user flow. What was your process?", followUps: ["How did you identify the complexity?", "What research methods did you use?", "What was the before and after experience?"], keywords: ['simplification', 'user flows', 'complexity'] },
      { id: 'pd-p3', question: "Tell me about a project where user research significantly changed your direction. What happened?", followUps: ["What research method did you use?", "How did you convince the team to pivot?", "What was the final outcome?"], keywords: ['user research', 'pivot', 'evidence-based design'] },
      { id: 'pd-p4', question: "Walk me through a design system or component library you built or contributed to.", followUps: ["How did you get adoption from other teams?", "What governance model did you use?", "How did you handle edge cases?"], keywords: ['design systems', 'scalability', 'consistency'] },
      { id: 'pd-p5', question: "Show me a project where you had to design for accessibility. What approach did you take?", followUps: ["What standards did you follow?", "How did you test for accessibility?", "What was the biggest challenge?"], keywords: ['accessibility', 'inclusive design', 'WCAG'] },
      { id: 'pd-p6', question: "Tell me about a project where you used data to drive design decisions. Walk me through the process.", followUps: ["What data sources did you use?", "How did qualitative and quantitative data complement each other?", "Were there any surprising insights?"], keywords: ['data-driven', 'analytics', 'insights'] },
    ],
    'design-challenge': [
      { id: 'pd-d1', question: "How would you redesign the onboarding experience for a productivity app that has a 60% drop-off rate in the first week?", followUps: ["What metrics would you track to measure success?", "How would you prioritize which improvements to make first?", "What research would you want to do before designing?"], keywords: ['onboarding', 'retention', 'user activation'] },
      { id: 'pd-d2', question: "Design a feature that helps remote teams build stronger social connections. Where would you start?", followUps: ["How would you validate demand for this?", "What are the main user segments you'd consider?", "How would you measure if connections actually got stronger?"], keywords: ['remote work', 'social features', 'engagement'] },
      { id: 'pd-d3', question: "How would you design a dashboard for a SaaS product that serves both power users and beginners?", followUps: ["How do you handle the tension between simplicity and power?", "What progressive disclosure strategies would you use?", "How would you test with both user types?"], keywords: ['dashboard', 'progressive disclosure', 'user segments'] },
      { id: 'pd-d4', question: "Design a notification system that keeps users informed without being overwhelming. What's your approach?", followUps: ["How would you categorize and prioritize notifications?", "What controls would you give users?", "How would you handle notification fatigue?"], keywords: ['notifications', 'information architecture', 'user control'] },
      { id: 'pd-d5', question: "How would you design a search experience for an e-commerce platform with millions of products?", followUps: ["How would you handle zero results?", "What role would filters and facets play?", "How would you personalize results?"], keywords: ['search', 'e-commerce', 'information retrieval'] },
      { id: 'pd-d6', question: "Design an experience that helps elderly users (65+) manage their medications through a mobile app.", followUps: ["What accessibility considerations are most critical?", "How would you handle error prevention?", "Who else might be involved in the user journey?"], keywords: ['accessibility', 'healthcare', 'elderly users'] },
    ],
  },

  // ─── UX/UI DESIGNER ───
  'ux-ui-designer': {
    behavioral: [
      { id: 'ux-b1', question: "Tell me about a time you advocated for the user when the team wanted to take a shortcut.", followUps: ["How did you make your case?", "What was the result?", "Did you have to compromise?"], keywords: ['user advocacy', 'negotiation', 'ethics'] },
      { id: 'ux-b2', question: "Describe a situation where you had to redesign a feature that users loved but had poor usability metrics.", followUps: ["How did you balance sentiment vs data?", "What was your research approach?", "How did users react to the change?"], keywords: ['redesign', 'metrics', 'user sentiment'] },
      { id: 'ux-b3', question: "Tell me about a time you had to design for a platform you weren't familiar with (iOS, Android, web, etc).", followUps: ["How did you learn the platform conventions?", "What mistakes did you make early on?", "How did the final design adapt to platform guidelines?"], keywords: ['platform design', 'learning', 'guidelines'] },
      { id: 'ux-b4', question: "Describe a project where you had to work with a difficult or unclear brief. How did you handle it?", followUps: ["How did you clarify requirements?", "What assumptions did you document?", "How did the final output compare to initial expectations?"], keywords: ['ambiguity', 'requirements', 'communication'] },
      { id: 'ux-b5', question: "Tell me about a time when your usability testing revealed something completely unexpected.", followUps: ["What was the finding?", "How did it change your design?", "What would you have missed without testing?"], keywords: ['usability testing', 'discovery', 'iteration'] },
      { id: 'ux-b6', question: "Describe a time you had to defend your design decisions to leadership. What was your approach?", followUps: ["What evidence did you present?", "Were you successful?", "What would you do differently?"], keywords: ['presentation', 'stakeholder management', 'persuasion'] },
    ],
    portfolio: [
      { id: 'ux-p1', question: "Walk me through a user flow you designed from scratch. How did you approach the information architecture?", followUps: ["What tools did you use for mapping?", "How did you validate the flow?", "What iterations did you make?"], keywords: ['user flows', 'information architecture', 'wireframing'] },
      { id: 'ux-p2', question: "Show me a responsive design project. How did you handle the transition between breakpoints?", followUps: ["What was your mobile-first strategy?", "How did content priority change across devices?", "What was the trickiest component to make responsive?"], keywords: ['responsive design', 'mobile', 'breakpoints'] },
      { id: 'ux-p3', question: "Walk me through a project where you created a micro-interaction or animation that improved the user experience.", followUps: ["What problem did the animation solve?", "How did you prototype it?", "What was the engineering handoff like?"], keywords: ['micro-interactions', 'animation', 'prototyping'] },
      { id: 'ux-p4', question: "Show me a project where you conducted user research and how it shaped the final UI.", followUps: ["What methods did you use?", "How many users did you test with?", "What was the biggest insight?"], keywords: ['user research', 'UI design', 'iteration'] },
      { id: 'ux-p5', question: "Walk me through how you established the visual hierarchy in a complex interface.", followUps: ["What principles guided your decisions?", "How did you handle competing priorities?", "How did you test comprehension?"], keywords: ['visual hierarchy', 'layout', 'typography'] },
      { id: 'ux-p6', question: "Show me an example of how you designed an error state or empty state. Why did you approach it that way?", followUps: ["What edge cases did you consider?", "How did it impact user recovery?", "Did you test these states?"], keywords: ['error handling', 'empty states', 'edge cases'] },
    ],
    'design-challenge': [
      { id: 'ux-d1', question: "How would you redesign a checkout flow that has a 40% cart abandonment rate?", followUps: ["What would you research first?", "How would you simplify the form?", "What trust signals would you add?"], keywords: ['checkout', 'conversion', 'forms'] },
      { id: 'ux-d2', question: "Design a settings page for an app with 50+ configuration options. How do you make it usable?", followUps: ["How would you organize the settings?", "What search or filter mechanisms would you add?", "How would you handle defaults?"], keywords: ['settings', 'organization', 'progressive disclosure'] },
      { id: 'ux-d3', question: "How would you design a multi-step form wizard for a loan application?", followUps: ["How would you show progress?", "What happens if the user needs to go back?", "How would you handle validation?"], keywords: ['forms', 'wizard', 'validation'] },
      { id: 'ux-d4', question: "Design a dark mode implementation for an existing app. What's your strategy?", followUps: ["How would you handle images and illustrations?", "What about accessibility contrast?", "How would you implement the toggle?"], keywords: ['dark mode', 'theming', 'accessibility'] },
      { id: 'ux-d5', question: "How would you design a collaborative document editing experience like Google Docs?", followUps: ["How would you show presence of other users?", "How would you handle conflicts?", "What about comments and suggestions?"], keywords: ['collaboration', 'real-time', 'editing'] },
      { id: 'ux-d6', question: "Design an onboarding tutorial for a complex data visualization tool.", followUps: ["How would you avoid overwhelming new users?", "What interactive elements would you use?", "How would you measure tutorial effectiveness?"], keywords: ['onboarding', 'tutorial', 'data visualization'] },
    ],
  },

  // ─── VISUAL DESIGNER ───
  'visual-designer': {
    behavioral: [
      { id: 'vd-b1', question: "Tell me about a time you had to adapt a brand identity for a new medium or platform.", followUps: ["What were the main constraints?", "How did you maintain brand consistency?", "What creative liberties did you take?"], keywords: ['branding', 'adaptation', 'consistency'] },
      { id: 'vd-b2', question: "Describe a situation where you disagreed with a creative direction. How did you handle it?", followUps: ["Did you present alternatives?", "What was the outcome?", "How do you handle creative differences in general?"], keywords: ['creative direction', 'conflict', 'collaboration'] },
      { id: 'vd-b3', question: "Tell me about a project where you had to work within very strict brand guidelines. How did you still bring creativity?", followUps: ["What constraints were hardest?", "How did you find creative freedom?", "Did you propose any guideline updates?"], keywords: ['brand guidelines', 'creativity', 'constraints'] },
      { id: 'vd-b4', question: "Describe a time you had to create a visual system from scratch. Where did you start?", followUps: ["How did you define the visual language?", "What was your moodboard process?", "How did you get stakeholder buy-in?"], keywords: ['visual systems', 'process', 'stakeholder management'] },
      { id: 'vd-b5', question: "Tell me about a time you had to balance aesthetics with functionality.", followUps: ["What trade-offs did you make?", "How did you justify your decisions?", "What was the user feedback?"], keywords: ['aesthetics', 'functionality', 'trade-offs'] },
      { id: 'vd-b6', question: "Describe how you stay current with design trends while maintaining your own style.", followUps: ["What resources do you follow?", "How do you decide which trends to adopt?", "Can you give an example?"], keywords: ['trends', 'personal style', 'growth'] },
    ],
    portfolio: [
      { id: 'vd-p1', question: "Walk me through a brand identity you created. What was your process from brief to final delivery?", followUps: ["How did you present options to the client?", "What was the feedback loop like?", "How did you define the brand personality?"], keywords: ['brand identity', 'process', 'client work'] },
      { id: 'vd-p2', question: "Show me a project where typography played a critical role. How did you choose and pair typefaces?", followUps: ["What was the typographic hierarchy?", "How did you handle readability?", "Did you create custom type treatments?"], keywords: ['typography', 'type pairing', 'hierarchy'] },
      { id: 'vd-p3', question: "Walk me through an illustration or icon system you designed. What was the design language?", followUps: ["How did you ensure consistency across the set?", "What were the production specs?", "How did you handle scalability?"], keywords: ['illustration', 'iconography', 'systems'] },
      { id: 'vd-p4', question: "Show me a project where color was the primary design tool. How did you develop the palette?", followUps: ["How did you ensure accessibility?", "What was the rationale behind color choices?", "How did the palette work across contexts?"], keywords: ['color theory', 'palette', 'accessibility'] },
      { id: 'vd-p5', question: "Walk me through a layout or grid system you designed for a publication or website.", followUps: ["How did you define the grid?", "How did you handle varying content lengths?", "What was the visual rhythm?"], keywords: ['layout', 'grid systems', 'composition'] },
      { id: 'vd-p6', question: "Show me a project where you designed motion graphics or animations. What was the concept?", followUps: ["What tools did you use?", "How did motion support the narrative?", "What were the technical constraints?"], keywords: ['motion design', 'animation', 'storytelling'] },
    ],
    'design-challenge': [
      { id: 'vd-d1', question: "Design a visual identity for a sustainable fashion brand targeting Gen Z. Where would you start?", followUps: ["What visual references would you explore?", "How would the identity flex across social media?", "What typography approach would you take?"], keywords: ['branding', 'gen z', 'sustainability'] },
      { id: 'vd-d2', question: "How would you redesign a data-heavy financial dashboard to be visually engaging without sacrificing clarity?", followUps: ["What color strategies would you use for data?", "How would you handle information density?", "What visual cues would guide the eye?"], keywords: ['data visualization', 'visual design', 'clarity'] },
      { id: 'vd-d3', question: "Design a poster series for a music festival. How would you create visual cohesion across different artists?", followUps: ["What would be the unifying visual element?", "How would you handle artist-specific variations?", "What production methods would you consider?"], keywords: ['poster design', 'series', 'visual cohesion'] },
      { id: 'vd-d4', question: "How would you create a design system that supports both a playful consumer app and a serious enterprise version?", followUps: ["What tokens would change between versions?", "How would you handle the tonal shift?", "What shared elements would remain constant?"], keywords: ['design systems', 'theming', 'dual audience'] },
      { id: 'vd-d5', question: "Design the visual experience for an immersive museum exhibit about ocean conservation.", followUps: ["What sensory elements would you incorporate?", "How would you guide visitors through the space?", "What materials and textures would you use?"], keywords: ['exhibition design', 'immersive', 'environmental'] },
      { id: 'vd-d6', question: "How would you create a cohesive social media visual strategy for a brand across Instagram, TikTok, and LinkedIn?", followUps: ["How would content differ per platform?", "What would stay consistent?", "How would you handle templates vs custom content?"], keywords: ['social media', 'visual strategy', 'multi-platform'] },
    ],
  },

  // ─── UX RESEARCHER ───
  'ux-researcher': {
    behavioral: [
      { id: 'ur-b1', question: "Tell me about a time your research findings contradicted what the team believed. How did you handle it?", followUps: ["How did you present the findings?", "Was there resistance?", "What was the final outcome?"], keywords: ['research findings', 'persuasion', 'stakeholder management'] },
      { id: 'ur-b2', question: "Describe a situation where you had to choose between speed and research rigor. What did you do?", followUps: ["What method did you choose and why?", "What were the trade-offs?", "Would you make the same choice again?"], keywords: ['speed vs rigor', 'pragmatism', 'methods'] },
      { id: 'ur-b3', question: "Tell me about a time you had to conduct research with hard-to-reach participants.", followUps: ["How did you recruit them?", "What accommodations did you make?", "How did the difficulty affect your sample size?"], keywords: ['recruitment', 'accessibility', 'research planning'] },
      { id: 'ur-b4', question: "Describe how you've embedded research practice into a team that wasn't used to doing research.", followUps: ["What was the initial resistance?", "What quick wins helped build trust?", "How is the practice today?"], keywords: ['research ops', 'culture', 'advocacy'] },
      { id: 'ur-b5', question: "Tell me about a time you realized your research approach wasn't working mid-study. What did you do?", followUps: ["What signals told you to pivot?", "How did you adapt?", "What did you learn about research planning?"], keywords: ['adaptability', 'methodology', 'problem solving'] },
      { id: 'ur-b6', question: "Describe a project where you had to synthesize findings from multiple research methods into a cohesive story.", followUps: ["What methods did you combine?", "How did you resolve contradictions?", "How did you present the synthesis?"], keywords: ['synthesis', 'mixed methods', 'storytelling'] },
    ],
    portfolio: [
      { id: 'ur-p1', question: "Walk me through a research project that had significant impact on the product direction.", followUps: ["What was your research plan?", "How did you analyze the data?", "What specific changes resulted from your findings?"], keywords: ['impact', 'research plan', 'analysis'] },
      { id: 'ur-p2', question: "Show me how you've built and used personas or journey maps in a project.", followUps: ["What data informed the personas?", "How did the team use them in practice?", "How did you keep them updated?"], keywords: ['personas', 'journey maps', 'frameworks'] },
      { id: 'ur-p3', question: "Walk me through a usability study you conducted. What was your methodology?", followUps: ["How did you write the tasks?", "How many participants did you test?", "What was the most surprising finding?"], keywords: ['usability testing', 'methodology', 'findings'] },
      { id: 'ur-p4', question: "Show me an example of a research report or presentation you created. How did you structure it?", followUps: ["Who was the audience?", "How did you prioritize which findings to highlight?", "What format worked best?"], keywords: ['deliverables', 'communication', 'stakeholders'] },
      { id: 'ur-p5', question: "Walk me through a survey you designed. How did you ensure quality data?", followUps: ["How did you write the questions?", "What was the response rate?", "How did you handle bias?"], keywords: ['surveys', 'quantitative', 'data quality'] },
      { id: 'ur-p6', question: "Show me a project where you used diary studies or longitudinal research methods.", followUps: ["How long was the study?", "How did you maintain participant engagement?", "What patterns emerged over time?"], keywords: ['diary studies', 'longitudinal', 'patterns'] },
    ],
    'design-challenge': [
      { id: 'ur-d1', question: "You're joining a new team building a B2B analytics product. How would you set up a research practice from scratch?", followUps: ["What would you prioritize in the first 30 days?", "How would you build a participant pipeline?", "What tools would you need?"], keywords: ['research ops', 'B2B', 'setup'] },
      { id: 'ur-d2', question: "A PM says 'we don't have time for research, just ship it.' How would you handle this and what quick research could you do?", followUps: ["What guerrilla methods would you use?", "How would you frame the value of research?", "What's the minimum viable research?"], keywords: ['guerrilla research', 'advocacy', 'speed'] },
      { id: 'ur-d3', question: "Design a research plan to understand why users are churning from a subscription product.", followUps: ["What methods would you combine?", "How would you segment users?", "What hypotheses would you test?"], keywords: ['churn', 'research plan', 'mixed methods'] },
      { id: 'ur-d4', question: "How would you evaluate the accessibility of an existing product for users with visual impairments?", followUps: ["What research methods would you use?", "How would you recruit participants?", "How would you prioritize findings?"], keywords: ['accessibility research', 'inclusive research', 'evaluation'] },
      { id: 'ur-d5', question: "You need to understand the mental model of first-time investors for a fintech app. Design the research.", followUps: ["What methods are best for understanding mental models?", "How would you avoid leading participants?", "How would you present the findings?"], keywords: ['mental models', 'fintech', 'exploratory research'] },
      { id: 'ur-d6', question: "How would you measure the long-term impact of a major redesign six months after launch?", followUps: ["What metrics would you track?", "How would you isolate the redesign's effect?", "What qualitative methods would you add?"], keywords: ['impact measurement', 'metrics', 'post-launch'] },
    ],
  },

  // ─── FULL STACK DEVELOPER ───
  'fullstack-developer': {
    behavioral: [
      { id: 'fs-b1', question: "Tell me about a time you had to debug a critical production issue under pressure. What was your approach?", followUps: ["How did you identify the root cause?", "What was the timeline?", "What did you change in your process afterward?"], keywords: ['debugging', 'production', 'incident response'] },
      { id: 'fs-b2', question: "Describe a situation where you had to choose between shipping quickly and writing clean code. What did you do?", followUps: ["How did you manage technical debt?", "What was the business impact?", "Would you make the same choice again?"], keywords: ['tech debt', 'pragmatism', 'trade-offs'] },
      { id: 'fs-b3', question: "Tell me about a time you mentored a junior developer. What was your approach?", followUps: ["How did you adjust to their learning style?", "What was the most challenging part?", "How did they grow over time?"], keywords: ['mentoring', 'leadership', 'teaching'] },
      { id: 'fs-b4', question: "Describe a project where you had to learn a new technology or framework on the fly. How did you ramp up?", followUps: ["What resources helped most?", "How did you balance learning with delivery?", "What would you do differently?"], keywords: ['learning', 'adaptability', 'self-teaching'] },
      { id: 'fs-b5', question: "Tell me about a time you disagreed with a technical decision made by the team. How did you handle it?", followUps: ["How did you present your alternative?", "What was the outcome?", "How do you handle disagreements in general?"], keywords: ['technical disagreement', 'communication', 'influence'] },
      { id: 'fs-b6', question: "Describe a time you had to refactor a large legacy codebase. What was your strategy?", followUps: ["How did you avoid breaking things?", "How did you prioritize what to refactor?", "What was the impact on team velocity?"], keywords: ['refactoring', 'legacy code', 'strategy'] },
    ],
    technical: [
      { id: 'fs-t1', question: "Explain how you would implement authentication and authorization in a full-stack application.", followUps: ["JWT vs sessions — what would you choose and why?", "How would you handle token refresh?", "What about role-based access control?"], keywords: ['auth', 'security', 'JWT', 'sessions'] },
      { id: 'fs-t2', question: "How would you optimize a slow database query that's causing timeouts in production?", followUps: ["How would you identify the bottleneck?", "When would you add an index vs restructure the query?", "What monitoring would you set up?"], keywords: ['database', 'optimization', 'performance'] },
      { id: 'fs-t3', question: "Walk me through how you would implement real-time features (like chat or live updates) in a web application.", followUps: ["WebSockets vs SSE vs polling — when would you use each?", "How would you handle reconnection?", "What about scaling to thousands of connections?"], keywords: ['real-time', 'WebSockets', 'scaling'] },
      { id: 'fs-t4', question: "How would you design and implement a REST API for a multi-tenant SaaS application?", followUps: ["How would you handle tenant isolation?", "What about rate limiting?", "How would you version the API?"], keywords: ['REST API', 'multi-tenant', 'API design'] },
      { id: 'fs-t5', question: "Explain how you would implement caching at different layers of a full-stack application.", followUps: ["CDN vs application cache vs database cache?", "How do you handle cache invalidation?", "What about cache stampede?"], keywords: ['caching', 'performance', 'CDN'] },
      { id: 'fs-t6', question: "How would you set up a CI/CD pipeline for a full-stack application?", followUps: ["What stages would you include?", "How would you handle database migrations?", "What about feature flags and canary deployments?"], keywords: ['CI/CD', 'DevOps', 'deployment'] },
    ],
    'system-design': [
      { id: 'fs-s1', question: "Design a URL shortener like bit.ly. What are the main components?", followUps: ["How would you generate unique short codes?", "How would you handle redirects at scale?", "What about analytics and click tracking?"], keywords: ['URL shortener', 'hashing', 'scale'] },
      { id: 'fs-s2', question: "How would you design a notification system that supports email, push, and in-app notifications?", followUps: ["How would you handle user preferences?", "What about delivery guarantees?", "How would you prevent notification fatigue?"], keywords: ['notifications', 'message queue', 'preferences'] },
      { id: 'fs-s3', question: "Design a file upload and processing system that handles large files (100MB+).", followUps: ["How would you handle resumable uploads?", "What about virus scanning?", "How would you process files asynchronously?"], keywords: ['file upload', 'async processing', 'storage'] },
      { id: 'fs-s4', question: "How would you design a rate limiter for an API?", followUps: ["What algorithm would you use?", "How would you handle distributed rate limiting?", "What about different tiers of users?"], keywords: ['rate limiting', 'algorithms', 'distributed systems'] },
      { id: 'fs-s5', question: "Design an e-commerce system that handles flash sales with thousands of concurrent users.", followUps: ["How would you prevent overselling?", "What about payment processing?", "How would you handle the traffic spike?"], keywords: ['e-commerce', 'concurrency', 'inventory'] },
      { id: 'fs-s6', question: "How would you design a search system for a platform with millions of records?", followUps: ["What search engine would you use?", "How would you handle autocomplete?", "What about relevance ranking?"], keywords: ['search', 'Elasticsearch', 'indexing'] },
    ],
  },

  // ─── FRONTEND DEVELOPER ───
  'frontend-developer': {
    behavioral: [
      { id: 'fe-b1', question: "Tell me about a time you had to optimize a frontend application for performance. What did you do?", followUps: ["What metrics did you improve?", "What tools did you use to identify bottlenecks?", "What was the impact on user experience?"], keywords: ['performance', 'optimization', 'metrics'] },
      { id: 'fe-b2', question: "Describe a situation where you had to implement a complex UI that a designer handed off. What challenges did you face?", followUps: ["How did you handle design-to-code gaps?", "What was the communication like with the designer?", "Were there compromises?"], keywords: ['design handoff', 'implementation', 'collaboration'] },
      { id: 'fe-b3', question: "Tell me about a time you had to make a web application accessible. What was your approach?", followUps: ["What standards did you follow?", "How did you test accessibility?", "What was the hardest part?"], keywords: ['accessibility', 'WCAG', 'a11y'] },
      { id: 'fe-b4', question: "Describe a time you introduced a new tool or practice to your frontend team. How did it go?", followUps: ["How did you get buy-in?", "What was the adoption process?", "Were there any setbacks?"], keywords: ['tooling', 'team practices', 'leadership'] },
      { id: 'fe-b5', question: "Tell me about a bug that was really hard to reproduce and fix. How did you solve it?", followUps: ["What debugging techniques did you use?", "How long did it take?", "What did you learn from it?"], keywords: ['debugging', 'problem solving', 'persistence'] },
      { id: 'fe-b6', question: "Describe a project where you had to support multiple browsers or devices. What was your strategy?", followUps: ["What testing approach did you use?", "What polyfills or fallbacks were needed?", "How did you prioritize which browsers to support?"], keywords: ['cross-browser', 'compatibility', 'testing'] },
    ],
    technical: [
      { id: 'fe-t1', question: "Explain how you would implement state management in a large React application. What are the trade-offs?", followUps: ["When would you use Context vs Redux vs Zustand?", "How do you prevent unnecessary re-renders?", "What about server state vs client state?"], keywords: ['state management', 'React', 'architecture'] },
      { id: 'fe-t2', question: "How would you implement infinite scrolling with virtualization for a feed of thousands of items?", followUps: ["What library or approach would you use?", "How would you handle dynamic item heights?", "What about accessibility of virtualized lists?"], keywords: ['virtualization', 'infinite scroll', 'performance'] },
      { id: 'fe-t3', question: "Walk me through how you would set up a design system as an npm package consumed by multiple apps.", followUps: ["How would you handle versioning?", "What about tree shaking?", "How would you document components?"], keywords: ['design systems', 'npm packages', 'monorepo'] },
      { id: 'fe-t4', question: "How would you implement code splitting and lazy loading in a single-page application?", followUps: ["What would you split by — route, component, or feature?", "How would you handle loading states?", "What about prefetching?"], keywords: ['code splitting', 'lazy loading', 'performance'] },
      { id: 'fe-t5', question: "Explain how you would build a form system that handles complex validation, conditional fields, and multi-step flows.", followUps: ["What library would you use?", "How would you handle server-side validation?", "What about form state persistence?"], keywords: ['forms', 'validation', 'UX'] },
      { id: 'fe-t6', question: "How would you implement a robust testing strategy for a React application?", followUps: ["Unit vs integration vs E2E — how do you balance?", "What would you mock and what would you test for real?", "How do you test visual regressions?"], keywords: ['testing', 'React', 'strategy'] },
    ],
    'system-design': [
      { id: 'fe-s1', question: "Design the frontend architecture for a micro-frontend application with multiple independent teams.", followUps: ["How would teams share components?", "How would you handle routing?", "What about shared state?"], keywords: ['micro-frontends', 'architecture', 'teams'] },
      { id: 'fe-s2', question: "How would you architect a progressive web app (PWA) that works offline?", followUps: ["What caching strategy would you use?", "How would you handle sync when back online?", "What about push notifications?"], keywords: ['PWA', 'offline', 'service workers'] },
      { id: 'fe-s3', question: "Design a real-time collaborative editor (like Notion) from the frontend perspective.", followUps: ["How would you handle concurrent edits?", "What about undo/redo?", "How would you optimize rendering performance?"], keywords: ['collaboration', 'CRDT', 'real-time'] },
      { id: 'fe-s4', question: "How would you design a frontend monitoring and error tracking system?", followUps: ["What would you track beyond errors?", "How would you handle noise and false positives?", "What about performance budgets?"], keywords: ['monitoring', 'error tracking', 'observability'] },
      { id: 'fe-s5', question: "Design the frontend for an internationalized app supporting RTL languages, pluralization, and date/number formatting.", followUps: ["What i18n library would you use?", "How would you handle dynamic content?", "What about layout mirroring for RTL?"], keywords: ['i18n', 'RTL', 'localization'] },
      { id: 'fe-s6', question: "How would you architect a frontend that needs to render 10,000+ data points on a chart with smooth interactions?", followUps: ["Canvas vs SVG vs WebGL?", "How would you handle zooming and panning?", "What about data aggregation?"], keywords: ['data visualization', 'Canvas', 'performance'] },
    ],
  },

  // ─── PRODUCT MANAGER ───
  'product-manager': {
    behavioral: [
      { id: 'pm-b1', question: "Tell me about a time you had to say no to a feature request from an important stakeholder. How did you handle it?", followUps: ["How did you communicate your decision?", "What data did you use?", "What was the relationship like after?"], keywords: ['prioritization', 'stakeholder management', 'saying no'] },
      { id: 'pm-b2', question: "Describe a situation where you had to pivot a product strategy based on new data or market changes.", followUps: ["What signals triggered the pivot?", "How did you get the team aligned?", "What was the outcome?"], keywords: ['strategy', 'pivot', 'data-driven'] },
      { id: 'pm-b3', question: "Tell me about a time you launched a product that didn't meet expectations. What did you learn?", followUps: ["What went wrong?", "How did you measure failure?", "What would you do differently?"], keywords: ['failure', 'learning', 'post-mortem'] },
      { id: 'pm-b4', question: "Describe how you've managed competing priorities across multiple stakeholders with different goals.", followUps: ["What framework did you use to prioritize?", "How did you communicate trade-offs?", "Were there any surprises?"], keywords: ['prioritization', 'stakeholders', 'frameworks'] },
      { id: 'pm-b5', question: "Tell me about a time you had to influence without authority — getting engineers or designers excited about a vision.", followUps: ["What approach did you take?", "How did you build buy-in?", "What resistance did you face?"], keywords: ['influence', 'leadership', 'vision'] },
      { id: 'pm-b6', question: "Describe a time you had to make a decision with incomplete information and tight deadlines.", followUps: ["What framework did you use?", "How did you mitigate risk?", "Were you right in the end?"], keywords: ['decision making', 'ambiguity', 'speed'] },
    ],
    'case-study': [
      { id: 'pm-c1', question: "You're the PM for a food delivery app. Orders have dropped 15% in the last month. How would you investigate and address this?", followUps: ["What data would you look at first?", "How would you segment the problem?", "What would be your top 3 hypotheses?"], keywords: ['analytics', 'problem solving', 'hypothesis'] },
      { id: 'pm-c2', question: "Your company wants to expand a B2C product into B2B. How would you approach this?", followUps: ["What research would you do?", "How would pricing change?", "What features would you prioritize?"], keywords: ['B2B', 'expansion', 'go-to-market'] },
      { id: 'pm-c3', question: "You have 3 feature requests: one from sales, one from engineering, and one from customer support. How do you prioritize?", followUps: ["What framework would you use?", "How would you communicate your decision?", "How do you handle the teams whose request wasn't chosen?"], keywords: ['prioritization', 'frameworks', 'communication'] },
      { id: 'pm-c4', question: "A competitor just launched a feature very similar to what you're building. What do you do?", followUps: ["Do you speed up, pivot, or stay the course?", "How do you differentiate?", "What would you tell your team?"], keywords: ['competition', 'strategy', 'differentiation'] },
      { id: 'pm-c5', question: "You're tasked with increasing user retention by 20% in 6 months. What's your plan?", followUps: ["How would you define and measure retention?", "What levers would you pull?", "How would you run experiments?"], keywords: ['retention', 'metrics', 'experimentation'] },
      { id: 'pm-c6', question: "Users are requesting a feature that conflicts with your product vision. How do you handle it?", followUps: ["How do you validate if it's a real need?", "When is the user wrong?", "How do you communicate your decision?"], keywords: ['product vision', 'user feedback', 'conviction'] },
    ],
    strategy: [
      { id: 'pm-s1', question: "How would you define a product strategy for a new fintech startup entering a crowded market?", followUps: ["How would you identify your wedge?", "What would your MVP look like?", "How would you measure product-market fit?"], keywords: ['strategy', 'fintech', 'PMF'] },
      { id: 'pm-s2', question: "What would your pricing strategy be for a freemium SaaS product targeting SMBs?", followUps: ["How would you decide what's free vs paid?", "What metrics would drive pricing decisions?", "How would you handle price changes?"], keywords: ['pricing', 'freemium', 'SaaS'] },
      { id: 'pm-s3', question: "How would you build a product-led growth engine for a developer tools company?", followUps: ["What would the self-serve experience look like?", "How would you measure activation?", "What role would community play?"], keywords: ['PLG', 'developer tools', 'growth'] },
      { id: 'pm-s4', question: "You're launching a new product in a market with strong network effects. What's your go-to-market strategy?", followUps: ["How would you solve the chicken-and-egg problem?", "What would your growth loops look like?", "How would you build defensibility?"], keywords: ['network effects', 'GTM', 'growth loops'] },
      { id: 'pm-s5', question: "How would you approach platform vs product thinking for a company that wants to build an ecosystem?", followUps: ["When should a company become a platform?", "How would you attract developers?", "What are the risks?"], keywords: ['platform', 'ecosystem', 'strategy'] },
      { id: 'pm-s6', question: "How would you evaluate whether to build, buy, or partner for a new capability your product needs?", followUps: ["What criteria would you use?", "How would you assess build cost vs buy cost?", "What about long-term maintenance?"], keywords: ['build vs buy', 'partnerships', 'evaluation'] },
    ],
  },
}

export function getRandomQuestions(roleId, categoryId, count = 5) {
  const roleQuestions = questions[roleId]?.[categoryId]
  if (!roleQuestions) return []
  const pool = [...roleQuestions]
  const selected = []
  while (selected.length < count && pool.length > 0) {
    const idx = Math.floor(Math.random() * pool.length)
    selected.push(pool.splice(idx, 1)[0])
  }
  return selected
}
