// 'use client';

// import { useState } from 'react';

// const OllamaChat = () => {
//   const [prompt, setPrompt] = useState('');
//   const [response, setResponse] = useState<string | null>(null);
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (event: React.FormEvent) => {
//     event.preventDefault();
//     setLoading(true);

//     try {
//       const res = await fetch('/api/generate', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ model: 'llama3', prompt }),
//       });

//       const data = await res.json();
//       setResponse(data.answer); // Adjust according to the response format
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <textarea
//           value={prompt}
//           onChange={(e) => setPrompt(e.target.value)}
//           placeholder="Enter your prompt"
//         />
//         <button type="submit" disabled={loading}>
//           {loading ? 'Loading...' : 'Submit'}
//         </button>
//       </form>
//       {response && <div>Response: {response}</div>}
//     </div>
//   );
// };

// export default OllamaChat;
