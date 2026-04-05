import { GoogleGenerativeAI } from '@google/generative-ai'

let model = null

export function initGemini(apiKey) {
  if (!apiKey) return false
  const genAI = new GoogleGenerativeAI(apiKey)
  model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' })
  return true
}

export function isGeminiReady() {
  return model !== null
}

export async function evaluateAnswer({ question, answer, categoryId, lang }) {
  if (!model) return null

  const langInstruction = lang === 'pt'
    ? 'Responda em português brasileiro.'
    : 'Respond in English.'

  const prompt = `You are an experienced product design hiring manager evaluating an interview answer.

Category: ${categoryId}
Question: "${question}"
Candidate's answer: "${answer}"

${langInstruction}

Evaluate the answer and return a JSON object with exactly this structure (no markdown, no code blocks, just raw JSON):
{
  "score": <number 1-10>,
  "feedback": "<2-3 sentences evaluating the content, structure, and depth of the answer>",
  "englishTip": "<1 sentence about their English usage — grammar, vocabulary, or phrasing improvement. If the answer is not in English, note that>",
  "followUp": "<a natural follow-up question based on their specific answer>"
}`

  try {
    const result = await model.generateContent(prompt)
    const text = result.response.text().trim()
    const cleaned = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim()
    return JSON.parse(cleaned)
  } catch {
    return null
  }
}

export async function generateSessionSummary({ questions, answers, categoryId, lang }) {
  if (!model) return null

  const langInstruction = lang === 'pt'
    ? 'Responda em português brasileiro.'
    : 'Respond in English.'

  const pairs = questions.map((q, i) => `Q: ${q}\nA: ${answers[i] || '(skipped)'}`).join('\n\n')

  const prompt = `You are an experienced product design hiring manager reviewing a mock interview session.

Category: ${categoryId}

${pairs}

${langInstruction}

Provide a session summary as a JSON object (no markdown, no code blocks, just raw JSON):
{
  "overallScore": <number 1-10>,
  "strengths": ["<strength 1>", "<strength 2>"],
  "improvements": ["<area 1>", "<area 2>"],
  "tip": "<one actionable tip for their next interview>"
}`

  try {
    const result = await model.generateContent(prompt)
    const text = result.response.text().trim()
    const cleaned = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim()
    return JSON.parse(cleaned)
  } catch {
    return null
  }
}
