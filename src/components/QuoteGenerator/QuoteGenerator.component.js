import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons/';

import './QuoteGenerator.style.scss';

class QuoteGenerator extends PureComponent {
  render() {
    const { curQuote, generateNewQuote } = this.props;

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
              -{' '}
              {
                <a
                  href={curQuote?.wikipedia || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={curQuote?.author === 'Anonymous' ? 'disabled' : ''}
                >
                  {curQuote?.author}
                </a>
              }{' '}
              <span className="quoteGenerator__date">
                {curQuote?.date ? '(' + curQuote?.date + ')' : null}
              </span>
            </div>
          </div>
        </span>
      </div>
    );
  }
}

export default QuoteGenerator;
