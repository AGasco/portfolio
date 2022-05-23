import React, { PureComponent } from 'react';
import * as data from '../../data/quotes.json';

import QuoteGeneratorComponent from './QuoteGenerator.component';

class QuoteGeneratorContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      curQuote: '',
      remainingQuotes: []
    };

    this.generateNewQuote = this.generateNewQuote.bind(this);
    this.resetQuotes = this.resetQuotes.bind(this);
  }

  componentDidMount() {
    const { default: quotes } = data;
    const firstQuote = quotes.splice(
      Math.floor(Math.random() * quotes.length),
      1
    )[0];

    this.setState({ remainingQuotes: [...quotes], curQuote: firstQuote });
  }

  generateNewQuote = () => {
    const { remainingQuotes } = this.state;

    const newQuote = remainingQuotes.splice(
      Math.floor(Math.random() * remainingQuotes.length),
      1
    )[0];

    if (remainingQuotes.length === 0) this.resetQuotes();

    this.setState({ curQuote: newQuote });
  };

  resetQuotes = () => {
    const { default: quotes } = data;

    this.setState({ remainingQuotes: [...quotes] });
  };

  render() {
    const { curQuote } = this.state;

    return (
      <QuoteGeneratorComponent
        curQuote={curQuote}
        generateNewQuote={this.generateNewQuote}
      />
    );
  }
}

export default QuoteGeneratorContainer;
