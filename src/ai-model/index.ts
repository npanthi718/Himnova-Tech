import { loadTrainedKnowledge, getTrainedSystemPrompt, AIKnowledgeBase } from "./trainingData";
import { analyzeUserQuery, AnalyzedQuery } from "./queryAnalyzer";
import { draftDynamicResponse, AIResponse } from "./dynamicAnswerEngine";

export { loadTrainedKnowledge, getTrainedSystemPrompt, analyzeUserQuery, draftDynamicResponse };
export type { AIKnowledgeBase, AnalyzedQuery, AIResponse };

/**
 * Main execution entry point for the Himnova AI Neural Knowledge Model.
 * Comprehensively analyzes the user's specific query and drafts a direct,
 * 100% accurate, dynamically tailored response with natural audio speech text.
 */
export function executeAIEngine(query: string): AIResponse {
  const analyzed = analyzeUserQuery(query);
  return draftDynamicResponse(analyzed);
}
