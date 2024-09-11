'use client';

import { useState } from 'react';

export default function Home() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setResponse(null);

    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();
      // debugger
      if (res.ok) {
        setResponse(data);
      } else {
        setError(data.error || 'Something went wrong');
      }
    } catch (err) {
      setError('Failed to connect to the server');
    }
  };

  return (
    <div className="container">
      <h1>Ask Llama a Question</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask me anything..."
          className="border rounded p-2 mb-4"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Send</button>
      </form>

      {response && (
        <div className="mt-4">
          <h2>Response:</h2>
          <p>{response}</p>
        </div>
      )}

      {error && (
        <div className="mt-4 text-red-500">
          <h2>Error:</h2>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}
