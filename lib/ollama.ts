// lib/hOllama.ts
export const fetchOllamaResponse = async (prompt: string) => {
  try {
    const response = await fetch('http://localhost:11434/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama3',
        prompt: prompt,
      }),
    });

    const text = await response.text();
    console.log('Raw response:', text);


    const data = splitJsonObjects(text)
    return data;
  } catch (error) {
    console.error('Error in fetchOllamaResponse:', error);
    throw error;
  }
};



function splitJsonObjects(jsonString) {
  const result = [];
  let braceCount = 0;
  let currentObject = "";

  for (let i = 0; i < jsonString.length; i++) {
    const char = jsonString[i];
    currentObject += char;

    if (char === '{') {
      braceCount++;
    } else if (char === '}') {
      braceCount--;

      if (braceCount === 0) {
        try {
          const parsedObject = JSON.parse(currentObject);
          result.push(parsedObject);
          currentObject = "";
        } catch (error) {
          console.error("Error parsing JSON object:", error);
        }
      }
    }
  }

  return result;
}

// Example usage:
// const jsonString = '{"name": "John", "age": 30}{"name": "Jane", "age": 25}{"name": "Bob", "age": 35}';
// const parsedObjects = splitJsonObjects(jsonString);
// console.log(parsedObjects);