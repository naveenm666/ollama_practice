import { NextResponse } from 'next/server';
import { fetchOllamaResponse } from '../../../lib/ollama';

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
    }

    const response = await fetchOllamaResponse(prompt);
    return NextResponse.json({ response }, { status: 200 });
  } catch (error) {
    console.error('Error in /api/generate:', error); // Log detailed error
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}
