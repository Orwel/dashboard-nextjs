import { OpenAIStream, StreamingTextResponse } from 'ai';
import { Configuration, OpenAIApi } from 'openai-edge';

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);

export async function POST(req: Request) {
  const { messages, context } = await req.json();

  // Añadir contexto legal personalizado
  const systemPrompt = `
    Eres un asistente legal especializado con el siguiente contexto:
    ${context.map((c: any) => c.content).join('\n')}
    
    Responde basándote en este contexto y tu conocimiento legal general.
  `;

  const response = await openai.createChatCompletion({
    model: 'gpt-4',
    messages: [
      { role: 'system', content: systemPrompt },
      ...messages,
    ],
    stream: true,
  });

  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
} 