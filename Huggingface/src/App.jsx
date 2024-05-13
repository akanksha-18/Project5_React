
import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [isLoading, setIsLoading] = useState(false); 
  const API_TOKEN = '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'; 

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    if (inputText) {
      setIsLoading(true); 
      try {
        const response = await axios.post(
          'https://api-inference.huggingface.co/models/prompthero/openjourney-v4',
          {
            inputs: inputText,
          },
          {
            headers: {
              Authorization: `Bearer ${API_TOKEN}`,
            },
            responseType: 'blob', 
          }
        );
        const imageUrl = URL.createObjectURL(response.data);
        setImageURL(imageUrl);
      } catch (error) {
        console.error('Error generating image:', error);
      } finally {
        setIsLoading(false); // Set loading state back to false
      }
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Image Generation App</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter text..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="input"
          />
          <button
            type="submit"
            className={`button ${isLoading ? 'disabled' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? 'Generating...' : 'Generate Image'}
          </button>
        </form>
        
        {imageURL && (
          <div className="image-container">
            <img src={imageURL} alt="Generated" className="image" />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;


