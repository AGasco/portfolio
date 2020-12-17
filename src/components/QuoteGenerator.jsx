import React, { Component } from "react";
import * as data from "./../data/quotes.json";
import "./../styles/QuoteGenerator.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons/";

class QuoteGenerator extends Component {
  state = {
    curQuote: "",
  };

  generateNewQuote = () => {
    const { default: quotes } = data;
    let rngQuote = quotes[Math.floor(Math.random() * quotes.length)];
    while (rngQuote.quote === this.state.curQuote.quote) {
      rngQuote = quotes[Math.floor(Math.random() * quotes.length)];
    }
    this.setState({ curQuote: rngQuote });
  };

  componentDidMount() {
    const { default: quotes } = data;
    const rngQuote = quotes[Math.floor(Math.random() * quotes.length)];
    this.setState({ curQuote: rngQuote });
  }

  render() {
    const { curQuote } = this.state;
    return (
      <div className="quoteGenerator">
        <span className="quoteGenerator__container">
          <div className="quoteGenerator__top">
            <h1>"</h1>
            <p className="quoteGenerator__quote">{curQuote.quote}</p>
          </div>
          <div className="quoteGenerator__bottom">
            <button
              onClick={this.generateNewQuote}
              className="quoteGenerator__btn"
            >
              <FontAwesomeIcon icon={faSync} />
            </button>
            <div className="quoteGenerator__author">
              - {curQuote.author}{" "}
              <span className="quoteGenerator__date">
                {curQuote.date ? "(" + curQuote.date + ")" : null}
              </span>
            </div>
          </div>
        </span>
      </div>
    );
  }
}

export default QuoteGenerator;
