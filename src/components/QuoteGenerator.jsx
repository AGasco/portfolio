import React, { useState, useEffect } from "react";
import * as data from "./../data/quotes.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons/";

const QuoteGenerator = () => {
  const [curQuote, setCurQuote] = useState("");
  const [remainingQuotes, setRemainingQuotes] = useState([]);

  useEffect(() => {
    const { default: quotes } = data;
    setRemainingQuotes([...quotes]);
  }, []);

  //Initalize with a first quote
  useEffect(() => {
    const { default: quotes } = data;
    if (remainingQuotes) {
      const firstQuote = remainingQuotes.splice(
        Math.floor(Math.random() * quotes.length),
        1
      )[0];
      setCurQuote(firstQuote);
    }
  }, [remainingQuotes]);

  const generateNewQuote = () => {
    const newQuote = remainingQuotes.splice(
      Math.floor(Math.random() * remainingQuotes.length),
      1
    )[0];
    if (remainingQuotes.length === 0) resetQuotes();

    setCurQuote(newQuote);
  };

  const resetQuotes = () => {
    const { default: quotes } = data;
    setRemainingQuotes([...quotes]);
  };

  return (
    <div className="quoteGenerator">
      <span className="quoteGenerator__container">
        <div className="quoteGenerator__top">
          <h1>"</h1>
          <p className="quoteGenerator__quote">{curQuote?.quote}</p>
        </div>
        <div className="quoteGenerator__bottom">
          <button onClick={generateNewQuote} className="quoteGenerator__btn">
            <FontAwesomeIcon icon={faSync} />
          </button>
          <div className="quoteGenerator__author">
            -{" "}
            {
              <a
                href={curQuote?.wikipedia}
                target="_blank"
                className={curQuote?.author === "Anonymous" ? "disabled" : ""}
              >
                {curQuote?.author}
              </a>
            }{" "}
            <span className="quoteGenerator__date">
              {curQuote?.date ? "(" + curQuote?.date + ")" : null}
            </span>
          </div>
        </div>
      </span>
    </div>
  );
};

export default QuoteGenerator;
