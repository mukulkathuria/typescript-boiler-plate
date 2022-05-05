import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';
import { GlobalStyle } from './gobal.style';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <>
    <GlobalStyle dark />
    <App />
  </>
);
