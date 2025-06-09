// src/App.js
import React, { useState } from 'react';
import './App.css';
function App() {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== '') {
      window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    }
  };

  // ...existing code...
  return (
    <div className="container">
      <img
        src={require('./googlelogo.png')}
        alt="Google Logo"
        className="logo"
        style={{ width: 300, marginLeft: 530, marginBottom: 20 }}
      />

      <form onSubmit={handleSearch} className="form">
        <div className="input-wrapper">
          <span className="search-icon">
            {/* Search SVG */}
            <svg height="24" width="24" viewBox="0 0 24 24" fill="#5f6368">
  <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99a1 1 0 0 0 1.41-1.41l-4.99-5zm-6 0C8.01 14 6 11.99 6 9.5S8.01 5 10.5 5 15 7.01 15 9.5 12.99 14 10.5 14z"/>
</svg>
          </span>
          <input
            type="text"
            placeholder="Search Google..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="input"
          />
          <span className="mic-icon">
            {/* Mic SVG */}
            <svg height="24" width="24" viewBox="0 0 24 24" fill="#4285F4">
  <path d="M12 15c1.66 0 3-1.34 3-3V7c0-1.66-1.34-3-3-3s-3 1.34-3 3v5c0 1.66 1.34 3 3 3zm5-3c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V23h2v-1.08c3.39-.49 6-3.39 6-6.92h-2z"/>
</svg>
          </span>
        </div>
        <button type="submit" className="button">Search</button>
      </form>
    </div>
  );
// ...existing code...
}

export default App;
