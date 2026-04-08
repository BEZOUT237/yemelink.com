// OpenAI chat integration utilities

export const initializeOpenAI = () => {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
  if (!apiKey) {
    console.warn('OpenAI API key not configured');
    return null;
  }
  // Note: Never expose API key in frontend
  // This should be called from backend via API route
  return { configured: true };
};

export const sendChatMessage = async (_messages: any[], userMessage: string) => {
  // This would be called via backend API endpoint
  // Frontend POST /api/chat with message
  // Backend handles OpenAI API call and rate limiting
  console.log('Sending chat message:', userMessage);
  return { response: 'AI response would be here' };
};

export const getChatHistory = async (sessionId: string) => {
  // Retrieve chat history from Supabase
  console.log('Fetching chat history for session:', sessionId);
  return [];
};

export const saveChatMessage = async (sessionId: string, message: any) => {
  // Save message to Supabase
  console.log('Saving chat message:', message);
};
