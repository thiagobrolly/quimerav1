import { GlobalStyles, ThemeProvider } from '@quimera-ui/theme';
import React from 'react';
import ReactDOM from 'react-dom/client';

// import { ThemeProvider as ProviderStyledComponents } from 'styled-components';
import { App } from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <ProviderStyledComponents theme={defaultTheme}> */}
    <ThemeProvider>
      <GlobalStyles />
      <App />
    </ThemeProvider>
    {/* </ProviderStyledComponents> */}
  </React.StrictMode>,
);
