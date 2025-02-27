import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));

document.addEventListener('DOMContentLoaded', () => {
  const applyPreventRefresh = () => {
    const allLinks = document.querySelectorAll('a');
    allLinks.forEach(link => {
      if (!link.hasAttribute('data-no-refresh-handler')) {
        link.setAttribute('data-no-refresh-handler', 'true');
        link.addEventListener('click', (e) => {
          const href = link.getAttribute('href');
          if (href && (href.startsWith('/') || href.startsWith('#'))) {
            e.preventDefault();
          }
        });
      }
    });
  };
  applyPreventRefresh();
  const observer = new MutationObserver(() => {
    applyPreventRefresh();
  });
  observer.observe(document.body, { childList: true, subtree: true });
});
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
