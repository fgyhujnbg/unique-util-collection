// index.js

const fs = require('fs');

class RandomQuoteGenerator {
  constructor() {
    this.quotes = [];
    this.loadQuotes();
  }

  loadQuotes() {
    try {
      const data = fs.readFileSync('quotes.json', 'utf8');
      this.quotes = JSON.parse(data);
    } catch (err) {
      console.error('Error loading quotes:', err);
    }
  }

  getRandomQuote() {
    if (this.quotes.length === 0) {
      return 'No quotes available.';
    }
    const randomIndex = Math.floor(Math.random() * this.quotes.length);
    return this.quotes[randomIndex];
  }
}

module.exports = RandomQuoteGenerator;
