import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(2);
  const [words, setWords] = useState([]);

  function loadWords() {
    fetch(`https://random-word-api.herokuapp.com/word?number=${count}`)
      .then((res) => res.json())
      .then((json) => {
        setWords(json);
      });
  }

  useEffect(loadWords, [count]);

  const handleGenerateWords = () => {
    loadWords();
  };

  const handleAddWords = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleRemoveWords = () => {
    setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : prevCount));
  };

  const handleSearchOnYouTube = () => {
    const searchTerm = words.join('+');
    window.open(`https://www.youtube.com/results?search_query=${searchTerm}`, '_blank');
  };

  return (
    <div className="App">
      <div className="button-container">
        <button className="custom-button" onClick={handleGenerateWords}>Generate New Words</button>
        <button className="custom-button" onClick={handleAddWords}>Add Words</button>
        <button className="custom-button" onClick={handleRemoveWords}>Remove Words</button>
        <button className="custom-button" onClick={handleSearchOnYouTube}>Search on YouTube</button>
      </div>
      <div>Number of words: {words.length}</div>
      <div>
        {words.map((word, index) => (
          <span key={index}>{word} </span>
        ))}
      </div>
    </div>
  );
}

export default App;
