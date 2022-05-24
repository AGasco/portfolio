import React from 'react';
import { withRouter } from 'react-router-dom';

import './Brand.style.scss';

const Brand = withRouter(({ elements, history, location }) => {
  const curScreen = elements.indexOf(location.pathname);
  return (
    <p
      className="brand"
      onClick={() => {
        if (curScreen !== 0)
          return history.push({
            pathname: '/',
            state: { prevScreen: curScreen }
          });
      }}
    >
      antoniofgasco
    </p>
  );
});

export default Brand;
