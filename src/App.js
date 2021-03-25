import React, { Component } from 'react';
import './App.css';
import MemoryCard from './components/MemoryCard';


const generateDeck = () => {
  const symbols = ['∆', 'ß', '£', '§', '•', '$', '+', 'ø'];
  const deck = [];

  for (let i = 0; i < 16; i++) {
    const obj = {
      isFlipped: false,
      symbol: symbols[i%8]
    }
    deck.push(obj)
  }
  return shuffle(deck)
}

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}




class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      deck: generateDeck(),
      pickedCards: []
    };
  }

  pickCard = (cardIndex) => {
    if (this.state.deck[cardIndex]) {
      return;
    }
  
    const cardToFlip = {...this.state.deck[cardIndex]}
    cardToFlip.isFlipped = true;
  
    const newPickedCards = this.state.pickedCards.concat(cardIndex);
  
    const newDeck = this.state.deck.map((card, index) => {
      if (cardIndex === index) {
        return cardToFlip
      }
      return card;
    })
    this.setState({
      deck: newDeck,
      pickedCards: newPickedCards
    })
  }

  


  render () {
    const cardsJSX = this.state.deck.map((card, index) => {
      return <MemoryCard symbol={card.symbol} isFlipped={card.isFlipped} pickedCard={() => this.pickCard(index)} key={index}/>
    })
    return (
      <div className="App">
        <header className="App-header">
          <h1>Memory Game</h1>
          <h3 className="subTitle">Match cards to win</h3>
        </header>
        <div>
          {cardsJSX.slice(0, 4)}
        </div>
        <div>
          {cardsJSX.slice(4, 8)}
        </div>
        <div>
          {cardsJSX.slice(8, 12)}
        </div>
        <div>
          {cardsJSX.slice(12, 16)}
        </div>
      </div>
    );
    }
  }


export default App;
