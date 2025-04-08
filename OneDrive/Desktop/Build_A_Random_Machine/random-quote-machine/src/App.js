import React, { useState } from 'react';
import './App.css';

const quotes = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "Happiness depends upon ourselves.", author: "Aristotle" },
  { text: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
];

function App() {
  const [quote, setQuote] = useState(getRandomQuote());
  
  // Get a random quote from the array
  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }

  // Handle New Quote button click
  function handleNewQuote() {
    setQuote(getRandomQuote());
  }

  // Twitter share link
  function getTweetLink() {
    return `https://twitter.com/intent/tweet?text="${encodeURIComponent(quote.text)}" - ${encodeURIComponent(quote.author)}`;
  }

  return (
    <div id="quote-box" className="quote-box">
      <p id="text">{`"${quote.text}"`}</p>
      <p id="author">- {quote.author}</p>
      <div>
        <button id="new-quote" onClick={handleNewQuote}>New Quote</button>
        <a id="tweet-quote" href={getTweetLink()} target="_blank" rel="noopener noreferrer">Tweet this quote</a>
      </div>
    </div>
  );
}

export default App;
