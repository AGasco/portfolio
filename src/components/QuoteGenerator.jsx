import React, { useState, useEffect } from "react";
import * as data from "./../data/quotes.json";
import "./../styles/QuoteGenerator.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons/";

const QuoteGenerator = () => {
  const [curQuote, setCurQuote] = useState("");
  const [usedQuotes, setUsedQuotes] = useState([]);

  //Initalize with a first quote
  useEffect(() => {
    const { default: quotes } = data;
    const firstQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const updatedUsedQuotes = [...usedQuotes];
    addToUsedQuotes(firstQuote.id);
    setCurQuote(firstQuote);
  }, []);

  //Resetting used quotes (whole cycle completed)
  useEffect(() => {
    if (usedQuotes.length >= 23) {
      console.log("resetting quotes");
      setUsedQuotes([]);
    }
  }, [usedQuotes]);

  const generateNewQuote = () => {
    const { default: quotes } = data;
    let rng = Math.floor(Math.random() * quotes.length);

    while (usedQuotes.includes(rng)) {
      console.log(rng + " has already been shown. Trying a new one");
      rng = Math.floor(Math.random() * quotes.length);
    }
    addToUsedQuotes(rng);
    const newQuote = quotes[rng];
    setCurQuote(newQuote);
  };

  const addToUsedQuotes = (id) => {
    const { default: quotes } = data;
    const updatedUsedQuotes = [...usedQuotes];
    updatedUsedQuotes.push(quotes[id]);
    setUsedQuotes(updatedUsedQuotes);
  };

  // componentDidMount() {
  //   const { default: quotes } = data;
  //   const rngQuote = quotes[Math.floor(Math.random() * quotes.length)];
  //   this.setState({ curQuote: rngQuote });
  // }

  return (
    <div className="quoteGenerator">
      <span className="quoteGenerator__container">
        <div className="quoteGenerator__top">
          <h1>"</h1>
          <p className="quoteGenerator__quote">{curQuote.quote}</p>
        </div>
        <div className="quoteGenerator__bottom">
          <button onClick={generateNewQuote} className="quoteGenerator__btn">
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
};

export default QuoteGenerator;
