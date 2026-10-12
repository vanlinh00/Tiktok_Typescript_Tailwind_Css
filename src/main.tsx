import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '~/App';
import GlobalStyles from '~/components/GlobalStyles';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyles>
      <App />
    </GlobalStyles>
  </React.StrictMode>
);
